"use client";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { FAQ } from "./components/FAQ";
import { NavBar } from "./components/Navbar";

const DEVO_THEME = "mysticism";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center scroll-smooth p-8 text-center text-gray-800">
      <div id="home" />
      <NavBar />
      <BackgroundVideo />

      {/* Header */}
      <h1 className="mb-2 text-4xl font-bold">Musical Devotional</h1>

      {/* Upcoming Event */}
      <div className="my-20 flex flex-col gap-3">
        <h2 className="mb-2 text-2xl font-semibold">
          Upcoming Event: October 18th
        </h2>
        <div className="mb-4">
          <p>
            Join us for our next musical devotional on October 18th at 6:30 PM
            in Oakland!
          </p>
          <p>Dinner will be provided.</p>
          <p>
            The theme of this musical devotional is{" "}
            <strong className="uppercase">{DEVO_THEME}</strong>.
          </p>
        </div>
        <a
          href="mailto:info@musicaldevo.com"
          className="mb-8 rounded-full border border-solid border-black px-6 py-4  hover:animate-pulse"
        >
          Contact us to RSVP
        </a>
      </div>

      {/* Sections */}
      <section id="about" className="my-40 max-w-2xl space-y-8">
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
            we&apos;re excited to have you with us. We look forward to
            exploring, sharing, and connecting with you!
          </p>
        </div>
        {/* Section: What to Bring */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">What to Bring</h2>
          <p>
            Feel the pull to share something? We welcome it! Bring along a
            quote, a prayer, a song, or any offering in the spirit of devotion.
            While any heartfelt contribution is appreciated, offerings related
            to our theme—<em>{DEVO_THEME}</em>—resonate especially well.
          </p>
        </div>

        {/* Section: Agenda */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Agenda</h2>
          <ul className="list-inside list-disc">
            <li>
              <strong>6:30 - 7:30 PM:</strong> Dinner & Arrival
            </li>
            <li>
              <strong>7:30 - 8:30 PM:</strong> Devotional
            </li>
            <li>
              <strong>8:30 PM:</strong> Close & Social
            </li>
          </ul>
        </div>

        {/* Section: Setting & Attitude */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Setting & Attitude</h2>
          <p>
            The essence of our gathering is to immerse in the spirit of the
            devotional. During the devotional portion, we seek an ambiance of
            contemplation. Let’s savor the readings, the music, and the silence
            in between. While the urge to discuss may arise, we save deeper
            conversations for the social time after the devotional, keeping our
            primary hour serene and focused.
          </p>
        </div>

        {/* Section: Learn More about the Bahá'í Faith */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Learn More about the Bahá'í Faith
          </h2>
          <p>
            Curious about the Bahá'í teachings that inspire our devotionals?
            Dive deeper and explore the Bahá'í Faith.{" "}
            <a
              href="https://www.bahai.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit the official website
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>
    </main>
  );
}
