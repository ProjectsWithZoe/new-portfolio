type Props = { dark: boolean; onToggle: () => void }

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Nav({ dark, onToggle }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-stone-200/60 dark:border-neutral-800/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
          Zoe Mwangi
        </span>
        <div className="flex items-center gap-8">
          <div className="flex gap-8 text-sm">
            {["About", "Projects", "Stack"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="relative text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <button
            onClick={onToggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-stone-100 dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  )
}
