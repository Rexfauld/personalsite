import SectionWrapper from '@/components/ui/SectionWrapper'

const education = [
  {
    institution: 'Kumasi Technical University',
    degree: 'BSc. Computer Technology',
    period: '2023 – 2027',
    note: 'Data Structures & Algorithms, Database Management Systems, Operating Systems',
  },
  {
    institution: 'Kumasi Academy',
    degree: 'Secondary Education',
    period: '2019 – 2022',
    note: null,
  },
  {
    institution: 'Apraman M/A Basic School',
    degree: 'Basic Education',
    period: null,
    note: null,
  },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="mb-12">
        <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-2 block">
          01. about
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#f0f0f0]">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-4">
          <p className="text-[#777] leading-relaxed">
            Computer Science student at KsTU, focused on backend systems that hold up under real
            conditions. My work centers on Python automation, PostgreSQL database design, and Linux
            system administration — the parts of engineering that determine whether a system stays
            up or falls apart at 2am.
          </p>
          <p className="text-[#777] leading-relaxed">
            I care about data integrity, disciplined environment configuration, and systems that
            run 24/7 without supervision. Currently expanding into full-stack with Node.js and
            cloud infrastructure, with the long-term goal of building tech businesses at scale.
          </p>

          <div className="flex flex-wrap gap-8 pt-4 border-t border-[#111]">
            <div>
              <p className="font-mono text-[#333] text-xs uppercase tracking-widest mb-1.5">
                Languages
              </p>
              <p className="text-sm text-[#555]">English, Twi</p>
            </div>
            <div>
              <p className="font-mono text-[#333] text-xs uppercase tracking-widest mb-1.5">
                Interests
              </p>
              <p className="text-sm text-[#555]">Football, Reading</p>
            </div>
            <div>
              <p className="font-mono text-[#333] text-xs uppercase tracking-widest mb-1.5">
                Location
              </p>
              <p className="text-sm text-[#555]">Kumasi, Ghana</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="font-mono text-[#333] text-xs uppercase tracking-widest mb-6">
            Education
          </p>
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.institution} className="border-l-2 border-[#1a1a1a] pl-4">
                <p className="text-[#ddd] text-sm font-medium">{edu.institution}</p>
                <p className="font-mono text-[#444] text-xs mt-0.5">
                  {edu.degree}
                  {edu.period ? ` · ${edu.period}` : ''}
                </p>
                {edu.note && (
                  <p className="text-[#383838] text-xs mt-1.5 leading-relaxed">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
