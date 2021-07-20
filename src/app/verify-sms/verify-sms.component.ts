import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-verify-sms',
  templateUrl: './verify-sms.component.html',
  styleUrls: ['./verify-sms.component.css']
})
export class VerifySmsComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Output() nextPage = new EventEmitter<number>();
  constructor() { }

  next(): void {
    this.nextPage.emit(4);
    console.log(this.parentForm.value);
  }
  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.parentForm.controls;
  }
}
