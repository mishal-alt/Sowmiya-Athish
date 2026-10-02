import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { invite } from '../data/invite'
import { Reveal } from './Reveal'

const UNITS = [
  { key: 'days', label: 'days' },
  { key: 'hours', label: 'hours' },
  { key: 'minutes', label: 'min' },
  { key: 'seconds', label: 'sec' },
] as const

type Left = Record<(typeof UNITS)[number]['key'], number> & { done: boolean }

function timeLeft(): Left {
  const ms = new Date(invite.event.startsAt).getTime() - Date.now()
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days: Math.floor(ms / 864e5),
    hours: Math.floor(ms / 36e5) % 24,
    minutes: Math.floor(ms / 6e4) % 60,
    seconds: Math.floor(ms / 1e3) % 60,
    done: false,
  }
}

export function Countdown() {
  const [left, setLeft] = useState<Left | null>(null)
  useEffect(() => {
    setLeft(timeLeft())
    const id = setInterval(() => setLeft(timeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative px-5 py-20">
      <Reveal className="mx-auto max-w-lg text-center">
        <p className="text-[0.65rem] tracking-[0.4em] text-ink/60 uppercase">
          {left?.done ? 'Today is the day' : 'Counting down to the celebration'}
        </p>
        <div className="mx-auto mt-5 w-32 gold-rule" />
        <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-3">
          {UNITS.map(({ key, label }) => (
            <div
              key={key}
              className="relative overflow-hidden rounded-t-[2.2rem] border border-gold/45 bg-parchment-deep/70 px-1 py-5 shadow-[0_10px_30px_-22px_var(--color-ink)]"
            >
              <div className="pointer-events-none absolute inset-x-2 top-2 h-8 rounded-t-[1.8rem] border border-gold/25" />
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={`${key}-${left?.[key] ?? '-'}`}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-display text-3xl tabular-nums text-pine sm:text-4xl"
                >
                  {left ? String(left[key]).padStart(2, '0') : '--'}
                </motion.span>
              </AnimatePresence>
              <span className="mt-2 block text-[0.55rem] tracking-[0.25em] text-ink/55 uppercase">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 font-display text-lg italic text-ink/70">
          {invite.event.dayLabel}, {invite.event.timeLabel}
        </p>
      </Reveal>
    </section>
  )
}
