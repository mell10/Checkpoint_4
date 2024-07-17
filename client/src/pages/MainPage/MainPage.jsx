import { Link } from "react-router-dom";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="main-page">
      <header className="header">
        <Link to="/langage" className="header-button">
          Langages
        </Link>
        <Link to="/presentation" className="header-button">
          Présentation
        </Link>
        <Link to="/admin" className="header-button">
          Admin
        </Link>
      </header>
      <main className="content">
        <div className="profile-section">
          <h1>Romain Delol</h1>
          <img
            src="src/assets/images/RomainImg.png"
            alt="Romain"
            className="profile-photo"
          />
        </div>
        <div className="projects-section">
          <h2>Projets</h2>
        </div>
      </main>
    </div>
  );
}
