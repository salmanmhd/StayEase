import express from 'express';
import cors from 'cors';
import mainRouter from './routes/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', mainRouter);
app.listen(PORT, () => {
  console.log(`running on PORT: ${PORT}`);
});
