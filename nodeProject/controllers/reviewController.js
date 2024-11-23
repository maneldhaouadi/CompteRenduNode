import Item from '../models/item.js';
import Review from '../models/review.js';

// Fonction pour obtenir tous les items (par exemple, si vous voulez récupérer une liste d'items)
export const getReviews = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

// Fonction pour obtenir les reviews d'un item par son nom
export const getReviewsByItemName = async (req, res) => {
  try {
    const { name } = req.params; // Récupérer le nom de l'item depuis les paramètres de la route

    // Rechercher l'item par son nom
    const item = await Item.findOne({ name });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Trouver les reviews associées à cet item
    const reviews = await Review.find({ itemId: item._id });

    // Répondre avec l'item et ses reviews
    res.json({
      item,
      reviews,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Fonction pour ajouter une review à un item spécifique
export const addReview = async (req, res) => {
  try {
    const { itemId, username, rating, comments } = req.body; // Récupérer les données de la review depuis le corps de la requête

    // Vérifier si l'item existe avec l'ID donné
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Créer la nouvelle review
    const newReview = new Review({
      itemId,
      username,
      rating,
      comments,
    });

    // Sauvegarder la review dans la base de données
    await newReview.save();

    // Répondre avec la review ajoutée
    res.status(201).json({
      message: 'Review added successfully',
      review: newReview,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
