import { RecettesService } from 'src/app/shared/recettes.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Recette } from './recettes.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Resolver qui va fetch les recettes avant le chargement de la route
 * important si on reload la page par exemple
 */

@Injectable({ providedIn: 'root' })
export class RecetteResolverService implements Resolve<Recette[]> {

  recette = this.recettesService.getRecette();

  constructor(private dataStorageService: DataStorageService, private recettesService: RecettesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    //le resolver subscribe pour moi automatiquement

    //ici on evite de récupérer à chaque fois les infos du serveurs, si on modifie une recette par exemple
    //on regarde si le tableau recette n'est pas vide, si il est vide alors on load des recettes , sinon on ne fait rien
    if (this.recette.length === 0) {
      return this.dataStorageService.recupererRecette();
    }
    return this.recette;
  }
}
