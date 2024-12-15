import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedrawComponent } from './createdraw.component';

describe('CreatedrawComponent', () => {
  let component: CreatedrawComponent;
  let fixture: ComponentFixture<CreatedrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatedrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
