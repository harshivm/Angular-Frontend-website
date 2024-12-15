import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerHeaderComponent } from './partner-header.component';

describe('PartnerHeaderComponent', () => {
  let component: PartnerHeaderComponent;
  let fixture: ComponentFixture<PartnerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
