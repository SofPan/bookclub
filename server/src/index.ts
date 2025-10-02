import express from 'express';
import { AppDataSource } from './data-source.ts';

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json())
  app.get('/', (req, res) => {
    return res.json('Established connection!');
  })
  const port = process.env.PORT;
  return app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
})