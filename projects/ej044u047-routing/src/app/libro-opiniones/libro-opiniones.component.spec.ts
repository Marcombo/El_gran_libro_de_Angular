import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroOpinionesComponent } from './libro-opiniones.component';

describe('LibroOpinionesComponent', () => {
  let component: LibroOpinionesComponent;
  let fixture: ComponentFixture<LibroOpinionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroOpinionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
