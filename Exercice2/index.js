// Créez votre fonction ici

function calculate(value1, value2, operator) {
  let int1 = parseInt(value1);
  let int2 = parseInt(value2);
  let result = 0;
  switch (operator) {
    case "+":
      result = int1 + int2;
      break;
    case "-":
      result = int1 - int2;
      break;
    case "*":
      result = int1 * int2;
      break;
    case "/":
      if (int2 === 0) {
        return "Division by zero is not allowed";
      }
      result = int1 / int2;
      break;
    default:
      return "Invalid operator";
  }
  return result;
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"

export default calculate;
