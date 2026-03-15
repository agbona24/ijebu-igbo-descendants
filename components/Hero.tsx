"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0B3D91 0%, #1a5cbf 40%, #0d2e6e 70%, #0B3D91 100%)",
        }}
      />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent bars */}
      <div
        className="absolute top-0 left-0 w-full h-1 z-10"
        style={{ background: "#C9A227" }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-1 z-10"
        style={{ background: "#C9A227" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border text-sm font-medium tracking-widest uppercase"
          style={{ borderColor: "#C9A227", color: "#C9A227" }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#C9A227" }}
          />
          Est. Ijebu Igbo, Ogun State, Nigeria
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Connecting{" "}
          <span style={{ color: "#C9A227" }}>Ijebu Igbo</span>
          <br />
          Descendants
          <br />
          Across the World
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-24 h-1 mx-auto mb-8"
          style={{ background: "#C9A227" }}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Promoting culture, unity, and sustainable development for Ijebu Igbo
          both at home and in the diaspora.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "#C9A227", color: "#111111" }}
          >
            Join the Community
          </a>
          <a
            href="#cta"
            className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ borderColor: "#ffffff", color: "#ffffff" }}
          >
            Support Development
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-blue-200 text-sm tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 14L3 7h14L10 14z"
                fill="#C9A227"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full border opacity-10 hidden lg:block"
        style={{ borderColor: "#C9A227" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-16 w-20 h-20 rounded-full border opacity-10 hidden lg:block"
        style={{ borderColor: "#C9A227" }}
      />
    </section>
  );
}
