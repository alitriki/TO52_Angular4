import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../services/entreprise.service';
import { Critere } from '../models/critere';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-stages-resultat',
  templateUrl: './stages-resultat.component.html',
  styleUrls: ['./stages-resultat.component.css'],
  providers: [EntrepriseService]
})
export class StagesResultatComponent implements OnInit {

  allowNewResult = false;
  resultCreationStatus = 'No results !';
  resultName = '';
  resultCreated = false;

  domaines= [];
  entreprise = {};
  entreprises1 = [];
  entreprises2 = [];
  entreprises3 = [];
  criteres : Critere={};


  onInputUpdate(event: any) {
    this.resultName = event.target.value;
  }

  onCreateResult() {
    this.resultCreationStatus = 'Result was added! Name is ' + this.resultName;
    this.resultCreated = true;
  }

  constructor(
              private entrepriseService: EntrepriseService,
              private route: ActivatedRoute) {
    this.criteres = JSON.parse(route.snapshot.params['criteres']);
    // this.criteres.domaine="domaine 2";
    // this.criteres.lieu="Mulhouse";
    // this.criteres.type="SSII";
   }

  ngOnInit() {
    this.getEntreprisesUnCritere(this.criteres);
    this.getEntreprisesDeuxCriteres(this.criteres);
    this.getEntreprisesTroisCriteres(this.criteres);
    // this.getDomaines();
  }


  getEntreprisesUnCritere(criteres : Critere) {
    this.entrepriseService.getEntreprisesUnCritere(criteres).subscribe(
      data => {this.entreprises1 = data;
      console.log(data)},
      error => console.log(error)
    );
  }

  getEntreprisesDeuxCriteres(criteres : Critere) {
    this.entrepriseService.getEntreprisesDeuxCriteres(criteres).subscribe(
      data => {this.entreprises2 = data;
      console.log(data)},
      error => console.log(error)
    );
  }

  getEntreprisesTroisCriteres(criteres : Critere) {
    this.entrepriseService.getEntreprisesTroisCriteres(criteres).subscribe(
      data => {this.entreprises3 = data;
      console.log(data)},
      error => console.log(error)
    );
  }

  // getDomaines() {
  //   this.entrepriseService.getDomaines().subscribe(
  //     data => {this.domaines = data;
  //     console.log(data)},
  //     error => console.log(error)
  //   );
  // }
}
