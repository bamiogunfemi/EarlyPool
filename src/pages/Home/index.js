import { AdminLayout } from "../../layouts";
import NavBar from "../../components/NavBar";
import Hero from '../../components/Hero';

const Home = () => {
  return <AdminLayout>
  <div>
  <NavBar />
  <Hero />
</div>
  </AdminLayout>;
};
export default Home;
