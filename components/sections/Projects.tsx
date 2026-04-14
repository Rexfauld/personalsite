import SectionWrapper from '@/components/ui/SectionWrapper'
import ProjectCard from '@/components/ui/ProjectCard'

const projects = [
  {
    title: 'System Infrastructure Monitor',
    description:
      'Python-based tool that automates tracking of Linux system metrics (CPU, RAM, Disk) with PostgreSQL time-series logging and 24/7 Cron-driven collection.',
    tech: ['Python', 'PostgreSQL', 'Ubuntu Linux', 'Cron', 'psutil', 'psycopg2'],
    status: 'Active' as const,
    github: 'https://github.com/Rexfauld/system-infrastructure-monitor',
  },
  {
    title: 'StudyHub',
    description:
      'Full-stack educational platform serving JHS, SHS, and university students in Ghana with cloud-hosted resources via MongoDB Atlas and Supabase Storage.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Supabase', 'REST API'],
    status: 'In Progress' as const,
    github: 'https://github.com/Rexfauld/studyhub',
  },
  {
    title: 'Real Data House',
    description:
      'Data bundle sales platform with automated fulfillment, transaction management, and a fintech-style user flow.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    status: 'Active' as const,
    github: 'https://github.com/Rexfauld/real-data-house',
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-2 block">
          02. projects
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#f0f0f0]">
          Things I&apos;ve Built
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
