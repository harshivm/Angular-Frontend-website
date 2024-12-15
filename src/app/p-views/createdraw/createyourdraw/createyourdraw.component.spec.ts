import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateyourdrawComponent } from './createyourdraw.component';

describe('CreateyourdrawComponent', () => {
  let component: CreateyourdrawComponent;
  let fixture: ComponentFixture<CreateyourdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateyourdrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateyourdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
