import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudacaoTopoComponent } from './saudacao-topo.component';

describe('SaudacaoTopoComponent', () => {
  let component: SaudacaoTopoComponent;
  let fixture: ComponentFixture<SaudacaoTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaudacaoTopoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaudacaoTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
