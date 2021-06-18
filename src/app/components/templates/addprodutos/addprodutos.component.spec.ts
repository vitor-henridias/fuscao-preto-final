import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodutosComponent } from './addprodutos.component';

describe('AddprodutosComponent', () => {
  let component: AddprodutosComponent;
  let fixture: ComponentFixture<AddprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprodutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
