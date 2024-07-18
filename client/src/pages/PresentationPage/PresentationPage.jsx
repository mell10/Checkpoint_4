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
        <img src="src/assets/images/cat.png" alt="cat" className="cat-photo" />
        <div className="text-container">
          <p>
            Passionné par le développement web et web mobile, je suis
            actuellement en reconversion professionnelle pour acquérir des
            compétences pointues dans ce domaine en pleine expansion. Fort d'une
            solide expérience dans l'hôtellerie restauration, j'ai développé des
            compétences en gestion de projet, service à la clientèle et travail
            d'équipe. Ma capacité à communiquer efficacement en anglais a été un
            atout majeur tout au long de mon parcours professionnel. De plus,
            mes expériences dans les ressources humaines et l'immobilier m'ont
            permis de développer des compétences transversales telles que la
            résolution de problèmes, la négociation et la gestion de dossiers
            complexes. Je suis désormais déterminé à fusionner mes compétences
            diverses pour apporter des solutions innovantes dans le monde du
            développement technologique.
          </p>
        </div>
        <img
          src="src/assets/images/RomainImg.png"
          alt="Romain"
          className="profile-photo"
        />
      </main>
    </div>
  );
}
