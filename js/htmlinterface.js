import { Calculator } from "./calculator.js";
function handleKeyUp(event) {
  const input = document.getElementById("input");
  if (event.key === "Enter") {
    cal.evaluate(input.value);
  }
}

document.getElementById("input").addEventListener("keyup", handleKeyUp);

function updateResult(str) {
  const result = document.getElementById("input");
  result.value = str;
}

function updateHistoryDialog(str) {
  const historyDialog = document.getElementById("result");
  historyDialog.value = str;
}

const cal = new Calculator(updateResult);
cal.addHistoryDialog(updateHistoryDialog);

