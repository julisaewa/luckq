import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzhouComponent } from './fuzhou.component';

describe('FuzhouComponent', () => {
  let component: FuzhouComponent;
  let fixture: ComponentFixture<FuzhouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuzhouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuzhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
