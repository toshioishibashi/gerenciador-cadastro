import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import tutorRoutes from './routes/tutorRoutes.js';
import petRoutes from './routes/petRoutes.js';
<<<<<<< HEAD
import vacinaRoutes from './routes/vacinaRoutes.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js';
import setupSwagger from './Swagger/swagger.js';

dotenv.config();
const app = express();
setupSwagger(app);
=======

dotenv.config();
const app = express();
>>>>>>> 26140451d846ffd738b33d0a35db12fabab1aaef

app.use(express.json());

app.use(tutorRoutes);
app.use(petRoutes);
<<<<<<< HEAD
app.use('/vacinas', vacinaRoutes);
app.use('/veterinarios', veterinarioRoutes);
=======
>>>>>>> 26140451d846ffd738b33d0a35db12fabab1aaef

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('🟢 Conectado ao MongoDB Atlas');
    app.listen(process.env.PORT || 3000, () =>
      console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 3000}`)
    );
  })
  .catch((err) => console.error('🔴 Erro ao conectar ao MongoDB:', err));
