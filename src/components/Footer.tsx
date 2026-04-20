export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-neutral-800 to-transparent" />
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 text-sm text-neutral-400 dark:text-neutral-600">
          <a
            href="https://github.com/ProjectsWithZoe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zoemwangi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:projectswithzoe@gmail.com"
            className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-neutral-300 dark:text-neutral-700">© {new Date().getFullYear()} Zoe Mwangi</p>
      </div>
    </footer>
  )
}
