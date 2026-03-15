"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section
      id="heritage"
      className="py-24 px-6"
      style={{ background: "#0B3D91" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase"
          style={{ background: "rgba(201,162,39,0.15)", color: "#C9A227", border: "1px solid #C9A227" }}
        >
          Our Heritage
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Celebrating Our Heritage
        </motion.h2>

        <div className="w-16 h-1 mx-auto mb-8" style={{ background: "#C9A227" }} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-blue-200 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Ijebu Igbo is more than a town — it is a legacy of resilience,
          creativity, and togetherness. Our diaspora carries this spirit across
          every continent, honouring our roots while building new futures. Watch
          our story unfold.
        </motion.p>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{ paddingTop: "56.25%" /* 16:9 aspect ratio */ }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
            title="Celebrating Our Heritage — Ijebu Igbo Descendants in Diaspora"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* Decorative quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-xl italic text-blue-200 max-w-xl mx-auto"
        >
          &ldquo;Ilu ni iwe eko — the community is the school of life.&rdquo;
          <cite
            className="block mt-2 text-sm not-italic"
            style={{ color: "#C9A227" }}
          >
            — Ijebu Igbo Proverb
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
