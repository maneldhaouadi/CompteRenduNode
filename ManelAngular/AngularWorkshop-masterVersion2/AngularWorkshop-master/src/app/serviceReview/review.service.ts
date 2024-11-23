import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = 'http://localhost:3000/api/reviews'; // L'URL de votre API

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir les avis d'un item en fonction de son nom
  getReviews(itemName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${itemName}`);
  }
}
