import { useState, useEffect, useCallback } from 'react'

const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png']

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [animating, setAnimating] = useState(false)

  const go = useCallback(
    (next: number, dir: 'left' | 'right') => {
      if (animating) return
      setDirection(dir)
      setAnimating(true)
      setTimeout(() => {
        setCurrent(next)
        setAnimating(false)
      }, 400)
    },
    [animating]
  )

  const prev = () => go((current - 1 + images.length) % images.length, 'left')
  const next = () => go((current + 1) % images.length, 'right')

  useEffect(() => {
    const id = setInterval(() => go((current + 1) % images.length, 'right'), 4000)
    return () => clearInterval(id)
  }, [current, go])

  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-sm font-mono text-neutral-300 dark:text-neutral-600 select-none">04</span>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Project Demos</h2>
      </div>
      <div>
        <div className="relative flex items-center gap-4">
          {/* Back arrow */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 shadow flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-stone-50 dark:hover:bg-neutral-700 transition-colors z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Image frame */}
          <div className="flex-1 h-80 rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              key={current}
              src={images[current]}
              alt={`Photo ${current + 1}`}
              className="max-h-full max-w-full w-auto h-auto object-contain"
              style={{
                animation: animating
                  ? `carousel-exit-${direction} 0.4s ease forwards`
                  : `carousel-enter-${direction} 0.4s ease forwards`,
              }}
            />
          </div>

          {/* Forward arrow */}
          <button
            onClick={next}
            aria-label="Next image"
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 shadow flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-stone-50 dark:hover:bg-neutral-700 transition-colors z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? 'right' : 'left')}
              aria-label={`Go to image ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-neutral-700 dark:bg-neutral-200 w-5'
                  : 'bg-stone-300 dark:bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
