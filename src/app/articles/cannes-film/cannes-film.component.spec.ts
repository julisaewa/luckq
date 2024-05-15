import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannesFilmComponent } from './cannes-film.component';

describe('CannesFilmComponent', () => {
  let component: CannesFilmComponent;
  let fixture: ComponentFixture<CannesFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannesFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CannesFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
