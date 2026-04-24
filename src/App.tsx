import { portfolioData } from '@/data/portfolio.data'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Navigation } from '@/components/Navigation/Navigation'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Experience } from '@/components/Experience/Experience'
import { Skills } from '@/components/Skills/Skills'
import { Education } from '@/components/Education/Education'
import { Contact } from '@/components/Contact/Contact'

const SECTION_IDS = ['inicio', 'sobre-mi', 'experiencia', 'skills', 'educacion', 'contacto']

export function App() {
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
      <Navigation items={portfolioData.nav} activeId={activeId} />

      <main>
        <Hero
          firstName={portfolioData.firstName}
          lastName={portfolioData.lastName}
          terminalSummary={portfolioData.terminalSummary}
          contact={portfolioData.contact}
          profiles={portfolioData.profiles}
        />
        <About
          contact={portfolioData.contact}
          languages={portfolioData.languages}
          education={portfolioData.education}
          specialties={portfolioData.specialties}
        />
        <Experience items={portfolioData.experience} />
        <Skills groups={portfolioData.skillGroups} />
        <Education items={portfolioData.education} languages={portfolioData.languages} />
        <Contact contact={portfolioData.contact} profiles={portfolioData.profiles} />
      </main>

      <footer
        className="py-8 text-center font-mono text-xs"
        style={{
          borderTop: '1px solid var(--border)',
          color: 'var(--text-muted)',
        }}
      >
        © {new Date().getFullYear()} {portfolioData.name} · Hecho con React + TypeScript
      </footer>
    </div>
  )
}

export default App
