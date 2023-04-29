import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurSanteComponent } from './assur-sante.component';

describe('AssurSanteComponent', () => {
  let component: AssurSanteComponent;
  let fixture: ComponentFixture<AssurSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssurSanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssurSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
