import { Component } from '@angular/core';
import { ReviewService } from '../../serviceReview/review.service'; // Importer le service de review
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour ngModel
import { CommonModule } from '@angular/common'; // Importer CommonModule pour *ngIf et *ngFor

@Component({
  selector: 'app-item-reviews',
  standalone: true,
  imports: [FormsModule, CommonModule], // Ajouter FormsModule et CommonModule
  templateUrl: './item-reviews.component.html',
})
export class ItemReviewsComponent {
  itemName: string = ''; // Nom de l'item recherché
  reviews: any[] = []; // Liste des reviews pour l'item recherché
  item: any = null; // L'item trouvé
  errorMessage: string = ''; // Message d'erreur si l'item n'est pas trouvé

  constructor(private reviewService: ReviewService) {}

  // Méthode pour rechercher les reviews d'un item
  searchReviews() {
    this.errorMessage = ''; // Réinitialiser les erreurs
    if (this.itemName) {
      this.reviewService.getReviews(this.itemName).subscribe(
        (response) => {
          if (response.item) {
            this.item = response.item; // Mettre à jour l'item trouvé
            this.reviews = response.reviews; // Mettre à jour la liste des reviews
          } else {
            this.errorMessage = 'Item not found or no reviews available';
            this.reviews = []; // Réinitialiser les reviews en cas d'erreur
          }
        },
        (error) => {
          this.errorMessage = 'An error occurred while fetching the reviews.';
          this.reviews = []; // Réinitialiser les reviews en cas d'erreur
        }
      );
    } else {
      this.errorMessage = 'Please enter an item name.';
    }
  }
}
