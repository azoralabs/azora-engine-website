import Navbar from './components/Navbar'
import Footer from './components/Footer'

const features = [
  {
    title: 'Cross-Platform',
    desc: 'Build once, deploy to Windows, macOS, Linux, Android, iOS, and Web from a single codebase.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Azora-Powered',
    desc: 'Written entirely in the Azora programming language. Leverage packs, slots, generics, and async for clean game code.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'ECS Architecture',
    desc: 'Entity-Component-System at the core. Compose behavior from reusable components with cache-friendly data layouts.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: '2D & 3D Rendering',
    desc: 'Hardware-accelerated rendering pipeline with sprite batching, PBR materials, lighting, shadows, and post-processing.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Physics & Collision',
    desc: 'Integrated 2D and 3D physics with rigid bodies, colliders, raycasting, joints, and trigger volumes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Audio System',
    desc: 'Spatial audio, music playback, sound effects, mixing, and real-time DSP effects out of the box.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 010 14.14" />
        <path d="M15.54 8.46a5 5 0 010 7.07" />
      </svg>
    ),
  },
  {
    title: 'Scene Graph',
    desc: 'Hierarchical scene tree with transforms, visibility, layers, and parent-child relationships.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <circle cx="6" cy="17" r="3" />
        <circle cx="18" cy="17" r="3" />
        <line x1="10" y1="7.5" x2="7.5" y2="14.5" />
        <line x1="14" y1="7.5" x2="16.5" y2="14.5" />
      </svg>
    ),
  },
  {
    title: 'Asset Pipeline',
    desc: 'Hot-reloading asset pipeline with support for textures, models, shaders, audio, fonts, and tilemaps.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Input & UI',
    desc: 'Unified input system for keyboard, mouse, gamepad, and touch. Built-in UI toolkit for menus, HUDs, and dialogs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Networking',
    desc: 'Built-in multiplayer networking with client-server architecture, state synchronization, and lag compensation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
  {
    title: 'Scripting',
    desc: 'First-class Azora scripting with hot-reload. Attach scripts to entities with full access to engine APIs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Animation',
    desc: 'Skeletal animation, sprite sheets, tweening, state machines, and blend trees for smooth character motion.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

const platforms = [
  { name: 'Windows', color: 'text-az-secondary' },
  { name: 'macOS', color: 'text-az-40' },
  { name: 'Linux', color: 'text-az-orange' },
  { name: 'Android', color: 'text-az-green' },
  { name: 'iOS', color: 'text-az-40' },
  { name: 'Web / WASM', color: 'text-az-primary' },
]

const ecosystem = [
  {
    title: 'Azora Studio',
    desc: 'Visual editor and IDE for building games with the Azora Engine. Scene editor, inspector, asset browser, and more.',
    href: 'https://azorastudio.org',
    cta: 'Open Studio',
    accent: 'bg-az-primary/10 border-az-primary/30 hover:border-az-primary/60',
    ctaColor: 'text-az-primary',
  },
  {
    title: 'Azora Language',
    desc: 'The programming language behind the engine. Learn Azora to write game logic, tools, and engine extensions.',
    href: 'https://azoralang.org',
    cta: 'Learn Azora',
    accent: 'bg-az-red/10 border-az-red/30 hover:border-az-red/60',
    ctaColor: 'text-az-red',
  },
]

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-24">
            <img src="/assets/azora_logo.svg" alt="Azora Engine" className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-az-10 mb-4">
              Azora <span className="text-az-secondary">Engine</span>
            </h1>
            <p className="text-lg text-az-45 max-w-2xl mx-auto leading-relaxed mb-8">
              A cross-platform game engine built with the Azora programming language. From 2D sprites to 3D worlds, build and ship games everywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.azoraengine.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-az-secondary text-white font-medium hover:brightness-110 transition"
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3l6 5-6 5" />
                </svg>
              </a>
              <a
                href="https://github.com/azoralabs/azora-engine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-az-65 text-az-20 font-medium hover:border-az-40 hover:text-az-10 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Features */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-2 text-center text-az-10">Features</h2>
            <p className="text-az-45 text-center mb-12 max-w-2xl mx-auto">
              Everything you need to build games, all in one engine.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(f => (
                <div key={f.title} className="rounded-xl border border-az-75 bg-az-85 p-5 hover:border-az-60 transition-colors">
                  <span className="inline-block text-az-secondary mb-3">{f.icon}</span>
                  <h3 className="font-semibold text-az-10 mb-2">{f.title}</h3>
                  <p className="text-sm text-az-45 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Platforms */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-2 text-center text-az-10">Platforms</h2>
            <p className="text-az-45 text-center mb-12 max-w-lg mx-auto">
              One codebase, multiple targets. Build your game once and ship it everywhere.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {platforms.map(p => (
                <div key={p.name} className="rounded-xl border border-az-75 bg-az-85 p-6 text-center hover:border-az-60 transition-colors">
                  <h3 className={`font-mono font-bold text-lg ${p.color}`}>{p.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Ecosystem */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-2 text-center text-az-10">Ecosystem</h2>
            <p className="text-az-45 text-center mb-12 max-w-lg mx-auto">
              The Azora Engine is part of a larger ecosystem of tools and languages.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {ecosystem.map(l => (
                <a
                  key={l.title}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-xl border p-8 transition-colors ${l.accent}`}
                >
                  <h3 className="text-xl font-semibold text-az-10 mb-3">{l.title}</h3>
                  <p className="text-sm text-az-45 leading-relaxed mb-5">{l.desc}</p>
                  <span className={`text-sm font-medium ${l.ctaColor}`}>
                    {l.cta} &rarr;
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-az-10 mb-4">About</h2>
            <p className="text-az-45 max-w-2xl mx-auto leading-relaxed">
              Azora Engine is developed by Azora Labs as part of the Azora ecosystem.
              It is an open-source, cross-platform game engine designed to make game development fast, expressive, and accessible using the Azora programming language.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
