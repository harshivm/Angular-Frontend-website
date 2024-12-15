import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingReportComponent } from './messaging-report.component';

describe('MessagingReportComponent', () => {
  let component: MessagingReportComponent;
  let fixture: ComponentFixture<MessagingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagingReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
