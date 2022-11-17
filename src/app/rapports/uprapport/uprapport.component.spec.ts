import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprapportComponent } from './uprapport.component';

describe('UprapportComponent', () => {
  let component: UprapportComponent;
  let fixture: ComponentFixture<UprapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UprapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UprapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
