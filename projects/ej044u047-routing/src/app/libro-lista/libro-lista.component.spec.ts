import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroListaComponent } from './libro-lista.component';

describe('LibroListaComponent', () => {
  let component: LibroListaComponent;
  let fixture: ComponentFixture<LibroListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
