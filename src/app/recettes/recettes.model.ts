import { Ingredient } from '../shared/ingredient.model';

export class Recette {
    public nomRecette: string;
    public description: string;
    public imageChemin: string;
    public ingredients: Ingredient[];

    constructor(nomRecette: string, description: string, imageChemin: string, ingredients: Ingredient[]) {
        this.nomRecette = nomRecette;
        this.description = description;
        this.imageChemin = imageChemin;
        this.ingredients = ingredients;
    }


}