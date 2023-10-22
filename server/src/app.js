import express from 'express';
import morgan from 'morgan';
import cors from 'cors'

import notasRoutes from './routes/notas.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json())

app.use(morgan('dev'))

app.use("/api", notasRoutes);
app.use("/api", userRoutes);

export default app