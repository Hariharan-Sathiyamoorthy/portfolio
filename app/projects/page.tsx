import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 
            backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90
            hover:transform hover:scale-105 hover:shadow-xl
            transition-all duration-300 ease-in-out
            border border-gray-200 dark:border-gray-700"
          >
            <div className="w-full flex flex-col space-y-3">
              <h2 className="text-black dark:text-white font-bold text-xl">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 
                hover:underline font-medium mt-2"
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
