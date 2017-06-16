import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EntretienService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'x-www-form-urlencoded' });
  private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

getEntretiensST20ByEntrepriseId(entrepriseId : String): Observable<any> {
  return this.http.get(`/api/entretiensST20/${entrepriseId}`).map(res => res.json());
}

getEntretiensST40ByEntrepriseId(entrepriseId : String): Observable<any> {
  return this.http.get(`/api/entretiensST40/${entrepriseId}`).map(res => res.json());
}

getEntretiensST50ByEntrepriseId(entrepriseId : String): Observable<any> {
  return this.http.get(`/api/entretiensST50/${entrepriseId}`).map(res => res.json());
}
  }
