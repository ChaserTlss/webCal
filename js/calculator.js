/* this class store the history and manager the print as a component of the calculator */
class CalculatorHistory {
  #updateHistoryDialog// update the history dialog. function xxx(str)
  #updateResult// update the result of the calculator. function xxx(str) str only one line
  #history

  /* updateResult is necessary */
  constructor(updateResult) {
    this.#updateResult = updateResult;
    this.#history = [];
  }

  addHistoryDialog(updateHistoryDialog) {
    this.#updateHistoryDialog = updateHistoryDialog;
  }

  pushResult(result, formula) {
    this.#history.push({ formula, result });

    this.#updateResult(result.toString());

    /* format the histhory and update */
    if (this.#updateHistoryDialog) {
      let str = "";
      for (let i = 0; i < this.#history.length; i++) {
        str += this.#history[i].formula + " = " + this.#history[i].result + "\n";
      }

      this.#updateHistoryDialog(str);
    }
  }

  clearAll() {
    this.#history = [];
    this.#updateResult("");
    if (this.#updateHistoryDialog) {
      this.#updateHistoryDialog("");
    }
  }
}


/* this is calculator class */
export class Calculator {
  #state = {
    state: "normal",
  };
  #history;


  constructor(updateResult) {
    this.#state.updateResult = updateResult;
    this.#history = new CalculatorHistory(updateResult);
  };

  evaluate(formula) {
    if (formula === "") {
      return;
    }
    if (this.excuteCommand(formula)) {
      return;
    }

    let result = 0;
    switch (this.#state.state) {
      case "normal":
        result = this.calnormal(formula);
        break;
      case "hex":
        result = this.calhex(formula);
        break;
      case "oct":
        result = this.caloct(formula);
        break;
      case "frac":
        result = this.calfrac(formula);
        break;
      case "exp":
        result = this.calexp(formula);
        break;
      default:
        break;
    }

    this.#history.pushResult(result, formula);
  }

  calnormal(formula) {
    try {
      return eval(formula);
    } catch (error) {
      return "error";
    }
  }

  excuteCommand(command) {
    if (command === "clear") {
      this.#history.clearAll();
      return true;
    }

    if (command === "hex") {
      this.#state.state = "hex";
      return true;
    }
    return false;
  }

  calhex(formula) {
    return "0x" + this.calnormal(formula).toString(16);
  }



  addHistoryDialog(updateHistoryDialog) {
    this.#history.addHistoryDialog(updateHistoryDialog);
  }

}

