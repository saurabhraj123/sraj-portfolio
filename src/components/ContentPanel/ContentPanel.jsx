/** External */
import PropTypes from "prop-types";

/** CSS */
import classes from "./ContentPanel.module.css";

const ContentPanel = ({ children, onClose }) => {
  return (
    <div className={classes.container}>
      <div className={classes.overlay} onClick={onClose}>
        <button
          className={classes.overlayCloseButton}
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the overlay's onClick
            onClose();
          }}
          aria-label="Close Panel"
        >
          Close
        </button>
      </div>

      <div className={classes.innerContainer}>
        <div className={classes.header}>
          <img
            src="/profileImage.png"
            alt="Profile"
            className={classes.profileImage}
          />
          <button className={classes.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

ContentPanel.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContentPanel;
