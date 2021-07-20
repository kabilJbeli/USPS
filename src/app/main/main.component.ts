import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {CreditCardValidators} from 'angular-cc-library';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: MenuItem[];
  mainForm: FormGroup;
  activeIndex = 0;
  constructor(    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.mainForm =  this.fb.group({
      fullName: [null, [Validators.required]],
      streetAddress1: [null, [Validators.required]],
      streetAddress2: [null, []],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      zipCode: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      cardHolderName: [null, [Validators.required]],
      cardNumber: [null, [Validators.required, CreditCardValidators.validateCCNumber]],
      securityCode: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
      expiryMonth: [null, [Validators.required]],
      expiryYear: [null, [Validators.required]],
      smsKey: [null, [Validators.required]],
      verifySms: [null, [Validators.required]],

    });

    this.items = [{
      label: 'Address',
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
      {
        label: 'Payment',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Verify Payment',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      {
        label: 'Verify SMS',
        command: (event: any) => {
          this.activeIndex = 3;
        }
      },
      {
        label: 'Done',
        command: (event: any) => {
          this.activeIndex = 4;
        }
      },
    ];
  }
  setPage(value: number): void {
    this.activeIndex = value;
    console.log(value);
  }
}
