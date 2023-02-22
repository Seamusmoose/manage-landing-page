import React from "react";
import { useState, useEffect, ChangeEvent, MouseEvent, useRef } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
type Props = {};

export const Carousel = (props: Props) => {
  const [selectedBtn, setselectedBtn] = useState("avatarTwo");
  console.log(selectedBtn);

  const isSelected = (value: string): boolean => selectedBtn === value;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setselectedBtn(event.currentTarget.value);
  };

  return (
    <div className="flex f_col">
      <h2>What they’ve said</h2>
      <div className="flex f_center carousel">
        
        <div id="avatarOne" className="carousel__item">
          <h3>Anisha Li </h3>
          <p>
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
        <div id="avatarTwo" className="carousel__item">
          <h3>Ali Bravo</h3>
          <p>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
        <div id="avatarThree" className="carousel__item">
          <h3>Richard Watts</h3>
          <p>
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”
          </p>
        </div>
        <div id="avatarFour" className="carousel__item">
          <h3>Shanai Gough</h3>
          <p>
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”
          </p>
        </div>
      </div>
      <div className="flex f_center carousel__button-container ">
        <Link
          horizontal={true}
          activeClass="active"
          to="avatarOne"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <input
            type="radio"
            id="avatarOne"
            className="radio-buttons"
            value="avatarOne"
            // checked={valueType === "avatarOne"}
            checked={isSelected("avatarOne")}
            onChange={handleChange}
          />
        </Link>
        <Link
          horizontal={true}
          activeClass="active"
          to="avatarTwo"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <input
            type="radio"
            id="avatarTwo"
            className="radio-buttons"
            value="avatarTwo"
            // checked={valueType === "avatarTwo"}
            checked={isSelected("avatarTwo")}
            onChange={handleChange}
          />
        </Link>
        <Link
          horizontal={true}
          activeClass="active"
          to="avatarThree"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <input
            type="radio"
            id="avatarThree"
            className="radio-buttons"
            value="avatarThree"
            // checked={valueType === "avatarThree"}
            checked={isSelected("avatarThree")}
            onChange={handleChange}
          />
        </Link>
        <Link
          horizontal={true}
          activeClass="active"
          to="avatarFour"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <input
            type="radio"
            id="avatarFour"
            className="radio-buttons"
            value="avatarFour"
            // isChecked={valueType === "avatarFour"}
            checked={isSelected("avatarFour")}
            onChange={handleChange}
          />
        </Link>
      </div>
    </div>
  );
};
