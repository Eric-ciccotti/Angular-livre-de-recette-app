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
  
  onAddIngredient(ingredient: Ingredient, publishChanges = true) {

    //est ce que ingredient en parametre === ingredient dans le service ? oui donner index sinon -1
    const index = this.ingredients.findIndex(ing => ing.nom === ingredient.nom);

    if (index === -1) {
      this.ingredients.push(ingredient);
    } else {
      this.ingredients[index].quantite += ingredient.quantite; 
    }
    //pour eviter d'emit des events pour rien (quand on fait onAddIngredients) 
    if (publishChanges) {
      this.ingredientsMaj.emit(this.ingredients.slice());
    }
  }
  
  onAddIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(ing => this.onAddIngredient(ing, false))
    this.ingredientsMaj.emit(this.ingredients.slice());
  }


}
