import { DataStorageService } from '../shared/data-storage.service';
import { Recette } from './recettes.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Resolver qui va fetch les recettes avant le chargement de la route qui affiche les recettes
 */

@Injectable({ providedIn: 'root' })
export class RecetteResolverService implements Resolve<Recette[]> {

  constructor(private dataStorageService: DataStorageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    //le resolver subscribe pour moi automatiquement
    return this.dataStorageService.recupererRecette()

  }
}
