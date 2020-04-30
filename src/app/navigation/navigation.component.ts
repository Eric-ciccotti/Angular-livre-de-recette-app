import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  isMenuCollapsed = true;


  constructor() { }

  ngOnInit(): void {
  }

}
