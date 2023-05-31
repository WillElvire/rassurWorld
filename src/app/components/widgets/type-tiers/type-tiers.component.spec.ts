import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTiersComponent } from './type-tiers.component';

describe('TypeTiersComponent', () => {
  let component: TypeTiersComponent;
  let fixture: ComponentFixture<TypeTiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
