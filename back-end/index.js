import "dotenv/config";
import express from "express";
import UserRoutes from './domains/users/routes.js'

const { PORT } = process.env;
const app = express();
app.use(express.json())

app.use('/users', UserRoutes)

app.listen(PORT, () => {
    console.log(`Servidor Iniciado na porta ${PORT}`);
});
