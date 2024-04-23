import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BishkekComponent } from './bishkek.component';

describe('BishkekComponent', () => {
  let component: BishkekComponent;
  let fixture: ComponentFixture<BishkekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BishkekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BishkekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
