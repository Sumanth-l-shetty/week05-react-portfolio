function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h2>
          My Technical <span>Skills</span>
        </h2>
        <p>Technologies I'm learning and using to build projects.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <span>{skill.category}</span>
            </div>

            <div className="skill-track">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;