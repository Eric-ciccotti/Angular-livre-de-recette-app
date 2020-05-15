import { AchatsService } from 'src/app/shared/achats.service';
import { Ingredient } from './../../shared/ingredient.model';
import { RecettesService } from 'src/app/shared/recettes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Recette } from '../recettes.model';

@Component({
  selector: 'app-edition-recette',
  templateUrl: './edition-recette.component.html',
  styleUrls: ['./edition-recette.component.css']
})
export class EditionRecetteComponent implements OnInit {
  id: number;
  editionMode = false;
  editionRecetteForm: FormGroup;
  emptyImage: string = 'https://pureandapplied.com/preview/wp-content/uploads/2013/05/MyRecipes.jpg';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recetteService: RecettesService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editionMode = params['id'] != null; // "est-ce que il ya un paramètre ? donc non PAS nul ?"
          this.initForm()
        }
      )
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onSubmit() {
    const nouvelleRecette = this.editionRecetteForm.value;
    console.dir(nouvelleRecette);

    if (this.editionMode) {
      this.recetteService.updateRecette(this.id, nouvelleRecette)
    } else {
      this.recetteService.addRecette(nouvelleRecette);
    }

    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.editionRecetteForm.get('ingredients')).push(
      this.fb.group({
        nom: [null, Validators.required],
        quantite: [null, [
          Validators.required,
          Validators.pattern(/^[0-9]+[1+9]*$/)]]
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.editionRecetteForm.get('ingredients')).removeAt(index);
  }

  private initForm() {

    let nomRecette = '';
    let imageRecette = '';
    let descriptionRecette = '';
    let ingredientsFormArray = this.fb.array([]);

    if (this.editionMode) {
      let recette = this.recetteService.getRecetteByIndex(this.id);
      console.dir(recette);
      nomRecette = recette.nomRecette;
      imageRecette = recette.imageChemin;
      descriptionRecette = recette.description;

      if (recette['ingredients']) {
        for (let ingredient of recette.ingredients) {
          ingredientsFormArray.push(
            this.fb.group({
              nom: [ingredient.nom, Validators.required],
              quantite: [
                ingredient.quantite,
                [Validators.required, Validators.pattern(/^[0-9]+[1+9]*$/)]
              ]
            }));
        }
      }
    }
    //AVEC LE FORM BUILDER SERVICE
    this.editionRecetteForm = this.fb.group({
      nomRecette: [nomRecette, Validators.required],
      description: [descriptionRecette, Validators.required],
      imageChemin: [imageRecette, Validators.required],
      ingredients: ingredientsFormArray
    })
    //SANS LE FORM BUILDER SERVICE
    // this.editionRecetteForm = new FormGroup({
    //   'nomRecette': new FormControl(nomRecette),
    //   'imageRecette': new FormControl(imageRecette),
    //   'descriptionRecette': new FormControl(descriptionRecette),
    //   'ingredients': ingredientsFormArray
    // })
  }

  //getter pour récupérer l'array de controls dans le template
  get ingredientsFormArray() {
    return this.editionRecetteForm.get('ingredients') as FormArray;
  }
}


