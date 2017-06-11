import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../services/entreprise.service';

@Component({
  selector: 'app-entretien-enregistrement',
  templateUrl: './entretien-enregistrement.component.html',
  styleUrls: ['./entretien-enregistrement.component.scss'],
  providers: [EntrepriseService]
})
export class EntretienEnregistrementComponent implements OnInit {
  entreprise = {};
  entreprises = [];
  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit() {
    this.getEntreprises();
  }

  getEntreprises() {
    this.entrepriseService.getEntreprises().subscribe(
      data => this.entreprises = data,
      error => console.log(error)
    );
  }

  navSelected($event) {
    console.log($event.target.value + " Clicked!");
    this.getEntrepriseByName($event.target.value);

  }

  getEntrepriseByName(name) {
    this.entrepriseService.getEntrepriseByName(name).subscribe(
      data => {this.entreprise = data;
        console.log(this.entreprise);},
      error => console.log(error)
    );
  }

  }
