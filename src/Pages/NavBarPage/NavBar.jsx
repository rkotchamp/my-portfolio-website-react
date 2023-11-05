import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.css";

function NavBar() {
  const [bars, setBars] = useState(true);
  const [navDisplay, setNavDisplay] = useState(false);

  const toggleClick = () => {
    setBars(!bars);
    setNavDisplay(!navDisplay);
  };
  return (
    <div className="navMainContainer">
      <div className="nav__container">
        <div className="logo">
          Rkot<span>.</span>
        </div>

        <nav>
          {navDisplay ? (
            <ul className="unorderedList ">
              <Link to="#home">
                <li>Home </li>
              </Link>
              <Link to="#projects">
                <li>Projects</li>
              </Link>
              <Link to="#contacts">
                <li>Contacts</li>
              </Link>
              <Link to="#about">
                <li>About me</li>
              </Link>
            </ul>
          ) : null}
        </nav>
        <div className="burger">
          {bars ? (
            <AiOutlineMenu onClick={toggleClick} className="rotateBars" />
          ) : (
            <AiOutlineClose onClick={toggleClick} className="rotateBars" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
