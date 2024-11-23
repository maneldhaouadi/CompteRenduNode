import express from 'express';
import mongoose from 'mongoose';
import itemRoutes from './routes/items.js'; // Routes pour les items
import reviewRoutes from './routes/reviews.js'; // Routes pour les reviews
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser les corps des requêtes en JSON
app.use(express.json());

// Activer CORS avec une configuration basique
app.use(
  cors({
    origin: '*', // Autoriser toutes les origines (utiliser une origine spécifique en production)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
    allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
  })
);

// Utiliser les routes pour les items et les reviews
app.use('/api/items', itemRoutes); // Les routes des items
app.use('/api/reviews', reviewRoutes); // Les routes des reviews

// Connexion à MongoDB
mongoose
  .connect('mongodb://localhost:27017/orion') // Pas besoin des options obsolètes
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
