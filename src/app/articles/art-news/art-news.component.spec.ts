import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtNewsComponent } from './art-news.component';

describe('ArtNewsComponent', () => {
  let component: ArtNewsComponent;
  let fixture: ComponentFixture<ArtNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
