import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recette } from '../recettes.model';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.css']
})
export class DetailRecetteComponent implements OnInit {
  @Input() selectedRecette: Recette;

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    console.log(this.selectedRecette);
  }

}
