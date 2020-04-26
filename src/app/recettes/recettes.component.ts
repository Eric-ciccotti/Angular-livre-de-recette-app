import { Component, OnInit } from '@angular/core';
import { Recette } from './recettes.model';
import { RecettesService } from '../shared/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css'],
  providers: [RecettesService]
})
export class RecettesComponent implements OnInit {
  selectedRecette: Recette;
  constructor(private recetteService: RecettesService) { }

  ngOnInit(): void {
    this.recetteService.recetteSelected
      .subscribe(
        (recette: Recette) => {
          this.selectedRecette = recette;
        }

    )
  }

}
