import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawContainerComponent } from './draw-container.component';

describe('DrawContainerComponent', () => {
  let component: DrawContainerComponent;
  let fixture: ComponentFixture<DrawContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
