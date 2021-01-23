import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaListaComponent } from './tarea-lista.component';

describe('TareaListaComponent', () => {
  let component: TareaListaComponent;
  let fixture: ComponentFixture<TareaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
