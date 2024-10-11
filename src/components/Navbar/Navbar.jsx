/** External */
import _ from "lodash";

/** CSS */
import classes from "./Navbar.module.css";

const navigationLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Works",
    href: "#works",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
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
            <div key={index} className={classes.navigationLink}>
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
