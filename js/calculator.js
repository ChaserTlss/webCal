function handleKeyUp(event) {
  if (event.key === "Enter") {
    evaluate();
  }
}

function evaluate() {
  const input = document.getElementById("input");
  const result = document.getElementById("result");

  try {
    const evaluation = eval(input.value);
    result.value = result.value + '\n' + input.value + '=' + evaluation;
  } catch (error) {
    result.value += '\n' + input.value + "=>" + "error";
  }
}

