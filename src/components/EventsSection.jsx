import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { EVENTS } from "../data/navData";

const FLAGSHIP_IMAGES = [
  "https://assocham.org/assets/images/1739943966_SMK_2.0_ASSOCHAM%20Web%20Banner_650%20X%20914%20pixels.jpg",
  "https://assocham.org/assets/images/1772536051_Untitled%20design.jpg",
  "https://assocham.org/assets/images/1770812319_IMG-20260211-WA0043.jpg",
];

const LATEST_UPDATES = [
  "ASSOCHAM hosts Global Trade Summit 2026",
  "MSME policy reforms discussion held",
  "Digital India driving innovation",
  "Energy roadmap unveiled",
  "Startup ecosystem boost announced",
  "GOVERNMENT MEASURES TO MITIGATE IMPACT OF WEST ASIA CONFLICT ON INDIA",
  "D&B ASSOCHAM Report",
  "Industry Standards Note on Regulation 30 of the LODR Regulations",
  "SEBI Circular - Industry Standards on RPTs",
  "ASSOCHAM Compendium 2024",
];

export default function EventsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % FLAGSHIP_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // duplicate for infinite loop
  const loopEvents = [...EVENTS.slice(1, 4), ...EVENTS.slice(1, 4)];
  const loopUpdates = [...LATEST_UPDATES, ...LATEST_UPDATES];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* FLAGSHIP */}
          <div>
            <h3 className="text-sm font-semibold text-[#e86e25] mb-3">
              FLAGSHIP
            </h3>

            <div className="relative rounded-xl overflow-hidden h-[26rem] bg-black/2">

              <div className="h-full flex items-center justify-center">
                <img
                  src={FLAGSHIP_IMAGES[index]}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="absolute inset-0 " />

              {/* <div className="absolute bottom-0 p-4 text-white">
                <div className="text-xs flex gap-3 text-white/80">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> 24 Aug
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> Delhi
                  </span>
                </div>

                <h4 className="text-lg font-medium mt-1">
                  Global Leadership Summit
                </h4>
              </div> */}
            </div>
          </div>

          {/* UPCOMING EVENTS (INFINITE LOOP) */}
          <div>
            <h3 className="text-sm font-semibold text-[#e86e25] mb-3">
              UPCOMING
            </h3>

            <div className="relative h-[26rem] overflow-hidden">
              <div className="scroll-loop space-y-4">
                {loopEvents.map((ev, i) => (
                  <div
                    key={i}
                    className="flex gap-3 border rounded-lg overflow-hidden bg-white"
                  >
                    <img
                      src={ev.img}
                      alt=""
                      className="w-20 h-20 object-cover"
                    />

                    <div className="p-2">
                      <h4 className="text-xs font-medium">{ev.title}</h4>

                      <div className="text-[10px] text-neutral-500 mt-1">
                        {ev.date} • {ev.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LATEST UPDATES */}
          <div>
            <h3 className="text-sm font-semibold text-[#e86e25] mb-3">
              LATEST UPDATES
            </h3>

            <div className="relative h-[26rem] overflow-hidden border rounded-lg bg-[#FAF7F2]">
              <div className="scroll-loop space-y-3 p-4">

                {loopUpdates.map((item, i) => (
                  <a key={i} href="#" className="latest-item">
                    <span className="bullet">•</span>
                    <span className="text">{item}</span>
                  </a>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}