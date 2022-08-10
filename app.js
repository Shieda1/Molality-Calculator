// https://calculator.swiftutors.com/molality-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const molalityRadio = document.getElementById('molalityRadio');
const molesSoluteRadio = document.getElementById('molesSoluteRadio');
const kilogramSolventRadio = document.getElementById('kilogramSolventRadio');

let molality;
let molesSolute = v1;
let kilogramSolvent = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

molalityRadio.addEventListener('click', function() {
  variable1.textContent = 'Moles Solute (mol)';
  variable2.textContent = 'Kilogram Solvent (kg)';
  molesSolute = v1;
  kilogramSolvent = v2;
  result.textContent = '';
});

molesSoluteRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Molality (mol/kg)';
  variable2.textContent = 'Kilogram Solvent (kg)';
  molality = v1;
  kilogramSolvent = v2;
  result.textContent = '';
});

kilogramSolventRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Molality (mol/kg)';
  variable2.textContent = 'Moles Solute (mol)';
  molality = v1;
  molesSolute = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(molalityRadio.checked)
    result.textContent = `Molality = ${computeMolality().toFixed(2)} mol/kg`;

  else if(molesSoluteRadio.checked)
    result.textContent = `Moles Solute = ${computeMolesSolute().toFixed(2)} mol`;

  else if(kilogramSolventRadio.checked)
    result.textContent = `Kilogram Solvent = ${computeKilogramSolvent().toFixed(2)} kg`;
})

// calculation

function computeMolality() {
  return Number(molesSolute.value) / Number(kilogramSolvent.value);
}

function computeMolesSolute() {
  return Number(molality.value) * Number(kilogramSolvent.value);
}

function computeKilogramSolvent() {
  return Number(molesSolute.value) / Number(molality.value);
}