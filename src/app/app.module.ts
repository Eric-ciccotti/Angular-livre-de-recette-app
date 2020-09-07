import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecettesComponent } from './recettes/recettes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListeRecettesComponent } from './recettes/liste-recettes/liste-recettes.component';
import { DetailRecetteComponent } from './recettes/detail-recette/detail-recette.component';
import { RecetteComponent } from './recettes/liste-recettes/recette/recette.component';
import { AchatsComponent } from './achats/achats.component';
import { EditionAchatsComponent } from './achats/edition-achats/edition-achats.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { EditionRecetteComponent } from './recettes/edition-recette/edition-recette.component';
import { RoutingModule } from './app.routing.module';
import { SelectionRecetteComponent } from './recettes/selection-recette/selection-recette.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


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
    EditionRecetteComponent,
    SelectionRecetteComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
