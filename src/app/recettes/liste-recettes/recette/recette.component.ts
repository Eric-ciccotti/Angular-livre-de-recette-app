import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recette } from '../../recettes.model';
import { RecettesService } from 'src/app/shared/recettes.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  @Input() recetteItem: Recette;

  onSelectedReceipe() {
    this.recetteService.recetteSelected.emit(this.recetteItem);
  }
  

  constructor(private recetteService: RecettesService) { }

  ngOnInit(): void {
  }

}
