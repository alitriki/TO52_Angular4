// $("#slider_salaires").slider({
//     ticks: [0, 100, 200, 300, 400],
//     ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
//     ticks_snap_bounds: 30
// });

function displaySelect(val){
var input=  document.getElementById(val+'Input');
var lable= document.getElementById(val+'Label');
var select=  document.getElementById(val+'Select');
input.style.display="none";
select.style.display="inline";
lable.classList.remove('label-floating');
lable.classList.add('label-static');
}
