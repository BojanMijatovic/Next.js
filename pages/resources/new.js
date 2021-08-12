import Layout from 'components/UI/Layout';

const ResourceCreate = () => {
  const onSubmitForm = (e) => {
    e.preventDefault(e);
    console.log('test');
  };
  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <div className='resource-form'>
              <h1 className='title'>Add new Resource</h1>
              <form onSubmit={onSubmitForm}>
                <div className='field'>
                  <label className='label'>Title</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='Title input' />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Description</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='Description input' />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Link</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='Link input' />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Priority</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='Priority input' />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Time to finish</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='Time to finish input' />
                  </div>
                </div>
                <div className='field is-grouped'>
                  <div className='control'>
                    <button className='button is-link'>Submit</button>
                  </div>
                  <div className='control'>
                    <button className='button is-link is-light'>Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
