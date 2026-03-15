"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
    alt: "Ijebu Igbo town view",
    label: "Ijebu Igbo Town",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=600&q=80",
    alt: "Cultural festival celebration",
    label: "Ojude Oba Festival",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1579226905180-636b76d96082?w=600&q=80",
    alt: "Community gathering",
    label: "Community Gathering",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
    alt: "Diaspora meeting",
    label: "Diaspora Meeting",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80",
    alt: "Nigeria heritage",
    label: "Nigerian Heritage",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    alt: "Cultural preservation",
    label: "Cultural Preservation",
    span: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase"
            style={{ background: "#0B3D91", color: "#C9A227" }}
          >
            Gallery
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#0B3D91", fontFamily: "Georgia, serif" }}
          >
            Moments That Define Us
          </motion.h2>

          <div className="w-16 h-1 mx-auto mb-6" style={{ background: "#C9A227" }} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#666666" }}
          >
            From the streets of Ijebu Igbo to diaspora halls worldwide — our
            shared moments weave the fabric of our community.
          </motion.p>
        </div>

        {/* Responsive masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,61,145,0.85) 0%, transparent 60%)",
                }}
              >
                <span className="text-white font-semibold text-sm">
                  {img.label}
                </span>
              </div>

              {/* Gold border on hover */}
              <div
                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ borderColor: "#C9A227" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
