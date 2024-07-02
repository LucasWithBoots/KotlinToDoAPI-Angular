import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaEstadoInicialComponent } from './tarefa-estado-inicial.component';

describe('TarefaEstadoInicialComponent', () => {
  let component: TarefaEstadoInicialComponent;
  let fixture: ComponentFixture<TarefaEstadoInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaEstadoInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarefaEstadoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
