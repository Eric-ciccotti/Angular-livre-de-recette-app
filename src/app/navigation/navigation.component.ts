import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() navChoice = new EventEmitter<string>();

  onNav(choice) {
    this.navChoice.emit(choice);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
