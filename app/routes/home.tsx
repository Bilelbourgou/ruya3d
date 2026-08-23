import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import { ArrowRight, Layers, Clock, ArrowUpRight } from "lucide-react";
import Button from "../../components/ui/Button";
import Upload from "../../components/Upload";
import { useNavigate, useOutletContext } from "react-router";
import { useState, useRef, useEffect } from "react";
import { createProject, getProjects } from "../../lib/puter.actions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const { isSignedIn } = useOutletContext<AuthContext>();
  const [projects, setProjects] = useState<DesignItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isCreatingProjectRef = useRef(false);

  useEffect(() => {
    if (!isSignedIn) return;
    let cancelled = false;
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const fetched = await getProjects();
        if (!cancelled) {
          setProjects(fetched ?? []);
        }
      } catch (e) {
        console.error("Failed to load projects:", e);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    fetchProjects();
    return () => { cancelled = true; };
  }, [isSignedIn]);

  const handleUploadComplete = async (base64Image: string) => {
    try {
      if (isCreatingProjectRef.current) return false;
      isCreatingProjectRef.current = true;
      const newId = Date.now().toString();
      const name = `Residence ${newId}`;

      const newItem = {
        id: newId,
        name,
        sourceImage: base64Image,
        renderedImage: undefined,
        timestamp: Date.now(),
      };

      const saved = await createProject({
        item: newItem,
        visibility: "private",
      });

      if (!saved) {
        console.error("Failed to save project");
        return false;
      }

      setProjects((prev) => [saved, ...prev]);

      navigate(`/visualizer/${newId}`, {
        state: {
          initialImage: newItem.sourceImage,
          initialRendered: saved.renderedImage || null,
          name,
        },
      });

      return true;
    } finally {
      isCreatingProjectRef.current = false;
    }
  };

  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pulse"></div>
          </div>
          <p>Introducing Ruya3D 2.0</p>
        </div>
        <h1>Build beautifull spaces at speed of thought with Ruya3D</h1>
        <p className="subtitle">
          {" "}
          Ruya3D is a AI-first design environment that helps you visualize,
          render, and ship architectural projects faster than ever ever.{" "}
        </p>
        <div className="actions">
          <a href="#upload" className="cta flex items-center gap-2">
            Start Building <ArrowRight />
          </a>
          <Button variant="outline" size="lg" className="demo">
            Watch Demo
          </Button>
        </div>

        <div id="upload" className="upload-shell">
          <div className="grid-overlay" />
          <div className="upload-card">
            <div className="upload-head">
              <div className="upload-icon">
                <Layers className="icon" />
              </div>
              <h3>Upload your floor plan</h3>
              <p>Supports JPG, PNG, PDF, formats up to 10MB</p>
            </div>

            <Upload onComplete={handleUploadComplete} />
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>
                Your latest work and shared community projects, all in place.
              </p>
            </div>
          </div>
          <div className="projects-grid">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="project-card skeleton">
                  <div className="preview skeleton-box" />
                  <div className="card-body">
                    <div style={{ flex: 1 }}>
                      <div className="skeleton-line" style={{ width: "60%", marginBottom: 8 }} />
                      <div className="skeleton-line" style={{ width: "40%" }} />
                    </div>
                  </div>
                </div>
              ))
            ) : projects.length === 0 ? (
              <div className="projects-empty">
                <Layers size={32} className="empty-icon" />
                <p>{isSignedIn ? "No projects yet — upload a floor plan to get started." : "Sign in to view your projects."}</p>
              </div>
            ) : (
              projects.map((project) => {
                const {
                  id,
                  name,
                  sourceImage,
                  renderedImage,
                  timestamp,
                  isPublic,
                  sharedBy,
                } = project;
                return (
                  <div
                    key={id}
                    className="project-card group cursor-pointer"
                    onClick={() =>
                      navigate(`/visualizer/${id}`, {
                        state: {
                          initialImage: sourceImage,
                          initialRendered: renderedImage || null,
                          name,
                        },
                      })
                    }
                  >
                    <div className="preview">
                      <img
                        src={renderedImage || sourceImage}
                        alt={name || "Project preview"}
                      />
                      <div className="badge">
                        <span>{isPublic ? "Community" : "Private"}</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <div>
                        <h3>{name || "Untitled Project"}</h3>
                        <div className="meta">
                          <Clock size={12} />
                          <span>
                            {timestamp
                              ? new Date(timestamp).toLocaleDateString()
                              : "Recent"}
                          </span>
                          <span>{sharedBy ? `By ${sharedBy}` : "By You"}</span>
                        </div>
                      </div>
                      <div className="arrow">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
