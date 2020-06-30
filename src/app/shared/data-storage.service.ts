import { Recette } from './../recettes/recettes.model';
import { RecettesService } from './recettes.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";

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

  recupererRecette() {
    return this.http
      .get<Recette[]>('https://livre-recette-exercice.firebaseio.com/recettes.json')
      .pipe(
        tap(recetteRecu => {
          this.recetteService.addRecettes(recetteRecu);
        })
      )
  }


}
