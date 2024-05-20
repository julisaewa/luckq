import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinaWallComponent } from './china-wall.component';

describe('ChinaWallComponent', () => {
  let component: ChinaWallComponent;
  let fixture: ComponentFixture<ChinaWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinaWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChinaWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
