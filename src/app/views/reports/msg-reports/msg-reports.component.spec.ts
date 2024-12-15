import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgReportsComponent } from './msg-reports.component';

describe('MsgReportsComponent', () => {
  let component: MsgReportsComponent;
  let fixture: ComponentFixture<MsgReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsgReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
