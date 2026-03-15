"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    title: "A Town of Ancient Roots",
    text: "Ijebu Igbo is an ancient Yoruba town nestled in Ogun State, southwestern Nigeria. With a history spanning centuries, it was once a thriving centre of trade, governance, and culture within the broader Ijebu kingdom. The town's strategic location made it an important waypoint in the pre-colonial trading networks of West Africa.",
  },
  {
    title: "Culture & Identity",
    text: "The people of Ijebu Igbo speak Yoruba and maintain a rich tapestry of oral traditions, masquerade festivals, and royal ceremonies. Family lineage, age-grade associations, and communal solidarity remain the pillars of social life, even as the town embraces modernity.",
  },
  {
    title: "The Ojude Oba Festival",
    text: "One of the most spectacular celebrations is the Ojude Oba festival — a colourful gathering of horse riders, age-grade groups, and dignitaries in elaborate traditional attire. Held annually to honour the Awujale of Ijebuland, it attracts visitors from across Nigeria and the diaspora, turning the town into a vivid showcase of Yoruba heritage.",
  },
  {
    title: "Diaspora Contribution",
    text: "Ijebu Igbo descendants living abroad have become an indispensable engine of growth for the hometown. Through remittances, philanthropic investments, skills transfer, and advocacy, diaspora members fund schools, equip hospitals, and raise the town's profile on the global stage.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 px-6" style={{ background: "#F5F5F5" }}>
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
            Our Story
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#0B3D91", fontFamily: "Georgia, serif" }}
          >
            The Ijebu Igbo Story
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
            Discover the history, culture, and global reach of one of Nigeria&apos;s
            most vibrant communities.
          </motion.p>
        </div>

        {/* Layout: image left, stories right */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative sticky top-24"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=800&q=80"
                alt="Ijebu Igbo cultural festival"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,61,145,0.6) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "#C9A227" }}
                >
                  Ojude Oba Festival
                </div>
                <div className="text-lg font-bold">
                  A celebration of royalty & culture
                </div>
              </div>
            </div>

            {/* Gold frame */}
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 -z-10"
              style={{ borderColor: "#C9A227" }}
            />
          </motion.div>

          {/* Stories */}
          <div className="flex flex-col gap-8">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="bg-white rounded-2xl p-8 shadow-sm border-l-4"
                style={{ borderColor: "#C9A227" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4"
                  style={{ background: "#0B3D91", color: "#C9A227" }}
                >
                  {i + 1}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#0B3D91" }}
                >
                  {story.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#555555" }}>
                  {story.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
