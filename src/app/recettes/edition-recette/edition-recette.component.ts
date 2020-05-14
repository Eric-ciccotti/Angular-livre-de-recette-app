import { Ingredient } from './../../shared/ingredient.model';
import { RecettesService } from 'src/app/shared/recettes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edition-recette',
  templateUrl: './edition-recette.component.html',
  styleUrls: ['./edition-recette.component.css']
})
export class EditionRecetteComponent implements OnInit {
  id: number;
  editionMode = false;
  editionRecetteForm: FormGroup;

  constructor(private route: ActivatedRoute,
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

  onSubmit() {
    console.log(this.editionRecetteForm.value);
    console.log();
  }

  onGetImageUrl() {
    return this.editionRecetteForm.get('imageRecette').value ?
      this.editionRecetteForm.get('imageRecette').value :
      'https://pureandapplied.com/preview/wp-content/uploads/2013/05/MyRecipes.jpg'
  }





  private initForm() {

    let nomRecette = '';
    let imageRecette = '';
    let descriptionRecette = '';
    let ingredientsFormArray = this.fb.array([]);

    if (this.editionMode) {
      let recette = this.recetteService.getRecetteByIndex(this.id);
      nomRecette = recette.nomRecette;
      imageRecette = recette.imageChemin;
      descriptionRecette = recette.description;

      if (recette['ingredients']) {
        for (let ingredient of recette.ingredients) {
          ingredientsFormArray.push(
            this.fb.group({
              text: ingredient.nom,
              number: ingredient.quantite
            }));
        }
      }

      //SANS LE FORM BUILDER SERVICE
      // this.editionRecetteForm = new FormGroup({
      //   'nomRecette': new FormControl(nomRecette),
      //   'imageRecette': new FormControl(imageRecette),
      //   'descriptionRecette': new FormControl(descriptionRecette),
      //   'ingredients': ingredientsFormArray
      // })

      //AVEC LE FORM BUILDER SERVICE
      this.editionRecetteForm = this.fb.group({
        nomRecette: [nomRecette],
        imageRecette: [imageRecette],
        descriptionRecette: [descriptionRecette],
        ingredients: ingredientsFormArray
      })

    }
  }

    //getter pour récupérer l'array de controls dans le template
    get ingredientsFormArray() {
      return this.editionRecetteForm.get('ingredients') as FormArray;
    }






}
