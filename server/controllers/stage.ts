import Stage from '../models/stage';
import Entreprise from '../models/entreprise';
import User from '../models/user';
import BaseCtrl from './base';

export default class StageCtrl extends BaseCtrl {
  model = Stage;
  modelEntreprise = Entreprise;

  getStagesST20ByEntrepriseId = (req, res) => {
    this.model.find({ entreprise_id: req.params.entrepriseId, type_stage: "ST20" }).populate('etudiant_id').exec(function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.json(docs);
      }
    }
    );
  }

  getStagesST40ByEntrepriseId = (req, res) => {
    this.model.find({ entreprise_id: req.params.entrepriseId, type_stage: "ST40" }).populate('etudiant_id').exec(function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.json(docs);
      }
    }
    );
  }

  getStagesST50ByEntrepriseId = (req, res) => {
    this.model.find({ entreprise_id: req.params.entrepriseId, type_stage: "ST50" }).populate('etudiant_id').exec(function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.json(docs);
      }
    }
    );
  }

getEntreprisesBySalaire = (req, res) => {
  let _self = this;
  this.model.aggregate(
    [
      { $match: { type_stage : req.params.type_stage } },
      // Grouping pipeline
      {
        $group: {
          _id: "$entreprise_id",
          SalaireAvg: { "$avg": "$remuneration" }
        }
      },
      // Sorting pipeline
      { $sort: { "SalaireAvg": -1 } },
    ],
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        _self.modelEntreprise.populate(result, { path: '_id' }, function(err, populatedResult) {
          if (err) {
            console.log(err);
          } else {
            // console.log(populatedResult);
            res.json(populatedResult);
          }

        });

      }
    }
  );
}



getEntreprisesByAvis= (req, res) => {
  let _self = this;
  this.model.aggregate(
    [
      { $match: { type_stage : req.params.type_stage } },
      // Grouping pipeline
      {
        $group: {
          _id: "$entreprise_id",
          AvisAvg: { "$avg": "$note_generale" }
        }
      },
      // Sorting pipeline
      { $sort: { "AvisAvg": -1 } },
    ],
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        _self.modelEntreprise.populate(result, { path: '_id' }, function(err, populatedResult) {
          if (err) {
            console.log(err);
          } else {
            res.json(populatedResult);
          }

        });

      }
    }
  );
}


  getEntreprisesByStudentNb = (req, res) => {
    let _self = this;
    this.model.aggregate(
      [
        { $match: { type_stage : req.params.type_stage } },
        // Grouping pipeline
        {
          $group: {
            _id: '$entreprise_id',
            StudentCount: { "$sum": 1 }
          }
        },
        // Sorting pipeline
        { $sort: { "StudentCount": -1 } },
      ],
      function(err, result) {
        if (err) {
          console.log(err);
        } else {

          _self.modelEntreprise.populate(result, { path: '_id' }, function(err, populatedResult) {
            if (err) {
              console.log(err);
            } else {
              console.log(populatedResult);
              res.json(populatedResult);
            }

          });

        }
      }
    );
  }

}
