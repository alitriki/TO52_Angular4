import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EntrepriseService } from '../services/entreprise.service';

@Component({
  selector: 'app-entreprises-palmares',
  templateUrl: './entreprises-palmares.component.html',
  styleUrls: ['./entreprises-palmares.component.css'],
  providers: [EntrepriseService]
})
export class EntreprisesPalmaresComponent implements OnInit {

  entreprise = {};
  entreprises = [];
  constructor(private entrepriseService: EntrepriseService,
              private http: Http, ) { }

  ngOnInit() {
    this.getEntreprises();
  }

getEntreprises(){
  this.entrepriseService.getEntreprises().subscribe(
    data => this.entreprises = data,
    error => console.log(error)
  );
}


}
