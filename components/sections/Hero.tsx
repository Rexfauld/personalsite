'use client'

import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const phrases = [
  'Backend Developer.',
  'Systems Builder.',
  'CS Student @ KsTU.',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setPhraseIdx((prev) => (prev + 1) % phrases.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIdx])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-4">
          <span className="font-mono text-[#00ff88] text-xs tracking-widest">
            ~/rexford-tenkorang
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f0f0f0] mb-5 leading-tight tracking-tight">
          Rexford Tenkorang
        </h1>

        <div className="h-8 mb-6">
          <p className="font-mono text-lg md:text-xl text-[#555]">
            {displayText}
            <span className="inline-block w-[2px] h-5 bg-[#00ff88] ml-0.5 align-middle animate-pulse" />
          </p>
        </div>

        <p className="text-[#444] text-base md:text-lg max-w-lg leading-relaxed mb-12">
          Building scalable backend systems and tech-integrated businesses.
          <br />
          <span className="text-[#333]">Kumasi, Ghana.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#00ff88] text-[#0a0a0a] text-sm font-semibold font-mono rounded-sm hover:bg-[#00e87a] transition-colors duration-150"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-[#222] text-[#666] text-sm font-mono rounded-sm hover:border-[#333] hover:text-[#f0f0f0] transition-colors duration-150"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full mt-20 pb-6">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-[#2a2a2a] hover:text-[#444] transition-colors duration-150"
        >
          <ArrowDown size={13} />
          <span className="font-mono text-xs">scroll</span>
        </a>
      </div>
    </section>
  )
}
