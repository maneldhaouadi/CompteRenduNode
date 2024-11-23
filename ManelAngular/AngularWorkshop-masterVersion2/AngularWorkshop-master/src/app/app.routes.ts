import { Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component'; // Import your components
import { ItemReviewsComponent } from './components/item-reviews/item-reviews.component';

// Define routes for your application
export const appRoutes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'reviews', component: ItemReviewsComponent},  // Default route (Home page)
  // Default route (Home page)
  { path: '**', redirectTo: '' }               // Wildcard route for unmatched paths
];

