import Layout from 'components/UI/Layout';

const RecourseDetail = () => {
  return (
    <Layout>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <section className='section'>
              <div className='columns is-multiline is-variable is-8'>
                <div className='column is-5 is-offset-1 '>
                  <div className='content is-medium'>
                    <h2 className='subtitle is-5 has-text-grey'>Date</h2>
                    <h1 className='title has-text-black is-3'>Title</h1>
                    <p className='has-text-dark'>description</p>
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

export default RecourseDetail;
