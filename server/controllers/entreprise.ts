import Entreprise from '../models/entreprise';
import Stage from '../models/stage';
import BaseCtrl from './base';

export default class EntrepriseCtrl extends BaseCtrl {
  model = Entreprise;
  modelStage = Stage;

  criteres: string;
  criteresJSON: JSON;
  // Get Domaines
  getDomaines = (req, res) => {
    this.model.find().distinct('domaine', (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  getEntreprisesUnCritere = (req, res) => {
    this.criteres = req.params.criteres;
    this.criteres = this.criteres.substr(this.criteres.indexOf("{"), this.criteres.length);
    this.criteresJSON = JSON.parse(this.criteres);
    console.log("-----------test1-----------");
    // TODO: decode http parameters
    this.model.find({ domaine: this.criteresJSON['domaine'] }, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  getEntreprisesDeuxCriteres = (req, res) => {
    let _self = this;
    this.criteres = this.criteres.substr(this.criteres.indexOf("{"), this.criteres.length);
    this.criteresJSON = JSON.parse(this.criteres);
    // Get the _ids of entreprises containing stage_type : param.type from stages
    this.modelStage.find().distinct('entreprise_id', { type_stage: this.criteresJSON['type'] }).populate('entreprise_id').exec(function(err, items) {
      if (err) {
        console.log(err);
      } else {
        // console.log(items);
        // Get the entreprises from entreprises using _id
        _self.model.find({ _id: { $in: items }, domaine: _self.criteresJSON['domaine'] }, function(err, docs) {
          if (err) {
            console.log(err);
          } else {
            // console.log(docs);
            res.json(docs);
          }
        });
      }

    });


  }

  getEntreprisesTroisCriteres = (req, res) => {
    console.log("-----------test3-----------");
    let _self = this;
    this.criteres = this.criteres.substr(this.criteres.indexOf("{"), this.criteres.length);
    this.criteresJSON = JSON.parse(this.criteres);
    // Get the _ids of entreprises containing stage_type : param.type from stages
    this.modelStage.find().distinct('entreprise_id', { type_stage: this.criteresJSON['type'] }).populate('entreprise_id').exec(function(err, items) {
      if (err) {
        console.log(err);
      } else {
        // console.log(items);
        // Get the entreprises from entreprises using _id
        _self.model.find({ _id: { $in: items }, domaine: _self.criteresJSON['domaine'], sites: { $elemMatch: { ville: _self.criteresJSON['lieu'] } } }, function(err, docs) {
          if (err) {
            console.log(err);
          } else {
            console.log(docs);
            res.json(docs);
          }
        });
      }
    });
  }

  // Get by name
  getEntrepriseByName = (req, res) => {
    this.model.findOne({ nom: req.params.nom }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }


}
