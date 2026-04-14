import SectionWrapper from '@/components/ui/SectionWrapper'

const points = [
  'Building tech-integrated businesses that operate at scale — not just apps.',
  'Systems that generate compounding value: payments, logistics, data infrastructure.',
  'Long-term interest in mobile tech and digital infrastructure across West Africa.',
  "The goal isn't a job. It's a conglomerate.",
]

export default function Vision() {
  return (
    <SectionWrapper id="vision">
      <div className="mb-12">
        <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-2 block">
          04. vision
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#f0f0f0]">
          What I&apos;m Building Toward
        </h2>
      </div>

      <div className="space-y-5 max-w-2xl">
        {points.map((point, i) => (
          <div key={i} className="flex gap-4 items-start group">
            <span className="font-mono text-[#00ff88] text-xs mt-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
              →
            </span>
            <p className="text-[#666] leading-relaxed hover:text-[#999] transition-colors duration-150">
              {point}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
