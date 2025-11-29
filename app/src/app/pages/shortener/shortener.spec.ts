import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shortener } from './shortener';

describe('Shortener', () => {
  let component: Shortener;
  let fixture: ComponentFixture<Shortener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shortener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shortener);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
