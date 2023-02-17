import Image from "next/image";
import React from "react";
import navtitle from "../../public/images/logo.svg";
import { Button } from "./Button";

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <nav className="nav">
      <Image src={navtitle} height={24} width={147} alt="nav-title" />
      <ul>
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>

      <Button>Get Started</Button>
    </nav>
  );
};
