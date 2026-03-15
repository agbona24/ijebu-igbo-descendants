"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Are
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3D91] leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            About Ijebu Igbo Descendants
            <br />
            <span className="text-[#111111] text-3xl sm:text-4xl">
              in Diaspora
            </span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/community-gathering.svg"
                alt="Ijebu Igbo community gathering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/30 to-transparent" />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#C9A227] text-white p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <p className="text-3xl font-bold">Est.</p>
              <p className="text-4xl font-bold">2014</p>
              <p className="text-sm opacity-90 mt-1">
                Serving the community with pride
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <p className="text-[#444] text-lg leading-relaxed">
              The{" "}
              <strong className="text-[#0B3D91]">
                Ijebu Igbo Descendants in Diaspora (IID)
              </strong>{" "}
              is a global non-profit organisation uniting people of Ijebu Igbo
              origin living outside Nigeria. We are dedicated to fostering
              cultural pride, preserving the rich heritage of Ijebu Igbo, and
              channelling diaspora resources to accelerate community development
              back home.
            </p>
            <p className="text-[#444] text-lg leading-relaxed">
              From London to Lagos, New York to Nairobi, our members carry the
              spirit of Ijebu Igbo wherever they go — supporting each other,
              investing in education, healthcare, and infrastructure for the
              people of Ijebu Igbo town in Ogun State, Nigeria.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: "🤝",
                  title: "Unity",
                  desc: "One community across borders",
                },
                {
                  icon: "🌍",
                  title: "Global Reach",
                  desc: "Members in 50+ countries",
                },
                {
                  icon: "🏛️",
                  title: "Heritage",
                  desc: "Preserving Ijebu Igbo culture",
                },
                {
                  icon: "📈",
                  title: "Development",
                  desc: "Investing in our homeland",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F5F5] hover:bg-[#0B3D91]/5 transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-[#0B3D91] text-sm">
                      {item.title}
                    </p>
                    <p className="text-[#666] text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission statement */}
            <blockquote className="border-l-4 border-[#C9A227] pl-6 py-2 mt-6">
              <p className="text-[#0B3D91] font-semibold text-lg italic">
                &ldquo;Our roots are in Ijebu Igbo, our reach is global, and our
                impact is eternal.&rdquo;
              </p>
              <footer className="text-[#C9A227] text-sm mt-2 font-medium">
                — IID Mission Statement
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
