import React from 'react';
import './Projects.css'; // Import the CSS file

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1 Title",
      description: "Short description of Project 1. What did you do? What did you use?",
      technologies: ["Python", "Pandas", "Matplotlib"],
      github: "https://github.com/yourusername/project1", // Replace with actual link
      demo: "https://yourproject1demo.com" // Replace with actual link (if applicable)
    },
    {
      id: 2,
      title: "Project 2 Title",
      description: "Short description of Project 2.",
      technologies: ["SQL", "Tableau"],
      github: "https://github.com/yourusername/project2",
      demo: null // No demo for this project
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-technologies">
                {project.technologies.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;