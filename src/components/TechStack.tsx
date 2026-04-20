import { skillGroups } from '../data'

export default function TechStack() {
  return (
    <section id="stack" className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-sm font-mono text-neutral-300 dark:text-neutral-600 select-none">03</span>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Stack</h2>
      </div>
      <div className="flex flex-col gap-10">
        {skillGroups.map(({ category, skills }) => (
          <div key={category}>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 rounded-full cursor-default transition-colors duration-200 hover:border-blue-300 dark:hover:border-blue-800 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
