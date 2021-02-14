import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorListaComponent } from './autor-lista.component';

describe('AutorListaComponent', () => {
  let component: AutorListaComponent;
  let fixture: ComponentFixture<AutorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
