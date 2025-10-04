import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source.ts';
import routes from '../routes/index.ts';

const app = express();
const port = process.env.PORT;

app.use(cors({
            origin: 'http://localhost:3000'
        }));

        
AppDataSource.initialize().then(() => {
  app.use(express.json())
  app.use('/api', routes);
  app.get('/', (req, res) => {
    return res.json('Established connection!');
  })
  return app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
})