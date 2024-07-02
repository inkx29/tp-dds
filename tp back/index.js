import express from 'express';
import cors from 'cors';
import marcasRouter from './routers/marcas.routes.js';
import pantallasRoutes from './routers/pantallas.routes.js'

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/api/pantallas', pantallasRoutes);
app.use('/api/marcas', marcasRouter);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
