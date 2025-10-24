import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiguelBazalduaComponent } from './miguel-bazaldua.component';

describe('MiguelBazalduaComponent', () => {
  let component: MiguelBazalduaComponent;
  let fixture: ComponentFixture<MiguelBazalduaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiguelBazalduaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiguelBazalduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
