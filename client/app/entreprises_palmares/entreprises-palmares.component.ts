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
import { Result } from '../models/result';

@Component({
  selector: 'app-entreprises-palmares',
  templateUrl: './entreprises-palmares.component.html',
  styleUrls: ['./entreprises-palmares.component.css'],
  providers: [EntrepriseService, SiteService, StageService, EntretienService]
})
export class EntreprisesPalmaresComponent implements OnInit {

  entreprise: Entreprise;
  entreprises: Entreprise[];
  sites: Site[];
  contactId = 0;
  id: String;
  stagesST20: Stage[];
  stagesST40: Stage[];
  stagesST50: Stage[];
  entretiensST20: Entretien[];
  entretiensST40: Entretien[];
  entretiensST50: Entretien[];
  result: Result[];
  salaire1: Boolean;
  salaire2: Boolean;
  salaire3: Boolean;

  constructor(
    private entrepriseService: EntrepriseService,
    private siteService: SiteService,
    private stageService: StageService,
    private entretienService: EntretienService,
    private http: Http,
    private route: ActivatedRoute) {
    this.entreprise = new Entreprise();
    this.salaire1 = false;
    this.salaire2 = false;
    this.salaire3 = false;
  }

// Init
  ngOnInit() {
    this.getEntreprises(0);
    // this.getEntreprisesBySalaire("ST40");
    // this.getEntreprisesByAvis("ST40");
    // this.getEntreprisesByStudentNb("ST40");
  }

  getEntreprises(index) {
    this.entrepriseService.getEntreprises().subscribe(
      data => {
        this.entreprises = data;
        this.chooseEntreprise(index);
      },
      error => console.log(error)
    );
  }

// palmares

  getEntreprisesByStudentNb(type_stage) {
    this.stageService.getEntreprisesByStudentNb(type_stage).subscribe(
      data => {
        this.entreprises = [];
        this.result = data;
        for (var i = 0; i < this.result.length; i++) {
          // console.log(this.result[i]._id);
          this.entreprises.push(this.result[i]._id);
        }
        this.chooseEntreprise(0);
      },
      error => console.log(error)
    );
  }

  getEntreprisesByAvis(type_stage) {
    this.stageService.getEntreprisesByAvis(type_stage).subscribe(
      data => {
        this.entreprises = [];
        this.result = data;
        for (var i = 0; i < this.result.length; i++) {
          // console.log(this.result[i]._id);
          this.entreprises.push(this.result[i]._id);
        }
        this.chooseEntreprise(0);
      },
      error => console.log(error)
    );
  }

  getEntreprisesBySalaire(type_stage) {
    this.stageService.getEntreprisesBySalaire(type_stage).subscribe(
      data => {
        this.entreprises = [];
        this.result = data;
        for (var i = 0; i < this.result.length; i++) {
          // console.log(this.result[i]._id);
          this.entreprises.push(this.result[i]._id);
        }
        this.chooseEntreprise(0);
      },
      error => console.log(error)
    );
  }


//select Entreprise
  chooseEntreprise(index) {
    this.entreprise = this.entreprises[index];
    // console.log(this.entreprise);
    if ( typeof this.entreprise != 'undefined') {
      this.getStagesST20ByEntreprise(this.entreprise._id);
      this.getStagesST40ByEntreprise(this.entreprise._id);
      this.getStagesST50ByEntreprise(this.entreprise._id);
      this.getEntretiensST20ByEntreprise(this.entreprise._id);
      this.getEntretiensST40ByEntreprise(this.entreprise._id);
      this.getEntretiensST50ByEntreprise(this.entreprise._id);
    }
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


// show stages & entretiens
  getStagesST20ByEntreprise(entrepriseId) {
    this.stageService.getStagesST20ByEntrepriseId(entrepriseId).subscribe(
      data => {
        this.stagesST20 = data;
        // console.log(data);
      },
      error => console.log(error)
    );
  }

  getStagesST40ByEntreprise(entrepriseId) {
    this.stageService.getStagesST40ByEntrepriseId(entrepriseId).subscribe(
      data => {
        this.stagesST40 = data;
        // console.log(data);
      },
      error => console.log(error)
    );
  }

  getStagesST50ByEntreprise(entrepriseId) {
    this.stageService.getStagesST50ByEntrepriseId(entrepriseId).subscribe(
      data => {
        this.stagesST50 = data;
        // console.log(data);
      },
      error => console.log(error)
    );
  }

  getEntretiensST20ByEntreprise(entrepriseId) {
    this.entretienService.getEntretiensST20ByEntrepriseId(entrepriseId).subscribe(
      data => {
        this.entretiensST20 = data;
        // console.log(data);
      },
      error => console.log(error)
    );
  }

  getEntretiensST40ByEntreprise(entrepriseId) {
    this.entretienService.getEntretiensST40ByEntrepriseId(entrepriseId).subscribe(
      data => {
        this.entretiensST40 = data;
        // console.log(data);
      },
      error => console.log(error)
    );
  }

  getEntretiensST50ByEntreprise(entrepriseId) {
    this.entretienService.getEntretiensST50ByEntrepriseId(entrepriseId).subscribe(
      data => {
        this.entretiensST50 = data;
        // console.log(data);
      },
      error => console.log(error)
    );
  }


//not used yet
  getEntrepriseStats(index) {
    this.getEntreprises(index);
  }

//to deprecate and replace by database field
  getNoteGenerale(stage: Stage) {
    return (stage.integration_cdt_travail + stage.opportunites_carriere + stage.dirigeants + stage.remuneration_aventages + stage.structure_organisation) / 5;
  }
  getNoteGeneraleEntretien(entretien: Entretien) {
    return ((5 - entretien.difficultee) + entretien.appreciation) / 2;
  }

}
