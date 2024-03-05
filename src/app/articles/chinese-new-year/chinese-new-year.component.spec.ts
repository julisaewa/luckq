import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseNewYearComponent } from './chinese-new-year.component';

describe('ChineseNewYearComponent', () => {
  let component: ChineseNewYearComponent;
  let fixture: ComponentFixture<ChineseNewYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChineseNewYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChineseNewYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
