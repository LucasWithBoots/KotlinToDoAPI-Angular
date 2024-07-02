import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersTarefaEstadoInicialComponent } from './containers-tarefa-estado-inicial.component';

describe('ContainersTarefaEstadoInicialComponent', () => {
  let component: ContainersTarefaEstadoInicialComponent;
  let fixture: ComponentFixture<ContainersTarefaEstadoInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainersTarefaEstadoInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainersTarefaEstadoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
