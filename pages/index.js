import Layout from 'components/UI/Layout';
import ResourcesHighlight from 'components/ResourcesHighlight';
import NewsLetter from 'components/Newsletter';
import ResourcesList from 'components/ResourcesList';
import Footer from 'components/Footer';

const Home = ({ resources }) => {
  return (
    <Layout>
      <ResourcesHighlight resources={resources} />
      <NewsLetter />
      <ResourcesList resources={resources} />
      <Footer />
    </Layout>
  );
};

/*
differences between server side props  and static props
      server side props
      - is called each time the component is rendered and visit page
      - is called on server side
      - data is always fresh


      static props
      - is called only once and is called before the component is rendered at build time

      TYPES OF PAGES
       (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
  ○   (Static)  automatically rendered as static HTML (uses no initial props)
  ●   (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
*/

export async function getServerSideProps() {
  const responseData = await fetch('http://localhost:3001/api/resources');
  const data = await responseData.json();
  return {
    props: {
      resources: data,
    },
  };
}

// export async function getStaticProps() {
//    const responseData = await fetch('http://localhost:3000/api/resources');
//     const data = await responseData.json();

//   return {
//     props: {
//       resources: data,
//     },
//   };
// }

export default Home;
