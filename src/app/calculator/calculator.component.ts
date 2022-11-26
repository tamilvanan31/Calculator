import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent{

  input: string = '';
  result: string = '';


  numberPressed(operand: string) {
    
    if (operand == ".") {
      if (this.input != "") {

        const lastNum = this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return
      }
    }

    if (operand == "0") {
      if (this.input == "") {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+') {
        return;
      }
    }

    this.input = this.input + operand
    this.calcAnswer();
  }


  getLastOperand() {
    let pos: number;
    console.log(this.input)
    pos = this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos = this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos = this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos = this.input.lastIndexOf("/")
    console.log('Last ' + this.input.substr(pos + 1))
    return this.input.substr(pos + 1)
  }


  operatorPressed(op: string) {
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      return;
    }

    this.input = this.input + op
    this.calcAnswer();
  }


  cePressed() {
    if (this.input != "") {
      this.input = this.input.substr(0, this.input.length - 1)
    }
  }

  cPressed() {
    this.result = '';
    this.input = '';
  }

  calcAnswer() {
    let formula = this.input;

    let lastKey = formula[formula.length - 1];

    if (lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    lastKey = formula[formula.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }
    this.result = eval(formula);
  }

  sPressed() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input == "0") this.input = "";
  }

  pPressed() {

  }
}