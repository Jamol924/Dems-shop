import AboutUs from "../sections/home/AboutUs";
import Ads from "../sections/home/Ads";
import Statistics from "../sections/home/Statistics";
import Intro from "../sections/home/Intro";
import ViewedAds from "../sections/home/ViewedAds";
import InfoUs from "../sections/home/InfoUs";

const Home = () => {
  return (
    <div>
      <Intro />
      <AboutUs />
      <Ads />
      <Statistics />
      <ViewedAds />
      <InfoUs />
    </div>
  );
};

export default Home;
