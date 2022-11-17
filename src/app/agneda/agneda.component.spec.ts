import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgnedaComponent } from './agneda.component';

describe('AgnedaComponent', () => {
  let component: AgnedaComponent;
  let fixture: ComponentFixture<AgnedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgnedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgnedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
