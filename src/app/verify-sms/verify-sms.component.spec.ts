import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySmsComponent } from './verify-sms.component';

describe('VerifySmsComponent', () => {
  let component: VerifySmsComponent;
  let fixture: ComponentFixture<VerifySmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifySmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifySmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
