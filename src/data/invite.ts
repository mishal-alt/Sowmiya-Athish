/** All site copy lives here. Swap photos in public/media. */
export const invite = {
  couple: {
    bride: 'A. Sowmiya',
    brideShort: 'Sowmiya',
    groom: 'M. Athish Karthic',
    groomShort: 'Athish',
    hashtag: '#SowmiyaAthish',
  },
  families: {
    bride: { father: 'Mr. R. Arunachalam', mother: 'Mrs. A. Thamilarasi' },
    groom: { father: 'Mr. K. Muthusamy', mother: 'Mrs. M. Nirmala' },
  },
  invite: {
    kicker: 'Together with their families',
    line: 'cordially invite you to celebrate their wedding',
  },
  event: {
    title: 'Wedding of A. Sowmiya & M. Athish Karthic',
    startsAt: '2026-11-15T06:00:00+05:30',
    endsAt: '2026-11-15T07:25:00+05:30',
    dateLabel: '15 . 11 . 2026',
    longDate: 'Sunday, 15 November 2026',
    dayLabel: 'Sunday',
    timeLabel: '6:00 am to 7:25 am',
  },
  reception: {
    title: 'Reception of A. Sowmiya & M. Athish Karthic',
    startsAt: '2026-11-14T18:00:00+05:30',
    endsAt: '2026-11-14T21:00:00+05:30',
    dateLabel: '14 . 11 . 2026',
    longDate: 'Saturday, 14 November 2026',
    dayLabel: 'Saturday',
    timeLabel: '6:00 pm to 9:00 pm',
  },
  venue: {
    name: 'K.R. Mahal',
    address: 'Keeleripatti, Anangur Road, Thiruchengode',
    mapsQuery: 'K.R. Mahal, Keeleripatti, Anangur Road, Thiruchengode',
  },
  gallery: [
    { src: '/media/couple-smile.jpg', alt: 'Sowmiya and Athish smiling at each other by the garden gate' },
    { src: '/media/couple-portrait.jpg', alt: 'Sowmiya and Athish laughing together' },
    { src: '/media/couple-gate.jpg', alt: 'Athish embracing Sowmiya from behind' },
  ],
  blessing: {
    line: 'May your intentions be one, may your hearts beat as one.',
    translation:
      'Two families, one thread of gold — and a lifetime of happiness made luminous together.',
    source: 'A blessing from both families',
  },
  footer: {
    families: 'With love & warm wishes from the Families',
    contacts: [] as { name: string; phone: string }[],
  },
}

type Occasion = { title: string; startsAt: string; endsAt: string }

const { venue } = invite

const stamp = (iso: string) =>
  new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

const q = encodeURIComponent(venue.mapsQuery)
export const mapsSearchUrl = () => `https://www.google.com/maps/search/?api=1&query=${q}`
export const mapsDirectionsUrl = () => `https://www.google.com/maps/dir/?api=1&destination=${q}`

export const calendarUrl = (o: Occasion) =>
  `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: 'TEMPLATE',
    text: o.title,
    dates: `${stamp(o.startsAt)}/${stamp(o.endsAt)}`,
    details: `${invite.invite.kicker} — ${invite.invite.line}\n\nVenue: ${venue.name}, ${venue.address}`,
    location: `${venue.name}, ${venue.address}`,
  }).toString()}`
