import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaEstadoFinalizadoComponent } from './tarefa-estado-finalizado.component';

describe('TarefaEstadoFinalizadoComponent', () => {
  let component: TarefaEstadoFinalizadoComponent;
  let fixture: ComponentFixture<TarefaEstadoFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaEstadoFinalizadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarefaEstadoFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
