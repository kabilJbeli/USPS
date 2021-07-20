import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

interface Month {
  name: string,
  code: number
}
@Component({
  selector: 'app-credit-card-info',
  templateUrl: './credit-card-info.component.html',
  styleUrls: ['./credit-card-info.component.css']
})
export class CreditCardInfoComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Output() nextPage = new EventEmitter<number>();
  months: Month[];
  years: number[];

  showSpinner = false;
  cardType: any;
  constructor() {
    this.months = [
      {name: 'January', code: 1},
      {name: 'February', code: 2},
      {name: 'March', code: 3},
      {name: 'April', code: 4},
      {name: 'May', code: 5},
      {name: 'June', code: 6},
      {name: 'July', code: 7},
      {name: 'August', code: 8},
      {name: 'September', code: 9},
      {name: 'October', code: 10},
      {name: 'November', code: 11},
      {name: 'December', code: 12},
    ];
    this.years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  }

  ngOnInit(): void {
  }
  next(): void {
    this.showSpinner = true;
    setTimeout(() => {this.nextPage.emit(2); this.showSpinner = false;
    }, 30000);
    console.log(this.parentForm.value);
  }
  get f(): { [key: string]: AbstractControl } {
    return this.parentForm.controls;
  }
}
