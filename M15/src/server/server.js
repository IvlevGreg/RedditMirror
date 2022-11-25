import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App.tsx';
import { indexTemplate } from './indexTemplate.js';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();

if (!IS_DEV) {
  app.use(compression());
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: false,
    })
  );
}

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  `http://localhost:${PORT}`,
  'https://react-app-reddit-mirror.herokuapp.com',
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

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
