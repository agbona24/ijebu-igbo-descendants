"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="join"
      className="py-24 bg-[#0B3D91] relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #C9A227 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)",
            }}
          />
        </div>
        <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute -top-20 left-0 w-64 h-64 rounded-full border border-[#C9A227]/20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
          Join the Movement
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Together We Can Build a{" "}
          <span className="text-[#C9A227]">Greater Ijebu Igbo</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/75 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Whether you are in London, New York, Lagos, or Accra — your roots
          connect you to something greater. Join thousands of Ijebu Igbo
          descendants making a real difference.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <a
            href="#"
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
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Become a Member
          </a>
          <a
            href="#"
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
          </a>
        </motion.div>

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-md mx-auto"
        >
          <p className="text-white/60 text-sm mb-4">
            Or sign up for our newsletter to stay connected:
          </p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-[#C9A227] font-semibold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thank you! Welcome to the IID community.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#C9A227] focus:bg-white/15 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C9A227] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#b8911f] transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
