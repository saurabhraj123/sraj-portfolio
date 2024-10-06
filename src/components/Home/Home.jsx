/** Components */
import Navbar from "../Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

/** CSS */
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Home;
