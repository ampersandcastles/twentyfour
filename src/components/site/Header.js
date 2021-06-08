import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">24 hours to write a project</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/tristanlearns/twentyfour">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
