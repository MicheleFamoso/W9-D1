import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavCustom() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#" className=" w-25">
            <img
              src="https://instituteoftechnology.epicode.com/wp-content/uploads/2024/02/Institute-of-Technology-1.png"
              alt="logo"
              className="me-3 w-25"
            />
            EpiBooks!
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavCustom;
