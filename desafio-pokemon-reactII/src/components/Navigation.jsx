import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Navbar
      className="d-flex justify-content-between px-5 barra"
      variant="light"
      style={{ bacground: "#58585a" }}
    >
      <Container>
        <Navbar.Brand>
          {/* <img width="50" src="/poke-icon.svg" alt="" /> */}
        </Navbar.Brand>
        <div>
          <Navbar.Brand>
            <NavLink to="/" className={setActiveClass}>
              Home
            </NavLink>
            <NavLink to="/pokemones" className={setActiveClass}>
              Pokemones
            </NavLink>
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}
