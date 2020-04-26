import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recette } from '../recettes.model';
import { RecettesService } from 'src/app/shared/recettes.service';


@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.css']
})
export class ListeRecettesComponent implements OnInit {
  recettes: Recette[] = [];

  constructor(private recettesService: RecettesService) { 
  }

  ngOnInit(): void {
    this.recettes =  this.recettesService.getRecette();
  }





}
