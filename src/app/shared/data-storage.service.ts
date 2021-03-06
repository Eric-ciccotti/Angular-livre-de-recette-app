import { Recette } from './../recettes/recettes.model';
import { RecettesService } from './recettes.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import recetteBackup from './recette.backup';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recetteService: RecettesService) { }

  stockerRecette() {
    let recette = this.recetteService.getRecette();

    if (recette.length === 0) {
      recette = recetteBackup;
      return false;
    } else {
      this.http.put('https://livre-recette-exercice.firebaseio.com/recettes.json', recette).subscribe();
      return true;
    }
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
