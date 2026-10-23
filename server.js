import express from 'express';
import ventasRoutes from './routes/ventas.js';
import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const app = express();
const publicDirectory = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');


// 1. Middlewares (SIEMPRE antes de definir las rutas)
app.use(express.json());
app.use(express.static(publicDirectory));


// 2. Rutas
app.use('/api/v1/ventas', ventasRoutes);


// 3. Servidor
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Servidor Express en http://localhost:${PORT}`);
});