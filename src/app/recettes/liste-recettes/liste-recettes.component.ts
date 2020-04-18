import { Component, OnInit } from '@angular/core';
import { Recette } from '../recettes.model';

@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.css']
})
export class ListeRecettesComponent implements OnInit {
  recettes: Recette[] = [
    new Recette('saucisson de loup','délicieux poulet coco avec riz et sauce noix de coco','https://www.ptitchef.com/imgupl/recipe/poulet-au-lait-de-coco-et-curry--md-34612p42584.jpg'),
    new Recette('poulet coco','délicieux poulet coco avec riz et sauce noix de coco','https://www.ptitchef.com/imgupl/recipe/poulet-au-lait-de-coco-et-curry--md-34612p42584.jpg'),

    new Recette('merguez au champagne','délicieux poulet coco avec riz et sauce noix de coco','https://www.ptitchef.com/imgupl/recipe/poulet-au-lait-de-coco-et-curry--md-34612p42584.jpg')
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
