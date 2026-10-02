import { CalendarPlus, Clock, MapPin } from 'lucide-react'
import { calendarUrl, invite, mapsDirectionsUrl } from '../data/invite'
import { Reveal } from './Reveal'

export function EventDetails() {
  const { event, reception, venue } = invite
  return (
    <section className="relative overflow-hidden px-5 py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: 'url(/media/jaali.jpg)', backgroundSize: '260px' }}
      />
      <div aria-hidden className="absolute inset-0 bg-parchment/70" />
      <Reveal className="relative mx-auto max-w-md">
        <div className="paper-grain relative rounded-t-[9rem] border border-gold/50 bg-parchment px-7 pt-16 pb-10 text-center shadow-[0_30px_60px_-45px_var(--color-ink)]">
          <div className="pointer-events-none absolute inset-x-3 top-3 bottom-3 rounded-t-[8.4rem] border border-gold/30" />
          <p className="text-[0.62rem] tracking-[0.4em] text-ink/60 uppercase">The Wedding</p>
          <p className="mt-4 font-display text-4xl tracking-[0.12em] text-gold">{event.dateLabel}</p>
          <div className="mx-auto mt-5 w-28 gold-rule" />
          <ul className="mt-7 space-y-4 text-sm text-ink/80">
            <li className="flex items-center justify-center gap-2">
              <Clock className="size-4 text-gold" aria-hidden />
              {event.dayLabel}, {event.timeLabel}
            </li>
            <li className="flex items-center justify-center gap-2">
              <MapPin className="size-4 shrink-0 text-gold" aria-hidden />
              <span>
                {venue.name}
                <br />
                <span className="text-ink/60">{venue.address}</span>
              </span>
            </li>
          </ul>

          <div className="mx-auto mt-8 w-16 gold-rule" />
          <p className="mt-6 text-[0.62rem] tracking-[0.4em] text-ink/60 uppercase">Reception</p>
          <p className="mt-2 font-display text-2xl tracking-[0.1em] text-gold">{reception.dateLabel}</p>
          <p className="mt-2 text-sm text-ink/80">
            {reception.dayLabel}, {reception.timeLabel}
          </p>
          <p className="mt-1 text-sm text-ink/60">{venue.name}</p>

          <div className="relative mt-8 flex flex-col gap-3">
            <a
              href={calendarUrl(event)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-[0.7rem] tracking-[0.24em] text-parchment uppercase transition-transform duration-200 active:scale-95"
            >
              <CalendarPlus className="size-4 transition-transform group-hover:rotate-6" />
              Add wedding to calendar
            </a>
            <a
              href={calendarUrl(reception)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold/60 py-3 text-[0.65rem] tracking-[0.2em] text-ink/75 uppercase transition-colors hover:bg-gold/10"
            >
              Add reception to calendar
            </a>
            <a
              href={mapsDirectionsUrl()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold/60 py-3 text-[0.65rem] tracking-[0.2em] text-ink/75 uppercase transition-colors hover:bg-gold/10"
            >
              Directions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
