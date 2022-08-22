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

const Home = () => {
  return <AdminLayout>
  <div>
  <NavBar />
  <Hero />
  <BuildCarreer />
  <SearchTalent />
  <Meet />
</div>
  </AdminLayout>;
>>>>>>> ae333e8 (Build and Search section are complete, tho still waiting on hannie for the designs)
};
export default Home;
