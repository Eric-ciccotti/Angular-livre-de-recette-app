import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AchatsService } from 'src/app/shared/achats.service';

@Component({
  selector: 'app-edition-achats',
  templateUrl: './edition-achats.component.html',
  styleUrls: ['./edition-achats.component.css']
})
export class EditionAchatsComponent implements OnInit {
  @ViewChild('nomIngredient', { static: false }) nomIngredient: ElementRef;
  @ViewChild('quantiteIngredient', { static: false }) quantiteIngredient: ElementRef;

  constructor(private achatsService: AchatsService) { }

  ngOnInit(): void {
  }


  onAddIngredient() {
    const nom = this.nomIngredient.nativeElement.value;
    const quantite = +this.quantiteIngredient.nativeElement.value;
    this.achatsService.onAddIngredient({nom: nom, quantite: quantite})
  }



}
