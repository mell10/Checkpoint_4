import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LanguagePage.css";

export default function LanguagePage() {
  const [languages, setLanguages] = useState([]);
  const ApiUrl = import.meta.env.VITE_API_URL;
  const fetchLanguages = () => {
    fetch(`${ApiUrl}/api/languages`)
      .then((response) => response.json())
      .then((data) => setLanguages(data));
  };

  useEffect(() => {
    fetchLanguages();
  }, []);
  return (
    <div className="language-page">
      <header className="header2">
        <Link to="/" className="back-button">
          Retour
        </Link>
      </header>
      <main className="content2">
        <h1>Langages</h1>
        {languages.map((language) => (
          <div key={language.id}>
            <h1>{language.name}</h1>
            <p>{language.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
