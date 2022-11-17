import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpclientComponent } from './upclient.component';

describe('UpclientComponent', () => {
  let component: UpclientComponent;
  let fixture: ComponentFixture<UpclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
