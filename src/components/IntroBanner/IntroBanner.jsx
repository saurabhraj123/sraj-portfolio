/** CSS */
import classes from "./IntroBanner.module.css";

const IntroBanner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.animationBox}>
        <div className={classes.introText}>Namaste 🙏</div>
      </div>
    </div>
  );
};

export default IntroBanner;
