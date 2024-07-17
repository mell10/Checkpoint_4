import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="main-page">
      <header className="header">
        <button type="button" className="header-button">
          Langages
        </button>
        <button type="button" className="header-button">
          Présentation
        </button>
        <button type="button" className="header-button">
          Admin
        </button>
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
