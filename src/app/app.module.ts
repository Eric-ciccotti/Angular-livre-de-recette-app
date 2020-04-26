import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RecettesComponent } from './recettes/recettes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListeRecettesComponent } from './recettes/liste-recettes/liste-recettes.component';
import { DetailRecetteComponent } from './recettes/detail-recette/detail-recette.component';
import { RecetteComponent } from './recettes/liste-recettes/recette/recette.component';
import { AchatsComponent } from './achats/achats.component';
import { EditionAchatsComponent } from './achats/edition-achats/edition-achats.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    RecettesComponent,
    NavigationComponent,
    ListeRecettesComponent,
    DetailRecetteComponent,
    RecetteComponent,
    AchatsComponent,
    EditionAchatsComponent,
    DropdownDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
