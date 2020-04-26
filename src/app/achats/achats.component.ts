import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { AchatsService } from '../shared/achats.service';
import { RecettesService } from '../shared/recettes.service';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private achatService: AchatsService) { }

  ngOnInit(): void {
      this.ingredients = this.achatService.onGetIngredients();

      //souscription SI l'évenement enregistre un changement...
      this.achatService.ingredientsMaj.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

}
