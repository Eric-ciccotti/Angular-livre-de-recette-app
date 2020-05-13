import { Subscription } from 'rxjs';
import { Component, OnInit, Output, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { AchatsService } from 'src/app/shared/achats.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edition-achats',
  templateUrl: './edition-achats.component.html',
  styleUrls: ['./edition-achats.component.css']
})
export class EditionAchatsComponent implements OnInit, OnDestroy {
  @ViewChild('achatForm', {static: false}) achatForm: NgForm;
  subscription: Subscription;
  editionMode = false;
  editionModeItemIndex: number;
  ingredientEnEdition;

  constructor(private achatsService: AchatsService) { }

  ngOnInit(): void {
    this.subscription = this.achatsService.editionIngredient.subscribe(
      (index: number) => {
        this.editionMode = true;
        this.editionModeItemIndex = index;
        this.ingredientEnEdition= this.achatsService.onGetIngredient(index);
        this.achatForm.setValue({
          nomIngredient: this.ingredientEnEdition.nom,
          quantiteIngredient: this.ingredientEnEdition.quantite
        })
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  onAddIngredient() {
    const nom = this.achatForm.value.nomIngredient;
    const quantite = +this.achatForm.value.quantiteIngredient;
    this.achatsService.onAddIngredient({nom: nom , quantite: quantite })
  }

  onDeleteIngredient() {

  }



}
