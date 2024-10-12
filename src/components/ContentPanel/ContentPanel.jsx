/** External */
import { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";

/** CSS */
import classes from "./ContentPanel.module.css";

const ContentPanel = ({ children, onClose }) => {
  const [animationState, setAnimationState] = useState("idle");

  const handleClose = useCallback(() => {
    setAnimationState("closing");

    setTimeout(() => {
      onClose();
    }, 500);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log({ e });
      if (e?.key === "Escape") {
        handleClose();
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <div className={classes.container} data-state={animationState}>
      <div className={classes.overlay} onClick={handleClose}>
        <button
          className={classes.overlayCloseButton}
          onClick={handleClose}
          aria-label="Close Panel"
        >
          Close
        </button>
      </div>

      <div className={classes.innerContainer} data-state={animationState}>
        <div className={classes.header}>
          <img
            src="/profileImage.png"
            alt="Profile"
            className={classes.profileImage}
          />
          <button className={classes.closeButton} onClick={handleClose}>
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
