import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetGalaComponent } from './met-gala.component';

describe('MetGalaComponent', () => {
  let component: MetGalaComponent;
  let fixture: ComponentFixture<MetGalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetGalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetGalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
