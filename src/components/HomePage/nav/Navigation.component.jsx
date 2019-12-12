import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";

import styled from "styled-components";

const WrapHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 400;
`;
const MenuItem = styled(NavItem)`
  margin-right: 30px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0;
`;

const MenuLink = styled(NavLink)`
  font-family: "Lato";
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: #fff !important;
  text-decoration: none;
  display: block;
`;
const MenuDropdown = styled(DropdownToggle)`
  font-family: "Lato";
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: #fff !important;
  text-decoration: none;
  display: block;
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
        <SiteName href="/">DC Home Ownership</SiteName>
        <NavbarToggler onClick={toggle} style={{ backgroundColor: "#FFF" }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>

          <Nav navbar>
            <NavItem>
              <MenuLink href="/components/">About</MenuLink>
            </NavItem>
            <NavItem>
              <MenuLink href="https://github.com/reactstrap/reactstrap">
                Eligibility
              </MenuLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <MenuDropdown nav caret>
                FQA
              </MenuDropdown>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <MenuLink href="/components/">Benefits</MenuLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </WrapHeader>
  );
};

export default Navigation;
