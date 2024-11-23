import { Component } from '@angular/core';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemReviewsComponent } from './components/item-reviews/item-reviews.component';
import { CommonModule } from '@angular/common'; // Importer CommonModule ici aussi si nécessaire
import { FormsModule } from '@angular/forms'; // Importer FormsModule si vous l'utilisez ici aussi

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemListComponent, ItemReviewsComponent, CommonModule, FormsModule], // Importer les modules nécessaires
  template: `
    <h1>{{ title }}</h1>
    <app-item-list></app-item-list>
    <app-item-reviews></app-item-reviews>
  `,
})
export class AppComponent {
  title = 'AngularWorkshop';
}
