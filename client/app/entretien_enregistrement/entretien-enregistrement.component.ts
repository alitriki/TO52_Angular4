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

  navSelected($event,$in) {
    console.log($in + " Clicked!");
    this.getEntrepriseByName($event.target.value);
    var input=  document.getElementById($in+'Input');
    var input1=  document.getElementById($in+'Input1');
    var label= document.getElementById($in+'Label');
    var select=  document.getElementById($in+'Select');
    // label.classList.remove('label-floating');
    // label.classList.add('label-static');
    if ($event.target.value == "Ajouter" ){
      console.log('ok');
      select.style.display = "none";
      input1.style.display = "inline";
      // input.style.display = "none";
    }

  }

  getEntrepriseByName(name) {
    this.entrepriseService.getEntrepriseByName(name).subscribe(
      data => {this.entreprise = data;
        console.log(this.entreprise);},
      error => console.log(error)
    );
  }

  }
