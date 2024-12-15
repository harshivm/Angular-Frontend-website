import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusPointsComponent } from './bonus-points.component';

describe('BonusPointsComponent', () => {
  let component: BonusPointsComponent;
  let fixture: ComponentFixture<BonusPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusPointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonusPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
