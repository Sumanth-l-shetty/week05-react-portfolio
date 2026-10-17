function About() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Sumanth</span>
        </h1>

        <h2>AIML Engineering Student & Developer</h2>

        <p className="hero-description">
          I am an Artificial Intelligence and Machine Learning student
          passionate about building useful applications, exploring AI,
          and creating modern web experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            Explore Projects ↗
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>08+</h3>
            <p>Skills</p>
          </div>

          <div>
            <h3>04</h3>
            <p>Featured Projects</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Learning Mindset</p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-card">
          <div className="profile-avatar">👨‍💻</div>
          <h3>Sumanth L Shetty</h3>
          <p>Future AI Engineer</p>

          <div className="status">
            <span></span>
            Open to Learning & Collaboration
          </div>

          <div className="floating-icon icon-one">⚛️</div>
          <div className="floating-icon icon-two">🤖</div>
          <div className="floating-icon icon-three">🚀</div>
        </div>
      </div>
    </section>
  );
}

export default About;