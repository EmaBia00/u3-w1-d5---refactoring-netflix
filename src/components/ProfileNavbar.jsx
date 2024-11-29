import { Navbar, Container } from "react-bootstrap";
import netflixLogo from "../assets/netflix_logo.png";

const ProfileNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg text-light">
      <Container fluid className="gx-0">
        <Navbar.Brand href="#">
          <img src={netflixLogo} alt="netflix_logo" width="100px" style={{ transform: "translateX(-10px)" }} className="navbar-brand img-fluid me-0" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default ProfileNavbar;
