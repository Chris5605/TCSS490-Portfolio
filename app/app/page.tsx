"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    number: 1,
    image: "/Placeholder01.png",
    title: "Portfolio Webpage",
    description:
      "A portfolio webpage showcasing my projects and ideas for the future. Check in later to see what I make!",
  },
  {
    number: 2,
    image: "/Placeholder02.png",
    title: "VST Distortion Pedal",
    description:
      "I have never been fully happy with any of the virtual distortion effects I have used with my guitar, so I am going to try to create my own. With a full set of tone control knobs and a waveform display, I aim to achieve the perfect sound for my needs.",
  },
  {
    number: 3,
    image: "/Placeholder03.png",
    title: "Outfit Color Helper",
    description:
      "As a colorblind person, finding outfit colors that match can sometimes be a struggle. With this tool, you will be able to input pieces you want to include in the outfit and get suggestions on what else could work, powered by AI.",
  },
  {
    number: 4,
    image: "/Placeholder04.png",
    title: "Crossstitch Pattern Generator",
    description:
      "A tool that converts an image of the users choice into a readible, stitchable cross-stitch pattern, with a variable level of difficulty, detail, and colors.",
  },
  {
    number: 5,
    image: "/Placeholder05.png",
    title: "Washington Transit Simulation",
    description:
      "Washington traffic sucks, but how can we resolve it? This simulation aims to model traffic patterns and test potential solutions to improve transit efficiency, including changes to highways, rail, and public transportation.",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [focusedProject, setFocusedProject] = useState<number | null>(null);
  const theme = darkMode
    ? {
        page: "bg-[#171815] text-[#f2f1eb]",
        border: "border-white/15",
        muted: "text-[#aaa99f]",
        frame:
          "border-white/10 bg-[#292a25] hover:bg-[#30312b]",
        frameOutline:
          "border-white/10 group-hover:border-white/20",
      }
    : {
        page: "bg-[#f6f5f1] text-[#20221f]",
        border: "border-[#20221f]/15",
        muted: "text-[#77796f]",
        frame:
          "border-[#20221f]/10 bg-[#e9e8e1] hover:bg-[#e2e1d9]",
        frameOutline:
          "border-[#20221f]/10 group-hover:border-[#20221f]/20",
      };

  return (
    <main
      className={`min-h-screen px-6 transition-colors duration-300 sm:px-10 ${theme.page}`}
    >
      <div className="mx-auto max-w-6xl">
        <header
          className={`flex items-center justify-between border-b py-6 ${theme.border}`}
        >
          <a href="#" className="text-sm font-semibold tracking-wide">
            Christopher Pihlman
          </a>
          <button
            type="button"
            role="switch"
            aria-checked={darkMode}
            aria-label="Dark mode"
            onClick={() => setDarkMode((currentMode) => !currentMode)}
            className={`relative h-8 w-14 rounded-full border transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${
              darkMode
                ? "border-white/20 bg-[#77796f]"
                : "border-[#20221f]/15 bg-[#e3e2da]"
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute left-1 top-1 flex size-6 items-center justify-center rounded-full bg-white text-[#20221f] shadow-sm transition-transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {darkMode ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-4"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path
                    strokeLinecap="round"
                    d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                  />
                </svg>
              )}
            </span>
          </button>
        </header>

        <section className="grid gap-12 py-16 sm:py-24 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p
              className={`mb-5 text-xs font-medium uppercase tracking-[0.22em] ${theme.muted}`}
            >
              Portfolio · 2026
            </p>
            <h1 className="max-w-2xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-7xl">
              Sometimes, starting is the hardest part.
            </h1>
          </div>
          <div id="about" className="max-w-sm md:justify-self-end">
            <p
              className={`mb-3 text-xs font-medium uppercase tracking-[0.2em] ${theme.muted}`}
            >
              About
            </p>
            <p
              className={`text-base leading-7 ${darkMode ? "text-[#c4c3ba]" : "text-[#5e6059]"}`}
            >
              Hi, I'm Chris, a software developer with an interest in creating tools that
              change how we look at the world. In a time where every day has a new chaotic headline,
              I strive to combine my passion for technology with my love for music and the arts to 
              create projects that are both innovative and deeply human.
            </p>
          </div>
        </section>

        <section id="projects" aria-label="Project placeholders" className="pb-20">
          <div className="mb-5 flex items-center justify-between">
            <h2
              className={`text-xs font-medium uppercase tracking-[0.2em] ${theme.muted}`}
            >
              Selected work
            </h2>
            <span className={`text-xs ${theme.muted}`}>05 frames</span>
          </div>
          <div className="flex flex-col gap-4">
            {projects.map((project) => {
              const isActive =
                hoveredProject === project.number ||
                focusedProject === project.number;

              return (
                <div
                  key={project.number}
                  tabIndex={0}
                  aria-label={`Project placeholder ${project.number}`}
                  onMouseEnter={() => setHoveredProject(project.number)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onFocus={() => setFocusedProject(project.number)}
                  onBlur={() => setFocusedProject(null)}
                  className={`group relative aspect-video overflow-hidden rounded-sm border transition-colors duration-300 ${theme.frame}`}
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`Preview image for project ${project.number}`}
                      fill
                      sizes="(max-width: 1152px) 100vw, 1152px"
                      className={`object-cover transition-transform duration-500 ease-out motion-reduce:transition-none motion-reduce:scale-100 ${
                        isActive ? "scale-105" : "scale-100"
                      }`}
                    />
                  )}
                  <span
                    aria-hidden="true"
                    style={{ opacity: isActive ? 1 : 0 }}
                    className="absolute inset-0 bg-black/40 transition-opacity duration-300 motion-reduce:transition-none"
                  />
                  <span
                    className={`absolute right-4 top-4 font-mono text-xs ${theme.muted}`}
                  >
                    0{project.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute inset-4 border border-dashed transition-colors ${theme.frameOutline}`}
                  />
                  <div
                    style={{ opacity: isActive ? 1 : 0 }}
                    className={`absolute inset-y-0 right-0 z-10 flex w-1/2 flex-col justify-end bg-[#20221f]/90 p-4 text-white transition-[opacity,transform] duration-300 sm:w-2/5 sm:p-8 motion-reduce:transition-none ${
                      isActive ? "translate-x-0" : "translate-x-4"
                    }`}
                  >
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                      Project 0{project.number}
                    </p>
                    <h3 className="mb-3 text-lg font-medium leading-tight sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <footer
          className={`flex items-center justify-between border-t py-5 text-xs ${theme.border} ${theme.muted}`}
        >
          <span>CHRISTOPHER PIHLMAN</span>
          <span>Made with care · 2026</span>
        </footer>
      </div>
    </main>
  );
}
