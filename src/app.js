import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import tutorRoutes from './routes/tutorRoutes.js';
import petRoutes from './routes/petRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use(tutorRoutes);
app.use(petRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('🟢 Conectado ao MongoDB Atlas');
    app.listen(process.env.PORT || 3000, () =>
      console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 3000}`)
    );
  })
  .catch((err) => console.error('🔴 Erro ao conectar ao MongoDB:', err));
