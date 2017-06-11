import Entreprise from '../models/entreprise';
import BaseCtrl from './base';

// en cas d'erreur commente cette ligne et hardcode parametres
// TODO: figure it out : I think it's a global object

// import { Critere } from '../../client/app/models/crit';

export default class EntrepriseCtrl extends BaseCtrl {
  model = Entreprise;
  criteres :string;
  criteresJSON : JSON;
  // Get Domaines
  getDomaines = (req, res) => {
    this.model.find().distinct('domaine', (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  getEntreprisesUnCritere = (req, res) => {
    this.criteres = req.params.criteres;
    this.criteres = this.criteres.substr(this.criteres.indexOf("{"),this.criteres.length);
    this.criteresJSON = JSON.parse(this.criteres);
    console.log("-----------test1-----------");
    // TODO: decode http parameters
    this.model.find({domaine: this.criteresJSON['domaine']}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  getEntreprisesDeuxCriteres = (req, res) => {
    this.criteres = req.params.criteres;
    this.criteres = this.criteres.substr(this.criteres.indexOf("{"),this.criteres.length);
    this.criteresJSON = JSON.parse(this.criteres);
    console.log("-----------test2-----------");
    this.model.find({domaine: this.criteresJSON['domaine'], type: this.criteresJSON['type']}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  getEntreprisesTroisCriteres = (req, res) => {
    this.criteres = req.params.criteres;
    this.criteres = this.criteres.substr(this.criteres.indexOf("{"),this.criteres.length);
    this.criteresJSON = JSON.parse(this.criteres);
    console.log("-----------test3-----------");
    this.model.find({domaine: this.criteresJSON['domaine'], type: this.criteresJSON['type'], sites: {$elemMatch: {ville: this.criteresJSON['ville']}}}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  // Get by id
  getEntrepriseByName = (req, res) => {
    this.model.findOne({ nom: req.params.nom }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }

}
