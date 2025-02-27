import React from "react";
import "../stylingFiles/Projects.css";

const projects = [
  {
    title: "Password Generator",
    description:
      "A secure password generator that allows users to create random passwords based on selected criteria.",
    technologies: "HTML, CSS, JavaScript",
  },
  {
    title: "Weather Application",
    description:
      "An app that displays real-time weather information using an external weather API.",
    technologies: "HTML, CSS, JavaScript",
  },
  {
    title: "Expense Tracker Web Application",
    description:
      "A full-stack application to manage personal expenses with CRUD operations via RESTful APIs.",
    technologies: "Spring Boot, Java, MySQL, HTML, CSS, JavaScript",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.technologies}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
