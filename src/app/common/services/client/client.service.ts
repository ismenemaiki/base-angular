import { Injectable } from '@angular/core';
import { Client } from '../../models/client.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  register(clientRegister: Client): Observable<any> {
    return of([
      Client.register(clientRegister),
    ]).pipe(
      map(item => item.filter(client => client))
    );
  }
  constructor() { }
}
