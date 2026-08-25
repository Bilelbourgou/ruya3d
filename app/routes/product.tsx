import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import { 
  Layers, 
  Sparkles, 
  Cpu, 
  FileCode, 
  ArrowRight, 
  CheckCircle2, 
  Scan, 
  SunMedium, 
  ShieldCheck, 
  Share2, 
  DownloadCloud, 
  Palette,
  Eye
} from 'lucide-react';
import { Link } from 'react-router';

export function meta() {
  return [
    { title: "Product & Spatial AI Engine — Ruya3D Architecture" },
    { name: "description", content: "Explore the deep learning raytracing pipeline, PBR material synthesis, CAD/BIM format compatibility, and sub-15s rendering engine of Ruya3D." },
    { name: "keywords", content: "3D architectural engine, PBR texture mapping, CAD to 3D, floor plan vectorization, Revit integration, top-down raytracing, AI spatial engine" },
    // Open Graph
    { property: "og:title", content: "Ruya3D Spatial AI Engine — Architectural Raytracing in Seconds" },
    { property: "og:description", content: "Explore the deep learning raytracing pipeline and PBR material synthesis of Ruya3D." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ruya3d.com/product" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" },
    { property: "og:site_name", content: "Ruya3D" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@ruya3d" },
    { name: "twitter:title", content: "Ruya3D Spatial AI Engine — Architectural Raytracing" },
    { name: "twitter:description", content: "Deep learning raytracing pipeline and PBR material synthesis for architects." },
    { name: "twitter:image", content: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" },
  ];
}

const STYLES = [
  {
    id: 'modern',
    name: 'Modern Minimalist',
    desc: 'Clean lines, neutral palette, oak hardwoods, and subtle recessed perimeter lighting.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    badge: 'Popular',
    accent: '#3b82f6',
  },
  {
    id: 'japandi',
    name: 'Japandi Harmony',
    desc: 'Wabi-sabi aesthetics, natural bamboo, tatami-inspired weaves, and warm stone textures.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    badge: 'Trending',
    accent: '#d97706',
  },
  {
    id: 'industrial',
    name: 'Urban Industrial',
    desc: 'Exposed structural concrete, matte black steel frames, and distressed reclaimed timber.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    badge: 'Contemporary',
    accent: '#475569',
  },
  {
    id: 'nordic',
    name: 'Nordic Sunlit',
    desc: 'Bright pine timber, light-washed ash floors, airy open spaces, and warm wool textiles.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Classic',
    accent: '#0d9488',
  }
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "AI Blueprint Vectorization & Clean-up",
    desc: "Ingests raw PNG, JPG, or PDF drawings. Automatically removes noisy OCR text, dimension ticks, and construction labels to build a pristine continuous spatial foundation.",
    icon: Scan,
    tag: "Vector Extraction"
  },
  {
    num: "02",
    title: "Geometry & Wall Extrusion",
    desc: "Neural network reconstructs the spatial mesh, determining consistent perimeter wall thickness, window frame openings, and precise door swing clearances.",
    icon: Layers,
    tag: "Spatial Mesh"
  },
  {
    num: "03",
    title: "Physically-Based Material Synthesis",
    desc: "Applies high-resolution PBR textures — herringbone parquet, brushed brass fixtures, travertine counters, and woven upholstery matching real architectural specs.",
    icon: Palette,
    tag: "PBR Materials"
  },
  {
    num: "04",
    title: "Global Illumination & Orthographic Raytracing",
    desc: "Computes realistic sunlight bounces, ambient occlusion, and soft cast shadows in an orthographic top-down camera perspective at 4K clarity.",
    icon: SunMedium,
    tag: "Raytracing"
  }
];

const SPECS = [
  { feature: "Supported Inputs", value: "PNG, JPG, JPEG, PDF, DWG, DXF, SVG" },
  { feature: "Export Formats", value: "High-Res PNG (up to 4K), JPG, PDF Presentation, GLTF, OBJ" },
  { feature: "Processing Time", value: "< 15 seconds per standard floor plan" },
  { feature: "Text & Label Handling", value: "100% automated text removal and gap interpolation" },
  { feature: "Lighting Presets", value: "Noon Daylight, Golden Hour Sunset, Soft Diffused Studio, Night Ambience" },
  { feature: "Storage & Sync", value: "Puter Cloud Encrypted Decentralized File System" },
  { feature: "Integration Hooks", value: "REST API, Webhook callbacks, Revit & SketchUp bridge" }
];

export default function Product() {
  const [activeStyle, setActiveStyle] = useState(STYLES[0]);
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTab, setActiveTab] = useState<'precision' | 'speed' | 'collab' | 'materials'>('precision');

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs mb-8">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-700">
            Spatial AI Engine v2.0
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black max-w-5xl mx-auto leading-[0.95] mb-6">
          Architectural intelligence engineered for visionary spaces.
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-base font-mono uppercase tracking-wide text-zinc-500 mb-10 leading-relaxed">
          Ruya3D transforms flat 2D blueprint lines into photorealistic, material-rich 3D top-down environments in seconds — without complex 3D software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            to="/#upload"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm uppercase tracking-wider font-bold bg-primary text-white hover:bg-[#3939BF] transition-all shadow-md gap-2"
          >
            Try the Visualizer <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/community"
            className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm uppercase tracking-wider font-bold bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-50 transition-all shadow-xs gap-2"
          >
            <Eye className="w-4 h-4" /> Explore Gallery
          </Link>
        </div>

        {/* Interactive Style Previewer Showcase */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden text-left p-6 md:p-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Live Style Preset Engine
                </span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-black">
                {activeStyle.name}
              </h2>
              <p className="text-xs text-zinc-500 mt-0.5">
                {activeStyle.desc}
              </p>
            </div>

            {/* Style Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    activeStyle.id === style.id
                      ? "bg-zinc-900 text-white shadow-sm ring-2 ring-zinc-900/10"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-black"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: style.accent }}
                  />
                  {style.name}
                </button>
              ))}
            </div>
          </div>

          {/* Render Preview Frame */}
          <div className="relative mt-6 aspect-16/9 md:aspect-21/9 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-inner group">
            <img
              src={activeStyle.image}
              alt={activeStyle.name}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102"
            />
            
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-between p-6 pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20 text-white text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  PBR Raytraced View • 4K UHD
                </div>
                <div className="bg-primary/90 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
                  {activeStyle.badge}
                </div>
              </div>

              <div className="bg-black/70 backdrop-blur-md rounded-lg p-4 max-w-lg border border-white/10 text-white">
                <div className="flex items-center gap-2 text-xs text-primary font-mono font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Neural Material Breakdown
                </div>
                <p className="text-xs text-zinc-300">
                  Extruded load-bearing walls with acoustic damping, floor finishes with ambient specular highlights, and smart furniture layout detection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Workflow Section */}
      <section className="py-24 bg-white border-y border-zinc-200 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              The Architecture Pipeline
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black mt-2 mb-4">
              From sketch to photorealism in 4 intelligent stages.
            </h2>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              Ruya3D analyzes floor plans like a senior architect: recognizing spatial hierarchies, functional zones, and architectural conventions automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#fdfbf7] rounded-xl border border-zinc-200 p-6 flex flex-col justify-between hover:border-zinc-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-serif font-bold text-zinc-400 group-hover:text-primary transition-colors">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:bg-primary group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary block mb-2">
                      {step.tag}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-200/60 flex items-center text-xs font-semibold text-zinc-500 group-hover:text-primary transition-colors">
                    <span>Autonomous execution</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Feature Deep Dive */}
      <section className="py-24 bg-[#fdfbf7] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-5/12 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                Engine Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                Designed for precision architectural workflows.
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Whether you are pitching a residential development, renovating a modern penthouse, or presenting to commercial stakeholders, Ruya3D provides the speed and fidelity you need.
              </p>

              {/* Tabs */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    id: 'precision',
                    label: 'Millimeter-Accurate Symbol Mapping',
                    desc: 'Accurately converts door swing arcs, kitchen islands, vanity units, and section markers into 3D geometry without visual artifacts.'
                  },
                  {
                    id: 'speed',
                    label: 'Real-time Raytracing Under 15s',
                    desc: 'High-throughput cloud GPU inference renders complex multi-room suites in seconds instead of overnight renders.'
                  },
                  {
                    id: 'materials',
                    label: 'Comprehensive Architectural PBR Library',
                    desc: 'Over 400+ physical materials including Calacatta marble, brushed titanium, polished concrete, and natural timber grains.'
                  },
                  {
                    id: 'collab',
                    label: 'Instant Web Sharing & Community Remixing',
                    desc: 'Publish public links, embed interactive before/after sliders into client presentations, or collaborate in real-time.'
                  }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-white border-zinc-900 shadow-md ring-1 ring-zinc-900"
                        : "bg-white/60 border-zinc-200 hover:bg-white hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-black">{tab.label}</h4>
                      {activeTab === tab.id && (
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 ml-2" />
                      )}
                    </div>
                    {activeTab === tab.id && (
                      <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                        {tab.desc}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Visualizer Card Preview */}
            <div className="lg:w-7/12 w-full">
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-xs font-mono text-zinc-400 ml-2">
                      Ruya3D Spatial Viewport
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded">
                    Orthographic Top-Down
                  </span>
                </div>

                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                    alt="Architectural Render"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-zinc-200 shadow-lg grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-zinc-400 block">Render Time</span>
                      <span className="text-sm font-bold text-black font-mono">11.4s</span>
                    </div>
                    <div className="border-x border-zinc-200">
                      <span className="text-[10px] font-mono uppercase text-zinc-400 block">Resolution</span>
                      <span className="text-sm font-bold text-black font-mono">3840 × 2160</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-zinc-400 block">Accuracy</span>
                      <span className="text-sm font-bold text-emerald-600 font-mono">99.8%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-center">
                    <DownloadCloud className="w-4 h-4 mx-auto text-zinc-500 mb-1" />
                    <span className="text-[11px] font-bold text-zinc-800 block">4K PNG / PDF</span>
                  </div>
                  <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-center">
                    <FileCode className="w-4 h-4 mx-auto text-zinc-500 mb-1" />
                    <span className="text-[11px] font-bold text-zinc-800 block">CAD & BIM Ready</span>
                  </div>
                  <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-center">
                    <Share2 className="w-4 h-4 mx-auto text-zinc-500 mb-1" />
                    <span className="text-[11px] font-bold text-zinc-800 block">Public Links</span>
                  </div>
                  <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-center">
                    <ShieldCheck className="w-4 h-4 mx-auto text-zinc-500 mb-1" />
                    <span className="text-[11px] font-bold text-zinc-800 block">Puter Storage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section id="formats" className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Specs
            </span>
            <h2 className="text-4xl font-serif text-black mt-2 mb-4">
              Technical Specifications & Compatibility
            </h2>
            <p className="text-zinc-500 text-sm">
              Built to integrate seamlessly with your existing architectural studio toolchain.
            </p>
          </div>

          <div className="bg-[#fdfbf7] rounded-2xl border border-zinc-200 overflow-hidden shadow-xs">
            <div className="divide-y divide-zinc-200">
              {SPECS.map((item, idx) => (
                <div key={idx} className="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white transition-colors">
                  <span className="text-xs font-mono uppercase font-bold text-zinc-700 tracking-wider">
                    {item.feature}
                  </span>
                  <span className="text-sm font-medium text-zinc-900 sm:text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
            Ready to experience Ruya3D?
          </h2>
          <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-mono">
            Upload your first floor plan now and watch it render into a realistic 3D space in under 15 seconds.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#upload"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm uppercase tracking-wider font-bold bg-white text-primary hover:bg-zinc-100 transition-all shadow-lg gap-2"
            >
              Upload Floor Plan <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm uppercase tracking-wider font-bold bg-primary/20 text-white border border-white/30 hover:bg-white/10 transition-all shadow-xs"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
