import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import styled from "styled-components";
import { Link } from "react-scroll";

const WrapHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 400;
  @media (max-width: 1199.98px) {
    .hidden {
      display: none;
    }
    .nav-now-centered {
    }
  }
`;
const Menu = styled(Nav)`
  @media (max-width: 1199.98px) {
    margin-right: 0;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 10%;
    background-color: rgba(0, 0, 0, 0.2);
    width: 86%;
    border-radius: 10px;
  }
`;
const MenuLink = styled(NavLink)`
  &:hover {
    border-bottom: 2px solid rgb(204, 189, 153);
  }
  font-family: "Lato";
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  color: #fff !important;
  text-decoration: none;
  display: block;
  margin-left: 3px;
  cursor: pointer;
`;

const SiteName = styled(NavbarBrand)`
  font-family: "Prata";
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: #fff !important;
  text-decoration: none;
  display: block;
`;

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <WrapHeader>
      <Navbar light expand="md" className="my-2">
        <div className="hidden">
          <SiteName>Home Ownership In DC</SiteName>
        </div>
        <NavbarToggler onClick={toggle} style={{ backgroundColor: "#FFF" }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="hidden mr-auto" navbar></Nav>

          <Menu>
            <NavItem>
              <Link to="purpose" spy={true} smooth={true} duration={500}>
                <MenuLink>About</MenuLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="involved" spy={true} smooth={true} duration={500}>
                <MenuLink href="#myTarget">What is Involved?</MenuLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="eligibile" spy={true} smooth={true} duration={500}>
                <MenuLink href="#myTarget">Are you Eligibile?</MenuLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="questions" spy={true} smooth={true} duration={500}>
                <MenuLink href="#myTarget">Common Questions</MenuLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                <MenuLink href="#contact">Contact</MenuLink>
              </Link>
            </NavItem>
          </Menu>
        </Collapse>
      </Navbar>
    </WrapHeader>
  );
};

export default Navigation;
