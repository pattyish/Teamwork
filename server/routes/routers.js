import express from 'express';
import bodyParser from 'body-parser';
import authorRoutes from './authorRouter';
import articleRoutes from './articleRouter';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/author', authorRoutes);
app.use('/api/v1/articles', articleRoutes);

app.get('/', (req, res) => (
  res.status(200).json({
    status: 200,
    message: 'Welcome to our API, start a path with /api/v1/ when making requests',
  })
));
app.use('/*', (req, res) => (
  res.status(405).json({
    status: 405,
    error: 'Method not allowed',
  })
));
export default app;
