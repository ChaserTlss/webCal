function handleKeyUp(event) {
  const input = document.getElementById("input");
  if (event.key === "Enter") {
    cal.evaluate(input.value);
  }
}

function updateResult(str) {
  const result = document.getElementById("input");
  result.value = str;
}

function updateHistoryDialog(str) {
  const historyDialog = document.getElementById("result");
  historyDialog.value = str;
}

cal = new Calculator(updateResult);
cal.addHistoryDialog(updateHistoryDialog);

