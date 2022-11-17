import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthentificationComponent } from './athentification.component';

describe('AthentificationComponent', () => {
  let component: AthentificationComponent;
  let fixture: ComponentFixture<AthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
