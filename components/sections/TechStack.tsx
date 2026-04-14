import SectionWrapper from '@/components/ui/SectionWrapper'

const stack = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'PHP', 'Java'],
    learning: false,
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    learning: false,
  },
  {
    category: 'Tools & Systems',
    items: ['Linux (Ubuntu)', 'Bash', 'Cron', 'Git', 'Nano/Vim', 'VirtualBox', 'venv'],
    learning: false,
  },
  {
    category: 'Currently Learning',
    items: ['React', 'Node.js', 'Docker', 'AWS'],
    learning: true,
  },
]

export default function TechStack() {
  return (
    <SectionWrapper id="stack">
      <div className="mb-12">
        <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-2 block">
          03. stack
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#f0f0f0]">
          Technical Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stack.map((group) => (
          <div
            key={group.category}
            className={`p-6 rounded-sm border ${
              group.learning
                ? 'border-[#1a1a1a] border-dashed bg-[#0d0d0d]'
                : 'border-[#1a1a1a] bg-[#0f0f0f]'
            }`}
          >
            <h3
              className={`font-mono text-xs uppercase tracking-widest mb-4 ${
                group.learning ? 'text-[#2a2a2a]' : 'text-[#333]'
              }`}
            >
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`font-mono text-sm px-3 py-1.5 rounded-sm border transition-colors duration-150 cursor-default ${
                    group.learning
                      ? 'text-[#444] bg-[#0d0d0d] border-[#1a1a1a] border-dashed hover:text-[#666]'
                      : 'text-[#ccc] bg-[#161616] border-[#222] hover:border-[#00ff88]/30 hover:text-[#00ff88]'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
