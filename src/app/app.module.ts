import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StepsModule} from 'primeng/steps';
import { ReactiveFormsModule } from '@angular/forms';

import {MenubarModule} from 'primeng/menubar';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { LookingForComponent } from './looking-for/looking-for.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {RouterModule} from '@angular/router';
import { AddressComponent } from './address/address.component';
import {DropdownModule} from 'primeng/dropdown';
import { CreditCardInfoComponent } from './credit-card-info/credit-card-info.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { VerifyPaymentComponent } from './verify-payment/verify-payment.component';
import { VerifySmsComponent } from './verify-sms/verify-sms.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    LookingForComponent,
    HeaderComponent,
    MainComponent,
    AddressComponent,
    CreditCardInfoComponent,
    VerifyPaymentComponent,
    VerifySmsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StepsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    StepsModule,
    DropdownModule,
    NgbModule,
    CreditCardDirectivesModule,
    ProgressSpinnerModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ])
      ],
  providers: [CreditCardDirectivesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
