import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { Search, BellFill } from "react-bootstrap-icons";
import netflixLogo from "../assets/netflix_logo.png";
import avatarLogo from "../assets/avatar.png";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg text-light">
      <Container fluid className="gx-0">
        <Navbar.Brand href="#">
          <img src={netflixLogo} alt="netflix_logo" width="100px" style={{ transform: "translateX(-10px)" }} className="navbar-brand img-fluid me-0" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" style={{ fontSize: "13px" }}>
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link active href="#">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex gap-3 align-items-center mb-0">
            <Button variant="link" className="p-0" href="#">
              <Search width={16} height={16} color="grey" />
            </Button>
            <Nav.Link href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0">
              KIDS
            </Nav.Link>
            <Button variant="link" className="p-0">
              <BellFill width={16} height={16} color="grey" />
            </Button>
            <Dropdown align="end">
              <Dropdown.Toggle variant="link" id="dropdown-avatar" style={{ color: "#808080" }}>
                <img src={avatarLogo} alt="avatar" width="30px" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item href="#">Account</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Exit</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
