import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../recettes.model';

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
      this.recettesService.addIngredientsToAchat(this.selectedRecette)
      console.log();
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
