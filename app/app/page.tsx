const projects = Array.from({ length: 5 }, (_, index) => index + 1);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f5f1] px-6 text-[#20221f] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-[#20221f]/15 py-6">
          <a href="#" className="text-sm font-semibold tracking-wide">
            YOUR NAME
          </a>
          <nav aria-label="Main navigation" className="flex gap-6 text-sm">
            <a className="transition-colors hover:text-[#77796f]" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-[#77796f]" href="#about">
              About
            </a>
          </nav>
        </header>

        <section className="grid gap-12 py-16 sm:py-24 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#77796f]">
              Portfolio · 2026
            </p>
            <h1 className="max-w-2xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-7xl">
              A little space for the things I make.
            </h1>
          </div>
          <div id="about" className="max-w-sm md:justify-self-end">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#77796f]">
              About
            </p>
            <p className="text-base leading-7 text-[#5e6059]">
              A short introduction goes here. This is a placeholder for a little
              about me, what I enjoy creating, and what I’m curious to explore
              next.
            </p>
          </div>
        </section>

        <section id="projects" aria-label="Project placeholders" className="pb-20">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#77796f]">
              Selected work
            </h2>
            <span className="text-xs text-[#77796f]">05 frames</span>
          </div>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <div
                key={project}
                aria-label={`Project placeholder ${project}`}
                className="group relative aspect-video overflow-hidden rounded-sm border border-[#20221f]/10 bg-[#e9e8e1] transition-colors duration-300 hover:bg-[#e2e1d9]"
              >
                <span className="absolute right-4 top-4 font-mono text-xs text-[#77796f]">
                  0{project}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-4 border border-dashed border-[#20221f]/10 transition-colors group-hover:border-[#20221f]/20"
                />
                <span className="absolute inset-0 flex items-end bg-[#20221f]/75 p-6 text-sm leading-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  A short description of this project will go here.
                </span>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-[#20221f]/15 py-5 text-xs text-[#77796f]">
          <span>YOUR NAME</span>
          <span>Made with care · 2026</span>
        </footer>
      </div>
    </main>
  );
}
