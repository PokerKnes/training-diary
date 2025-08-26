import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingChoiceComponent } from './training-choice.component';

describe('TrainingChoiceComponent', () => {
  let component: TrainingChoiceComponent;
  let fixture: ComponentFixture<TrainingChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
