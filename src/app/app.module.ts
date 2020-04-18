import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecettesComponent } from './recettes/recettes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListeRecettesComponent } from './recettes/liste-recettes/liste-recettes.component';
import { DetailRecetteComponent } from './recettes/detail-recette/detail-recette.component';
import { RecetteComponent } from './recettes/liste-recettes/recette/recette.component';
import { AchatsComponent } from './achats/achats.component';
import { EditionAchatsComponent } from './achats/edition-achats/edition-achats.component';


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

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
