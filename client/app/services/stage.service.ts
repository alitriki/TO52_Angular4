import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StageService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'x-www-form-urlencoded' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getStagesST20ByEntrepriseId(entrepriseId: String): Observable<any> {
    return this.http.get(`/api/stagesST20/${entrepriseId}`).map(res => res.json());
  }

  getStagesST40ByEntrepriseId(entrepriseId: String): Observable<any> {
    return this.http.get(`/api/stagesST40/${entrepriseId}`).map(res => res.json());
  }

  getStagesST50ByEntrepriseId(entrepriseId: String): Observable<any> {
    return this.http.get(`/api/stagesST50/${entrepriseId}`).map(res => res.json());
  }

  getEntreprisesByStudentNb(type_stage: String): Observable<any> {
    return this.http.get(`/api/entreprisesByStudentNb/${type_stage}`).map(res => res.json());
  }

  getEntreprisesByAvis(type_stage: String): Observable<any> {
    return this.http.get(`/api/entreprisesByAvis/${type_stage}`).map(res => res.json());
  }

  getEntreprisesBySalaire(type_stage: String): Observable<any> {
    return this.http.get(`/api/entreprisesBySalaire/${type_stage}`).map(res => res.json());
  }

}
