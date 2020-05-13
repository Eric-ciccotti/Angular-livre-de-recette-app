import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { AchatsService } from '../shared/achats.service';
import { RecettesService } from '../shared/recettes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  private achatSub: Subscription;

  constructor(private achatService: AchatsService) { }

  ngOnInit(): void {
      this.ingredients = this.achatService.onGetIngredients();

      //souscription SI l'évenement enregistre un changement...
      this.achatSub = this.achatService.ingredientsMaj.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  onEditIngredient(index: number) {
    this.achatService.editionIngredient.next(index);
  }

  ngOnDestroy() {
    this.achatSub.unsubscribe()
  }

}
