import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectPage.css";

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const ApiUrl = import.meta.env.VITE_API_URL;
  const fetchProjects = () => {
    fetch(`${ApiUrl}/api/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="Project-page">
      <header className="header2">
        <Link to="/" className="back-button">
          Retour
        </Link>
      </header>
      {projects.map((project) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p>
            GitHub:
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
