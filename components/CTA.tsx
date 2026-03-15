"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#0B3D91" }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase"
          style={{ background: "rgba(201,162,39,0.15)", color: "#C9A227", border: "1px solid #C9A227" }}
        >
          Take Action Today
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Together We Can Build
          <br />a <span style={{ color: "#C9A227" }}>Greater Ijebu Igbo</span>
        </motion.h2>

        <div className="w-16 h-1 mx-auto mb-8" style={{ background: "#C9A227" }} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you are in Lagos, London, New York, or Toronto — your
          contribution matters. Join our growing family and help shape the
          future of Ijebu Igbo for generations to come.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:info@ijebuigbodiaspora.org"
            className="px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "#C9A227", color: "#111111" }}
          >
            Become a Member
          </a>
          <a
            href="mailto:support@ijebuigbodiaspora.org"
            className="px-10 py-5 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ borderColor: "#ffffff", color: "#ffffff" }}
          >
            Support Development
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-8 justify-center"
        >
          {[
            "🌍 Globally Connected",
            "🏛️ Registered Charity",
            "🤝 Community Driven",
            "📚 Transparent Impact",
          ].map((item, i) => (
            <div key={i} className="text-blue-200 text-sm font-medium">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
