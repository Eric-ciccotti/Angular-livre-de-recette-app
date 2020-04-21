import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recette } from '../recettes.model';


@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.css']
})
export class ListeRecettesComponent implements OnInit {
  @Output() recetteSelected = new EventEmitter<Recette>();

  onRecetteSelectedTransfer(recette: Recette) {
    this.recetteSelected.emit(recette)
  }

  recettes: Recette[] = [
    new Recette('saucisson de loup','délicieux poulet coco avec riz et sauce noix de coco','https://lafaimdeloupca.files.wordpress.com/2018/01/linguines-crecc81meuses-au-citron-brocoli-et-saucisson.jpg'),
    new Recette('poulet coco','délicieux poulet coco avec riz et sauce noix de coco','https://www.ptitchef.com/imgupl/recipe/poulet-au-lait-de-coco-et-curry--md-34612p42584.jpg'),

    new Recette('merguez au champagne','délicieux poulet coco avec riz et sauce noix de coco','https://upload.wikimedia.org/wikipedia/commons/f/f4/Merguez_grilled.jpg')
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
