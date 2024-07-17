import { Link } from "react-router-dom";
import "./ProjectPage.css";

export default function ProjectPage() {
  return (
    <div className="Project-page">
      <header className="header4">
        <Link to="/" className="back-button">
          Retour
        </Link>
      </header>
      <main className="content4">
        <h1>Nom du projet</h1>
      </main>
    </div>
  );
}
