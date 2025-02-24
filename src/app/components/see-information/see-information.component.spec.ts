import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeInformationComponent } from './see-information.component';

describe('SeeInformationComponent', () => {
  let component: SeeInformationComponent;
  let fixture: ComponentFixture<SeeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
