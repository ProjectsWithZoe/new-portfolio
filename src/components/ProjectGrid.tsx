import { projects } from '../data'
import ProjectTile from './ProjectTile'

export default function ProjectGrid() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-sm font-mono text-neutral-300 dark:text-neutral-600 select-none">03</span>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <ProjectTile key={project.name} {...project} index={i} />
        ))}
      </div>
    </section>
  )
}
