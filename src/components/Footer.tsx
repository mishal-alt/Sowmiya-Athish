import { Instagram, Phone } from 'lucide-react'
import { invite } from '../data/invite'
import { Reveal } from './Reveal'

export function Footer() {
  const { couple, footer } = invite
  return (
    <footer className="relative isolate overflow-hidden pt-24 pb-12 text-center">
      <img
        src="/media/footer-floral.jpg"
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={912}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-parchment/55" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-parchment to-transparent" />
      <Reveal className="px-6">
        <p className="font-display text-3xl tracking-[0.16em] text-pine uppercase">
          {couple.groomShort} <span className="text-gold">&amp;</span> {couple.brideShort}
        </p>
        <div className="mx-auto mt-5 w-24 gold-rule" />
        <p className="mt-6 text-sm text-ink/80">{footer.families}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {footer.contacts.map((c) => (
            <a
              key={c.phone}
              href={`tel:${c.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-parchment/70 px-5 py-2.5 text-[0.65rem] tracking-[0.2em] text-ink/80 uppercase transition-colors hover:bg-gold/15 active:scale-95"
            >
              <Phone className="size-3.5 text-gold" aria-hidden />
              {c.name}
            </a>
          ))}
        </div>
        <p className="mt-10 text-[0.6rem] tracking-[0.32em] text-ink/60 uppercase">{couple.hashtag}</p>
      </Reveal>
      <a
        href="https://www.instagram.com/zetron.tech"
        target="_blank"
        rel="noreferrer"
        aria-label="Zetron Tech on Instagram"
        className="mt-10 inline-flex items-center justify-center gap-2 text-[0.55rem] tracking-[0.3em] text-ink/45 uppercase transition-colors hover:text-gold"
      >
        <Instagram className="size-3.5" aria-hidden />
        <span>
          Crafted by <span className="text-ink/60">Zetron Tech</span>
        </span>
      </a>
    </footer>
  )
}
