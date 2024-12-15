import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralCampaignReportsComponent } from './referral-campaign-reports.component';

describe('ReferralCampaignReportsComponent', () => {
  let component: ReferralCampaignReportsComponent;
  let fixture: ComponentFixture<ReferralCampaignReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralCampaignReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferralCampaignReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
