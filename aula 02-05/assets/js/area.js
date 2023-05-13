function myFunction() {
    var altura = document.getElementById("largura").value
    altura = altura.replace(",", ".")
    var comprimento = document.getElementById("altura").value
    comprimento = comprimento.replace(",", ".")

    var Calculo = (parseFloat(altura) * (parseFloat(comprimento)))
    


    document.getElementById("mostra").innerHTML = "A área aproximada em m² é igual a " + Calculo+ "m²"
}