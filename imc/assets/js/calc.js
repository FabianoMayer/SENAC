function Calc_IMC() {
  let altura = document.getElementById("alt").value;
  altura.replace(",",".");
  let peso = document.getElementById("peso").value;
  peso.replace(",",".");
  let imc = peso / (altura * altura);
  document.getElementById("valimc2").innerHTML = `Seu IMC é igual a ${imc.toFixed(2).replace(".",",")}`};
