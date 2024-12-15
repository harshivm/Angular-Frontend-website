import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudReportsComponent } from './fraud-reports.component';

describe('FraudReportsComponent', () => {
  let component: FraudReportsComponent;
  let fixture: ComponentFixture<FraudReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FraudReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
