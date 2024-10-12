/** External */
import PropTypes from "prop-types";

/** Components */
import ContentPanel from "../ContentPanel";

/** CSS */
import classes from "./About.module.css";
const About = (props) => {
  const { onClose } = props;
  return (
    <ContentPanel onClose={onClose}>
      <p className={classes.paragraph}>
        An experienced{" "}
        <span className={classes.highlight}>frontend developer</span> from India
        working at <span className={classes.highlight}>Toddle</span> and
        contributing to the development of interactive tools and dashboards,
        helping enhance user engagement.
      </p>

      <p className={classes.paragraph}>
        Passionate about building seamless web experiences, I&apos;m always
        excited to take on new challenges.
      </p>

      <h2 className={classes.sectionHeading}>Technical Skills</h2>
    </ContentPanel>
  );
};

About.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default About;
