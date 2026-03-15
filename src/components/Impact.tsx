"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const impactCards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Community Development",
    description:
      "Funding roads, water projects, healthcare facilities, and public infrastructure in Ijebu Igbo town to improve the quality of life for residents.",
    stat: "20+",
    statLabel: "Projects Funded",
    color: "from-[#0B3D91] to-[#1a4fa8]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
    title: "Education Support",
    description:
      "Providing scholarships, school supplies, and educational grants to deserving students in Ijebu Igbo, empowering the next generation of leaders.",
    stat: "500+",
    statLabel: "Scholarships Awarded",
    color: "from-[#C9A227] to-[#d4a72c]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
        />
      </svg>
    ),
    title: "Cultural Preservation",
    description:
      "Documenting, promoting, and celebrating Ijebu Igbo language, arts, festivals like Ojude Oba, and oral traditions for generations to come.",
    stat: "15+",
    statLabel: "Cultural Programs",
    color: "from-[#1a5c2a] to-[#2d7a3a]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: "Diaspora Networking",
    description:
      "Building bridges between Ijebu Igbo professionals, entrepreneurs, and community members across 50+ countries through events, forums, and digital platforms.",
    stat: "50+",
    statLabel: "Countries Connected",
    color: "from-[#7b2d8b] to-[#9b3dab]",
  },
];

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">
            Making a Difference
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3D91] leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Our Areas of Impact
          </h2>
          <p className="mt-4 text-[#555] text-lg max-w-2xl mx-auto">
            From the diaspora to the homeland, we are building a better future
            for Ijebu Igbo people through targeted, impactful programmes.
          </p>
          <div className="mt-6 w-16 h-1 bg-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2"
            >
              {/* Card top bar with gradient */}
              <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold leading-snug">{card.title}</h3>
              </div>

              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#555] text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
                <div className="mt-6 pt-4 border-t border-[#F0F0F0] flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#0B3D91]">
                    {card.stat}
                  </span>
                  <span className="text-xs text-[#888] uppercase tracking-wide">
                    {card.statLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
