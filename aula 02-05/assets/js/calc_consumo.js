function myFunction() {
    var km = document.getElementById("KM").value
    km = km.replace(",", ".")
    var litros = document.getElementById("litrosCombustivel").value
    litros = litros.replace(",", ".")
    var precoCombustivel = document.getElementById("precoCombustivel").value
    var consumo = km / litros

    var gasto = parseFloat(litros) * parseFloat(precoCombustivel)

    document.getElementById("mostra").innerHTML = ` O consumo médio foi de ${consumo} km/l. O gasto com combustível foi de R$ ${gasto}`
}