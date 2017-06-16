import * as mongoose from 'mongoose';
var Schema = mongoose.Schema;

const entretienSchema = new mongoose.Schema({

    entreprise_id: {
      type: Schema.Types.ObjectId,
      ref: 'Entreprise'
    },
  sit_id: {
    type: Schema.Types.ObjectId,
    ref: 'Site'
  },
  etudiant_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  duree: Number,
  date: Date,
  condidature_spontanee : Boolean,
  cv : String,
  lettre_motivation : String,
  deroulement : String,
  difficultee: Number,
  appreciation: Number,
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
    avantages:[{
      type: String,
      detail: String
    }]
  }
});

const Entretien = mongoose.model('Entretien', entretienSchema);

export default Entretien;
