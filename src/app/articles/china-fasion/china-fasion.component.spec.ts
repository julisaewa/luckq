import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinaFasionComponent } from './china-fasion.component';

describe('ChinaFasionComponent', () => {
  let component: ChinaFasionComponent;
  let fixture: ComponentFixture<ChinaFasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinaFasionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChinaFasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
