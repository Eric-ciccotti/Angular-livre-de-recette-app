import { Recette } from './../recettes.model';
import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { RecettesService } from 'src/app/shared/recettes.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.css']
})
export class ListeRecettesComponent implements OnInit, OnDestroy {
  recettes: Recette[] = [];
  recetteMajSub: Subscription;

  constructor(private recettesService: RecettesService) {
  }

  ngOnInit(): void {
    this.recettes = this.recettesService.getRecette();
    this.recetteMajSub = this.recettesService.recettesMaj.subscribe(
      (recetteRecu: Recette[]) => {
        this.recettes = recetteRecu;
      }
    )
  }

  ngOnDestroy() {
    this.recetteMajSub.unsubscribe()
  }
}
