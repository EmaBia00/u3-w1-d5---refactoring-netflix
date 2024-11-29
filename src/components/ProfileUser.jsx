import { Button, Form, Dropdown, DropdownButton, Row, Col, Image } from "react-bootstrap";
import avatarLogo from "../assets/avatar.png";

const ProfileUser = () => {
  return (
    <main className="container mt-2 mx-auto" style={{ maxWidth: "650px" }}>
      <h1>Edit Profile</h1>
      <hr className="mb-4" />
      <Row>
        <Col md={4} className="d-flex justify-content-center align-self-start">
          <div className="position-relative">
            <Image src={avatarLogo} alt="avatar" className="profile-image w-100" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-pencil-fill position-absolute bg-black rounded-circle border border-2 border-light"
              style={{ bottom: "10px", left: "10px", padding: "2px" }}
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
            </svg>
          </div>
        </Col>

        <Col md={8}>
          {/* Prima sezione */}
          <div className="mb-3">
            <Form.Control
              type="text"
              className="bg-secondary text-light rounded-0"
              id="profileName"
              placeholder="Strive Student"
              style={{ fontSize: "18px" }}
            />
          </div>

          <h4 className="text-secondary fs-5">Language:</h4>
          <DropdownButton id="language-dropdown" title="English" variant="trasparent" className="btn border border-light bg-black text-white p-0">
            <Dropdown.Item href="#">Italian</Dropdown.Item>
            <Dropdown.Item href="#">Spanish</Dropdown.Item>
            <Dropdown.Item href="#">French</Dropdown.Item>
            <Dropdown.Item href="#">German</Dropdown.Item>
            <Dropdown.Item href="#">Polish</Dropdown.Item>
            <Dropdown.Item href="#">Japanese</Dropdown.Item>
            <Dropdown.Item href="#">Chinese</Dropdown.Item>
          </DropdownButton>

          <hr className="my-4" />

          {/* Seconda sezione */}
          <h4 className="text-secondary opacity-75 fs-5">Maturity Settings:</h4>
          <Button variant="secondary" className="rounded-0" style={{ fontWeight: 600 }}>
            ALL MATURITY RATINGS
          </Button>
          <p className="text-secondary mt-2" style={{ fontSize: "13px" }}>
            Show titles of all maturity ratings for this profile
          </p>
          <Button variant="outline-light" className="opacity-50 rounded-0 px-4" style={{ letterSpacing: "2px" }}>
            EDIT
          </Button>

          <hr className="my-4" />

          {/* Terza sezione */}
          <h4 className="text-secondary opacity-75 fs-5">Autoplay controls</h4>
          <Form.Check type="checkbox" id="check01" label="Autoplay next episode in a series on all devices." className="form-check-label" />
          <Form.Check type="checkbox" id="check02" label="Autoplay previews while browsing on all devices." className="form-check-label mt-2" />
        </Col>
      </Row>

      <hr className="my-4" />

      <div className="d-flex gap-3 gap-xl-5 mb-4">
        <Button variant="outline-light" className="opacity-75 rounded-0 px-4" style={{ letterSpacing: "2px" }}>
          SAVE
        </Button>
        <Button variant="outline-light" className="opacity-75 rounded-0 px-4" style={{ letterSpacing: "2px" }}>
          CANCEL
        </Button>
        <Button variant="outline-light" className="opacity-75 rounded-0 px-4" style={{ letterSpacing: "2px" }}>
          DELETE PROFILE
        </Button>
      </div>
    </main>
  );
};

export default ProfileUser;
