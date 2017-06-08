import * as mongoose from 'mongoose';

var Schema = mongoose.Schema;
const entrepriseSchema = new mongoose.Schema({
  nom: {type: String, unique: true, required : true},
  tel: Number,
  logo: String,
  annee_fondation: Number,
  site_web: String,
  chiffre_d_affaires: Number,
  domaine: String,
  type: String,
  nb_employes: Number,
  sites: [
    {site_id: {type: Schema.Types.ObjectId, ref: 'Site'}}
  ]
});

const Entreprise = mongoose.model('Entreprise', entrepriseSchema);

export default Entreprise;
