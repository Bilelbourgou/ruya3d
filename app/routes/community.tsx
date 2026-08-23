import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import { 
  Search, 
  Heart, 
  Eye, 
  ArrowUpRight, 
  Layers, 
  X, 
  Trophy, 
  Compass,
  Sparkles
} from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { getProjects } from '../../lib/puter.actions';

export function meta() {
  return [
    { title: "Community Gallery & Spatial Showcase — Ruya3D" },
    { name: "description", content: "Explore hundreds of residential floor plans and commercial blueprints converted into photorealistic 3D renders by the Ruya3D global architect community." },
    { name: "keywords", content: "architectural gallery, 3D floor plan showcase, modern villa renders, interior design community, floor plan remix, open architecture showcase" },
    // Open Graph
    { property: "og:title", content: "Community Spatial Gallery — Ruya3D Architecture" },
    { property: "og:description", content: "Explore architectural floor plans transformed into photorealistic 3D renders by designers worldwide." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ruya3d.com/community" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
    { property: "og:site_name", content: "Ruya3D" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@ruya3d" },
    { name: "twitter:title", content: "Community Spatial Gallery — Ruya3D" },
    { name: "twitter:description", content: "Discover, inspect, and remix architectural floor plans and 3D renders." },
    { name: "twitter:image", content: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
  ];
}

interface CommunityProject {
  id: string;
  name: string;
  author: string;
  avatar: string;
  badge: string;
  style: string;
  category: string;
  sourceImage: string;
  renderedImage: string;
  likes: number;
  views: number;
  timestamp: string;
  description: string;
}

const CURATED_COMMUNITY: CommunityProject[] = [
  {
    id: "comm-1",
    name: "Aalto Residence & Sunken Courtyard",
    author: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    badge: "Studio Lead",
    style: "Nordic Minimalist",
    category: "Villa",
    sourceImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    renderedImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    likes: 342,
    views: 1820,
    timestamp: "2 hours ago",
    description: "Open floor plan featuring Douglas fir flooring, floor-to-ceiling glass corridors, and a sunken central conversation lounge."
  },
  {
    id: "comm-2",
    name: "Kyoto Timber Pavilion & Zen Garden",
    author: "Kenji Sato",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    badge: "Verified Architect",
    style: "Japandi Harmony",
    category: "Minimalist",
    sourceImage: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
    renderedImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    likes: 512,
    views: 2940,
    timestamp: "5 hours ago",
    description: "Shoji-inspired partition layout with organic hinoki cedar fixtures, tatami dining quarters, and gravel courtyard light wells."
  },
  {
    id: "comm-3",
    name: "Tribeca Cast-Iron Loft Conversion",
    author: "Marcus Vance",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    badge: "Pro Member",
    style: "Urban Industrial",
    category: "Loft",
    sourceImage: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=800&q=80",
    renderedImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    likes: 428,
    views: 2410,
    timestamp: "1 day ago",
    description: "Repurposed warehouse floor with 14-foot ceiling clearances, exposed brick load-bearing boundaries, and blackened steel kitchen island."
  },
  {
    id: "comm-4",
    name: "Azure Coastline Cliffside Penthouse",
    author: "Sophie Laurent",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    badge: "Design Director",
    style: "Contemporary Luxury",
    category: "Penthouse",
    sourceImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    renderedImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    likes: 671,
    views: 4190,
    timestamp: "2 days ago",
    description: "Monolithic Calacatta marble surfaces with wrap-around cantilevered glass terraces and integrated infinity pool spatial view."
  },
  {
    id: "comm-5",
    name: "Biophilic Creative Studio & Atelier",
    author: "David Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
    badge: "Pro Member",
    style: "Organic Modern",
    category: "Commercial",
    sourceImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    renderedImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    likes: 289,
    views: 1650,
    timestamp: "3 days ago",
    description: "Dynamic multi-disciplinary workspace with indoor living walls, acoustic micro-timber slats, and diffused skylight illumination."
  },
  {
    id: "comm-6",
    name: "Copenhagen Canal Duplex",
    author: "Astrid Lindgren",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
    badge: "Verified Architect",
    style: "Scandinavian Bright",
    category: "Living Room",
    sourceImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    renderedImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    likes: 384,
    views: 2100,
    timestamp: "4 days ago",
    description: "Compact dual-level dwelling maximizing vertical volume, chevron oak parquet, and bespoke flush-mounted storage solutions."
  }
];

const CATEGORIES = ["All", "Villa", "Minimalist", "Loft", "Penthouse", "Commercial", "Living Room"];

export default function Community() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"trending" | "likes" | "newest">("trending");
  const [projects, setProjects] = useState<CommunityProject[]>(CURATED_COMMUNITY);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [inspectingProject, setInspectingProject] = useState<CommunityProject | null>(null);
  const [modalView, setModalView] = useState<"render" | "source">("render");

  // Load public projects from Puter
  useEffect(() => {
    const fetchPuterProjects = async () => {
      try {
        const fetched = await getProjects();
        if (fetched && fetched.length > 0) {
          const formatted: CommunityProject[] = fetched
            .filter((p) => p.isPublic || p.renderedImage)
            .map((p, i) => ({
              id: p.id,
              name: p.name || `Architectural Study #${p.id.slice(-4)}`,
              author: p.sharedBy || "Community Architect",
              avatar: `https://images.unsplash.com/photo-${1500000000000 + (i * 1000000)}?auto=format&fit=crop&w=120&h=120&q=80`,
              badge: "Ruya Creator",
              style: "Contemporary",
              category: "Villa",
              sourceImage: p.sourceImage,
              renderedImage: p.renderedImage || p.sourceImage,
              likes: Math.floor(Math.random() * 80) + 12,
              views: Math.floor(Math.random() * 400) + 80,
              timestamp: p.timestamp ? new Date(p.timestamp).toLocaleDateString() : "Recent",
              description: "AI-generated top-down architectural raytracing generated using Ruya3D spatial engine."
            }));

          if (formatted.length > 0) {
            setProjects((prev) => [...formatted, ...prev]);
          }
        }
      } catch (err) {
        console.error("Failed to load community projects from Puter:", err);
      }
    };
    fetchPuterProjects();
  }, []);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap((prev) => {
      const currentlyLiked = !!prev[id];
      const nextLiked = !currentlyLiked;
      setProjects((list) =>
        list.map((item) =>
          item.id === id
            ? { ...item, likes: nextLiked ? item.likes + 1 : item.likes - 1 }
            : item
        )
      );
      return { ...prev, [id]: nextLiked };
    });
  };

  const filteredProjects = useMemo(() => {
    return projects
      .filter((item) => {
        const matchesCategory =
          selectedCategory === "All" || item.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesSearch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.style.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "likes") return b.likes - a.likes;
        if (sortBy === "trending") return (b.views + b.likes * 3) - (a.views + a.likes * 3);
        return 0;
      });
  }, [projects, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-14 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs mb-6">
          <Compass className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-700">
            Open Spatial Showcase
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-black max-w-4xl mx-auto leading-[0.95] mb-6">
          Discover & remix visionary 3D architectural spaces.
        </h1>

        <p className="max-w-xl mx-auto text-sm font-mono uppercase tracking-wide text-zinc-500 mb-10 leading-relaxed">
          Browse blueprints and renders published by architects and designers worldwide. Inspect 2D plans, analyze material mappings, or remix designs.
        </p>

        {/* Weekly Design Challenge Announcement */}
        <div className="bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white rounded-2xl p-6 md:p-8 max-w-5xl mx-auto border border-zinc-700 shadow-xl text-left flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-primary text-white font-bold">
                  Active Challenge #14
                </span>
                <span className="text-xs text-zinc-400 font-mono">Ends in 4 days</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                Biophilic Sustainable Loft Challenge
              </h3>
              <p className="text-xs text-zinc-300 mt-1 max-w-xl">
                Submit your residential floor plan optimized with natural light tunnels and indoor flora. Winner receives $1,000 in Ruya3D Pro Render credits.
              </p>
            </div>
          </div>

          <Link
            to="/#upload"
            className="shrink-0 px-6 py-3 rounded-lg text-xs uppercase tracking-wider font-bold bg-primary hover:bg-[#3939BF] text-white transition-all shadow-md flex items-center gap-2"
          >
            Submit Entry <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-sm max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search spaces, styles, creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-lg pl-9.5 pr-4 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-primary focus:bg-white transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <span className="text-[11px] font-mono uppercase text-zinc-400">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-zinc-50 border border-zinc-200 text-xs font-semibold rounded-lg px-2.5 py-1.5 text-zinc-800 focus:outline-none focus:border-primary"
            >
              <option value="trending">🔥 Trending</option>
              <option value="likes">❤️ Most Liked</option>
              <option value="newest">🕒 Latest</option>
            </select>
          </div>
        </div>
      </section>

      {/* Community Gallery Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto w-full">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-zinc-300 p-8">
            <Layers className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-black">No matching spaces found</h3>
            <p className="text-xs text-zinc-500 mt-1">Try clearing your search query or selecting a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => {
              const isLiked = !!likedMap[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => setInspectingProject(item)}
                  className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-4/3 overflow-hidden bg-zinc-100">
                    <img
                      src={item.renderedImage}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded border border-white/20">
                        {item.style}
                      </span>
                      <button
                        onClick={(e) => handleLike(item.id, e)}
                        className={`pointer-events-auto p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                          isLiked
                            ? "bg-red-500 text-white shadow-md scale-110"
                            : "bg-white/80 text-zinc-700 hover:bg-white hover:text-red-500 shadow-sm"
                        }`}
                        aria-label="Like project"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                      </button>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <span className="px-4 py-2 rounded-lg bg-white text-zinc-900 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-primary" /> Inspect 2D / 3D
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 flex flex-col justify-between grow">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-zinc-900 group-hover:text-primary transition-colors line-clamp-1 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                      {/* Author */}
                      <div className="flex items-center gap-2">
                        <img
                          src={item.avatar}
                          alt={item.author}
                          className="w-6 h-6 rounded-full object-cover border border-zinc-200"
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold text-zinc-800 text-[11px] leading-tight">
                            {item.author}
                          </span>
                          <span className="text-[9px] font-mono text-zinc-400 uppercase">
                            {item.badge}
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-3 text-zinc-400 font-mono text-[11px]">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3 text-red-400" /> {item.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3 text-zinc-400" /> {item.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Interactive Project Inspection Modal */}
      {inspectingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                  Community Design Inspection
                </span>
                <h2 className="text-2xl font-serif font-bold text-black">
                  {inspectingProject.name}
                </h2>
              </div>
              <button
                onClick={() => setInspectingProject(null)}
                className="p-2 rounded-lg text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* View Switcher (2D Blueprint vs 3D Render) */}
              <div className="flex items-center justify-between bg-zinc-100 p-1.5 rounded-xl">
                <button
                  onClick={() => setModalView("render")}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    modalView === "render"
                      ? "bg-white text-zinc-900 shadow-xs"
                      : "text-zinc-500 hover:text-black"
                  }`}
                >
                  Photorealistic 3D Render
                </button>
                <button
                  onClick={() => setModalView("source")}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    modalView === "source"
                      ? "bg-white text-zinc-900 shadow-xs"
                      : "text-zinc-500 hover:text-black"
                  }`}
                >
                  Source 2D Blueprint
                </button>
              </div>

              {/* Display Image */}
              <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-200">
                <img
                  src={modalView === "render" ? inspectingProject.renderedImage : inspectingProject.sourceImage}
                  alt={inspectingProject.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Architectural Notes
                  </h4>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    {inspectingProject.description}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 text-[11px] font-mono font-bold">
                      {inspectingProject.style}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-primary/10 text-primary text-[11px] font-mono font-bold">
                      {inspectingProject.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 bg-zinc-50 p-4 rounded-xl border border-zinc-200/60">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Creator Profile
                  </h4>
                  <div className="flex items-center gap-3">
                    <img
                      src={inspectingProject.avatar}
                      alt={inspectingProject.author}
                      className="w-10 h-10 rounded-full object-cover border border-zinc-300"
                    />
                    <div>
                      <span className="text-sm font-bold text-zinc-900 block">
                        {inspectingProject.author}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        {inspectingProject.badge} • Posted {inspectingProject.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-5 border-t border-zinc-100 bg-zinc-50/50 flex flex-col sm:flex-row gap-3 justify-end">
              <Button
                variant="outline"
                size="md"
                onClick={() => setInspectingProject(null)}
              >
                Close Preview
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  navigate(`/visualizer/${inspectingProject.id}`, {
                    state: {
                      initialImage: inspectingProject.sourceImage,
                      initialRendered: inspectingProject.renderedImage,
                      name: inspectingProject.name
                    }
                  });
                }}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Open in Visualizer & Remix
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
