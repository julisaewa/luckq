import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnaviComponent } from './subnavi.component';

describe('SubnaviComponent', () => {
  let component: SubnaviComponent;
  let fixture: ComponentFixture<SubnaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubnaviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
