import { Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  status: 'Active' | 'In Progress'
  github: string
}

export default function ProjectCard({
  title,
  description,
  tech,
  status,
  github,
}: ProjectCardProps) {
  return (
    <div className="border border-[#1a1a1a] bg-[#0f0f0f] p-6 rounded-sm hover:border-[#00ff88]/30 transition-colors duration-200 group flex flex-col">
      <div className="flex items-start justify-between mb-3 gap-3">
        <h3 className="font-mono text-[#f0f0f0] font-medium group-hover:text-[#00ff88] transition-colors duration-200 leading-tight">
          {title}
        </h3>
        <span
          className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-mono border ${
            status === 'Active'
              ? 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/20'
              : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-[#666] text-sm mb-4 leading-relaxed flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-[#555] bg-[#161616] px-2 py-0.5 rounded border border-[#222]"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-[#444] hover:text-[#00ff88] transition-colors duration-150 font-mono w-fit"
      >
        <Github size={12} />
        View on GitHub
      </a>
    </div>
  )
}
