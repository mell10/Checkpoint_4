import { Link } from "react-router-dom";
import "./AdminPage.css";

export default function AdminPage() {
  return (
    <div className="admin-page">
      <header className="header5">
        <Link to="/" className="back-button">
          Retour
        </Link>
      </header>
      <main className="content5">
        <h1>Ajout de projet</h1>
      </main>
    </div>
  );
}
