import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeCustomerComponent } from './informative-customer.component';

describe('InformativeCustomerComponent', () => {
  let component: InformativeCustomerComponent;
  let fixture: ComponentFixture<InformativeCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformativeCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformativeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
