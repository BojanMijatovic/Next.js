import Layout from 'components/UI/Layout';
import Link from 'next/link';

const RecourseDetail = ({ resource }) => {
  return (
    <Layout>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <section className='section'>
              <div className='columns is-multiline is-variable is-8'>
                <div className='column is-5 is-offset-1 '>
                  <div className='content is-medium'>
                    <h2 className='subtitle is-5 has-text-grey'>{resource.createdAt}</h2>
                    <h1 className='title has-text-black is-3'>{resource.title}</h1>
                    <p className='has-text-dark'>{resource.description}</p>
                    <Link href={`/resources/${resource.id}/edit`}>
                      <a className='button is-warning'>Update</a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// RecourseDetail.getInitialProps = async ({ query }) => {
//   const dataResponse = await fetch(`http://localhost:3001/api/resources/${query.id}`);
//   const data = await dataResponse.json();
//   return {
//     resource: data,
//   };
// };

//  how to find the id of the resource with the getServer Side Props

// export async function getServerSideProps({ params }) {
//   const dataResponse = await fetch(`http://localhost:3001/api/resources/${params.id}`);
//   const data = await dataResponse.json();
//   return {
//     props: {
//       resource: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const dataResponse = await fetch(`http://localhost:3001/api/resources/`);
//   const data = await dataResponse.json();
//   const paths = data.map((resource) => {
//     return {
//       params: { id: resource.id },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }) {
  const dataResponse = await fetch(`http://localhost:3001/api/resources/${params.id}`);
  const data = await dataResponse.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default RecourseDetail;
