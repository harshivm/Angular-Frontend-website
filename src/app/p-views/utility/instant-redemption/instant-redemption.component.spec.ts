import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantRedemptionComponent } from './instant-redemption.component';

describe('InstantRedemptionComponent', () => {
  let component: InstantRedemptionComponent;
  let fixture: ComponentFixture<InstantRedemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstantRedemptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstantRedemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
