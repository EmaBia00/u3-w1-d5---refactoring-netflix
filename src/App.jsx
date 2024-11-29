import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

//N.B.
// COMMENTARE "HOMEPAGE" e SCOMMENTARE "PROFILE" PER SIMULARE IL CAMBIAMENTO DELLA VISUALIZZAZIONE DELLA PAGINA

// HOMEPAGE IMPORT
import Navigation from "./components/Navigation";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    // HOMEPAGE
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="flex-grow-1">
        <Navigation />
        <Filters />
        <Gallery title="Harry Potter" />
        <Gallery title="Star Wars" />
        <Gallery title="Lord of the Rings" />
      </div>
      <Footer />
    </div>
  );
};

// PROFILE IMPORT
// import ProfileNavbar from "./components/ProfileNavbar";
// import ProfileUser from "./components/ProfileUser";
// const App = () => {
//   return (
//     // PROFILE
//     <>
//       <ProfileNavbar />
//       <ProfileUser />
//     </>
//   );
// };

export default App;
