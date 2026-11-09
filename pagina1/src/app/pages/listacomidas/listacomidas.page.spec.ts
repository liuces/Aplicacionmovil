import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListacomidasPage } from './listacomidas.page';

describe('ListacomidasPage', () => {
  let component: ListacomidasPage;
  let fixture: ComponentFixture<ListacomidasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacomidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
