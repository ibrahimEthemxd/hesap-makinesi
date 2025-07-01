import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-keypad',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './keypad.html',
  styleUrls: ['./keypad.css']
})
export class KeypadComponent {
  @Input() showScientific: boolean = false;

  @Output() press = new EventEmitter<string>();
  @Output() clear = new EventEmitter<void>();
  @Output() backspace = new EventEmitter<void>();
  @Output() percent = new EventEmitter<void>();
  @Output() calculate = new EventEmitter<void>();
  @Output() toggleScientific = new EventEmitter<void>();

  @Output() sqrt = new EventEmitter<void>();
  @Output() factorial = new EventEmitter<void>();
  @Output() power = new EventEmitter<void>();
  @Output() ln = new EventEmitter<void>();
  @Output() log10 = new EventEmitter<void>();
  @Output() insertPi = new EventEmitter<void>();
  @Output() insertE = new EventEmitter<void>();
}
