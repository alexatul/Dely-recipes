import "./Navbar.css";
import MenuItems from "../MenuItems/MenuItems";
import Search from "../SearchBar/Search";
import { menuItems } from "../../../menuItems";
import { recipesData } from "../../../recipesData";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useSpring, config, animated } from "react-spring";

function Navbar(props) {
  const [isNavbarMobile, setIsNavbarMobile] = useState(false);
  const fadeStyles = useSpring({
    config: { ...config.stiff },
    from: { opacity: 0 },
    to: {
      opacity: isNavbarMobile ? 1 : 0,
    },
  });

  const toggleNavbar = (event) => {
    setIsNavbarMobile((current) => !current);
  };

  const classes = `nav-area ${props.position}`;

  return (
    <div id="top-navbar">
      <nav className={classes}>
        <button className="mobile-icon" onClick={toggleNavbar}>
          {!isNavbarMobile ? <FaBars /> : <MdClose />}{" "}
        </button>{" "}
        <img className="logo-header" src="/images/logo.svg" alt="logo" />
        <animated.div style={isNavbarMobile ? fadeStyles : null}>
          <ul className={isNavbarMobile ? "menus-mobile" : "menus"}>
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </animated.div>
        <Search recipesData={recipesData} />
      </nav>
    </div>
  );
}

export default Navbar;
