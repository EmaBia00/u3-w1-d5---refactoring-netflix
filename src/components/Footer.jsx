import { Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="container gx-0 w-100 mx-auto mt-5">
      <div className="mx-auto" style={{ maxWidth: "650px" }}>
        <div className="d-flex justify-content-start gap-3 mb-4" style={{ marginTop: "3rem" }}>
          <Facebook width={20} height={20} color="grey" className="opacity-50" />
          <Instagram width={20} height={20} color="grey" className="opacity-50" />
          <Twitter width={20} height={20} color="grey" className="opacity-50" />
          <Youtube width={20} height={20} color="grey" className="opacity-50" />
        </div>

        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 mb-2 justify-content-start justify-content-md-center" style={{ fontSize: "13px" }}>
          <Col className="mb-sm-4 mb-md-2">
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Audio and Subtitles
            </a>
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Media Center
            </a>
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Privacy
            </a>
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Contact Us
            </a>
          </Col>
          <Col className="mb-sm-4 mb-md-2">
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Audio Description
            </a>
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Investor Relations
            </a>
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Legal Notices
            </a>
          </Col>
          <Col className="mb-sm-4 mb-md-2">
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Help Center
            </a>
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Jobs
            </a>
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Cookie Preferences
            </a>
          </Col>
          <Col className="mb-sm-4 mb-md-2">
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Gift Cards
            </a>
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Terms of Use
            </a>
            <a href="#" className="link-body-emphasis link-opacity-50 link-opacity-75-hover link-underline-opacity-0 d-block mb-2">
              Corporate Informations
            </a>
          </Col>
        </Row>

        <Button variant="outline-light" className="opacity-50 rounded-0" style={{ fontSize: "13px" }}>
          Service Code
        </Button>

        <div className="d-flex justify-content-start align-items-center opacity-75 my-4" style={{ fontSize: "10px" }}>
          <span className="me-2">&copy;</span>
          <span>1997-2019 Netflix, Inc. (i 0d00fcda2fdf9c0de)</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
