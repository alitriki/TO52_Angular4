export interface Stage {
  entreprise_id: String,
  site_id: String,
  etudiant_id: {
    branche: String,
    date_naissance: Date,
    email: String,
    photo: String,
    filiere: String,
    nom: String,
    prenom: String,
    role: String,
    sexe: String,
    tel: number,
    username: String,
    _id: String
  },
  sujet: String,
  semestre: String,
  type_stage: String,
  commentaire_recommendation: String,
  note_generale : number,
  integration_cdt_travail: number,
  remuneration_aventages: number,
  dirigeants: number,
  opportunites_carriere: number,
  structure_organisation: number,
  tuteur: String,
  rapport: String,
  soutenance: String,
  remuneration: number,
  avantages:
  [{
    type: String,
    detail: String
  }]
  emploi:
  [{
    proposition: Boolean,
    type_proposition: String,
    acceptation: Boolean,
    raison: String,
    salaire: number,
    avantages:
    [{
      type: String,
      detail: String
    }]
  }]
}
