import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipLangComponent } from './tooltip-lang.component';

describe('TooltipLangComponent', () => {
  let component: TooltipLangComponent;
  let fixture: ComponentFixture<TooltipLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipLangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
