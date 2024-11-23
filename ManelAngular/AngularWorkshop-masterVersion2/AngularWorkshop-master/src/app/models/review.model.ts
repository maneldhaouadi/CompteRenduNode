export class Review {
    itemId: string;   // Représente l'ID de l'item auquel la review appartient
    username: string;  // Le nom de l'utilisateur qui a écrit la review
    rating: number;    // La note donnée par l'utilisateur (de 1 à 5)
    comments: string;  // Les commentaires associés à la review
  
    constructor(itemId: string, username: string, rating: number, comments: string) {
      this.itemId = itemId;
      this.username = username;
      this.rating = rating;
      this.comments = comments;
    }
  }
  