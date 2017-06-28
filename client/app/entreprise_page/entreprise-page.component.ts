import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { EntrepriseService } from '../services/entreprise.service';
import { SiteService } from '../services/site.service';
import { StageService } from '../services/stage.service';
import { EntretienService } from '../services/entretien.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Entreprise} from '../models/entreprise';
import { Stage} from '../models/stage';
import { Entretien} from '../models/entretien';
import { Site } from '../models/site';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise-page.component.html',
  styleUrls: ['./entreprise-page.component.scss'],
  providers: [EntrepriseService, SiteService, StageService, EntretienService]
})
export class EntreprisePageComponent implements OnInit {


  entreprise: Entreprise;
  sites: Site[];
  contactId = 0;
  id: String;
  stagesST20 : Stage[];
  stagesST40 : Stage[];
  stagesST50 : Stage[];
  entretiensST20 : Entretien[];
  entretiensST40 : Entretien[];
  entretiensST50 : Entretien[];

  constructor(
    private entrepriseService: EntrepriseService,
    private siteService: SiteService,
    private stageService: StageService,
    private entretienService: EntretienService,
    private http: Http,
    private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }
//
//
//
//


// Radar
public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

public radarChartData:any = [
  {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
];
public radarChartType:string = 'radar';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}



//
//
//
//
  ngOnInit() {
    this.getEntrepriseById(this.id);
    this.getStagesST20ByEntreprise(this.id);
    this.getStagesST40ByEntreprise(this.id);
    this.getStagesST50ByEntreprise(this.id);
    this.getEntretiensST20ByEntreprise(this.id);
    this.getEntretiensST40ByEntreprise(this.id);
    this.getEntretiensST50ByEntreprise(this.id);
    // console.log(this.entreprise.nom);
  }

  getEntrepriseById(id) {
    this.entrepriseService.getEntreprise(id).subscribe(
      data => this.entreprise = data,
      error => console.log(error)
    );
  }

  //not working
  showContacts(contact: number) {
    this.contactId = contact;
  }

getStagesST20ByEntreprise(entrepriseId){
  this.stageService.getStagesST20ByEntrepriseId(entrepriseId).subscribe(
    data => {this.stagesST20 = data;
      // console.log(data);
    },
    error => console.log(error)
  );
}

getStagesST40ByEntreprise(entrepriseId){
  this.stageService.getStagesST40ByEntrepriseId(entrepriseId).subscribe(
    data => {this.stagesST40 = data;
      // console.log(data);
    },
    error => console.log(error)
  );
}

getStagesST50ByEntreprise(entrepriseId){
  this.stageService.getStagesST50ByEntrepriseId(entrepriseId).subscribe(
    data => {this.stagesST50 = data;
      // console.log(data);
    },
    error => console.log(error)
  );
}


getEntretiensST20ByEntreprise(entrepriseId){
  this.entretienService.getEntretiensST20ByEntrepriseId(entrepriseId).subscribe(
    data => {this.entretiensST20 = data;
      // console.log(data);
    },
    error => console.log(error)
  );
}

getEntretiensST40ByEntreprise(entrepriseId){
  this.entretienService.getEntretiensST40ByEntrepriseId(entrepriseId).subscribe(
    data => {this.entretiensST40 = data;
      // console.log(data);
    },
    error => console.log(error)
  );
}

getEntretiensST50ByEntreprise(entrepriseId){
  this.entretienService.getEntretiensST50ByEntrepriseId(entrepriseId).subscribe(
    data => {this.entretiensST50 = data;
      // console.log(data);
    },
    error => console.log(error)
  );
}



getNoteGenerale(stage : Stage){
  return (stage.integration_cdt_travail + stage.opportunites_carriere + stage.dirigeants + stage.remuneration_aventages + stage.structure_organisation)/5;
}

getNoteGeneraleEntretien(entretien : Entretien){
  return ((5-entretien.difficultee) + entretien.appreciation )/2;
}

  // getSitesIn(ids) {
  //   this.siteService.getSitesIn(ids).subscribe(
  //     data => this.sites = data,
  //     error => console.log(error)
  //   );
  // }
}
