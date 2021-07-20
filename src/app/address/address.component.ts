import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
 @Input() parentForm: FormGroup;
  @Output() nextPage = new EventEmitter<number>();
  cities: City[];
  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }
next(): void {
    this.nextPage.emit(1);
    console.log(this.parentForm.value);
}
  get f(): { [key: string]: AbstractControl } {
    return this.parentForm.controls;
  }
  ngOnInit(): void {
  }

}
