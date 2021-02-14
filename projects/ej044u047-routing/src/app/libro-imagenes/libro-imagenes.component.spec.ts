import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroImagenesComponent } from './libro-imagenes.component';

describe('LibroImagenesComponent', () => {
  let component: LibroImagenesComponent;
  let fixture: ComponentFixture<LibroImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
