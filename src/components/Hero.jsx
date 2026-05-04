
// import { useState, useEffect } from "react";
// import { ArrowRight } from "lucide-react";
// import { TICKER_ITEMS } from "../data/navData";

// export default function Hero() {
//   const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];

//   const originalCards = [
//     {
//       img: "https://assocham.org/assets/images/slider-banners/1774934463_3.jpg",
//       title:
//         "SAHIT Awardees at ASSOCHAM event Viksit Bharat 2047: Women Leading India’s Growth Story",
//       date: "December 18, 2025 · New Delhi",
//     },
//     {
//       img: "https://assocham.org/assets/images/slider-banners/1773920723_1.jpg",
//       title:
//         "Knowledge Paper launch during Nutribharat 2026 by Mr. Chirag Paswan",
//       date: "January 2026 · Mumbai",
//     },
//     {
//       img: "https://assocham.org/assets/images/slider-banners/1771224632_4.jpg",
//       title:
//         "ASSOCHAM Post Budget Conference with Ministry of Finance",
//       date: "March 2026 · Bengaluru",
//     },
//   ];

//   const cards = [...originalCards, originalCards[0]];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;

//     const timer = setInterval(() => {
//       handleNext();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isPaused, currentIndex]);

//   const handleNext = () => {
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => prev + 1);
//   };

//   const handleTransitionEnd = () => {
//     if (currentIndex >= cards.length - 1) {
//       setIsTransitioning(false);
//       setCurrentIndex(0);

//       setTimeout(() => {
//         setIsTransitioning(true);
//       }, 50);
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-gradient-to-br from-[#fff8f2] via-white to-[#fff3e0]"
//     >
//       {/* Background Glow */}
//       <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#da2128]/15 blur-3xl" />
//       <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#fdb913]/20 blur-3xl" />

//       {/* Dot Texture */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "radial-gradient(#da2128 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-20 grid lg:grid-cols-12 gap-12 items-center">
        
//         {/* LEFT SIDE */}
//         <div className="lg:col-span-7">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#da2128] to-[#f7941d] text-white text-xs font-semibold shadow-lg">
//             <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
//             Since 1920 · 105 Years of Industry Leadership
//           </div>

//           <h1
//             className="mt-6 text-[42px] md:text-[58px] lg:text-[66px] leading-[1.05] tracking-tight text-[#1a1a1a] font-bold"
//             style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//           >
//             The Voice of{" "}
//             <span className="text-[#da2128] italic">
//               Indian Industry
//             </span>
//             <br />
//             Building the Future of{" "}
//             <span className="relative inline-block">
//               Bharat
//               <span className="absolute left-0 bottom-1 h-3 w-full bg-[#fdb913]/40 -z-10 rounded"></span>
//             </span>
//           </h1>

//           <p className="mt-6 max-w-xl text-[16px] text-neutral-600 leading-8">
//             Connecting policymakers, enterprises, and innovators across
//             India to drive growth, policy excellence, and economic
//             transformation across 60+ sectors.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href="#knowledge"
//               className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#da2128] via-[#e65925] to-[#f7941d] text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
//             >
//               Explore Knowledge Centre
//               <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all" />
//             </a>

//             <a
//               href="#membership"
//               className="px-7 py-3 rounded-full border-2 border-[#da2128] text-[#da2128] font-semibold hover:bg-[#da2128] hover:text-white transition-all duration-300"
//             >
//               Become a Member
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         {/* RIGHT SIDE */}
// <div className="lg:col-span-5">
//   <div
//     className="relative"
//     onMouseEnter={() => setIsPaused(true)}
//     onMouseLeave={() => setIsPaused(false)}
//   >
//     {/* Glow */}
//     <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#da2128]/30 via-[#f7941d]/20 to-[#fdb913]/20 blur-2xl" />

//     {/* MAIN CARD */}
//     <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/40 w-full h-[360px] md:h-[400px] lg:h-[420px]">
//               <div
//                 className="flex flex-col h-full"
//                 onTransitionEnd={handleTransitionEnd}
//                 style={{
//                   transform: `translateY(-${currentIndex * 100}%)`,
//                   transition: isTransitioning
//                     ? "transform 900ms cubic-bezier(0.4,0,0.2,1)"
//                     : "none",
//                 }}
//               >
//                 {cards.map((card, i) => (
//                   <div
//                     key={i}
//                     className="relative w-full h-full shrink-0"
//                   >
//                     <img
//                       src={card.img}
//                       alt={card.title}
//                       className="w-full h-full object-cover"
//                     />

//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

//                     {/* Text */}
//                     <div className="absolute bottom-6 left-6 right-6">
//                       <div className="inline-block px-3 py-1 rounded-full bg-[#fdb913] text-black text-xs font-bold mb-4">
//                         FEATURED EVENT
//                       </div>

//                       <h3 className="text-white text-xl md:text-2xl leading-tight font-semibold">
//                         {card.title}
//                       </h3>

//                       <p className="text-white/80 mt-3 text-sm">
//                         {card.date}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Floating small card */}
//             {/* <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[#fdb913]/30">
//               <div className="text-[#da2128] font-bold text-xl">
//                 4.5L+
//               </div>
//               <div className="text-xs text-neutral-500">
//                 Industry Members
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>

//       {/* TICKER */}
//       {/* <div className="border-y border-[#da2128]/10 bg-white/80 backdrop-blur">
//         <div className="max-w-7xl mx-auto px-6 h-14 flex items-center overflow-hidden">
//           <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
//             {loop.map((item, i) => (
//               <span
//                 key={i}
//                 className="text-sm font-medium text-neutral-700 flex items-center gap-2"
//               >
//                 <span className="text-[#f7941d] text-lg">◆</span>
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div> */}
//     </section>
//   );
// }





