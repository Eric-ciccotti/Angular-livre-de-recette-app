import { Injectable } from '@angular/core';
import { Recette } from '../recettes/recettes.model';
import { Ingredient } from './ingredient.model';
import { AchatsService } from './achats.service';
import * as _ from 'lodash';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class RecettesService {
  recettesMaj = new Subject<Recette[]>();

  // private recettes: Recette[] = [
  //   new Recette(
  //     'saucisson de loup', 'delicieuse cuisse de loup', 'https://lafaimdeloupca.files.wordpress.com/2018/01/linguines-crecc81meuses-au-citron-brocoli-et-saucisson.jpg',
  //     [
  //       new Ingredient('cuisse de loup', 2),
  //     ]),
  //   new Recette('poulet coco', 'délicieux poulet coco avec riz et sauce noix de coco', 'https://www.ptitchef.com/imgupl/recipe/poulet-au-lait-de-coco-et-curry--md-34612p42584.jpg',
  //     [
  //       new Ingredient('boite de lait de coco', 1),
  //       new Ingredient('filet de poulet', 2),
  //       new Ingredient('sac de riz basmati', 1)
  //     ]),
  //   new Recette('merguez au champagne', 'spécialité à base de merguez et de champagne luxueux', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Merguez_grilled.jpg',
  //     [
  //       new Ingredient('merguez de qualité dosée', 5),
  //       new Ingredient('bouteille de champagne bien mousseux', 1)
  //     ]),
  // ];

  private recettes: Recette[] = [];

  constructor(private achatsService: AchatsService) { }

  getRecette() {
    return this.recettes.slice();
  }

  getRecetteByIndex(index: number) {
    return _.cloneDeep(this.recettes[index]);
  }

  addIngredientsToAchat(selectedRecette) {
    this.achatsService.onAddIngredients(selectedRecette.ingredients)
    this.achatsService.ingredientsMaj.next(selectedRecette.ingredients)
  }

  addRecette(recette: Recette) {
    this.recettes.unshift(recette);
    this.recettesMaj.next(this.recettes.slice());
  }

  addRecettes(recettes: Recette[]) {
    this.recettes = recettes;
    this.recettesMaj.next(recettes.slice());
  }

  updateRecette(index: number, nouvelleRecette: Recette) {
    this.recettes[index] = nouvelleRecette;
    this.recettesMaj.next(this.recettes.slice());
  }

  deleteRecette(index: number) {
    this.recettes.splice(index, 1);
    this.recettesMaj.next(this.recettes.slice());
  }

}
