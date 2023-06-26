class Calculator {
  #state = {
    result: 0,
    history: [],
    state: "normal",
    updateHistoryDialog: null,
    updateResult: null,
  };

  constructor(updateResult) {
    this.#state.updateResult = updateResult;
  };

  evaluate(formula) {
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

    this.pushResult(result, formula);
  }

  calnormal(formula) {
    try {
      return eval(formula);
    } catch (error) {
      return "error";
    }
  }

  pushResult(result, formula) {
    this.#state.history.push({ formula, result });
    result = result.toString();

    this.#state.updateResult(result);

    if (this.#state.updateHistoryDialog) {
      let str = "";
      for (let i = 0; i < this.#state.history.length; i++) {
        str += this.#state.history[i].formula + " = " + this.#state.history[i].result + "\n";
      }

      this.#state.updateHistoryDialog(str);

    }
  }

  addHistoryDialog(updateHistoryDialog) {
    this.#state.updateHistoryDialog = updateHistoryDialog;
  }

}

