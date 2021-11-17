import AboutUs from "../sections/home/AboutUs";
import Statistics from "../sections/home/Statistics";
import Intro from "../sections/home/Intro";
import InfoUs from "../sections/home/InfoUs";
import AdCard from "../sections/home/ViewedAds";
import Feature from "../sections/home/Feature";
import MinNav from "../../components/common/MineNavbar/MinNav";
import { GlavneSlider } from "../../components/common/SliceCarousel/GlavneSlider";

const Home = () => {


  return (
    <div>
      <GlavneSlider />
      <MinNav />
      <Intro />
      <AboutUs />
      <Feature />
      <Statistics />
      <AdCard />
      <InfoUs />
    </div>
  );
};

export default Home;
