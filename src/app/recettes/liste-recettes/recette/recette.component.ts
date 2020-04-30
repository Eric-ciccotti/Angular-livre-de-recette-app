import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recette } from '../../recettes.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  @Input() recetteItem: Recette;
  @Input() index: number;

  onSelectedReceipe() {
    // this.recetteService.recetteSelected.emit(this.recetteItem);
    // this.router.navigate(['detail', this.index], {relativeTo: this.route});
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
