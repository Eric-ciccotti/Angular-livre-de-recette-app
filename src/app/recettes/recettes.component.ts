import { Component } from '@angular/core';
import { RecettesService } from '../shared/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css'],
  providers: [RecettesService]
})
export class RecettesComponent{
  constructor() { }
}
