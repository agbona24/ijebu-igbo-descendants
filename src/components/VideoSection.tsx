"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 bg-[#0B3D91] relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#C9A227]/10" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Celebrating Our Heritage
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
              {!playing ? (
                <div className="relative w-full h-full">
                  {/* Thumbnail via Next.js Image for optimisation */}
                  <Image
                    src="https://img.youtube.com/vi/YGF5KilPQks/maxresdefault.jpg"
                    alt="Ojude Oba Festival video thumbnail"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[#0B3D91]/40 flex items-center justify-center">
                    <button
                      onClick={() => setPlaying(true)}
                      className="w-20 h-20 rounded-full bg-[#C9A227] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
                      aria-label="Play video"
                    >
                      <svg
                        className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-sm font-medium">
                      🎊 Ojude Oba Festival — The Crown of Ijebu Celebrations
                    </p>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YGF5KilPQks?autoplay=1"
                  title="Ojude Oba Festival"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Gold accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#C9A227]/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-white/80 text-lg leading-relaxed">
              Culture is the soul of every people. For the Ijebu Igbo, our
              traditions, festivals, language, and values are not merely
              historical artefacts — they are living expressions of who we are.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              The{" "}
              <strong className="text-[#C9A227]">Ojude Oba Festival</strong>,
              held annually in Ijebu Igbo, is one of the most spectacular
              cultural celebrations in West Africa. It is a gathering of clans,
              horse riders, masquerades, and traditional rulers in a colourful
              display of age-grade camaraderie and reverence to the Awujale of
              Ijebu land.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              As diaspora descendants, we play a critical role in keeping these
              traditions alive, funding cultural programmes, and ensuring that
              the next generation — wherever they are in the world — knows and
              celebrates their roots.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Ojude Oba Festival",
                "Cultural Heritage",
                "Diaspora Pride",
                "Youth Engagement",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
