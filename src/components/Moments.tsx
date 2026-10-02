import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { invite } from '../data/invite'
import { Reveal } from './Reveal'

export function Moments() {
  const [active, setActive] = useState<number | null>(null)
  const { gallery } = invite
  return (
    <section className="py-16">
      <Reveal className="px-5 text-center">
        <h2 className="font-display text-3xl tracking-[0.14em] text-pine uppercase">Moments</h2>
        <div className="mx-auto mt-4 w-24 gold-rule" />
      </Reveal>
      <div className="mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {gallery.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setActive(i)}
            className="relative w-[72vw] max-w-xs shrink-0 snap-center overflow-hidden rounded-t-[3rem] border border-gold/45 transition-transform duration-300 active:scale-[0.97]"
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              style={{ objectPosition: g.position }}
              className="h-72 w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-2 rounded-t-[2.7rem] border border-parchment/40" />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-pine/90 p-5"
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-5 right-5 text-parchment"
              onClick={() => setActive(null)}
            >
              <X className="size-6" />
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="max-h-[80svh] w-auto rounded-t-[3rem] border border-gold/50 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
