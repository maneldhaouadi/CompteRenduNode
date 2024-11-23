import express from 'express';
import { getReviewsByItemName,getReviews,addReview } from '../controllers/reviewController.js'; // Correction de l'importation

const router = express.Router();

// Route pour obtenir les reviews d'un item par son nom
router.get('/:name', getReviewsByItemName); // Utiliser le contrôleur pour gérer la route
router.get('/', getReviews);
router.post('/reviews', addReview);


export default router;
