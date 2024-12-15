import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantRedeemComponent } from './instant-redeem.component';

describe('InstantRedeemComponent', () => {
  let component: InstantRedeemComponent;
  let fixture: ComponentFixture<InstantRedeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstantRedeemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstantRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
