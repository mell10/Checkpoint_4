import { Link } from "react-router-dom";
import "./LanguagePage.css";

export default function LanguagePage() {
  return (
    <div className="language-page">
      <header className="header2">
        <Link to="/" className="back-button">
          Retour
        </Link>
      </header>
      <main className="content2">
        <h1>Langages</h1>
      </main>
    </div>
  );
}
