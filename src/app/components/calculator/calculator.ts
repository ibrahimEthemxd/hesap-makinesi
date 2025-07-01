import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from '../display/display';
import { KeypadComponent } from '../keypad/keypad';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DisplayComponent, KeypadComponent],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})
export class CalculatorComponent {
  display: string = '';
  showScientific: boolean = false;

  press(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  backspace() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch {
      this.display = 'Hata';
    }
  }

  percent() {
    const num = parseFloat(this.display);
    if (!isNaN(num)) {
      this.display = (num / 100).toString();
    }
  }

  toggleScientific() {
    this.showScientific = !this.showScientific;
  }

  sqrt() {
    const num = parseFloat(this.display);
    if (!isNaN(num)) {
      this.display = Math.sqrt(num).toString();
    }
  }

  factorial() {
    let num = parseInt(this.display);
    if (isNaN(num) || num < 0) {
      this.display = 'Hata';
      return;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    this.display = result.toString();
  }

  power() {
    this.display += '**';
  }

  ln() {
    const num = parseFloat(this.display);
    if (num > 0) {
      this.display = Math.log(num).toString();
    } else {
      this.display = 'Hata';
    }
  }

  log10() {
    const num = parseFloat(this.display);
    if (num > 0) {
      this.display = Math.log10(num).toString();
    } else {
      this.display = 'Hata';
    }
  }

  insertPi() {
    this.display += Math.PI.toString();
  }

  insertE() {
    this.display += Math.E.toString();
  }
}
