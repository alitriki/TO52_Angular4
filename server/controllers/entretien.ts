import Entretien from '../models/entretien';
import User from '../models/user';
import BaseCtrl from './base';

export default class EntretienCtrl extends BaseCtrl {
  model = Entretien;

  getEntretiensST20ByEntrepriseId = (req, res) => {
    this.model.find({ entreprise_id: req.params.entrepriseId, type_entretien: "ST20"  }).populate('etudiant_id').exec(function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.json(docs);
      }
    }
    );
  }

  getEntretiensST40ByEntrepriseId = (req, res) => {
    this.model.find({ entreprise_id: req.params.entrepriseId, type_entretien: "ST40" }).populate('etudiant_id').exec(function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.json(docs);
      }
    }
    );
  }

  getEntretiensST50ByEntrepriseId = (req, res) => {
    this.model.find({ entreprise_id: req.params.entrepriseId, type_entretien: "ST50" }).populate('etudiant_id').exec(function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.json(docs);
      }
    }
    );
  }

}
