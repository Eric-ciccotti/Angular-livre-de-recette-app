import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() navChoice = new EventEmitter<string>();

  collapsed: boolean = true;
  isMenuCollapsed = true;

  onNav(choice) {
    this.navChoice.emit(choice);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
