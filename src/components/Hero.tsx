"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?w=1920&q=80"
          alt="Ijebu Igbo cultural landscape"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91]/90 via-[#0B3D91]/75 to-[#000000]/60" />
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
          Proudly Connecting the Global Ijebu Igbo Community
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Connecting{" "}
          <span className="text-[#C9A227]">Ijebu Igbo</span>{" "}
          Descendants
          <br className="hidden sm:block" />
          <span className="text-4xl sm:text-5xl lg:text-6xl block mt-2">
            Across the World
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
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
          <Link
            href="#join"
            className="bg-[#C9A227] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#b8911f] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Join the Community
          </Link>
          <Link
            href="#about"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Support Development
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", label: "Countries Represented" },
            { value: "5K+", label: "Community Members" },
            { value: "20+", label: "Development Projects" },
            { value: "10+", label: "Years of Service" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center border-r border-white/20 last:border-0 px-4"
            >
              <p className="text-[#C9A227] text-3xl font-bold">{stat.value}</p>
              <p className="text-white/70 text-xs mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <p className="text-white/50 text-xs uppercase tracking-widest">
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
