export interface Entretien {
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
    tel: Number,
    username: String,
    _id: String
  },
  duree: number,
  date: Date,
  condidature_spontanee: Boolean,
  cv: String,
  lettre_motivation: String,
  deroulement: String,
  difficultee: number,
  appreciation: number,
  nature_entretien: String,
  type_entretien: String,
  moyen_candidature: String,
  offre_de_stage: {
    proposition: Boolean,
    semestre: String,
    type_stage: String,
    acceptation: Boolean,
    raison: String,
    Salaire: Number,
    avantages: [{
      type: String,
      detail: String
    }]
  }
}
