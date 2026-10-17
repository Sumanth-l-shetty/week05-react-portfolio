import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const skills = [
    { name: "HTML", category: "Frontend", level: 90 },
    { name: "CSS", category: "Frontend", level: 85 },
    { name: "JavaScript", category: "Frontend", level: 75 },
    { name: "React", category: "Frontend", level: 70 },
    { name: "Python", category: "Programming", level: 85 },
    { name: "Java", category: "Programming", level: 70 },
    { name: "Machine Learning", category: "AI/ML", level: 65 },
    { name: "Git & GitHub", category: "Tools", level: 80 },
  ];

  const projects = [
    {
      id: 1,
      title: "AI Quiz Generator",
      description:
        "An AI-powered application that generates MCQs from study materials.",
      tech: ["Python", "FastAPI", "Gemini API"],
      category: "AI/ML",
      icon: "🤖",
      github: "https://github.com/",
    },
    {
      id: 2,
      title: "Developer Portfolio",
      description:
        "A responsive portfolio built using React and modern CSS.",
      tech: ["React", "CSS", "JavaScript"],
      category: "Web",
      icon: "💻",
      github: "https://github.com/",
    },
    {
      id: 3,
      title: "Task Manager",
      description:
        "An interactive application for organizing and tracking daily tasks.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      icon: "✅",
      github: "https://github.com/",
    },
    {
      id: 4,
      title: "ML Prediction System",
      description:
        "A machine learning project exploring data analysis and predictions.",
      tech: ["Python", "Pandas", "Scikit-learn"],
      category: "AI/ML",
      icon: "📊",
      github: "https://github.com/",
    },
  ];

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar
        darkMode={darkMode}
        toggleTheme={() => setDarkMode(!darkMode)}
      />

      <main>
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;