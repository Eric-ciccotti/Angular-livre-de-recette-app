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

  onSauvegarderRecette() {
    this.dataSortageService.stockerRecette();
  }

  onRecupererRecette() {
    this.dataSortageService.recupererRecette().subscribe();
  }

  constructor(private dataSortageService: DataStorageService) { }

  ngOnInit(): void {
  }

}
