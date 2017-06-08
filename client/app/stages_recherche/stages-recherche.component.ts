import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EntrepriseService } from '../services/entreprise.service';
@Component({
  selector: 'app-stages-recherche',
  templateUrl: './stages-recherche.component.html',
  styleUrls: ['./stages-recherche.component.css'],
  providers: [EntrepriseService]
})
export class StagesRechercheComponent implements OnInit {

  domaines: String[];
  constructor(private entrepriseService: EntrepriseService,
    private http: Http, ) { }

  ngOnInit() {
    this.getDomaines();
  }

  getDomaines() {
    this.entrepriseService.getDomaines().subscribe(
      data => this.domaines = data,
      error => console.log(error)
    );
  }

}
