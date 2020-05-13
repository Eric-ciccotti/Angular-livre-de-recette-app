import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchatsComponent } from './achats/achats.component';
import { DetailRecetteComponent } from './recettes/detail-recette/detail-recette.component';
import { EditionRecetteComponent } from './recettes/edition-recette/edition-recette.component';
import { RecettesComponent } from './recettes/recettes.component';
import { SelectionRecetteComponent } from './recettes/selection-recette/selection-recette.component';


const routes: Routes = [
  {path: '', redirectTo: '/recettes', pathMatch: 'full'},
  {path: 'recettes', component: RecettesComponent, children: [
    {path: '', component: SelectionRecetteComponent},
    {path: 'nouvelle-recette', component: EditionRecetteComponent},
    {path: ':id', component: DetailRecetteComponent},
    {path: ':id/edition', component: EditionRecetteComponent}
  ]},
  {path: 'achats', component: AchatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
