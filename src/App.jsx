import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black"></div>
        </div>

        {/* Gold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#b38b59]/20 blur-[180px]"></div>

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="relative z-10 text-center px-6"
        >
          <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs md:text-sm mb-8">
            Creative Direction • Fashion • Musical Identity
          </p>

          <h1
            className="text-6xl md:text-8xl lg:text-[10rem] leading-none"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            VERONESI
          </h1>

          <p className="italic text-[#b38b59] text-2xl md:text-4xl mt-2">
            by veroNesi
          </p>

          <div className="w-40 h-[1px] bg-[#b38b59] mx-auto my-10"></div>

          <p className="max-w-3xl mx-auto text-zinc-300 text-lg md:text-xl leading-relaxed">
            Emotional universes inspired by music,
            fashion and cinematic atmosphere.
          </p>

          {/* Scroll */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute left-1/2 -translate-x-1/2 top-[120%] flex flex-col items-center text-zinc-500"
          >
            <span className="text-xs uppercase tracking-[0.3em] mb-2">
              Scroll
            </span>

            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="relative py-40 px-6 lg:px-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] h-[700px] w-full object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-5">
              About Me
            </p>

            <h2
              className="text-5xl md:text-7xl leading-tight mb-8"
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              Fashion born from
              <span className="block italic text-[#b38b59]">
                emotional sound.
              </span>
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              I’m Daniele Veronese, a front-end developer and
              creative director inspired by the relationship
              between music, atmosphere and visual identity.
            </p>

            <p className="text-zinc-500 text-lg leading-relaxed mt-6">
              My work transforms emotional soundscapes into
              digital experiences, conceptual collections and
              cinematic storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="border-t border-zinc-900 py-40 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
            Collections
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Eclipse Sonoro",
              "Noctra",
              "Echoes Between Worlds",
              "Greta Van Fleet",
              "Jayler",
              "Dirty Honey", ,
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="border border-zinc-900 bg-zinc-950 rounded-[2rem] p-10 hover:border-[#b38b59]/30 transition"
              >
                <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs mb-6">
                  Collection {index + 1}
                </p>

                <h3
                  className="text-4xl md:text-5xl"
                  style={{
                    fontFamily: "Cormorant Garamond",
                  }}
                >
                  {item}
                </h3>

                <div className="w-20 h-[1px] bg-[#b38b59] my-8"></div>

                <p className="text-zinc-400 leading-relaxed">
                  Emotional fashion universe inspired by
                  atmosphere, music and cinematic aesthetics.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">

          <h2
            className="text-5xl md:text-7xl"
            style={{
              fontFamily: "Cormorant Garamond",
            }}
          >
            VERONESI
          </h2>

          <p className="italic text-[#b38b59] text-2xl mt-3">
            by veroNesi
          </p>

          <div className="w-32 h-[1px] bg-[#b38b59] mx-auto my-8"></div>

          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
            Creative Direction • Fashion • Musical Identity
          </p>
        </div>
      </footer>
    </div>
  );
}