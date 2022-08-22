import NavBar from "../../components/NavBar";
<<<<<<< HEAD

const Home = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
=======
import Hero from '../../components/Hero';
import BuildCarreer from '../../components/BuildCarreer';
import SearchTalent from '../../components/SearchTalent';
import Meet from '../../components/Meet';
import Footer from '../../components/Footer';

const Home = () => {
  return <AdminLayout>
  <div>
  <NavBar />
  <Hero />
  <BuildCarreer />
  <SearchTalent />
  <Meet />
  <Footer />
</div>
  </AdminLayout>;
>>>>>>> ae333e8 (Build and Search section are complete, tho still waiting on hannie for the designs)
};
export default Home;
