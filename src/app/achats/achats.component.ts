import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('pomme',2),
    new Ingredient('tomate',5),
    new Ingredient('oignon',10),
    new Ingredient('fraise',5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
