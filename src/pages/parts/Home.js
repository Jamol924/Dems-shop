import AboutUs from "../sections/home/AboutUs";
import Ads from "../sections/home/Ads";
import Statistics from "../sections/home/Statistics";
import Intro from "../sections/home/Intro";
import InfoUs from "../sections/home/InfoUs";

const Home = () => {
  return (
    <div>
      <Intro />
      <AboutUs />
      <Ads />
      <Statistics />
      <Ads />
      <InfoUs />
    </div>
  );
};

export default Home;
