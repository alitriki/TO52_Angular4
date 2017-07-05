import * as express from 'express';

import EntrepriseCtrl from './controllers/entreprise';
import StageCtrl from './controllers/stage';
import EntretienCtrl from './controllers/entretien';
import UserCtrl from './controllers/user';
import Entreprise from './models/entreprise';
import Site from './models/site';
import Stage from './models/stage';
import Entretien from './models/entretien';
import User from './models/user';

export default function setRoutes(app) {

  const entrepriseCtrl = new EntrepriseCtrl();
  const stageCtrl = new StageCtrl();
  const entretienCtrl = new EntretienCtrl();
  const userCtrl = new UserCtrl();



  // Users
  app.route('/api/login').post(userCtrl.login);
  app.route('/api/users').get(userCtrl.getAll);
  app.route('/api/users/count').get(userCtrl.count);
  app.route('/api/user').post(userCtrl.insert);
  app.route('/api/user/:id').get(userCtrl.get);
  app.route('/api/user/:id').put(userCtrl.update);
  app.route('/api/user/:id').delete(userCtrl.delete);

  // Entreprises
  app.route('/api/entreprises').get(entrepriseCtrl.getAll);
  app.route('/api/entreprises/count').get(entrepriseCtrl.count);
  app.route('/api/entreprises').post(entrepriseCtrl.insert);
  app.route('/api/entreprises/:id').get(entrepriseCtrl.get);
  app.route('/api/entreprises/:id').put(entrepriseCtrl.update);
  app.route('/api/entreprises/:id').delete(entrepriseCtrl.delete);

  app.route('/api/entreprise/:id').get(entrepriseCtrl.get);
  app.route('/api/entrepriseByName/:nom').get(entrepriseCtrl.getEntrepriseByName);
  app.route('/api/stage/:ids').get(stageCtrl.get);

  app.route('/api/entreprisesByStudentNb/:type_stage').get(stageCtrl.getEntreprisesByStudentNb);
  app.route('/api/entreprisesByAvis/:type_stage').get(stageCtrl.getEntreprisesByAvis);
  app.route('/api/entreprisesBySalaire/:type_stage').get(stageCtrl.getEntreprisesBySalaire);

  app.route('/api/stagesST20/:entrepriseId').get(stageCtrl.getStagesST20ByEntrepriseId);
  app.route('/api/stagesST40/:entrepriseId').get(stageCtrl.getStagesST40ByEntrepriseId);
  app.route('/api/stagesST50/:entrepriseId').get(stageCtrl.getStagesST50ByEntrepriseId);
  app.route('/api/entretiensST20/:entrepriseId').get(entretienCtrl.getEntretiensST20ByEntrepriseId);
  app.route('/api/entretiensST40/:entrepriseId').get(entretienCtrl.getEntretiensST40ByEntrepriseId);
  app.route('/api/entretiensST50/:entrepriseId').get(entretienCtrl.getEntretiensST50ByEntrepriseId);

  app.route('/api/statsByEntreprise/:entrepriseId').get(stageCtrl.getStatsByEntreprise);


  app.route('/api/domaines').get(entrepriseCtrl.getDomaines);
  app.route('/api/entreprisesUnCritere').get(entrepriseCtrl.getEntreprisesUnCritere);
  app.route('/api/entreprisesUnCritere/:criteres').get(entrepriseCtrl.getEntreprisesUnCritere);
  app.route('/api/entreprisesDeuxCriteres/:criteres').get(entrepriseCtrl.getEntreprisesDeuxCriteres);
  app.route('/api/entreprisesTroisCriteres/:criteres').get(entrepriseCtrl.getEntreprisesTroisCriteres);


}
