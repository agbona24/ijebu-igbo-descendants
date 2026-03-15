"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80",
    alt: "Ijebu Igbo community gathering",
    caption: "Community Gathering",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?w=400&q=80",
    alt: "Nigerian cultural landscape",
    caption: "Homeland Views",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
    alt: "Cultural festival celebrations",
    caption: "Ojude Oba Festival",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1529736576495-1ed4a29ca3b1?w=400&q=80",
    alt: "Traditional Nigerian attire",
    caption: "Cultural Attire",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?w=400&q=80",
    alt: "African community meeting",
    caption: "Diaspora Meeting",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-b53601010376?w=400&q=80",
    alt: "Cultural performance in Nigeria",
    caption: "Cultural Performance",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400&q=80",
    alt: "Community development project",
    caption: "Development Project",
    span: "",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">
            Visual Stories
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3D91] leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Gallery
          </h2>
          <p className="mt-4 text-[#555] text-lg max-w-xl mx-auto">
            A window into the vibrant life, culture, and community of Ijebu Igbo
            — at home and around the world.
          </p>
          <div className="mt-6 w-16 h-1 bg-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-semibold text-sm">
                    {img.caption}
                  </p>
                  <div className="w-8 h-0.5 bg-[#C9A227] mt-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-[#0B3D91] text-[#0B3D91] font-semibold px-6 py-3 rounded-full hover:bg-[#0B3D91] hover:text-white transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            View Full Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
