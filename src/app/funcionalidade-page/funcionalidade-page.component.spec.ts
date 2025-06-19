import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadePageComponent } from './funcionalidade-page.component';

describe('FuncionalidadePageComponent', () => {
  let component: FuncionalidadePageComponent;
  let fixture: ComponentFixture<FuncionalidadePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionalidadePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionalidadePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
