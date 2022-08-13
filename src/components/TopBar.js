import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import instacartlogo from "../instacartlogo.svg";

function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img src={instacartlogo} alt="instacart logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav
          style={{
            padding: "24px 40px 20px 40px",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: "bolder",
            display: "flex",
          }}
        >
          <Nav.Link
            style={{ color: "#343538" }}
            href="#LogIn"
            className="ms-auto"
          >
            Log In
          </Nav.Link>
          <Button
            variant="success"
            style={{ fontSize: "18px" }}
            className="ms-auto"
          >
            Sign Up
          </Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
