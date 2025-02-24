import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCompleteComponent } from './information-complete.component';

describe('InformationCompleteComponent', () => {
  let component: InformationCompleteComponent;
  let fixture: ComponentFixture<InformationCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
