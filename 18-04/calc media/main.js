function calcularMedia() {
    let nome = document.getElementById("pNome").value;
    let turma = document.getElementById("turma").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media < 3) {
        document.getElementById("resultado").innerHTML = `O ${nome} da turma ${turma} foi reprovado`;
      } else if (media > 6) {
        document.getElementById("resultado").innerHTML = `O ${nome} da turma ${turma} está em foi aprovado`;
      } else {
        document.getElementById("resultado").innerHTML = `O ${nome} da turma ${turma} rec`;
      }
      console.log (media)

    }