import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefCampaignComponent } from './ref-campaign.component';

describe('RefCampaignComponent', () => {
  let component: RefCampaignComponent;
  let fixture: ComponentFixture<RefCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefCampaignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