// new version after design refresh



import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

/* RIGHT SIDE */
const CARDS = [
  {
    img: "https://assocham.org/assets/images/slider-banners/1774934463_3.jpg",
    title: "Women Leading India’s Growth Story",
    date: "Dec 2025 · New Delhi",
  },
  {
    img: "https://assocham.org/assets/images/slider-banners/1773920723_1.jpg",
    title: "Nutribharat 2026 Knowledge Paper Launch",
    date: "Jan 2026 · Mumbai",
  },
  {
    img: "https://assocham.org/assets/images/slider-banners/1771224632_4.jpg",
    title: "Post Budget Conference",
    date: "Mar 2026 · Bengaluru",
  },
];

/* LEFT TEXT */
const TEXT_SLIDES = [
  {
    title: "The Voice of Indian Industry",
    desc: "ASSOCHAM drives policy advocacy and represents over 4.5 lakh members across India.",
  },
  {
    title: "Bridging Government & Business",
    desc: "Connecting policymakers, enterprises, and innovators to shape India's economic future.",
  },
  {
    title: "Driving Growth & Innovation",
    desc: "Empowering industries through research, events, and knowledge leadership.",
  },
];

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [pause, setPause] = useState(false);

  /* IMAGE SLIDER */
  useEffect(() => {
    if (pause) return;
    const t = setInterval(() => {
      setImgIndex((p) => (p + 1) % CARDS.length);
    }, 4000);
    return () => clearInterval(t);
  }, [pause]);

  /* TEXT SLIDER */
  useEffect(() => {
    const t = setInterval(() => {
      setTextIndex((p) => (p + 1) % TEXT_SLIDES.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e65925] via-white to-[#f7941d]">

      {/* BRAND GLOW */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#da2128]/25 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[#fdb913]/25 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-12 gap-12 items-center">

        {/* LEFT */}
        <div className="lg:col-span-6">

          <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8 shadow-xl">

            <div className="text-[11px] tracking-[0.3em] text-[#da2128] font-semibold">
              ASSOCHAM · EST. 1920
            </div>

            {/* TEXT CAROUSEL FIX */}
            <div className="mt-5 min-h-[140px] relative">

              {TEXT_SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ${
                    i === textIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <h1 className="text-[28px] md:text-[34px] font-semibold text-[#111] leading-snug">
                    {slide.title}
                  </h1>

                  <p className="mt-3 text-[14px] text-neutral-700 leading-6 max-w-md">
                    {slide.desc}
                  </p>
                </div>
              ))}

            </div>

            {/* BUTTONS */}
            <div className="mt-7 flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#da2128] via-[#e65925] to-[#f7941d] text-white rounded-full text-sm font-semibold flex items-center gap-2 hover:scale-105 transition">
                Explore
                <ArrowRight size={16} />
              </button>

              <button className="px-6 py-3 border border-[#da2128] text-[#da2128] rounded-full text-sm font-semibold hover:bg-[#da2128] hover:text-white transition">
                Membership
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="lg:col-span-6"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/40 shadow-xl">

            {/* SLIDER */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${imgIndex * 100}%)`,
              }}
            >
              {CARDS.map((card, i) => (
                <div key={i} className="min-w-full h-[340px] relative">
                  
                  <img
                    src={card.img}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="text-lg font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {card.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {CARDS.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === imgIndex ? "bg-[#fdb913]" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}