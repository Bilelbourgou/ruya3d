import { useLocation, useNavigate } from "react-router";
import { useRef, useState, useEffect } from "react";
import { generate3DView } from "../../lib/ai.action";
import { Box, X, Download, Share2, RefreshCcw } from "lucide-react";
import Button from "../../components/ui/Button";

const VisualizerId = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { initialImage, initialRender, name } = location.state || {};

  const [isProcessing, setIsProcessing] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(
    initialRender || null,
  );

  const hasInitialGenerated = useRef(false);

  const handleBack = () => navigate("/");

  const runGeneration = async () => {
    if (!initialImage) return;
    try {
      setIsProcessing(true);
      const result = await generate3DView({ sourceImage: initialImage });
      if (result.renderedImage) {
        setCurrentImage(result.renderedImage);

        //update the project with the new rendered image
      }
    } catch (e) {
      console.error("Error generating 3D view:", e);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (!initialImage || hasInitialGenerated.current) return;

    if (initialRender) {
      setCurrentImage(initialRender);
      hasInitialGenerated.current = true;
      return;
    }
    hasInitialGenerated.current = true;
    runGeneration();
  }, [initialImage, initialRender]);

  return (
    <div className="visualizer">
      <nav className="topbar">
        <div className="brand">
          <Box className="logo" />
          <span className="name">Ruya3D</span>
        </div>
        <Button variant="ghost" className="exit" onClick={handleBack}>
          <X className="icon" /> Exit Editor
        </Button>
      </nav>
      <section className="content">
        <div className="panel">
          <div className="panel-header">
            <div className="panel-meta">
              <p>Project</p>
              <h2>{"Untitled Project"}</h2>
              <p className="note">Created by You</p>
            </div>
            <div className="panel-actions">
              <Button
                size="sm"
                onClick={() => {}}
                className="export"
                disabled={!currentImage || isProcessing}
              >
                <Download className="w-4 h-4 mr-2" /> Export
              </Button>
              <Button
                size="sm"
                onClick={() => {}}
                className="share"
              >
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>
          </div>
          <div className={`render-area ${isProcessing ? "is-processing" : ""}`}>
            {currentImage ? (
              <img
                src={currentImage}
                alt="Generated 3D View"
                className="render-img"
              />
            ) : (
              <div className="placeholder">
                {initialImage && (
                  <img
                    src={initialImage}
                    alt="Initial Image"
                    className="render-fallback"
                  />
                )}
              </div>
            )}

            {
              isProcessing && (
              <div className="render-overlay">
                <div className="rendering-card">
                  <RefreshCcw className="spinner" />
                  <span className="title">Rendering...</span>
                  <span className="subtitle">Generating Your 3D Visualization...</span>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualizerId;
