import * as mongoose from 'mongoose';

var Schema = mongoose.Schema;
const siteSchema = new mongoose.Schema({
  nom: String,
  adresse: { type: String, unique: true, required: true },
  tel: Number,
  pays: String,
  region: String,
  ville: String,
  contacts: [{
    nom: String,
    prenom: String,
    poste: String,
    tel: { type: Number, unique: true },
    email: { type: String, unique: true, required: true }
  }]
});

const Site = mongoose.model('Site', siteSchema);

export default Site;
