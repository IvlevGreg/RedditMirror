import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App.tsx';
import { indexTemplate } from './indexTemplate.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static('./dist/client'));

// app.get('/auth', (req, res) => {
//   res.send(indexTemplate(ReactDOM.renderToString(App())));
// });
// app.get('/', (req, res) => {
//   res.send(indexTemplate(ReactDOM.renderToString(App())));
// });
// app.get('/posts/*/', (req, res) => {
//   res.send(indexTemplate(ReactDOM.renderToString(App())));
// });
// app.get('/posts', (req, res) => {
//   res.send(indexTemplate(ReactDOM.renderToString(App())));
// });

app.get('*', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}/`);
});
