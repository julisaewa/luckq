import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChinaComponent } from './ai-china.component';

describe('AiChinaComponent', () => {
  let component: AiChinaComponent;
  let fixture: ComponentFixture<AiChinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiChinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
