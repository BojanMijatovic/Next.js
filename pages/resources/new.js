import React, { useState } from 'react';
import axios from 'axios';
import Layout from 'components/UI/Layout';

const DEFAULT_DATA = {
  title: '',
  description: '',
  link: '',
  priority: '2',
  timeToFinish: 60,
};

const ResourceCreate = () => {
  const [form, setForm] = useState(DEFAULT_DATA);

  const clearForm = () => setForm({ ...DEFAULT_DATA });

  const onSubmitButton = (e) => {
    e.preventDefault(e);

    // Without this, the form will submit the default data

    // fetch('/api/resources', {
    //   body: JSON.stringify(form),
    //   headers: { ContentType: 'application/json' },
    //   method: 'POST',
    // });

    // with axios
    axios
      .post('/api/resources', form)
      .then((res) => {
        res.data;
        clearForm();
      })
      .catch((err) => {
        // if expression is undefined, it will not be evaluated
        console.log(err?.response?.data);
      });
    clearForm();
  };

  const onCancelButton = (e) => {
    e.preventDefault(e);
    clearForm();
  };

  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <div className='resource-form'>
              <h1 className='title'>Add new Resource</h1>
              <form>
                <div className='field'>
                  <label className='label'>Title</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      placeholder='Title input'
                      name='title'
                      value={form.title}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Description</label>
                  <div className='control'>
                    <textarea
                      name='description'
                      className='textarea'
                      placeholder='Learn new technologies'
                      value={form.description}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Link</label>
                  <div className='control'>
                    <input
                      name='link'
                      className='input'
                      type='text'
                      placeholder='https://google.com'
                      value={form.link}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Priority</label>
                  <div className='control'>
                    <div className='select'>
                      <select value={form.priority} name='priority' onChange={onChangeInput}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Time to finish</label>
                  <div className='control'>
                    <input
                      name='timeToFinish'
                      className='input'
                      type='number'
                      placeholder='60 (time is in minutes)'
                      value={form.timeToFinish}
                      onChange={onChangeInput}
                    />
                    <p className='help'>time is in minutes</p>
                  </div>
                </div>
                <div className='field is-grouped'>
                  <div className='control'>
                    <button onClick={onSubmitButton} className='button is-link' type='button'>
                      Submit
                    </button>
                  </div>
                  <div className='control'>
                    <button className='button is-link is-light' onClick={onCancelButton}>
                      Cancel
                    </button>
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
