import { Link } from "react-router-dom";
import "./PresentationPage.css";

export default function PresentationPage() {
  return (
    <div className="presentation-page">
      <header className="header3">
        <Link to="/" className="back-button">
          Retour
        </Link>
      </header>
      <main className="content3">
        <img
          src="src/assets/images/RomainImg.png"
          alt="Romain"
          className="profile-photo"
        />
      </main>
    </div>
  );
}
