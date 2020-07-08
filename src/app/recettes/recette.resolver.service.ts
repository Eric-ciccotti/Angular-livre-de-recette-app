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
    if (this.recette.length === 0) {
      return this.dataStorageService.recupererRecette();
    }
  }
}
