import Image from "next/image";
import React from "react";
import navtitle from "../../public/images/logo.svg";
import { Button } from "./Button";

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <nav className="navbar__container flex flex_center flex_space_between">
      <Image
        className="navbar__img"
        src={navtitle}
        height={24}
        width={147}
        alt="nav-title"
      />
      <div className="navbar__hamburger">Hamburger eg</div>
      <ul className="navbar__menu">
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Communit</a>y
        </li>
      </ul>

      <Button className="nav_get_started">Get Started</Button>
    </nav>
  );
};
