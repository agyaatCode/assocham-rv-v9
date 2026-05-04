// import { Megaphone, Newspaper, ArrowUpRight } from "lucide-react";
// import { PRESS_RELEASES, PRESS_COVERAGE } from "../data/navData";

// export default function MediaSection() {
//   return (
//     <section
//       id="media"
//       data-testid="media-section"
//       className="py-20 md:py-24 bg-[#FAF7F2] relative overflow-hidden"
//     >
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#8B0F1A 1px, transparent 1px), linear-gradient(90deg, #8B0F1A 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />
//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="flex items-end justify-between flex-wrap gap-4">
//           <div>
//             <div className="text-[11px] tracking-[0.3em] text-[#8B0F1A] font-semibold">
//               MEDIA ROOM
//             </div>
//             <h2
//               className="mt-3 font-serif text-4xl md:text-5xl text-neutral-900"
//               style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//             >
//               Press &amp; <span className="italic text-[#8B0F1A]">Public Voice</span>
//             </h2>
//           </div>
//           <a
//             href="#media"
//             className="inline-flex items-center gap-1 text-sm font-semibold text-[#8B0F1A] hover:underline"
//             data-testid="media-see-all"
//           >
//             View Gallery <ArrowUpRight className="h-4 w-4" />
//           </a>
//         </div>

//         <div className="mt-12 grid lg:grid-cols-2 gap-10">
//           {/* Press Releases */}
//           <div data-testid="press-releases">
//             <div className="flex items-center gap-2 mb-5">
//               <Megaphone className="h-5 w-5 text-[#8B0F1A]" />
//               <h3 className="font-serif text-2xl text-neutral-900">Press Releases</h3>
//             </div>
//             <div className="space-y-4">
//               {PRESS_RELEASES.map((p, i) => (
//                 <article
//                   key={p.title}
//                   className="group relative pl-8 pb-4 border-l-2 border-[#E8A83A]/50 last:border-l-transparent"
//                 >
//                   <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#8B0F1A] ring-4 ring-[#FAF7F2] group-hover:bg-[#E8A83A] transition-colors" />
//                   <div className="text-[11px] uppercase tracking-wider text-neutral-500">
//                     {p.date} · <span className="text-[#8B0F1A]">#{String(i + 1).padStart(2, "0")}</span>
//                   </div>
//                   <h4 className="mt-1 font-medium text-neutral-900 group-hover:text-[#8B0F1A] transition-colors">
//                     {p.title}
//                   </h4>
//                 </article>
//               ))}
//             </div>
//           </div>

//           {/* Press Coverage */}
//           <div data-testid="press-coverage">
//             <div className="flex items-center gap-2 mb-5">
//               <Newspaper className="h-5 w-5 text-[#8B0F1A]" />
//               <h3 className="font-serif text-2xl text-neutral-900">Press Coverage</h3>
//             </div>
//             <div className="space-y-4">
//               {PRESS_COVERAGE.map((p) => (
//                 <article
//                   key={p.title}
//                   className="bg-white border border-neutral-200 rounded-xl p-5 hover:border-[#8B0F1A] hover:shadow-md transition-all"
//                 >
//                   <div className="flex items-center justify-between text-[11px] uppercase tracking-wider mb-2">
//                     <span className="text-[#8B0F1A] font-bold">{p.source}</span>
//                     <span className="text-neutral-500">{p.date}</span>
//                   </div>
//                   <h4 className="font-medium text-neutral-900 leading-snug">{p.title}</h4>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// new new code 







import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { PRESS_RELEASES, PRESS_COVERAGE } from "../data/navData";

