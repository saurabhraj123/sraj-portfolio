/** CSS */
import classes from "./Footer.module.css";

const LIST_ITEMS = [
  "ASE @Toddle",
  "Web developer",
  "Web scraper",
  "Chrome extension developer",
  "Chegg QnA Expert",
  "1+ years of experience",
  "10+ projects",
  "Based in India",
  "Open source contributor",
  "Open to full time remote roles",
];

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.marqueeContainer}>
        <ul className={classes.marqueeList}>
          {LIST_ITEMS.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Duplicate list for animation */}
        {/* <ul className={classes.marqueeList}>
          {LIST_ITEMS.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Footer;
