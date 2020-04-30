import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionRecetteComponent } from './selection-recette.component';

describe('SelectionRecetteComponent', () => {
  let component: SelectionRecetteComponent;
  let fixture: ComponentFixture<SelectionRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
