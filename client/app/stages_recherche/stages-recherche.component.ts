import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../services/entreprise.service';
import { Critere } from '../models/critere';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stages-recherche',
  templateUrl: './stages-recherche.component.html',
  styleUrls: ['./stages-recherche.component.css'],
  providers: [EntrepriseService]
})
export class StagesRechercheComponent implements OnInit {

  domaines: String[];
  criteres: Critere = {};

  constructor(
    private entrepriseService: EntrepriseService,
    private router: Router) { }

  ngOnInit() {
    this.getDomaines();
  }

  recherche_id: number = 20;
  recherche_status: string = 'null';

  getStatus() {
    return this.recherche_status;
  }
  getDomaines() {
    this.entrepriseService.getDomaines().subscribe(
      data => this.domaines = data,
      error => console.log(error)
    );
  }
  rechercheParCriteres() {
    if (!this.criteres.domaine) {
      this.criteres.domaine = this.domaines[0];
    };
    console.log(JSON.stringify(this.criteres));
    this.router.navigate(['./stages_resultat/'+JSON.stringify(this.criteres)]);

  }
}
