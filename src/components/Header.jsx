import NavDropdown from "react-bootstrap/NavDropdown";
export default function Header() {
  return (
    <div className="bg-info py-2">
      <div className="header app">
        <div>
          <address>
            <p>+91 7870047004</p>
          </address>
        </div>
        <div>
          <p>Get 50% Off on selected items | Shop Now</p>
        </div>
        <div className="d-flex">
          <NavDropdown title="Eng" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Hindi</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Marathi</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="ms-2"
            title="location"
            id="navbarScrollingDropdown"
          ></NavDropdown>
        </div>
      </div>
    </div>
  );
}
