import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import BuildCarreer from "../../components/BuildCarreer";
import SearchTalent from "../../components/SearchTalent";
import Meet from "../../components/Meet";
import Footer from "../../components/Footer";
import './index.css'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <BuildCarreer />
      <SearchTalent />
      <Meet />
      <Footer />
    </div>
  );
};
export default Home;
