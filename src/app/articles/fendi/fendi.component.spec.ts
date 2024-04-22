import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FendiComponent } from './fendi.component';

describe('FendiComponent', () => {
  let component: FendiComponent;
  let fixture: ComponentFixture<FendiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FendiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FendiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
