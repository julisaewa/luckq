import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasionWeekMoscowComponent } from './fasion-week-moscow.component';

describe('FasionWeekMoscowComponent', () => {
  let component: FasionWeekMoscowComponent;
  let fixture: ComponentFixture<FasionWeekMoscowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasionWeekMoscowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasionWeekMoscowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
