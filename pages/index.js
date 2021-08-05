import Navbar from '../components/Navbar';
import ResourcesHighlight from '../components/ResourcesHighlight';
import NewsLetter from '../components/Newsletter';
import ResourcesList from '../components/ResourcesList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <ResourcesHighlight />
      <NewsLetter />
      <ResourcesList />
      <Footer />
    </>
  );
};

export default Home;
