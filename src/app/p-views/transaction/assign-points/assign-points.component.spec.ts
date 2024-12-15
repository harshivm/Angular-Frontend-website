import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPointsComponent } from './assign-points.component';

describe('AssignPointsComponent', () => {
  let component: AssignPointsComponent;
  let fixture: ComponentFixture<AssignPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignPointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
