function ArmazenarValor() {
    var userInput = document.getElementById("userInput").value;
    console.log("Valor da variável é: " + userInput);
    document.getElementById("valorInserido").innerText = "O valor inserido foi: " + userInput;
}
