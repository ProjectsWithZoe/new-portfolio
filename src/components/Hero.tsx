import { tagline } from '../data'

export default function Hero() {
  return (
    <section className="relative min-h-[62vh] flex flex-col justify-center overflow-hidden">
      <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_20%_50%,black_30%,transparent_100%)] opacity-60" />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 mb-6">
          Software Engineer
        </p>
        <h1 className="text-7xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tighter leading-[1.05] mb-10">
          Hi, I'm Zoe.
        </h1>
        <div className="border-l-2 border-blue-600 pl-5 max-w-lg">
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">{tagline}</p>
        </div>
        <div className="flex gap-4 mt-10">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-700 dark:hover:bg-stone-300 transition-colors duration-200"
          >
            View projects
          </a>
          <a
            href="mailto:projectswithzoe@gmail.com"
            className="px-5 py-2.5 border border-stone-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-400 text-sm font-medium rounded-lg hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
