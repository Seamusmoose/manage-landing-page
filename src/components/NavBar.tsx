import Image from "next/image";
import React from "react";
import navtitle from "../../public/images/logo.svg";
import { Button } from "./Button";
import hamburger from "../../public/images/icon-hamburger.svg";
import Link from "next/link";

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <header className="primary-header">
      <div className="container">
        <Image
          className="navbar-img"
          src={navtitle}
          height={24}
          width={147}
          alt="nav-title"
        />
        {/* <div className="navbar__hamburger">
          <Image src={hamburger} height={18} width={25} alt="bg" />
        </div> */}
        <nav className="primary-navigation">
          <ul aria-label="Primary" role="list" className="nav-list">
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Product</Link>
            </li>
            <li>
              <Link href="#">Linkbout Us</Link>
            </li>
            <li>
              <Link href="#">CLinkreers</Link>
            </li>
            <li>
              <Link href="#">Communit</Link>y
            </li>
          </ul>
        </nav>
        <Button className="button">Get Started</Button>
      </div>
    </header>
  );
};
