import { useState } from "react";

function Projects({ projects }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web", "AI/ML"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">MY RECENT WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p>A selection of projects demonstrating my learning and creativity.</p>
      </div>

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              filter === category ? "filter-btn active" : "filter-btn"
            }
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-icon">{project.icon}</div>

            <span className="project-category">{project.category}</span>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;