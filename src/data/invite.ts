/** All site copy lives here. Swap photos in public/media. */
export const invite = {
  couple: {
    groom: 'M. Athish Karthic',
    groomShort: 'Athish',
    bride: 'A. Sowmiya',
    brideShort: 'Sowmiya',
    hashtag: '#AthishSowmiya',
  },
  families: {
    groom: { father: 'Mr. K. Muthusamy', mother: 'Mrs. M. Nirmala' },
    bride: { father: 'Mr. R. Arunachalam', mother: 'Mrs. A. Thamilarasi' },
  },
  invite: {
    kicker: 'Together with their families',
    line: 'cordially invite you to celebrate their wedding',
  },
  event: {
    title: 'Wedding of M. Athish Karthic & A. Sowmiya',
    startsAt: '2026-11-15T06:00:00+05:30',
    endsAt: '2026-11-15T07:25:00+05:30',
    dateLabel: '15 . 11 . 2026',
    longDate: 'Sunday, 15 November 2026',
    dayLabel: 'Sunday',
    timeLabel: '6:00 am to 7:25 am',
  },
  pattiniSeer: {
    title: 'Pattini Seer of M. Athish Karthic & A. Sowmiya',
    startsAt: '2026-11-14T12:15:00+05:30',
    endsAt: '2026-11-14T13:15:00+05:30',
    dateLabel: '14 . 11 . 2026',
    longDate: 'Saturday, 14 November 2026',
    dayLabel: 'Saturday',
    timeLabel: '12:15 pm to 1:15 pm',
  },
  reception: {
    title: 'Reception of M. Athish Karthic & A. Sowmiya',
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
    { src: '/media/moment-1.jpg', alt: 'Athish and Sowmiya laughing together by a garden railing', position: '50% 40%' },
    { src: '/media/moment-2.jpg', alt: 'Sowmiya looking up and laughing at Athish', position: '50% 25%' },
    { src: '/media/moment-3.jpg', alt: 'Silhouette of Athish and Sowmiya against a golden glow', position: '50% 40%' },
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
