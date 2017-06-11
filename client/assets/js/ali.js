// $("#slider_salaires").slider({
//     ticks: [0, 100, 200, 300, 400],
//     ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
//     ticks_snap_bounds: 30
// });

function displaySelect(val){
var input=  document.getElementById(val+'Input');
var label= document.getElementById(val+'Label');
var select=  document.getElementById(val+'Select');
var newEntreprise = document.getElementById('nouvelle_entreprise');
input.style.display="none";
select.style.display="inline";
label.classList.remove('label-floating');
label.classList.add('label-static');
newEntreprise.style.display = select.text == "Nouveau" ? "inline" : "none";
select.style.display = entrepriseValue == "Nouveau" ? "none" : "inline";
}

function testEntreprise(){
  var entreprise = document.getElementById('entreprise');
  var entrepriseValue = entreprise.options[entreprise.selectedIndex].text;
  newEntreprise.style.display = entrepriseValue == "Nouveau" ? "inline" : "none";
  entreprise.style.display = entrepriseValue == "Nouveau" ? "none" : "inline";
}

function testSite(){
  var site = document.getElementById('site');
  var newSite = document.getElementById('nouveau_site');
  var siteValue = entreprise.options[entreprise.selectedIndex].text;
  newSite.style.display = siteValue == "Nouveau" ? "inline" : "none";
  site.style.display = siteValue == "Nouveau" ? "none" : "inline";
}

function showContactForm() {
  var div = document.getElementById('div_contact');
  var btn = document.getElementById('btn_contact');
  div.style.display = (div.style.display == "none") ? "block" : "none";
  btn.style.display = (div.style.display == "block") ? "none" : "block";
}

function showEmploiDiv() {
  var div = document.getElementById('emploi_content');
  div.style.display = "block";
}

function hideEmploiDiv() {
  var div = document.getElementById('emploi_content');
  div.style.display = "none";
}

function showOffreDiv() {
  var div = document.getElementById('intitule_offre');
  div.style.display = "block";
}
function hideOffreDiv() {
  var div = document.getElementById('intitule_offre');
  div.style.display = "none";
}
function showInterviewer2() {
  var div = document.getElementById('div_interviewer2');
  var btn = document.getElementById('btn_interviewer2');
  div.style.display = (div.style.display == "none") ? "block" : "none";
  btn.style.display = (div.style.display == "block") ? "none" : "block";
}
function showStageDiv() {
  var div = document.getElementById('stage_content');
  div.style.display = "block";
}
function hideStageDiv() {
  var div = document.getElementById('stage_content');
  div.style.display = "none";
}
