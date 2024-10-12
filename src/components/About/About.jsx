/** External */
import PropTypes from "prop-types";

/** Components */
import ContentPanel from "../ContentPanel";

const About = (props) => {
  const { onClose } = props;
  return (
    <ContentPanel onClose={onClose}>
      <h1>About</h1>
    </ContentPanel>
  );
};

About.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default About;
