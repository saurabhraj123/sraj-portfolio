/** Components */
import Navbar from "../Navbar";

/** CSS */
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
      </div>
    </>
  );
};

export default Home;
