import React, { useState, useCallback } from 'react'
import { useOutletContext } from 'react-router'
import { UploadIcon, ImageIcon, CheckCircle2 } from 'lucide-react';
import { PROGRESS_INTERVAL_MS, PROGRESS_STEP, REDIRECT_DELAY_MS } from '../lib/constants';

interface UploadProps {
  onComplete?: (base64Data: string) => void;
}

const Upload = ({ onComplete }: UploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const {isSignedIn} = useOutletContext<AuthContextType>();

  const processFile = useCallback((selectedFile: File) => {
    setFile(selectedFile);
    setProgress(0);

    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result as string;

      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += PROGRESS_STEP;
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete?.(base64Data);
          }, REDIRECT_DELAY_MS);
        }
      }, PROGRESS_INTERVAL_MS);
    };

    reader.readAsDataURL(selectedFile);
  }, [onComplete]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isSignedIn) return;
    setIsDragging(true);
  }, [isSignedIn]);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (!isSignedIn) return;

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      processFile(droppedFile);
    }
  }, [isSignedIn, processFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isSignedIn) return;
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  }, [isSignedIn, processFile]);

  return (
    <div className="upload">
      {
        !file ? (
          <div
            className={`dropzone ${isDragging ? 'is-dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input 
            type="file"
            accept=".jpeg,.jpg,.png,.webp"
            className='drop-input'
            disabled={!isSignedIn}
            onChange={handleChange}
            />

            <div className="drop-content">
              <div className="drop-icon">
                <UploadIcon size={20}/>
              </div>
              <p>
                {
                  isSignedIn ? (
                    "Click to upload or drag and drop"
                  ) : (
                    "Sign in to upload"
                  )
                }
              </p>
              <p className="help">Maximum file size 50MB.</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="upload-status">
              <div className="status-content">
                <div className="status-icon">
                  {
                    progress === 100 ? (
                      <CheckCircle2 className='check'/>
                    ):(
                      <ImageIcon className='image'/>
                    )
                      
                  }
                </div>
                <h3>{file.name}</h3>
                <div className="progress">
                  <div className="bar" style={{width: `${progress}%`}}/>
                  <p className="status-text">
                    {
                      progress < 100 ? 'Analyzing floor plan...':'Redirecting..'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Upload