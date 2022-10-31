import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App.tsx';
import { indexTemplate } from './indexTemplate.js';
import axios from 'axios';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});
app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: 'C3rpbWzgVH0KvbFRa2Mjo2VnQiGk4g',
        },
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
      );
    })

    .catch(console.log);
});
app.listen(3000, () => {
  console.log('server started on http://localhost:3000/');
});
