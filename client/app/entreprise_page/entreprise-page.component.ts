import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { EntrepriseService } from '../services/entreprise.service';
import { SiteService } from '../services/site.service';
import { ToastComponent } from '../shared/toast/toast.component';


@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise-page.component.html',
  styleUrls: ['./entreprise-page.component.scss'],
  providers: [EntrepriseService, SiteService]
})
export class EntreprisePageComponent implements OnInit {


  entreprise = {};
  sites = [];
  // site = {};
  // siteId: String;
  // siteIds: [String];
  id: String;

  constructor(private entrepriseService: EntrepriseService,
              private siteService: SiteService,
              private http: Http,
              private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getEntrepriseById(this.id);
    console.log(this.entreprise);
  }

  getEntrepriseById(id) {
    this.entrepriseService.getEntreprise(id).subscribe(
      data => this.entreprise = data,
      error => console.log(error)
    );
  }

  getSitesIn(ids) {
    this.siteService.getSitesIn(ids).subscribe(
      data => this.sites = data,
      error => console.log(error)
    );
  }
}
