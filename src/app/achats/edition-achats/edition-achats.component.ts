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
  indexIngredientSelect: number;
  ingredientEnEdition;

  constructor(private achatsService: AchatsService) { }

  ngOnInit(): void {
    //si je clic sur un ingredient je m'abandonne au flux qui envoi l'index de celui-ci
    this.subscription = this.achatsService.editionIngredient.subscribe(
      (index: number) => {
        this.editionMode = true;
        this.indexIngredientSelect = index;
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


  onSubmitIngredient() {
    const nom = this.achatForm.value.nomIngredient;
    const quantite = +this.achatForm.value.quantiteIngredient;
    if (this.editionMode) {
      this.achatsService.onUpdateIngredient(this.indexIngredientSelect, {nom: nom , quantite: quantite})
    } else {
      this.achatsService.onAddIngredient({nom: nom , quantite: quantite})
    }
    this.achatForm.reset();
    this.editionMode = false;
  }

  onClear() {
    this.achatForm.reset()
    this.editionMode = false;
  }

  onDelete() {
    this.achatsService.onDeleteIngredient(this.indexIngredientSelect);
    this.onClear();
  }



}
