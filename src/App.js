import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      num: "",
      result: "",
    };
  }

  selectNumber(num) {
    // if (num == "" || undefined) {
    //   this.state.result = "";
    // }
    this.state.result += num;
    console.log(num);
    this.setState({ result: this.state.result });
    console.log(this.state.result);
    return this.state.result;
  }

  setResult() {
    console.log(this.state.result);
    if (this.state.result == "error") {
      this.setState({ result: "" });
    } else {
      this.setState({ result: "" });
    }
  }

  calculate() {
    try {
      this.setState({ result: eval(this.state.result) });
    } catch {
      this.setState({ result: "error" });
    }
  }

  backSpace() {
    // this.state.result = this.state.result.slice(0, -1);
    console.log("RES", this.state.result);
    this.setState({ result: this.state.result.slice(0, -1) });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="result"> {this.state.result}</div>
          <div>
            <button className="button" onClick={() => this.setResult()}>
              AC
            </button>
            <button className="zeroButton" onClick={() => this.backSpace()}>
              CLEAR
            </button>
            <button className="button" onClick={() => this.selectNumber("/")}>
              /
            </button>
          </div>
          <div>
            <button className="button" onClick={() => this.selectNumber(1)}>
              1
            </button>
            <button className="button" onClick={() => this.selectNumber(2)}>
              2
            </button>
            <button className="button" onClick={() => this.selectNumber(3)}>
              3
            </button>
            <button className="button" onClick={() => this.selectNumber("*")}>
              x
            </button>
          </div>
          <div>
            <button className="button" onClick={() => this.selectNumber(4)}>
              4
            </button>
            <button className="button" onClick={() => this.selectNumber(5)}>
              5
            </button>
            <button className="button" onClick={() => this.selectNumber(6)}>
              6
            </button>
            <button className="button" onClick={() => this.selectNumber("-")}>
              -
            </button>
          </div>
          <div>
            <button className="button" onClick={() => this.selectNumber(7)}>
              7
            </button>
            <button className="button" onClick={() => this.selectNumber(8)}>
              8
            </button>
            <button className="button" onClick={() => this.selectNumber(9)}>
              9
            </button>
            <button className="button" onClick={() => this.selectNumber("+")}>
              +
            </button>
          </div>
          <div>
            <button className="zeroButton" onClick={() => this.selectNumber(0)}>
              0
            </button>
            <button className="button" onClick={() => this.selectNumber(".")}>
              .
            </button>
            <button className="button" onClick={() => this.calculate()}>
              =
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
