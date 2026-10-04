import { invite } from '../data/invite'
import { Reveal } from './Reveal'

function Side({
  label,
  name,
  relation,
  father,
  mother,
}: {
  label: string
  name: string
  relation: string
  father: string
  mother: string
}) {
  return (
    <div className="text-center">
      <p className="text-[0.6rem] tracking-[0.35em] text-gold uppercase">{label}</p>
      <h3 className="mt-3 font-display text-3xl text-pine">{name}</h3>
      <p className="mt-3 text-[0.65rem] tracking-[0.2em] text-ink/55 uppercase">{relation}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink/80">
        {father}
        <br />&amp; {mother}
      </p>
    </div>
  )
}

export function Families() {
  const { couple, families } = invite
  return (
    <section className="px-5 py-16">
      <Reveal className="mx-auto max-w-lg">
        <div className="text-center">
          <h2 className="font-display text-3xl tracking-[0.14em] text-pine uppercase">Our Families</h2>
          <div className="mx-auto mt-4 w-24 gold-rule" />
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-6">
          <Side label="The Groom" name={couple.groom} relation="Son of" father={families.groom.father} mother={families.groom.mother} />
          <Side label="The Bride" name={couple.bride} relation="Daughter of" father={families.bride.father} mother={families.bride.mother} />
        </div>
      </Reveal>
    </section>
  )
}
