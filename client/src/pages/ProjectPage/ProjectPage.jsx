import { useState, useEffect } from "react";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="Project-page">
      {projects.map((project) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
