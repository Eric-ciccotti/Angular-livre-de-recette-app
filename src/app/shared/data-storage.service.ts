import { RecettesService } from './recettes.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recetteService: RecettesService) { }

  stockerRecette() {
    const recette = this.recetteService.getRecette();
    this.http.put('https://livre-recette-exercice.firebaseio.com/recettes.json', recette).subscribe(response => {
      console.log(response);
    })
  }


}
