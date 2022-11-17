import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailrComponent } from './detailr.component';

describe('DetailrComponent', () => {
  let component: DetailrComponent;
  let fixture: ComponentFixture<DetailrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
