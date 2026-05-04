// import { useState, useEffect, useRef } from "react";
// import { ChevronDown, Search, Menu, X } from "lucide-react";
// import { NAV_DATA, LOGO_URL } from "../data/navData";

// export default function Navbar() {
//   const [openIdx, setOpenIdx] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileSub, setMobileSub] = useState(null);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const [scrolled, setScrolled] = useState(false);
//   const navRef = useRef(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const onClick = (e) => {
//       if (navRef.current && !navRef.current.contains(e.target)) setOpenIdx(null);
//     };
//     document.addEventListener("mousedown", onClick);
//     return () => document.removeEventListener("mousedown", onClick);
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const q = query.trim().toLowerCase();
//     if (!q) return;
//     // Simple on-page search: find first text match and scroll to it
//     const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
//     let node;
//     while ((node = walker.nextNode())) {
//       if (node.nodeValue && node.nodeValue.toLowerCase().includes(q)) {
//         const el = node.parentElement;
//         if (el) {
//           el.scrollIntoView({ behavior: "smooth", block: "center" });
//           el.classList.add("ring-2", "ring-[#E8A83A]", "rounded-sm");
//           setTimeout(
//             () => el.classList.remove("ring-2", "ring-[#E8A83A]", "rounded-sm"),
//             2200
//           );
//           break;
//         }
//       }
//     }
//     setSearchOpen(false);
//   };

//   return (
//     <header
//       ref={navRef}
//       data-testid="main-navbar"
//       className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//         scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
//       }`}
//     >
//       {/* Top utility bar */}
//       <div className="hidden md:block bg-[#8B0F1A] text-white text-[11px] tracking-wide">
//         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-8">
//           <span className="font-serif italic">Ideate · Innovate · Impact</span>
//           <div className="flex items-center gap-5">
//             <a href="#membership" className="hover:text-[#F4C95D] transition" data-testid="top-membership">Become a Member</a>
//             <span className="opacity-40">|</span>
//             <a href="#media" className="hover:text-[#F4C95D] transition" data-testid="top-media">Media Room</a>
//             <span className="opacity-40">|</span>
//             <a href="#contact" className="hover:text-[#F4C95D] transition" data-testid="top-contact">Contact</a>
//           </div>
//         </div>
//       </div>

//       {/* Main bar */}
//       <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
//       {/* <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24"> */}
//         <a href="#home" className="flex items-center gap-3" data-testid="nav-logo">
//           {/* <img src={LOGO_URL} alt="ASSOCHAM" className="h-14 md:h-16 w-auto object-contain" /> */}
//           <img
//   src={LOGO_URL}
//   alt="ASSOCHAM"
//   className="h-16 md:h-20 lg:h-24 w-auto object-contain"
// />
//           {/* <div className="hidden lg:block leading-tight">
//             <div className="text-[10px] font-medium tracking-[0.25em] text-neutral-500">
//               THE ASSOCIATED CHAMBERS OF
//             </div>
//             <div className="text-[10px] font-medium tracking-[0.25em] text-neutral-500">
//               COMMERCE &amp; INDUSTRY OF INDIA
//             </div>
//           </div> */}
//         </a>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
//           {NAV_DATA.map((item, idx) => (
//             <div
//               key={item.label}
//               className="relative"
//               onMouseEnter={() => setOpenIdx(idx)}
//               onMouseLeave={() => setOpenIdx(null)}
//             >
//               <button
//                 data-testid={`nav-${item.label.toLowerCase().replace(/s+/g, "-")}`}
//                 // className="px-3 py-2 text-[13px] font-medium text-neutral-800 hover:text-[#8B0F1A] flex items-center gap-1 transition-colors"
//                 className="relative px-3 py-2 text-[13px] font-medium text-neutral-800 hover:text-[#8B0F1A] flex items-center gap-1 transition-colors whitespace-nowrap
// after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#8B0F1A] after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {item.label}
//                 {item.items && <ChevronDown className="h-3.5 w-3.5" />}
//               </button>
//               {item.items && openIdx === idx && (
//                 <div
//                   className={`absolute left-0 top-full pt-2 ${
//                     item.columns ? "-left-32 xl:-left-48" : ""
//                   }`}
//                 >
//                   <div
//                     className={`bg-white shadow-2xl border-t-2 border-[#E8A83A] rounded-b-md overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 ${
//                       item.columns
//                         ? "grid grid-cols-3 gap-x-2 p-4 w-[720px] max-h-[70vh] overflow-y-auto"
//                         : "w-72 p-2"
//                     }`}
//                   >
//                     {item.items.map((sub) => (
//                       <a
//                         key={sub}
//                         href={`#${sub.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
//                         className="block px-3 py-2 text-[12.5px] text-neutral-700 hover:bg-[#FFF5E6] hover:text-[#8B0F1A] rounded transition-colors"
//                       >
//                         {sub}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Right actions */}
//         <div className="flex items-center gap-2">
//           <button
//             data-testid="search-toggle"
//             onClick={() => setSearchOpen((s) => !s)}
//             className="p-2.5 rounded-full hover:bg-neutral-100 text-neutral-700"
//             aria-label="Search"
//           >
//             <Search className="h-4.5 w-4.5" />
//           </button>
//           <a
//             href="#membership"
//             data-testid="nav-join-cta"
//             className="hidden md:inline-flex items-center px-4 py-2 text-[13px] font-semibold text-white bg-[#8B0F1A] hover:bg-[#6d0b14] rounded-full transition-colors"
//           >
//             Join ASSOCHAM
//           </a>
//           <button
//             onClick={() => setMobileOpen(true)}
//             className="lg:hidden p-2 rounded hover:bg-neutral-100"
//             data-testid="mobile-menu-toggle"
//             aria-label="Open menu"
//           >
//             <Menu className="h-6 w-6 text-neutral-800" />
//           </button>
//         </div>
//       </div>

