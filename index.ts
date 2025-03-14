import express from 'express';
import cors from 'cors'
import { port } from './config/env.config';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});