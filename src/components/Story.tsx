"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const storyItems = [
  {
    title: "A Town Rooted in History",
    body: "Ijebu Igbo is a historic town in Ogun State, southwestern Nigeria, known as the home of industrious and entrepreneurial people. Its history stretches back centuries, with the Ijebu people renowned as traders and warriors who played a pivotal role in the history of Yorubaland.",
  },
  {
    title: "A Culture Rich in Traditions",
    body: "The people of Ijebu Igbo are known for their vibrant culture — from the intricate adire (tie-dye) fabric art, to the captivating masquerade performances, Yoruba proverbs, and the sacred roles of age grades that bind the community together across generations.",
  },
  {
    title: "Ojude Oba — The Crown of Celebrations",
    body: "Ojude Oba (meaning 'the forecourt of the king') is the most spectacular annual festival in Ijebu Igbo. Age grades gather in resplendent attire, horsemen parade in formation, and cultural troupes perform before the Awujale of Ijebuland, the paramount ruler, in a breathtaking display of loyalty and cultural heritage.",
  },
  {
    title: "The Diaspora's Contribution",
    body: "Ijebu Igbo descendants in the diaspora have contributed enormously — from funding hospitals and schools to establishing businesses and mentorship programmes. They carry the town's name with pride, serving as ambassadors of Ijebu Igbo culture across the globe.",
  },
];

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C9A227] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Roots
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B3D91] leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The Ijebu Igbo Story
          </h2>
          <p className="mt-4 text-[#555] text-lg max-w-2xl mx-auto">
            A town of heritage, pride, and resilience — the story of Ijebu Igbo
            is the story of us all.
          </p>
          <div className="mt-6 w-16 h-1 bg-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {storyItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0B3D91] text-white text-sm font-bold flex items-center justify-center mt-1">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-[#0B3D91] text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#555] leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-56 rounded-2xl overflow-hidden col-span-2 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
                alt="Nigerian cultural festival"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/40 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white text-sm font-semibold">
                🎊 Ojude Oba Festival
              </div>
            </div>
            <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1529736576495-1ed4a29ca3b1?w=400&q=80"
                alt="Traditional Ijebu cultural attire"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?w=400&q=80"
                alt="Community gathering in Nigeria"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/30 to-transparent" />
            </div>

            {/* Pull quote */}
            <div className="col-span-2 bg-[#0B3D91] text-white p-6 rounded-2xl">
              <p className="italic text-lg leading-relaxed">
                &ldquo;Ijebu Igbo is not just a place — it is a people, a pride,
                and a promise to the future.&rdquo;
              </p>
              <p className="text-[#C9A227] text-sm mt-2 font-medium">
                — Community Elder, Ijebu Igbo
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
