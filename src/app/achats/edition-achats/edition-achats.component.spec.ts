import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionAchatsComponent } from './edition-achats.component';

describe('EditionAchatsComponent', () => {
  let component: EditionAchatsComponent;
  let fixture: ComponentFixture<EditionAchatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionAchatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
