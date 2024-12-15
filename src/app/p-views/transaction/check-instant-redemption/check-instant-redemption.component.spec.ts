import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInstantRedemptionComponent } from './check-instant-redemption.component';

describe('CheckInstantRedemptionComponent', () => {
  let component: CheckInstantRedemptionComponent;
  let fixture: ComponentFixture<CheckInstantRedemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckInstantRedemptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckInstantRedemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
