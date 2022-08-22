import { AdminLayout } from "../../layouts";
import NavBar from "../../components/NavBar";
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
};
export default Home;
