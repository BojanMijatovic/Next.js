import Layout from 'components/UI/Layout';
import ResourceForm from 'components/ResourceForm';
import axios from 'axios';

const ResourceEdit = ({ resource }) => {
  const updateResource = (formData) => {
    axios
      .patch('/api/resources', formData)
      .then((_) => alert('Data has been updated!'))
      .catch((err) => alert(err?.response?.data));
  };

  /*
  
      //With axios
    axios
      .post('/api/resources', fromData)
      .then((res) => {
        res.data;
        router.push('/');
      })
      .catch((err) => {
        // if expression is undefined, it will not be evaluated
        console.log(err?.response?.data);
      });
  */
  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <ResourceForm onFormSubmit={updateResource} initialData={resource} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataResponse = await fetch(`http://localhost:3001/api/resources/${params.id}`);
  const data = await dataResponse.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceEdit;

/*
import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";

const ResourceEdit = ({resource}) => {

  const updateResource= (formData) => {
    axios.patch("/api/resources", formData)
      .then(_ => alert("Data has been updated!"))
      .catch(err => alert(err?.response?.data));
  };

  return (
    <Layout>
      <ResourceForm 
        subtitle={`Edit page for '${resource.title}'`}
        initialData={resource}
        onFormSubmit={updateResource}
      />
    </Layout>
  )
}

export async function getServerSideProps({params}) {
  const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await dataRes.json();

  return {
    props: {
      resource: data
    },
  }
}

export default ResourceEdit;
*/
