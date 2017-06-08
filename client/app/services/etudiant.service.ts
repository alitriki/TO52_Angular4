import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EtudiantService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  register(etudiant): Observable<any> {
    return this.http.post('/api/etudiant', JSON.stringify(etudiant), this.options);
  }

  login(credentials): Observable<any> {
    return this.http.post('/api/login', JSON.stringify(credentials), this.options);
  }

  getEtudiants(): Observable<any> {
    return this.http.get('/api/etudiants').map(res => res.json());
  }

  countEtudiants(): Observable<any> {
    return this.http.get('/api/etudiants/count').map(res => res.json());
  }

  addEtudiant(etudiant): Observable<any> {
    return this.http.post('/api/etudiant', JSON.stringify(etudiant), this.options);
  }

  getEtudiant(etudiant): Observable<any> {
    return this.http.get(`/api/etudiant/${etudiant._id}`).map(res => res.json());
  }

  editEtudiant(etudiant): Observable<any> {
    return this.http.put(`/api/etudiant/${etudiant._id}`, JSON.stringify(etudiant), this.options);
  }

  deleteEtudiant(etudiant): Observable<any> {
    return this.http.delete(`/api/etudiant/${etudiant._id}`, this.options);
  }

}
