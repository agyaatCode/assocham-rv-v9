
// import { useState } from "react";
// import { Youtube } from "lucide-react";

// const VIDEOS = [
//   "7YJxHDBBfWg",
//   "tGG56vaD0Gc",
//   "Y7Rl-e_yJUk",
//   "pl3r5yT6I-0",
//   "Iwbt2yZaKSc",
//   "hY7m5jjJ9mM",
// ];

// export default function SocialMedia() {
//   const [activeVideo, setActiveVideo] = useState(null);

//   return (
//     <section className="py-20 md:py-24 bg-gradient-to-br from-[#1a0708] via-[#2a0c10] to-[#3a0f14] text-white relative overflow-hidden">
      
//       {/* GLOW BG */}
//       <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#8B0F1A]/30 blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center max-w-2xl mx-auto">
//           <div className="text-[11px] tracking-[0.3em] text-[#E8A83A] font-semibold">
//             CONNECT WITH US
//           </div>

//           <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
//             Join the conversation on{" "}
//             <span className="italic text-[#F4C95D]">
//               Indian industry.
//             </span>
//           </h2>

//           <p className="mt-4 text-white/70 text-[15px]">
//             Watch insights, events and updates from ASSOCHAM.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

//           {VIDEOS.map((id, i) => (
//             <div
//               key={i}
//               className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
              
//               onMouseEnter={() => setActiveVideo(i)}
//               onMouseLeave={() => setActiveVideo(null)}
//             >
              
//               {/* ICON */}
//               <div className="absolute top-3 left-3 z-10 w-9 h-9 rounded-lg flex items-center justify-center bg-red-600 text-white shadow">
//                 <Youtube size={18} />
//               </div>

//               {/* VIDEO */}
//               <div className="w-full h-[160px]">

//                 {activeVideo === i ? (
//                   <iframe
//                     className="w-full h-full"
//                     src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}`}
//                     title="YouTube video"
//                     allow="autoplay"
//                   ></iframe>
//                 ) : (
//                   <iframe
//                     className="w-full h-full opacity-80"
//                     src={`https://www.youtube.com/embed/${id}?controls=0`}
//                     title="YouTube video"
//                   ></iframe>
//                 )}

//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }



// new code 



import { useEffect, useState } from "react";
import { Youtube } from "lucide-react";

const VIDEOS = [
  "7YJxHDBBfWg",
  "tGG56vaD0Gc",
  "Y7Rl-e_yJUk",
  "pl3r5yT6I-0",
  "Iwbt2yZaKSc",
  "hY7m5jjJ9mM",
];

export default function SocialMediaCarousel() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  // AUTO SLIDE
  useEffect(() => {
    if (hover) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % VIDEOS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hover]);

  const get = (i) => VIDEOS[(index + i) % VIDEOS.length];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a0708] via-[#2a0c10] to-[#3a0f14] text-white">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] tracking-[0.3em] text-[#E8A83A] font-semibold">
            CONNECT WITH US
          </div>

          <h2 className="mt-3 text-4xl md:text-5xl font-serif">
            Join the conversation on{" "}
            <span className="italic text-[#F4C95D]">Indian industry.</span>
          </h2>

          <p className="mt-4 text-white/70">
            Watch insights, events and updates from ASSOCHAM.
          </p>
        </div>

        {/* CENTER WRAPPER */}
        <div
          className="mt-16 flex justify-center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          
          {/* INNER FLEX (ACTUAL CAROUSEL) */}
          <div className="flex items-center gap-8">

            {/* LEFT BIG VIDEO */}
            <VideoCard id={get(0)} big />

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-5">
              <VideoCard id={get(1)} />
              <VideoCard id={get(2)} />
              <VideoCard id={get(3)} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


/* VIDEO CARD */
function VideoCard({ id, big }) {
  const [play, setPlay] = useState(false);

  return (
    <div
      onClick={() => setPlay(true)}
      className={`
        relative cursor-pointer overflow-hidden rounded-2xl border border-white/10
        bg-white/5 backdrop-blur transition-all duration-500 ease-in-out
        hover:scale-[1.02]
        ${big ? "w-[720px] h-[400px]" : "w-[260px] h-[120px]"}
      `}
    >
      
      {/* ICON */}
      <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
        <Youtube size={16} />
      </div>

      {/* CONTENT */}
      {!play ? (
        <>
          {/* THUMBNAIL */}
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt="thumbnail"
            className="w-full h-full object-cover"
          />

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white text-xl">
              ▶
            </div>
          </div>
        </>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="YouTube video"
          allow="autoplay"
        />
      )}
    </div>
  );
}