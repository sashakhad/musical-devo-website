"use client";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { FAQ } from "./components/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center text-gray-800">
      <BackgroundVideo />

      {/* Header */}
      <h1 className="mb-2 text-4xl font-bold">Musical Devotional</h1>

      {/* Upcoming Event */}
      <h2 className="mb-2 text-2xl font-semibold">
        Upcoming Event: October 18th
      </h2>
      <div className="mb-4">
        <p>
          Join us for our next musical devotional on October 18th at 6:30 PM in
          Oakland!
        </p>
        <p>Dinner will be provided.</p>
      </div>
      <a
        href="mailto:info@musicaldevo.com"
        className="mb-8 text-blue-500 underline"
      >
        Contact us to RSVP
      </a>

      {/* Sections */}
      <section className="max-w-2xl space-y-8">
        {/* Section: Welcome */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Welcome to Our Musical Devotional!
          </h2>
          <p>
            Hey there, and thanks for dropping by! If you’ve stumbled upon our
            little corner of the internet because you’re curious about what a
            musical devotional is, you’re in the right place.
          </p>
        </div>

        {/* Section: What's a Musical Devotional */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What&apos;s a Musical Devotional Anyway?
          </h2>
          <p>
            Think of a musical devotional as a cozy get-together. It&apos;s
            where we hang out, share musical offerings, explore writings and
            prayers from the Bahá&apos;í Faith—-and from other beliefs and
            philosophies too. Imagine a friendly space where we share, reflect,
            and celebrate our shared human spirit through words and music. No
            preaching, just good vibes!
          </p>
        </div>

        {/* Section: Our Vision */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p>
            We&apos;re all about embracing unity and exploring the spiritual
            threads that bind us all, no matter where we come from or what we
            believe. Inspired by Baha&apos;i teachings, we&apos;re here to build
            a community that digs deeper into understanding, respecting, and
            celebrating diverse spiritual paths.
          </p>
        </div>

        {/* Section: Join Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Join Us</h2>
          <p>
            Whether you&apos;re into sharing some philosophical wisdom,
            exploring prayers, playing a tune, or just soaking it all in,
            we&apos;re stoked to have you with us. It&apos;s all about the
            journey, and we look forward to exploring, sharing, and connecting
            with you!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
