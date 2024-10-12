/** External */
import _ from "lodash";
import { useState } from "react";

/** Components */
import About from "../About";

/** CSS */
import classes from "./Navbar.module.css";

const navigationLinks = [
  {
    key: "about",
    name: "About",
    href: "#about",
  },
  {
    key: "works",
    name: "Works",
    href: "#works",
  },
  {
    key: "contact",
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [selectedContentPanel, setSelectedContentPanel] = useState(null);

  const closeContentPanel = () => {
    setSelectedContentPanel(null);
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        {/* Left Container */}
        <div className={classes.leftContainer}>
          <img
            src="/profileImage.png"
            alt="profileImage"
            className={classes.profileImage}
          />
          <div className={classes.userName}>sraj.dev</div>
        </div>

        {/* Right Container */}
        <div className={classes.rightContainer}>
          {_.map(navigationLinks, (link, index) => (
            <div
              key={index}
              className={classes.navigationLink}
              onClick={() => setSelectedContentPanel(link.key)}
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>

      {selectedContentPanel && <About onClose={closeContentPanel} />}
    </div>
  );
};

export default Navbar;
