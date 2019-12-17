import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/apiProvider/api.service';
import { Observable } from 'rxjs';
import { ClienteEntity } from 'src/app/entidades/clienteEntity';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private path = 'cliente';

  constructor( private api: ApiService ) {

  }
  public save(cliente: ClienteEntity): Observable<any> {
    return this.api
      .post(`${this.path}`, cliente);
  }
}
