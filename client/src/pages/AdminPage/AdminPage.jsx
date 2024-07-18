import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminPage.css";

export default function AdminPage() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    const projectData = {
      name: projectName,
      description: projectDescription,
      link: projectLink,
    };

    try {
      const response = await fetch(`${ApiUrl}/api/projects/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        setSuccess(true);
        setProjectName("");
        setProjectDescription("");
        setProjectLink("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Erreur lors de l'ajout du projet");
      }
    } catch (err) {
      setError("Erreur de réseau");
    }
  };

  return (
    <div className="admin-page">
      <header className="header5">
        <Link to="/" className="back-button">
          Retour
        </Link>
      </header>
      <main className="content5">
        <h1>Ajout de projet</h1>
        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-group">
            <label htmlFor="projectName">Nom du projet</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescription">Description du projet</label>
            <textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectLink">Lien du projet</label>
            <input
              type="url"
              id="projectLink"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              required
            />
          </div>
          <button type="submit">Ajouter le projet</button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Projet ajouté avec succès !</p>}
      </main>
    </div>
  );
}
