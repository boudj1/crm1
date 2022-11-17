import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlocComponent } from './interloc.component';

describe('InterlocComponent', () => {
  let component: InterlocComponent;
  let fixture: ComponentFixture<InterlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
