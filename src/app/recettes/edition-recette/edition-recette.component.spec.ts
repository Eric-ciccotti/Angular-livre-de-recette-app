import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionRecetteComponent } from './edition-recette.component';

describe('EditionRecetteComponent', () => {
  let component: EditionRecetteComponent;
  let fixture: ComponentFixture<EditionRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
