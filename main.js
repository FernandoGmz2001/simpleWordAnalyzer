const result = document.querySelector(".result");
const word = document.querySelector("#word");
const btnVerify = document.querySelector(".btnVerify");

btnVerify.addEventListener("click", validateWord);

function validateWord() {
  try {
    const input = word.value.trim();
    if (input === "") {
      alert("Por favor, ingrese una palabra o número.");
      return;
    }
    const parsedInput = parseInt(input);
    if (!isNaN(parsedInput)) {
      result.innerHTML = isANegativeNumber(parsedInput);
      return;
    }
    if (input.charAt(0) === '"' && input.charAt(input.length - 1) === '"') {
      result.innerHTML = "La palabra ingresada es una cadena de texto.";
      return;
    }
    if (input.charAt(0) === "#" || input.charAt(0) === "@" || input.charAt(0) === "$") {
      result.innerHTML = "La palabra ingresada es un letrero.";
      return;
    }
    if (isRelationalOperator(input)) {
      result.innerHTML = "La palabra ingresada es un operador relacional.";
      return;
    }
    throw new Error("No se puede verificar la palabra.");
  } catch (err) {
    result.innerHTML = err.message;
    console.error(err);
  }
}

function isANegativeNumber(number) {
  if (number > 0) {
    return "El número ingresado es positivo.";
  } else if (number < 0) {
    return "El número ingresado es negativo.";
  } else {
    return "El número ingresado es cero.";
  }
}

function isRelationalOperator(input) {
  const relationalOperators = ["<", ">", "<=", ">=", "==", "!=", "!", "<>"];
  return relationalOperators.includes(input);
}
