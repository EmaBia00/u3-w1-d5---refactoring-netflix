import { Dropdown, Button } from "react-bootstrap";

const Filters = () => {
  return (
    <section className="d-flex align-items-center">
      <div className="d-flex gap-3 align-items-center me-auto">
        <h1 className="fs-2">TV Shows</h1>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" className="border border-2 border-light bg-black rounded-0" id="dropdown-genres">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Azione</Dropdown.Item>
            <Dropdown.Item href="#">Fantascienza</Dropdown.Item>
            <Dropdown.Item href="#">Commedia</Dropdown.Item>
            <Dropdown.Item href="#">Romantico</Dropdown.Item>
            <Dropdown.Item href="#">Drammi</Dropdown.Item>
            <Dropdown.Item href="#">Horror</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex">
        <Button variant="outline-light" className="border border-2 py-1 px-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </Button>
        <Button variant="outline-light" className="border border-2 py-1 px-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default Filters;
