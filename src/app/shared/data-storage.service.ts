import { Recette } from './../recettes/recettes.model';
import { RecettesService } from './recettes.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recetteService: RecettesService) { }

  stockerRecette() {

    let recette = this.recetteService.getRecette();

    const RECETTES_BACKUP: Recette[] = [
      new Recette(
        'saucisson de loup', 'delicieuse cuisse de loup', 'https://lafaimdeloupca.files.wordpress.com/2018/01/linguines-crecc81meuses-au-citron-brocoli-et-saucisson.jpg',
        [
          new Ingredient('cuisse de loup', 2),
        ]),
      new Recette('poulet coco', 'délicieux poulet coco avec riz et sauce noix de coco', 'https://www.ptitchef.com/imgupl/recipe/poulet-au-lait-de-coco-et-curry--md-34612p42584.jpg',
        [
          new Ingredient('boite de lait de coco', 1),
          new Ingredient('filet de poulet', 2),
          new Ingredient('sac de riz basmati', 1)
        ]),
      new Recette('merguez au champagne', 'spécialité à base de merguez et de champagne luxueux', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Merguez_grilled.jpg',
        [
          new Ingredient('merguez de qualité dosée', 5),
          new Ingredient('bouteille de champagne bien mousseux', 1)
        ]),
    ];

    if (recette.length === 0) {
      recette = RECETTES_BACKUP;
    }

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
