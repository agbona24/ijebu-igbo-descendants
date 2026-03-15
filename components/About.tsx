"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "#F5F5F5" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section tag */}
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase"
              style={{ background: "#0B3D91", color: "#C9A227" }}
            >
              Who We Are
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "#0B3D91", fontFamily: "Georgia, serif" }}
            >
              About Ijebu Igbo <br />
              Descendants in Diaspora
            </h2>

            <div
              className="w-16 h-1 mb-8"
              style={{ background: "#C9A227" }}
            />

            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#444444" }}
            >
              Ijebu Igbo Descendants in Diaspora (IIDD) is a non-profit
              organisation founded to unite Ijebu Igbo people living around the
              world. We are dedicated to preserving the rich cultural heritage of
              Ijebu Igbo — a historic town in Ogun State, Nigeria — while
              driving meaningful development for its people both at home and
              abroad.
            </p>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "#444444" }}
            >
              Our mission spans education, infrastructure, cultural preservation,
              and community empowerment. Through events, fundraising, and
              collaborative projects, we bridge the gap between the diaspora and
              the homeland, ensuring no Ijebu Igbo son or daughter is forgotten.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "5,000+", label: "Members Worldwide" },
                { value: "20+", label: "Countries Represented" },
                { value: "15+", label: "Years of Impact" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  className="text-center"
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#C9A227" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm mt-1" style={{ color: "#666666" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80"
                alt="Cultural gathering — Ijebu Igbo community"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,61,145,0.5) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl border-l-4"
              style={{ borderColor: "#C9A227" }}
            >
              <div
                className="text-3xl font-bold"
                style={{ color: "#0B3D91" }}
              >
                Unity
              </div>
              <div className="text-sm mt-1" style={{ color: "#666666" }}>
                Our founding principle
              </div>
            </motion.div>

            {/* Gold frame accent */}
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 -z-10"
              style={{ borderColor: "#C9A227" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
