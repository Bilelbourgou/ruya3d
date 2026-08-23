import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import { 
  Building2, 
  Cpu, 
  FileCode2, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  BarChart3, 
  Clock, 
  Send
} from 'lucide-react';

export function meta() {
  return [
    { title: "Enterprise Architecture & Custom AI Models — Ruya3D" },
    { name: "description", content: "Enterprise-scale architectural intelligence. Dedicated GPU clusters, custom AI model fine-tuning, SOC2 Type II compliance, and Revit/CAD integration for global firms." },
    { name: "keywords", content: "enterprise architectural AI, dedicated GPU rendering cluster, Revit AI plugin, custom architecture model training, SOC2 compliant 3D rendering, studio scale visualization" },
    // Open Graph
    { property: "og:title", content: "Enterprise Architecture Platform — Ruya3D" },
    { property: "og:description", content: "Empower architectural practices and developers with custom AI fine-tuning, dedicated GPU rendering clusters, and enterprise security." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ruya3d.com/enterprise" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" },
    { property: "og:site_name", content: "Ruya3D" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@ruya3d" },
    { name: "twitter:title", content: "Enterprise Architecture Platform — Ruya3D" },
    { name: "twitter:description", content: "Enterprise AI fine-tuning and dedicated GPU rendering clusters for global architectural firms." },
    { name: "twitter:image", content: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" },
  ];
}

export default function Enterprise() {
  // ROI Calculator state
  const [teamSize, setTeamSize] = useState(15);
  const [monthlyProjects, setMonthlyProjects] = useState(40);

  // Demo Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firm: '',
    teamSize: '10-50',
    primaryTool: 'Autodesk Revit',
    requirements: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Calculations
  const hoursSavedPerMonth = monthlyProjects * 14; // avg 14 hours saved per visualization
  const annualDollarSavings = Math.round(hoursSavedPerMonth * 75 * 12); // $75/hr billing rate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.firm) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs mb-8">
          <Building2 className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-700">
            Enterprise Architecture Suite
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black max-w-5xl mx-auto leading-[0.95] mb-6">
          Architectural intelligence engineered for global practices.
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-base font-mono uppercase tracking-wide text-zinc-500 mb-10 leading-relaxed">
          Scale 3D concept visualization across your entire studio. Custom AI fine-tuning, dedicated GPU infrastructure, and enterprise-grade data security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm uppercase tracking-wider font-bold bg-primary text-white hover:bg-[#3939BF] transition-all shadow-md gap-2"
          >
            Request Enterprise Demo <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#calculator"
            className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm uppercase tracking-wider font-bold bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-50 transition-all shadow-xs gap-2"
          >
            <BarChart3 className="w-4 h-4" /> Calculate ROI
          </a>
        </div>

        {/* Enterprise Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 max-w-5xl mx-auto shadow-md text-left">
          <div className="space-y-1">
            <span className="text-3xl md:text-4xl font-serif font-bold text-black font-mono">10x</span>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Faster Turnaround</p>
            <span className="text-[11px] text-zinc-400 block">From 48hrs to under 30s</span>
          </div>
          <div className="space-y-1 border-l border-zinc-100 pl-4 md:pl-6">
            <span className="text-3xl md:text-4xl font-serif font-bold text-emerald-600 font-mono">94%</span>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Client Approval Rate</p>
            <span className="text-[11px] text-zinc-400 block">First-pitch sign-offs</span>
          </div>
          <div className="space-y-1 border-l border-zinc-100 pl-4 md:pl-6">
            <span className="text-3xl md:text-4xl font-serif font-bold text-black font-mono">99.9%</span>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Dedicated Uptime SLA</p>
            <span className="text-[11px] text-zinc-400 block">High-availability GPU mesh</span>
          </div>
          <div className="space-y-1 border-l border-zinc-100 pl-4 md:pl-6">
            <span className="text-3xl md:text-4xl font-serif font-bold text-primary font-mono">100%</span>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Data Sovereignty</p>
            <span className="text-[11px] text-zinc-400 block">Zero public model leakage</span>
          </div>
        </div>
      </section>

      {/* Enterprise Pillars Grid */}
      <section className="py-24 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Enterprise Foundations
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black mt-2 mb-4">
              Engineered for large-scale architectural operations.
            </h2>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              Equip every principal architect, project manager, and visualizer with tools aligned to your firm's standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#fdfbf7] rounded-2xl border border-zinc-200 p-8 space-y-4 hover:border-zinc-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Custom AI Model Fine-Tuning
              </h3>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                Train private, firm-specific neural checkpoints using your historical portfolio, proprietary drafting conventions, custom millwork symbols, and curated material libraries.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-zinc-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Exclusive weights hosted on isolated enterprise containers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Signature lighting moods and branded color aesthetics</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#fdfbf7] rounded-2xl border border-zinc-200 p-8 space-y-4 hover:border-zinc-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Dedicated Cloud GPU Clusters
              </h3>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                Ensure zero rendering latency for mission-critical client deadlines. High-capacity distributed GPU clusters deliver sub-5 second rendering speeds and 8K ultra-resolution output.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-zinc-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Guaranteed high-concurrency for 500+ studio members</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Multi-region deployment options (US, EU, APAC)</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#fdfbf7] rounded-2xl border border-zinc-200 p-8 space-y-4 hover:border-zinc-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                Enterprise Security & Governance
              </h3>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                Complete compliance readiness with SAML 2.0 Single Sign-On (Okta, Azure AD, Google Workspace), comprehensive audit trails, and strict data residency guarantees.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-zinc-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>SOC2 Type II certified and GDPR compliant infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Strict zero-data-retention training policy for private blueprints</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#fdfbf7] rounded-2xl border border-zinc-200 p-8 space-y-4 hover:border-zinc-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <FileCode2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">
                BIM & CAD Native Integrations
              </h3>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                Bridge the gap between conceptual 3D renders and detailed drafting documentation with native plugins for Autodesk Revit, ArchiCAD, AutoCAD, and Rhino.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-zinc-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>One-click sync from Revit sheets directly into Ruya3D</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Comprehensive REST API & Webhooks for internal firm portals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator Section */}
      <section id="calculator" className="py-24 bg-[#fdfbf7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Efficiency Estimator
            </span>
            <h2 className="text-4xl font-serif text-black mt-2 mb-4">
              Calculate Your Studio's Estimated Return on Investment
            </h2>
            <p className="text-zinc-500 text-sm">
              See how replacing manual 3D modeling pipelines with Ruya3D spatial intelligence impacts your bottom line.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-zinc-200 shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono uppercase font-bold text-zinc-700">
                    Designers & Architects on Team
                  </label>
                  <span className="text-lg font-mono font-bold text-primary">
                    {teamSize} members
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="150"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1">
                  <span>2</span>
                  <span>50</span>
                  <span>100</span>
                  <span>150+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono uppercase font-bold text-zinc-700">
                    Monthly Floor Plans & Client Pitches
                  </label>
                  <span className="text-lg font-mono font-bold text-primary">
                    {monthlyProjects} projects/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="300"
                  value={monthlyProjects}
                  onChange={(e) => setMonthlyProjects(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1">
                  <span>5</span>
                  <span>100</span>
                  <span>200</span>
                  <span>300+</span>
                </div>
              </div>

              <div className="p-4 bg-[#fdfbf7] rounded-xl border border-zinc-200/80 text-xs text-zinc-600 flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Traditional 3D studio modeling averages <strong>14-18 hours</strong> per spatial visualization. Ruya3D reduces this to <strong>under 30 seconds</strong>.
                </span>
              </div>
            </div>

            {/* Calculations Outcome Column */}
            <div className="lg:col-span-5 bg-zinc-900 text-white rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                Projected Studio Savings
              </span>

              <div className="space-y-6">
                <div>
                  <span className="text-xs text-zinc-400 font-mono block">Estimated Annual Cost Savings</span>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white mt-1">
                    ${annualDollarSavings.toLocaleString()}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] text-zinc-400 font-mono uppercase block">Hours Saved / Mo</span>
                    <span className="text-xl font-bold font-mono text-emerald-400">
                      {hoursSavedPerMonth.toLocaleString()} hrs
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-mono uppercase block">Cycle Velocity</span>
                    <span className="text-xl font-bold font-mono text-primary">
                      12x Faster
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#demo"
                className="w-full py-3 rounded-lg text-xs uppercase tracking-wider font-bold bg-primary hover:bg-[#3939BF] text-white text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                Discuss Custom Quote <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Demo Booking Form */}
      <section id="demo" className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Consultation & Pilot
            </span>
            <h2 className="text-4xl font-serif text-black mt-2 mb-3">
              Request an Enterprise Architecture Demo
            </h2>
            <p className="text-zinc-500 text-sm max-w-lg mx-auto">
              Schedule a personalized walkthrough with our spatial AI engineering team.
            </p>
          </div>

          <div className="bg-[#fdfbf7] rounded-2xl border border-zinc-200 p-8 md:p-10 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-black">
                  Demo Request Received!
                </h3>
                <p className="text-xs text-zinc-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A dedicated Ruya3D enterprise solutions architect will contact you at <strong>{formData.email}</strong> within 1 business day.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        firm: '',
                        teamSize: '10-50',
                        primaryTool: 'Autodesk Revit',
                        requirements: ''
                      });
                    }}
                  >
                    Send Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-zinc-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-zinc-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@fosterandpartners.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-zinc-700 mb-2">
                      Firm / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jenkins Studio Architecture"
                      value={formData.firm}
                      onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                      className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-zinc-700 mb-2">
                      Studio Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-primary"
                    >
                      <option value="1-10">1 - 10 Designers</option>
                      <option value="10-50">10 - 50 Designers</option>
                      <option value="50-200">50 - 200 Designers</option>
                      <option value="200+">200+ Global Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-zinc-700 mb-2">
                      Primary CAD/BIM Tool
                    </label>
                    <select
                      value={formData.primaryTool}
                      onChange={(e) => setFormData({ ...formData, primaryTool: e.target.value })}
                      className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-primary"
                    >
                      <option value="Autodesk Revit">Autodesk Revit</option>
                      <option value="AutoCAD / DWG">AutoCAD / DWG</option>
                      <option value="Rhino 3D">Rhino 3D</option>
                      <option value="ArchiCAD">ArchiCAD</option>
                      <option value="SketchUp">SketchUp</option>
                      <option value="Other">Other CAD Pipeline</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-zinc-700 mb-2">
                    Project Requirements / Specific Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current rendering bottlenecks, custom model needs, or cloud integration requirements..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full bg-white border border-zinc-300 rounded-lg p-4 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg text-xs uppercase tracking-wider font-bold bg-primary hover:bg-[#3939BF] text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Enterprise Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
