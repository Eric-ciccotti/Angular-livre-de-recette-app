import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../recettes.model';
import * as _ from "lodash";

import { RecettesService } from 'src/app/shared/recettes.service';


@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.css']
})
export class DetailRecetteComponent implements OnInit {
  @Input() selectedRecette: Recette;

  constructor(private recettesService: RecettesService) {
  }



  ngOnInit(): void {

  }

  onDetailAction(action: string) {
    switch (action) {

      case 'acheter':
        //copie de la recette selectionner : pour eviter que la quantité ajoutée change direct dans detail-recette
        const recetteCopy = _.cloneDeep(this.selectedRecette)
        this.recettesService.addIngredientsToAchat(recetteCopy)
        break;

      case 'editer':
        console.log('editer');
        break;
      case 'supprimer':
        console.log('supprimer');
        break;
    }
  }
}
