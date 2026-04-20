import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-sm font-mono text-neutral-300 dark:text-neutral-600 select-none">01</span>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">About</h2>
      </div>
      <div className="border-l-2 border-stone-200 dark:border-neutral-700 pl-8 max-w-2xl">
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">{about}</p>
      </div>
    </section>
  )
}
