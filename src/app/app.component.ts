import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navChoice: string = '';

  onNavChoice(event: string) {
    this.navChoice = event === 'recette' ? 'recette' : 'achat';
  }
}
