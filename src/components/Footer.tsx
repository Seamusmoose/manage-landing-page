import Image from "next/image";
import React from "react";
import navtitle from "@images/logo.svg";
import facebook from "@images/icon-facebook.svg";
import youtube from "@images/icon-youtube.svg";
import twitter from "@images/icon-twitter.svg";
import pintrest from "@images/icon-pinterest.svg";
import instagram from "@images/icon-instagram.svg";

import { Button } from "./Button";
import Link from "next/link";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <nav className="nav">
      <Image src={navtitle} height={24} width={147} alt="nav-title" />
      <div>
        <Image src={facebook} height={15} width={15} alt="facebook" />
        <Image src={youtube} height={15} width={15} alt="youtube" />
        <Image src={twitter} height={15} width={15} alt="twitter" />
        <Image src={pintrest} height={15} width={15} alt="pintrest" />
        <Image src={instagram} height={15} width={15} alt="instagram" />
      </div>

      <ul>
        <li>Home</li>
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
        <li>Privacy Policy</li>
      </ul>
      <input type="text" placeholder=" Updates in your inbox…" />
      <p>Go Copyright 2020. All Rights Reserved</p>
      <Button>
        <Link href={"#"} className="link-text">
          {" "}
          Get Started
        </Link>
      </Button>
    </nav>
  );
};
