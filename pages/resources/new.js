import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from 'components/UI/Layout';
import RecourseForm from 'components/ResourceForm';

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = (formData) => {
    axios
      .post('/api/resources', formData)
      .then((_) => router.push('/'))
      .catch((err) => alert(err?.response?.data));
  };

  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <div className='resource-form'>
              <h1 className='title'>Add new Resource</h1>
              <RecourseForm onFormSubmit={createResource} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;

/*
const ResourceCreate = (formData) => {
  const router = useRouter();

  const createResource = formData => {
    axios.post("/api/resources", formData)
      .then(_ => router.push("/"))
      .catch(err => alert(err?.response?.data));
  };

  return (
    <Layout>
      <ResourceForm 
        subtitle="Add New Resource"
        onFormSubmit={createResource}
      />
    </Layout>

  )
}


*/
