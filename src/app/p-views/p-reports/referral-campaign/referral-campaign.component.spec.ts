import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralCampaignComponent } from './referral-campaign.component';

describe('ReferralCampaignComponent', () => {
  let component: ReferralCampaignComponent;
  let fixture: ComponentFixture<ReferralCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralCampaignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferralCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
