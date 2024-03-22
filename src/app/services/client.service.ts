import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filterList } from '../common/functions/filter';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClientList(): Observable<any> {
    return of([
      {
        id: 1,
        name: "Maiki",
        phoneNumber: 1199990000,
        address: " Rua Penedo da Saudade, 37 Rua Penedo da Saudade, 37",
      },
      { id: 2, name: "Bruno", phoneNumber: 1199990000, address: "Rua XYZQ" },
      { id: 3, name: "Helen", phoneNumber: 1199990000, address: "Rua XYZW" },
      { id: 4, name: "Juliano", phoneNumber: 1199990000, address: "Rua XYZE" },
      { id: 5, name: "Maria", phoneNumber: 1199990000, address: "Rua XYZR" },
      { id: 6, name: "Carlos", phoneNumber: 1199990000, address: "Rua XYZT" },
      { id: 7, name: "Maria", phoneNumber: 1199990000, address: "Rua XYZY" },
      { id: 8, name: "Gabriel", phoneNumber: 1199990000, address: "Rua XYZU" },
      { id: 9, name: "Daniela", phoneNumber: 1199990000, address: "Rua XYZI" },
      { id: 10, name: "Eduardo", phoneNumber: 1199990000, address: "Rua XYZO" },
      { id: 11, name: "Maria", phoneNumber: 1199990000, address: "Rua XYZO" },
      { id: 12, name: "Jessica", phoneNumber: 1199990000, address: "Rua XYZO" },
    ])
  }

  getListFiltred(list: Array<any>, filters: Array<any>): Observable<any> {
    return of(filterList(list, filters))
  }
}
