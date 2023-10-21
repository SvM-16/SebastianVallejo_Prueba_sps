import express from 'express';
import morgan from 'morgan';

import notasRoutes from './routes/notas.routes'
import userRoutes from './routes/user.routes'

const app = express();

app.use(express.json())

app.use(morgan('dev'))

app.use("/api", notasRoutes);
app.use("/api", userRoutes);

export default app