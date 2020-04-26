import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';


@Injectable({
  providedIn: 'root'
})

export class AchatsService {
  ingredientsMaj = new EventEmitter<Ingredient[]>();

  //
  constructor() {}

  private ingredients: Ingredient[] = [
    new Ingredient('pomme',2),
    new Ingredient('tomate',5),
    new Ingredient('oignon',10),
    new Ingredient('fraise',5)
  ];

  onGetIngredients() {
    return this.ingredients.slice();
  }

  onAddIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsMaj.emit(this.ingredients.slice());
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsMaj.emit(this.ingredients.slice());
  }

}
