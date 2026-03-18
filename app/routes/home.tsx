import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import { ArrowRight, Layers, Clock, ArrowUpRight } from "lucide-react";
import Button from "../../components/ui/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
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
        <p className="subtitle"> Ruya3D is a AI-first design environment that helps you visualize, render, and ship architectural projects faster than ever ever. </p>
        <div className="actions">
          <a href="#upload" className="cta flex items-center gap-2">Start Building <ArrowRight/></a>
          <Button variant="outline" size="lg" className="demo">
            Watch Demo
          </Button>
        </div>

        <div id="upload" className="upload-shell">
          <div className="grid-overlay"/>
          <div className="upload-card">
            <div className="upload-head">
              <div className="upload-icon">
                <Layers className="icon"/>
              </div>
              <h3>Upload your floor plan</h3>
              <p>Supports JPG, PNG, PDF, formats up to 10MB</p>
            </div>

            <p>Upload images</p>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>Your latest work and shared community projects, all in place.</p>
            </div>
          </div>
          <div className="projects-grid">
            <div className="project-card group">
              <div className="preview">
                <img 
                src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" 
                alt="project" 
                />
                <div className="badge">
                  <span>Community</span>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3>Project Manhattan</h3>
                  <div className="meta">
                    <Clock size={12}/>
                    <span>{new Date('01/01/2022').toLocaleDateString()}</span>
                    <span>By Bilel Bourgou</span>
                  </div>
                </div>
                <div className="arrow">
                  <ArrowUpRight size={18}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
