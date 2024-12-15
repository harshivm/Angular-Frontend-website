import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountReportComponent } from './discount-report.component';

describe('DiscountReportComponent', () => {
  let component: DiscountReportComponent;
  let fixture: ComponentFixture<DiscountReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
