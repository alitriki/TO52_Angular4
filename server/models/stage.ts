import * as mongoose from 'mongoose';

var Schema = mongoose.Schema;
const stageSchema = new mongoose.Schema({

  entreprise_id: {
    type: Schema.Types.ObjectId,
    ref: 'Entreprise'
  },
  site_id: {
    type: Schema.Types.ObjectId,
    ref: 'Entreprise.site_id'
  },
  etudiant_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  sujet: { type: String, required: true },
  semestre: { type: String, required: true },
  type_stage: { type: String, required: true },
  commentaire_recommendation: String,
  note_generale : Number,
  integration_cdt_travail: Number,
  remuneration_aventages: Number,
  dirigeants: Number,
  opportunites_carriere: Number,
  structure_organisation: Number,
  tuteur : String,
  rapport: String,
  soutenance: String,
  remuneration: Number,
  avantages:
  [{
    type: String,
    detail: String
  }],
  emploi: {
    proposition: Boolean,
    type_proposition: String,
    acceptation: Boolean,
    raison: String,
    Salaire: Number,
    avantages:
    [{
      type: String,
      detail: String
    }]
  }
});

const Stage = mongoose.model('Stage', stageSchema);

export default Stage;
