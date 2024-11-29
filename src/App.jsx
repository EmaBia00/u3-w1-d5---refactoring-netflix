import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="flex-grow-1">
        <Navigation />
        <Filters />
        <Gallery title="Harry Potter" />
        <Gallery title="Lord of the Rings" />
        <Gallery title="Pirates of the Caribbean" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
