import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReportsComponent } from './p-reports.component';

describe('PReportsComponent', () => {
  let component: PReportsComponent;
  let fixture: ComponentFixture<PReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
