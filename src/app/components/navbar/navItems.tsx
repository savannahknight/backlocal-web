import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

import LinkedInImg from "../../../assets/images/linkedin.png";
import InstagramImg from "../../../assets/images/instagram.png";
// import { AboutUs } from "../../containers/AboutUs";

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
      text-2xl
      md:text-2xl
      text-secondary
      mr-1
      md:mr-5
      cursor-pointer
      transition
      duration-300
      ease-in-out
      hover:underline
    `};

    ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus:text-white
    `};
    `};

`;
const Image = styled.div`
   width: auto;
   ${tw`
    p-1
    h-6
    md:h-9
   `};

    img {
        width: auto;
        height: 100%;
   }
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="/">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="/about">About Us</a>
          </NavItem>
          <NavItem menu>
            <a href="/contact">Contact</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="/">Home</a>
      </NavItem>
      <NavItem>
        <a href="/about">About Us</a>
      </NavItem>
      <NavItem>
        <a href="/contact">Contact</a>
      </NavItem>
      <Image>
            <a href="https://www.linkedin.com/company/ibacklocal/"><img src={LinkedInImg} /></a>
      </Image>
      <Image>
            <a href="https://www.instagram.com/findlocal_utah/"><img src={InstagramImg} /></a>
      </Image>
    </ListContainer>
  );
}
