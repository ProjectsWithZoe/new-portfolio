import type { Project } from '../data'

type Props = Project & { index: number }

function ArrowIcon() {
  return (
    <svg
      className="w-3 h-3 transition-transform duration-200 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10L10 2M10 2H5M10 2v5" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function ProjectTile({ name, description, stack, demo, github, index }: Props) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className="group relative bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 rounded-xl p-6 flex flex-col min-h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/60 dark:hover:shadow-neutral-950/60 hover:border-stone-300 dark:hover:border-neutral-700 overflow-hidden">

      {/* Blue accent bar */}
      <span className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Gradient wash from top */}
      <span className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-blue-50/50 dark:from-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Project number */}
      <span className="absolute top-5 right-5 text-xs font-mono text-neutral-300 dark:text-neutral-700 select-none">
        {num}
      </span>

      <h3 className="relative font-semibold text-neutral-900 dark:text-neutral-100 text-lg leading-snug mb-3 pr-8">
        {name}
      </h3>
      <p className="relative text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
        {description}
      </p>

      {stack.length > 0 && (
        <div className="relative flex flex-wrap gap-1.5 mt-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs text-neutral-500 dark:text-neutral-400 bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="relative border-t border-stone-100 dark:border-neutral-800 mt-4 pt-4 flex items-center justify-between">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/demo inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            Live Demo
            <ArrowIcon />
          </a>
        )}
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="inline-flex items-center justify-center w-7 h-7 text-neutral-400 dark:text-neutral-500 border border-stone-200 dark:border-neutral-700 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
          >
            <GitHubIcon />
          </a>
        ) : (
          <span
            aria-label="No GitHub repo"
            className="inline-flex items-center justify-center w-7 h-7 text-neutral-300 dark:text-neutral-700 border border-stone-200 dark:border-neutral-800 rounded-lg cursor-not-allowed"
          >
            <GitHubIcon />
          </span>
        )}
      </div>
    </div>
  )
}
