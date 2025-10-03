import express from 'express';
import { AppDataSource } from './data-source.ts';
import routes from '../routes/index.ts';

const app = express();
const port = process.env.PORT;

app.use('/api', routes);

AppDataSource.initialize().then(() => {
  app.use(express.json())
  app.get('/', (req, res) => {
    return res.json('Established connection!');
  })
  return app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
})