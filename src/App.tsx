import { Toaster } from 'sonner'
import { Blessing } from './components/Blessing'
import { Countdown } from './components/Countdown'
import { EventDetails } from './components/EventDetails'
import { FallingPetals, ScrollProgress } from './components/Extras'
import { Footer } from './components/Footer'
import { GateProvider } from './components/GateIntro'
import { Hero } from './components/Hero'
import { Moments } from './components/Moments'
import { Celebrations } from './components/Celebrations'
import { Families } from './components/Families'
import { Venue } from './components/Venue'

export default function App() {
  return (
    <GateProvider>
      <main className="relative bg-parchment">
        <ScrollProgress />
        <FallingPetals />
        <Hero />
        <Families />
        <Countdown />
        <Celebrations />
        <EventDetails />
        <Venue />
        <Moments />
        <Blessing />
        <Footer />
        <Toaster position="top-center" />
      </main>
    </GateProvider>
  )
}
