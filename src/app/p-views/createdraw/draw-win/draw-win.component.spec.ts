import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawWinComponent } from './draw-win.component';

describe('DrawWinComponent', () => {
  let component: DrawWinComponent;
  let fixture: ComponentFixture<DrawWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawWinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
