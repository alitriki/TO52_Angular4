export interface Site {
  nom: String;
  adresse:  String;
  tel: Number;
  pays: String;
  region: String;
  ville: String;
  contacts: [{
    nom: String;
    prenom: String;
    poste: String;
    tel:  Number;
    email: String; 
  }]
}
