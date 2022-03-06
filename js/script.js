const btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

function calcular() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;

  if (altura !== "" && peso !== "" && nome != "") {

    if ((altura > 0 && altura <= 2) && (peso > 0 && peso <= 400)) {

      const imc = (peso / altura ** 2).toFixed(2);
      var resultado = "";

      if (imc < 18.5) {
        resultado = "magreza";
      } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "saudável";
      } else if (imc >= 25.0 && imc <= 29.9) {
        resultado = "sobrepeso";
      } else if (imc >= 30.0 && imc <= 34.9) {
        resultado = "obesidade grau I";
      } else if (imc >= 35.0 && imc <= 39.9) {
        resultado = "obesidade grau II";
      } else if (imc >= 40.0) {
        resultado = "obesidade grau III";
      }

      document.getElementById("resultado").textContent = `${nome}, seu imc é ${imc} e é classificado como ${resultado}.`;
    } else {
      alert("Digite sua altura e/ou peso corretamente e tente de novo.");
    }

  } else {
    alert("Preencha os campos obrigatórios.");
  }
  
}
