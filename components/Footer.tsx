import React from 'react';
import { Box, Sparkles, Github, Twitter, Disc as Discord, Linkedin, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="w-full bg-[#18181b] text-zinc-300 border-t border-zinc-800 pt-16 pb-12 font-sans relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Box className="w-5 h-5" />
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                Ruya3D
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              AI-first architectural visualization environment. Turn 2D floor plans into photorealistic 3D renders at the speed of thought.
            </p>
            
            <div className="flex items-center space-x-3 pt-2 text-xs font-mono text-zinc-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Render Engine v2.4 Online
              </span>
              <span className="inline-flex items-center gap-1 text-zinc-400">
                <Cpu className="w-3.5 h-3.5 text-primary" />
                Puter Cloud Powered
              </span>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/product" className="text-zinc-400 hover:text-white transition-colors">
                  Overview & Features
                </Link>
              </li>
              <li>
                <Link to="/product#engine" className="text-zinc-400 hover:text-white transition-colors">
                  AI Raytracing Engine
                </Link>
              </li>
              <li>
                <Link to="/product#formats" className="text-zinc-400 hover:text-white transition-colors">
                  Supported Formats
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-zinc-400 hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5">
                  Community Gallery
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30 font-mono">Live</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/enterprise" className="text-zinc-400 hover:text-white transition-colors">
                  Enterprise Architecture
                </Link>
              </li>
              <li>
                <Link to="/enterprise#custom-ai" className="text-zinc-400 hover:text-white transition-colors">
                  Custom AI Fine-Tuning
                </Link>
              </li>
              <li>
                <Link to="/enterprise#bim" className="text-zinc-400 hover:text-white transition-colors">
                  BIM & CAD Integrations
                </Link>
              </li>
              <li>
                <Link to="/enterprise#security" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Security & SOC2
                </Link>
              </li>
              <li>
                <Link to="/pricing#calculator" className="text-zinc-400 hover:text-white transition-colors">
                  Cost Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">Stay Ahead</h4>
            <p className="text-zinc-400 text-xs mb-3 leading-relaxed">
              Get monthly updates on new architectural AI models, texture packs, and feature drops.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="architect@firm.com"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-2 bg-primary hover:bg-[#3939BF] text-white rounded text-xs flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[11px] text-zinc-400 block">No spam. Unsubscribe anytime.</span>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Ruya3D Inc. All rights reserved. Crafted for visionary architects.</p>

          <div className="flex items-center space-x-5">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Discord className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
