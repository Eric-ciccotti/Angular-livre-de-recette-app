import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edition-recette',
  templateUrl: './edition-recette.component.html',
  styleUrls: ['./edition-recette.component.css']
})
export class EditionRecetteComponent implements OnInit {
  id: number;
  editionMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editionMode = params['id'] != null;
          console.log(this.editionMode) 
        }
      )
  }

}
