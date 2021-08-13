import axios from 'axios';

export default async function (req, res) {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources');
    const data = await dataRes.json();
    return res.send(data);
  }

  if (req.method === 'POST' || req.method === 'PATCH') {
    const { id, title, description, link, timeToFinish, priority } = req.body;

    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send('Missing required fields');
    }

    const url = req.method === 'POST' ? 'http://localhost:3001/api/resources' : `http://localhost:3001/api/resources/${id}`;

    try {
      const axiosResponse = await axios[req.method.toLowerCase()](url, req.body);
      return res.send(axiosResponse.data);
    } catch {
      return res.status(422).send('Data cannot be stored');
    }
  }
}
