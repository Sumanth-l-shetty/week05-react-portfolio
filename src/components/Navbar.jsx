function Navbar({ darkMode, toggleTheme }) {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        Dev<span>Portfolio.</span>
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark and light mode"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Navbar;