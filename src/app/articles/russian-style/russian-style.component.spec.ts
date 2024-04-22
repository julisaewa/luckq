import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RussianStyleComponent } from './russian-style.component';

describe('RussianStyleComponent', () => {
  let component: RussianStyleComponent;
  let fixture: ComponentFixture<RussianStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RussianStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RussianStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
