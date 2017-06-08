import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stages-recherche',
  templateUrl: './stages-recherche.component.html',
  styleUrls: ['./stages-recherche.component.css']
})
export class StagesRechercheComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recherche_id: number=20;
  recherche_status : string = 'null' ;

  getStatus (){
    return this.recherche_status;
  }
}
