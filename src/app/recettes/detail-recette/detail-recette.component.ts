import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../recettes.model';
import * as _ from "lodash";

import { RecettesService } from 'src/app/shared/recettes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.css']
})
export class DetailRecetteComponent implements OnInit {
  selectedRecette: Recette;
  id: number;

  
  constructor(
    private recettesService: RecettesService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.selectedRecette = this.recettesService.getRecetteByIndex(this.route.snapshot.params['id']);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.selectedRecette = this.recettesService.getRecetteByIndex(this.id);
        }
      )


  }

  onDetailAction(action: string) {
    switch (action) {

      case 'acheter':
        //copie de la recette selectionner : pour eviter que la quantité ajoutée change direct dans detail-recette
        const recetteCopy = _.cloneDeep(this.selectedRecette)
        this.recettesService.addIngredientsToAchat(recetteCopy)
        break;

      case 'editer':
        this.router.navigate(['edition'], {relativeTo: this.route});
        break;
      case 'supprimer':
        console.log('supprimer');
        break;
    }
  }
}
