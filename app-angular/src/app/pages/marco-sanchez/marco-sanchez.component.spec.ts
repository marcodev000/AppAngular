import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoSanchezComponent } from './marco-sanchez.component';

describe('MarcoSanchezComponent', () => {
  let component: MarcoSanchezComponent;
  let fixture: ComponentFixture<MarcoSanchezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcoSanchezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcoSanchezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
