import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import bgImage from './bg.jpg'
import sideImage from './Nuts.jpg'
import sideImage1 from './Jollof Rice and Chicken.jpg'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-cream1 text-gray-800">
      <nav className="border-b border-gray-200 bg-white backdrop-blur">
        <div className="flex w-full items-center justify-between gap-4 px-4 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-brown1">
            Dabwins
          </h1>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brown1 transition-colors hover:bg-brown1 hover:text-cream1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown1 md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {isMenuOpen ? (
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>

          <ul className="hidden items-center gap-2 sm:gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 font-semibold text-brown1 transition-colors hover:bg-brown1 hover:text-cream1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <div id="mobile-nav-menu" className="border-t border-brown1/15 px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={`${link.label}-mobile`}>
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-2 font-semibold text-brown1 transition-colors hover:bg-brown1 hover:text-cream1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <section id="home" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-center gap-10 rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-brown1/10 backdrop-blur-sm md:flex-row md:gap-12 md:p-10">
          <div className="w-full max-w-xl text-center md:w-1/2 md:text-left">
            <span className="mb-4 inline-flex rounded-full bg-brown1/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brown1">
              Freshly Crafted Daily
            </span>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-brown1 md:text-5xl">
              Dabwins Cuisine
              <span className="mt-1 block bg-gradient-to-r from-brown1 to-brown1/70 bg-clip-text text-transparent">
                Comfort In Every Bite
              </span>
            </h1>

            <p className="mb-6 text-base font-bold text-gray-700 md:text-lg">
              Bringing Ecstacy to your Cravings
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start">
              <span className="rounded-full border border-brown1/15 bg-cream1 px-3 py-1 text-xs font-semibold text-brown1 shadow-sm">Fast Delivery</span>
              <span className="rounded-full border border-brown1/15 bg-cream1 px-3 py-1 text-xs font-semibold text-brown1 shadow-sm">Chef Specials</span>
              <span className="rounded-full border border-brown1/15 bg-cream1 px-3 py-1 text-xs font-semibold text-brown1 shadow-sm">Fresh Ingredients</span>
            </div>

            <Button className="cursor-pointer bg-brown1 text-cream1 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              Order Now
            </Button>
          </div>

          <div className="w-full md:w-1/2">
            <div className="rounded-4xl bg-white/80 p-2 shadow-xl ring-1 ring-brown1/10 md:p-3">
              <img
                src={bgImage}
                alt="A curated Dabwins cuisine presentation"
                className="h-70 w-full rounded-3xl object-cover md:h-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <Card className="relative overflow-hidden rounded-3xl bg-white/70 p-0 shadow-sm ring-1 ring-brown1/10 backdrop-blur-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/25" />
            <img
                src={sideImage}
                alt="Joy Nuts"
                className="relative z-20 aspect-video w-full object-cover brightness-75 dark:brightness-50"
            />
            <CardHeader className="space-y-3 p-6 md:p-10">
              <CardAction>
                <Badge className="bg-brown1/10 text-brown1 hover:bg-brown1/20">Premium Treat</Badge>
              </CardAction>
              <CardTitle className="text-3xl font-bold text-brown1">Joy Nuts</CardTitle>
              <CardDescription className="text-base text-gray-700">
                Milky coated peanuts that will make your taste buds scream for joy. Crafted with premium ingredients for an unforgettable snack experience.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-3 border-t border-brown1/10 px-6 py-4 md:px-10 md:py-6">
              <Button className="flex-1 bg-brown1 text-cream1 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"> <a href="https://wa.me/+2347037887602">Order Now</a></Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden rounded-3xl bg-white/70 p-0 shadow-sm ring-1 ring-brown1/10 backdrop-blur-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/25" />
            <img
                src={sideImage1}
                alt="Jollof Rice and Chicken"
                className="relative z-20 aspect-video w-full object-cover brightness-75 dark:brightness-50"
            />
            <CardHeader className="space-y-3 p-6 md:p-10">
              <CardAction>
                <Badge className="bg-brown1/10 text-brown1 hover:bg-brown1/20">Premium Treat</Badge>
              </CardAction>
              <CardTitle className="text-3xl font-bold text-brown1">Jollof Rice & Chicken</CardTitle>
              <CardDescription className="text-base text-gray-700">
                Aromatic Jollof rice cooked to perfection with tender, succulent chicken. A West African favorite that brings warmth and comfort to every plate.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-3 border-t border-brown1/10 px-6 py-4 md:px-10 md:py-6">

              <Button className="flex-1 bg-brown1 text-cream1 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"> <a href="https://wa.me/+2347037887602">Order Now</a></Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button className="bg-brown1 text-cream1 px-8 py-3 text-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            Click to See Menu
          </Button>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-brown1 md:text-4xl">Why Choose Us</h2>
          <p className="mb-8 text-base text-gray-700 md:text-lg">
            At Dabwins, we believe in delivering excellence with every meal. Our commitment to quality starts with handpicked ingredients prepared fresh daily. We understand that your time is valuable, which is why we offer fast and reliable delivery to get your order to your door hot and fresh. Most importantly, every dish is crafted with passion and care by our dedicated team of culinary experts who pour their love into creating unforgettable dining experiences.
          </p>
          <p className="text-base font-semibold text-brown1">
            Experience the difference with every order!
          </p>
        </div>
      </section>

      <section id="contact" className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-brown1 md:text-4xl">Get In Touch</h2>
          <p className="text-base text-gray-700 md:text-lg">We'd love to hear from you. Reach out to us anytime!</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="space-y-6">

            <div className="flex items-start gap-4 rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-brown1/10 backdrop-blur-sm md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brown1/10">
                <svg className="h-6 w-6 text-brown1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.867 1.171l-.348.213-3.613-.945 1.017 3.718-.213.338a9.868 9.868 0 00-1.51 5.26c0 5.446 4.435 9.88 9.88 9.88 1.32 0 2.59-.153 3.822-.46l.342-.055 3.625.923-1.01-3.639.163-.342a9.884 9.884 0 001.51-5.26c-.001-5.45-4.436-9.884-9.88-9.884" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-brown1">WhatsApp</h3>
                <a href="https://wa.me/+2347037887602" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-700 transition-colors hover:text-brown1">
                  +234 703 788 7602
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-brown1/10 backdrop-blur-sm md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brown1/10">
                <svg className="h-6 w-6 text-brown1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-brown1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/sibeudu-emmanuel/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-700 transition-colors hover:text-brown1">
                 linkedin.com/in/sibeudu-emmanuel/
                </a>
              </div>
            </div>


            <div className="flex items-start gap-4 rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-brown1/10 backdrop-blur-sm md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brown1/10">
                <svg className="h-6 w-6 text-brown1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-brown1">Email</h3>
                <a href="mailto:info@dabwins.com" className="text-sm font-semibold text-gray-700 transition-colors hover:text-brown1">
                 sibedabs@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
export default App
