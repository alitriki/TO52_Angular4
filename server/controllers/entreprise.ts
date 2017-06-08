import Entreprise from '../models/entreprise';
import BaseCtrl from './base';

export default class EntrepriseCtrl extends BaseCtrl {
  model = Entreprise;

  // Get Domaines
  getDomaines = (req, res) => {
    this.model.find().distinct('domaine', (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }
}
