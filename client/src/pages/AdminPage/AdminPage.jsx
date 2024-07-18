import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./AdminPage.css";

export default function AdminPage() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editProjectId, setEditProjectId] = useState(null);
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/projects`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des projets");
      }
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError("Erreur de réseau lors de la récupération des projets");
    }
  }, [ApiUrl]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setSuccessMessage("");

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
        setSuccessMessage("Projet ajouté avec succès !");
        setProjectName("");
        setProjectDescription("");
        setProjectLink("");
        fetchProjects();
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Erreur lors de l'ajout du projet");
      }
    } catch (err) {
      setError("Erreur de réseau");
    }
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setSuccessMessage("");

    const projectData = {
      name: projectName,
      description: projectDescription,
      link: projectLink,
    };

    try {
      const response = await fetch(`${ApiUrl}/api/projects/${editProjectId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        setSuccess(true);
        setSuccessMessage("Projet modifié avec succès !");
        setProjectName("");
        setProjectDescription("");
        setProjectLink("");
        setEditMode(false);
        setEditProjectId(null);
        fetchProjects();
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Erreur lors de la modification du projet"
        );
      }
    } catch (err) {
      setError("Erreur de réseau");
    }
  };

  const handleEditClick = (project) => {
    setEditMode(true);
    setEditProjectId(project.id);
    setProjectName(project.name);
    setProjectDescription(project.description);
    setProjectLink(project.link);
  };

  const handleDelete = async (projectId) => {
    setError(null);
    setSuccess(false);
    setSuccessMessage("");

    try {
      const response = await fetch(`${ApiUrl}/api/projects/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: projectId }),
      });

      if (response.ok) {
        setSuccess(true);
        setSuccessMessage("Projet supprimé avec succès !");
        fetchProjects();
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Erreur lors de la suppression du projet"
        );
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
        <h1>{editMode ? "Modification de projet" : "Ajout de projet"}</h1>
        <form
          onSubmit={editMode ? handleEdit : handleSubmit}
          className="project-form"
        >
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
          <button type="submit">
            {editMode ? "Modifier le projet" : "Ajouter le projet"}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{successMessage}</p>}
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
              <button type="button" onClick={() => handleEditClick(project)}>
                Modifier
              </button>
              <button type="button" onClick={() => handleDelete(project.id)}>
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