export default function MediaSocialSection() {
  const [activeTab, setActiveTab] = useState("releases");
  const [activeSocial, setActiveSocial] = useState("facebook");

  const releasesLoop = [...PRESS_RELEASES, ...PRESS_RELEASES];
  const coverageLoop = [...PRESS_COVERAGE, ...PRESS_COVERAGE];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.twttr) window.twttr.widgets.load();
      if (window.instgrm) window.instgrm.Embeds.process();
    }, 500);
    return () => clearTimeout(timer);
  }, [activeSocial]);

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 MAIN FLEX */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex-1">

            {/* HEADER */}
            <div className="mb-8">
              <p className="text-[11px] tracking-[0.3em] text-[#8B0F1A] font-semibold">
                MEDIA & SOCIAL
              </p>

              <h2 className="mt-2 text-4xl font-serif leading-tight">
                Public Voice{" "}
                <span className="italic text-[#f7941d]">
                  & Digital Presence
                </span>
              </h2>
            </div>

            {/* TABS */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setActiveTab("releases")}
                className={`px-4 py-2 text-sm rounded-full ${
                  activeTab === "releases"
                    ? "bg-[#f7941d] text-white"
                    : "bg-white border"
                }`}
              >
                Press Releases
              </button>

              <button
                onClick={() => setActiveTab("coverage")}
                className={`px-4 py-2 text-sm rounded-full ${
                  activeTab === "coverage"
                    ? "bg-[#8B0F1A] text-white"
                    : "bg-white border"
                }`}
              >
                Press Coverage
              </button>
            </div>

            {/* TIMELINE */}
            <div className="relative h-[360px] overflow-hidden">

              {/* LINE */}
              <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-[#f7941d]/100"></div>

              <div className="scroll-loop space-y-8">

                {(activeTab === "releases" ? releasesLoop : coverageLoop).map((p, i) => (
                  <div key={i} className="relative pl-12">

                    {/* DOT ON LINE */}
                    <span className="absolute left-5 top-3 -translate-x-1/2 w-3 h-3 bg-[#8B0F1A] rounded-full border-2 border-white shadow"></span>

                    {/* CARD */}
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <div className="text-xs text-neutral-400 mb-1">
                        {activeTab === "releases"
                          ? p.date
                          : `${p.source} • ${p.date}`}
                      </div>

                      <h4 className="text-sm font-medium hover:text-[#8B0F1A] cursor-pointer">
                        {p.title}
                      </h4>
                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>

{/* ================= RIGHT SIDE (SOCIAL) ================= */}
<div className="w-full lg:w-[420px] bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-4 h-fit">

  {/* ICON BAR */}
  <div className="flex gap-3 mb-4">
    {[
      { id: "facebook", icon: <FaFacebookF />, color: "bg-blue-600" },
      { id: "instagram", icon: <FaInstagram />, color: "bg-pink-500" },
      { id: "twitter", icon: <FaTwitter />, color: "bg-black" },
    ].map((item) => (
      <div
        key={item.id}
        onMouseEnter={() => setActiveSocial(item.id)}
        className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition ${
          activeSocial === item.id
            ? `${item.color} text-white shadow-md`
            : "bg-white/70 backdrop-blur text-gray-700"
        }`}
      >
        {item.icon}
      </div>
    ))}
  </div>

  {/* SOCIAL PREVIEW */}
  <div className="h-[445px] overflow-auto flex justify-center rounded-xl bg-white/30 backdrop-blur">

    {/* FACEBOOK */}
    {activeSocial === "facebook" && (
      <div className="scale-[0.7] origin-top w-[170%]">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FASSOCHAM4Ind%2Fposts%2Fpfbid0RszAkkxef8VK1DhUqeHvNYSW1ohm4ThBoPfPiWg1fRN1ZCGuU3RvATuJDAEm3ZGMl&show_text=true"
          className="w-full h-[700px]"
          style={{ border: "none" }}
          scrolling="no"
        ></iframe>
      </div>
    )}

    {/* TWITTER */}
    {activeSocial === "twitter" && (
      <div className="scale-[0.85] origin-top w-[120%]">
        <blockquote className="twitter-tweet">
          <a href="https://twitter.com/ASSOCHAM4India/status/1410202976107450370"></a>
        </blockquote>
      </div>
    )}

    {/* INSTAGRAM */}
    {activeSocial === "instagram" && (
      <div className="scale-[0.75] origin-top w-[130%]">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DXlOfzDkTMA/"
          data-instgrm-version="14"
        ></blockquote>
      </div>
    )}

  </div>
</div>

        </div>
      </div>
    </section>
  );
}