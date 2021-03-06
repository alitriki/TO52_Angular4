import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Critere } from '../models/critere';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EntrepriseService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'x-www-form-urlencoded' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getEntreprises(): Observable<any> {
    return this.http.get('/api/entreprises').map(res => res.json());
  }

  getEntreprisesUnCritere(criteres): Observable<any> {
    let params = new URLSearchParams();
      params.set('criteres', JSON.stringify(criteres));
    return this.http.get('/api/entreprisesUnCritere/'+params).map(res => res.json());
  }

  getEntreprisesDeuxCriteres(criteres: Critere): Observable<any> {
    let params = new URLSearchParams();
      params.set('criteres', JSON.stringify(criteres));
    return this.http.get('/api/entreprisesDeuxCriteres/'+params).map(res => res.json());
  }

  getEntreprisesTroisCriteres(criteres: Critere): Observable<any> {
    let params = new URLSearchParams();
      params.set('criteres', JSON.stringify(criteres));
    return this.http.get('/api/entreprisesTroisCriteres/'+params).map(res => res.json());
  }

  getEntrepriseByName(nom: String): Observable<any> {
    return this.http.get(`/api/entrepriseByName/${nom}`).map(res => res.json());
  }

  getDomaines(): Observable<any> {
    return this.http.get('/api/domaines').map(res => res.json());
  }
  countEntreprises(): Observable<any> {
    return this.http.get('/api/entreprises/count').map(res => res.json());
  }

  addEntreprise(entreprise): Observable<any> {
    return this.http.post('/api/entreprise', JSON.stringify(entreprise), this.options);
  }

  getEntreprise(id: String): Observable<any> {
    return this.http.get(`/api/entreprise/${id}`).map(res => res.json());
  }

  editEntreprise(entreprise): Observable<any> {
    return this.http.put(`/api/entreprise/${entreprise._id}`, JSON.stringify(entreprise), this.options);
  }

  deleteEntreprise(entreprise): Observable<any> {
    return this.http.delete(`/api/entreprise/${entreprise._id}`, this.options);
  }

}
