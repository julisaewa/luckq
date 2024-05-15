import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannesFashionComponent } from './cannes-fashion.component';

describe('CannesFashionComponent', () => {
  let component: CannesFashionComponent;
  let fixture: ComponentFixture<CannesFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannesFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CannesFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