//       {/* Search dropdown */}
//       {searchOpen && (
//         <div className="border-t border-neutral-200 bg-white">
//           <form
//             onSubmit={handleSearch}
//             className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3"
//             data-testid="search-form"
//           >
//             <Search className="h-5 w-5 text-neutral-500" />
//             <input
//               autoFocus
//               data-testid="search-input"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search across ASSOCHAM — sectors, reports, events, press…"
//               className="flex-1 bg-transparent border-0 outline-none text-[15px] placeholder:text-neutral-400"
//             />
//             <button
//               type="submit"
//               data-testid="search-submit"
//               className="px-4 py-2 bg-[#8B0F1A] text-white text-sm rounded-full hover:bg-[#6d0b14]"
//             >
//               Search
//             </button>
//             <button
//               type="button"
//               onClick={() => setSearchOpen(false)}
//               className="p-2 text-neutral-500 hover:text-neutral-800"
//               aria-label="Close search"
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Mobile panel */}
//       {mobileOpen && (
//         <div className="fixed inset-0 z-[60] bg-black/50" onClick={() => setMobileOpen(false)}>
//           <div
//             className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//             data-testid="mobile-menu"
//           >
//             <div className="flex items-center justify-between p-4 border-b">
//               <img src={LOGO_URL} alt="ASSOCHAM" className="h-10" />
//               <button onClick={() => setMobileOpen(false)} aria-label="Close menu" data-testid="mobile-menu-close">
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="p-2">
//               {NAV_DATA.map((item, idx) => (
//                 <div key={item.label} className="border-b border-neutral-100">
//                   <button
//                     onClick={() =>
//                       item.items ? setMobileSub(mobileSub === idx ? null : idx) : setMobileOpen(false)
//                     }
//                     className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-neutral-800"
//                   >
//                     {item.label}
//                     {item.items && (
//                       <ChevronDown
//                         className={`h-4 w-4 transition-transform ${mobileSub === idx ? "rotate-180" : ""}`}
//                       />
//                     )}
//                   </button>
//                   {item.items && mobileSub === idx && (
//                     <div className="pb-2 pl-3">
//                       {item.items.map((sub) => (
//                         <a
//                           key={sub}
//                           href={`#${sub.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
//                           onClick={() => setMobileOpen(false)}
//                           className="block px-3 py-1.5 text-[13px] text-neutral-600 hover:text-[#8B0F1A]"
//                         >
//                           {sub}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <a
//                 href="#membership"
//                 onClick={() => setMobileOpen(false)}
//                 className="block mt-4 mx-3 text-center px-4 py-3 bg-[#8B0F1A] text-white text-sm font-semibold rounded-full"
//               >
//                 Join ASSOCHAM
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }





// new new code 





import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import "./Navbar.css";
import { NAV_DATA, LOGO_URL } from "../data/navData";

export default function Navbar() {
  const [openIdx, setOpenIdx] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIdx(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Ideate · Innovate · Impact</span>
          <div className="top-links">
            <a href="#">Become a Member</a>
            <a href="#">Media Room</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="nav-container nav-main">
        {/* Logo */}
        <div className="logo" style={{boxSizing: 'inherit'}}>
          <img src={LOGO_URL} alt="ASSOCHAM" />
        </div>

        {/* Desktop Menu */}
        <nav className="nav-links">
          {NAV_DATA.map((item, idx) => (
            <div
              key={item.label}
              className="nav-item"
              onMouseEnter={() => setOpenIdx(idx)}
              onMouseLeave={() => setOpenIdx(null)}
            >
              <button>
                {item.label}
                {item.items && <ChevronDown size={16} />}
              </button>

              {item.items && openIdx === idx && (
                <div className={`dropdown ${item.columns ? "mega" : ""}`}>
                  {item.items.map((sub) => (
                    <a key={sub} href="#">
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right */}
        <div className="nav-actions">
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <Search size={18} />
          </button>

          <a href="#" className="cta-btn">
            Join ASSOCHAM
          </a>

          <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Search */}
      {searchOpen && (
        <div className="search-bar">
          <input
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>
            <Search size={18} />
          </button>
          <button onClick={() => setSearchOpen(false)}>
            <X size={18} />
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div
            className="mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-header">
              <img src={LOGO_URL} alt="" />
              <X onClick={() => setMobileOpen(false)} />
            </div>

            {NAV_DATA.map((item, idx) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    item.items
                      ? setMobileSub(mobileSub === idx ? null : idx)
                      : setMobileOpen(false)
                  }
                >
                  {item.label}
                </button>

                {item.items && mobileSub === idx && (
                  <div className="mobile-sub">
                    {item.items.map((sub) => (
                      <a key={sub} href="#">
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}