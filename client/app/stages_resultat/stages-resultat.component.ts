import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stages-resultat',
  templateUrl: './stages-resultat.component.html',
  styleUrls: ['./stages-resultat.component.css']
})
export class StagesResultatComponent implements OnInit {

allowNewResult= false;
resultCreationStatus= 'No results !';
resultName='';
resultCreated=false;

onInputUpdate(event: any){
  this.resultName= event.target.value;
}

onCreateResult(){
  this.resultCreationStatus ='Result was added! Name is '+ this.resultName ;
  this.resultCreated=true;
}

  constructor() { }

  ngOnInit() {
  }

}
