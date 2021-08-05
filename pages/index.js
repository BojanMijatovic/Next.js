import Layout from 'components/UI/Layout';
import ResourcesHighlight from 'components/ResourcesHighlight';
import NewsLetter from 'components/Newsletter';
import ResourcesList from 'components/ResourcesList';
import Footer from 'components/Footer';
import { resources } from 'api/data';

const Home = () => {
  return (
    <Layout>
      <ResourcesHighlight resources={resources} />
      <NewsLetter />
      <ResourcesList resources={resources} />
      <Footer />
    </Layout>
  );
};

export default Home;
