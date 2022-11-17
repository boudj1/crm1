import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlocuteurComponent } from './interlocuteur.component';

describe('InterlocuteurComponent', () => {
  let component: InterlocuteurComponent;
  let fixture: ComponentFixture<InterlocuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterlocuteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterlocuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
