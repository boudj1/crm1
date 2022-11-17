import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpinterlocComponent } from './upinterloc.component';

describe('UpinterlocComponent', () => {
  let component: UpinterlocComponent;
  let fixture: ComponentFixture<UpinterlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpinterlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpinterlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
