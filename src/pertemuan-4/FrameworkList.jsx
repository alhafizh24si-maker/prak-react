import { useState, useMemo } from "react";
import frameworkData from "./framework.json";

// Professional color palette
const COLORS = {
  primary: "#0f172a",      // Slate 900
  secondary: "#1e293b",    // Slate 800
  accent: "#3b82f6",       // Blue 500
  accentHover: "#2563eb",  // Blue 600
  text: "#f8fafc",         // Slate 50
  textMuted: "#94a3b8",    // Slate 400
  border: "#334155",       // Slate 700
  success: "#10b981",      // Emerald 500
  warning: "#f59e0b",      // Amber 500
};

export default function FrameworkList() {
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [sortBy, setSortBy] = useState("name"); // name | year | popularity

  // Extract and sort unique tags
  const allTags = useMemo(() => {
    const tags = [...new Set(frameworkData.flatMap((item) => item.tags))];
    return tags.sort();
  }, []);

  // Filter and sort data
  const filteredData = useMemo(() => {
    let result = frameworkData.filter((item) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.details.developer.toLowerCase().includes(searchLower);
      const matchesTag =
        selectedTag === "all" || item.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });

    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "year":
          return b.details.releaseYear - a.details.releaseYear;
        case "popularity":
          return (b.details.stars || 0) - (a.details.stars || 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [searchTerm, selectedTag, sortBy]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const getTagColor = (tag) => {
    const colors = [
      "bg-blue-500/10 text-blue-400 border-blue-500/20",
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      "bg-amber-500/10 text-amber-400 border-amber-500/20",
      "bg-purple-500/10 text-purple-400 border-purple-500/20",
      "bg-rose-500/10 text-rose-400 border-rose-500/20",
      "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    ];
    return colors[tag.length % colors.length];
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-tight">FrameworkHub</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>{frameworkData.length} Frameworks</span>
            <div className="w-px h-4 bg-slate-700" />
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23334155%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Frameworks</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              Curated collection of modern development frameworks. Compare, analyze, and discover the right tools for your next project.
            </p>
          </div>
        </div>
      </header>

      {/* Controls Section */}
      <section className="sticky top-16 z-40 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search frameworks, developers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 cursor-pointer hover:border-slate-600 transition-colors"
              >
                <option value="all">All Categories</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 cursor-pointer hover:border-slate-600 transition-colors"
              >
                <option value="name">Sort by Name</option>
                <option value="year">Sort by Year</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
            <span>Showing {filteredData.length} of {frameworkData.length} results</span>
            {(searchTerm || selectedTag !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTag("all");
                }}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                Clear filters
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">No frameworks found</h3>
            <p className="text-slate-500 max-w-md">We couldn't find any frameworks matching your criteria. Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredData.map((item, index) => (
              <article
                key={item.id}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`,
                }}
              >
                {/* Card Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-lg font-bold text-slate-300 shadow-inner">
                        {getInitials(item.name)}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </h2>
                        <p className="text-sm text-slate-500">{item.details.developer}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
                      {item.details.releaseYear}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getTagColor(tag)}`}
                      >
                        {tag}
                    </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-500 border border-slate-700">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Expandable Details */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedId === item.id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-slate-800 space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Developer</span>
                          <span className="text-slate-300">{item.details.developer}</span>
                        </div>
                        <div>
                          <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">Released</span>
                          <span className="text-slate-300">{item.details.releaseYear}</span>
                        </div>
                        {item.details.license && (
                          <div>
                            <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">License</span>
                            <span className="text-slate-300">{item.details.license}</span>
                          </div>
                        )}
                        {item.details.stars && (
                          <div>
                            <span className="block text-slate-500 text-xs uppercase tracking-wider mb-1">GitHub Stars</span>
                            <span className="text-slate-300 flex items-center gap-1">
                              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {(item.details.stars / 1000).toFixed(1)}k
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {item.details.officialWebsite && (
                        <a
                          href={item.details.officialWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Visit Official Website
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="text-sm font-medium text-slate-400 hover:text-slate-200 flex items-center gap-2 transition-colors"
                  >
                    {expandedId === item.id ? "Show less" : "View details"}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${expandedId === item.id ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {item.details.officialWebsite && (
                    <a
                      href={item.details.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                      title="Visit website"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/0 group-hover:border-blue-500/20 transition-colors pointer-events-none" />
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20 py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-sm">
          <p>© 2026 FrameworkHub. Professional developer tools directory.</p>
        </div>
      </footer>

      {/* Global Styles for Animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}