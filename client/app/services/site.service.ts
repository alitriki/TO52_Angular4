import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SiteService {

  private headers = new Headers({ 'Content-Type': 'applisiteion/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getSites(): Observable<any> {
    return this.http.get('/api/sites').map(res => res.json());
  }

  getSitesIn(ids: [String]): Observable<any> {
    return this.http.get(`/api/site/${ids}`).map(res => res.json());
  }

  countSites(): Observable<any> {
    return this.http.get('/api/sites/count').map(res => res.json());
  }

  addSite(site): Observable<any> {
    return this.http.post('/api/site', JSON.stringify(site), this.options);
  }

  getSite(id: String): Observable<any> {
    return this.http.get(`/api/site/${id}`).map(res => res.json());
  }

  editSite(site): Observable<any> {
    return this.http.put(`/api/site/${site._id}`, JSON.stringify(site), this.options);
  }

  deleteSite(site): Observable<any> {
    return this.http.delete(`/api/site/${site._id}`, this.options);
  }

}
