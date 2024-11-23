import Item from '../models/item.js';
// Create a new item
export const createItem = async (req, res, next) => {
 try {
 const newItem = new Item(req.body);
 await newItem.save();
 res.status(201).json(newItem);
 } catch (error) {
 next(error);
 }
};
// Fonction pour récupérer les avis d'un item spécifique par son nom
export const getReviewsByItemName = async (req, res) => {
    try {
      const { itemName } = req.query; // Récupère le paramètre `itemName` depuis la requête
  
      // Assurez-vous que `itemName` est fourni
      if (!itemName) {
        return res.status(400).json({ message: 'Item name is required' });
      }
  
      // Trouver les avis pour cet item
      const reviews = await Review.find({ itemName: itemName });
  
      if (!reviews || reviews.length === 0) {
        return res.status(404).json({ message: 'No reviews found for this item' });
      }
  
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching reviews', error: err });
    }
  };  

// Get all items
export const getItems = async (req, res, next) => {
 try {
 const items = await Item.find();
 res.json(items);
 } catch (error) {
 next(error);
 }
};
// Get a single item by ID
export const getItemById = async (req, res, next) => {
 try {
 const item = await Item.findById(req.params.id);
 if (!item) {
 return res.status(404).json({ message: 'Item not found' 
});
 }
 res.json(item);
 } catch (error) {
 next(error);
 }
};
// Update an item by ID
export const updateItem = async (req, res, next) => {
 try {
 const updatedItem = await 
Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
 if (!updatedItem) {
 return res.status(404).json({ message: 'Item not found' 
});
 }
 res.json(updatedItem);
 } catch (error) {
 next(error);
 }
};
// Delete an item by ID
export const deleteItem = async (req, res, next) => {
 try {
 const deletedItem = await 
Item.findByIdAndDelete(req.params.id);
 if (!deletedItem) {
 return res.status(404).json({ message: 'Item not found' 
});
 }
 res.json({ message: 'Item deleted' });
 } catch (error) {
 next(error);
 }
};