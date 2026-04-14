import { Github, Linkedin, Mail, MapPin, FileDown } from 'lucide-react'

const links = [
  {
    Icon: Github,
    label: 'Rexfauld',
    href: 'https://github.com/Rexfauld',
  },
  {
    Icon: Linkedin,
    label: 'rexford-tenkorang',
    href: 'https://www.linkedin.com/in/rexford-tenkorang-343737197',
  },
  {
    Icon: Mail,
    label: 'rexfordtenkorang27@gmail.com',
    href: 'mailto:rexfordtenkorang27@gmail.com',
  },
]

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-[#111] mt-8 scroll-mt-20">
      <div className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="font-mono text-[#00ff88] text-xs tracking-widest mb-2 block">
            05. contact
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#f0f0f0]">
            Get in Touch
          </h2>
        </div>

        <div className="flex items-center gap-2 text-[#333] mb-10">
          <MapPin size={13} />
          <span className="font-mono text-xs">Kumasi, Ghana</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-10">
          {links.map(({ Icon, label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[#555] hover:text-[#00ff88] transition-colors duration-150"
            >
              <Icon size={14} className="shrink-0" />
              <span className="font-mono text-xs">{label}</span>
            </a>
          ))}
        </div>

        {/* Add your CV as /public/resume.pdf to activate this button */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#222] text-[#555] text-xs font-mono rounded-sm hover:border-[#00ff88]/40 hover:text-[#00ff88] transition-colors duration-150"
        >
          <FileDown size={13} />
          Download CV
        </a>

        <div className="mt-20 pt-8 border-t border-[#111]">
          <p className="font-mono text-xs text-[#2a2a2a]">
            © {new Date().getFullYear()} Rexford Tenkorang
          </p>
        </div>
      </div>
    </footer>
  )
}
