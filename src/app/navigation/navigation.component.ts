import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  isMenuCollapsed = true;

  sauvegarderRecette() {
    this.dataSortage.stockerRecette();
  }


  constructor(private dataSortage: DataStorageService) { }

  ngOnInit(): void {
  }

}
