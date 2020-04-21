import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recette } from '../../recettes.model';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  @Input() recetteItem: Recette;
  @Output() recetteSelected = new EventEmitter<void>();

  onSelectedReceipe() {
    this.recetteSelected.emit();
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
