import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../../recettes.model';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  @Input() recetteItem: Recette;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
