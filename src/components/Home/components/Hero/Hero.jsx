/** External */
import _ from "lodash";

/** Icons */
import { FaArrowRight } from "react-icons/fa";

/** CSS */
import classes from "./Hero.module.css";

const PROJECTS = [
  {
    id: 1,
    title: "Project 1",
  },
  {
    id: 2,
    title: "Project 2",
  },
  {
    id: 3,
    title: "Project 3",
  },
  {
    id: 4,
    title: "Project 4",
  },
  {
    id: 5,
    title: "Project 5",
  },
];

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.leftContainerHeader}>
            <div className={classes.animationBox}>
              <div className={classes.hiText}>Hi, I&apos;m</div>
            </div>
            <div className={classes.animationBox}>
              <div className={classes.nameText}>Saurabh Raj.</div>
            </div>
          </div>

          <div className={classes.description}>
            <div className={classes.animationBox}>
              <div className={classes.descriptionFirst}>
                Skilled web developer with 1+ years of experience,
              </div>
            </div>

            <div className={classes.animationBox}>
              <div className={classes.descriptionSecond}>
                building fast and reliable websites that deliver results.
              </div>
            </div>
          </div>
        </div>

        <div className={classes.rightContainer}>
          <div className={classes.animationBox}>
            <div className={classes.projectLabel}>SELECTED PROJECTS</div>
          </div>
          <div className={classes.projectsContainer}>
            {_.map(PROJECTS, (project, index) => (
              <div key={index} className={classes.animationBox}>
                <div
                  className={classes.project}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={classes.projectTitle}>{project.title}</div>
                  <FaArrowRight className={classes.arrowIcon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
