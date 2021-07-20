import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-verify-payment',
  templateUrl: './verify-payment.component.html',
  styleUrls: ['./verify-payment.component.css']
})
export class VerifyPaymentComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Output() nextPage = new EventEmitter<number>();
  showSpinner = false;

  constructor() { }

  next(): void {
    this.showSpinner = true;
    setTimeout(() => {this.nextPage.emit(3); this.showSpinner = false;
    }, 25000);
    console.log(this.parentForm.value);
  }
  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.parentForm.controls;
  }
}
