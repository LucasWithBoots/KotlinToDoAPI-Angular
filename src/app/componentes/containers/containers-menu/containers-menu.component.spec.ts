import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersMenuComponent } from './containers-menu.component';

describe('ContainersMenuComponent', () => {
  let component: ContainersMenuComponent;
  let fixture: ComponentFixture<ContainersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainersMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
