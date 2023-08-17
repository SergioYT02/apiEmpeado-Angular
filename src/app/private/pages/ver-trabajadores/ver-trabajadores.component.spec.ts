import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTrabajadoresComponent } from './ver-trabajadores.component';

describe('VerTrabajadoresComponent', () => {
  let component: VerTrabajadoresComponent;
  let fixture: ComponentFixture<VerTrabajadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerTrabajadoresComponent]
    });
    fixture = TestBed.createComponent(VerTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
