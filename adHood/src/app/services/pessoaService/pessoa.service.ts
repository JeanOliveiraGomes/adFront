import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/apiProvider/api.service';
import { PessoaEntity } from 'src/app/entidades/pessoaEntity';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private path = 'pessoa';

  constructor( private api: ApiService ) {

  }

  public save(pessoa: PessoaEntity): Observable<any> {
    return this.api
      .post(`${this.path}`,  pessoa);
  }

  public findByNome(nome: string): Observable<any> {
    return this.api
      .get(`${this.path}/findByNome?nome=${nome}`);
  }

  public findAll() {
    return this.api.get(`${this.path}`);
  }

  public delete(id: number): Observable<any> {
    return this.api
      .delete(`${this.path}/delete?id=${id}`);
  }

}
