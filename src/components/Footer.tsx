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

export const Footer = () => {
  return (
    <footer className="padding-block-700 bg-neutral-900 text-neutral-100">
      <div className="container">
        <div className="even-columns">
          <div>
            <Image src={navtitle} height={24} width={147} alt="nav-title" />
          </div>
          <div>
            <ul aria-label="social links" role="list">
              <li aria-label="facebook">
                <Image src={facebook} height={15} width={15} alt="facebook" />
              </li>
              <li aria-label="youtube">
                <Image src={youtube} height={15} width={15} alt="youtube" />
              </li>
              <li aria-label="twitter">
                <Image src={twitter} height={15} width={15} alt="twitter" />
              </li>
              <li aria-label="pintrest">
                <Image src={pintrest} height={15} width={15} alt="pintrest" />
              </li>
              <li aria-label="instagram">
                <Image src={instagram} height={15} width={15} alt="instagram" />
              </li>
            </ul>
          </div>
          <div>
            <nav className="footer-nav">
              <ul aria-label="footer" role="list">
                <li>
                  <Link href={"#"}>Home</Link>
                </li>
                <li>
                  <Link href={"#"}>Pricing</Link>
                </li>
                <li>
                  <Link href={"#"}>Product</Link>
                </li>
                <li>
                  <Link href={"#"}>About Us</Link>
                </li>
                <li>
                  <Link href={"#"}>Careers</Link>
                </li>
                <li>
                  <Link href={"#"}>Community</Link>
                </li>
                <li>
                  <Link href={"#"}>Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <form>
          <input type="email" placeholder=" Updates in your inbox…" />

          <Button>
            <Link href={"#"} className="link-text">
              Go
            </Link>
          </Button>
        </form>
        <p>Go Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
};
