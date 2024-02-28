import { environment } from './../../../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { Menu } from '../../models/menu.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MenuService {
  getMenus(): Observable<Menu[]> {
    return of([
      Menu.build({name: 'i18n.menu.item-1', route: 'home', featureFlag: 'home'}),
      Menu.build({name: 'i18n.menu.item-2', route: 'about', featureFlag: 'about'}),
      Menu.build({name: 'i18n.menu.client', route: 'client', featureFlag: 'client'}),
      Menu.build({name: 'i18n.menu.product', route: 'product', featureFlag: 'product'}),
      Menu.build({name: 'i18n.menu.credit', route: 'credit', featureFlag: 'credit'}),
      Menu.build({name: 'i18n.menu.sale', route: 'sale', featureFlag: 'sale'}),
    ]).pipe(
      map(item => item.filter(menu => menu.featureFlag && environment?.featureFlags[menu.featureFlag]))
    );
  }
}
