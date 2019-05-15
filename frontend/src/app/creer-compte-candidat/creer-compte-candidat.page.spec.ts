import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCompteCandidatPage } from './creer-compte-candidat.page';

describe('CreerCompteCandidatPage', () => {
  let component: CreerCompteCandidatPage;
  let fixture: ComponentFixture<CreerCompteCandidatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerCompteCandidatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerCompteCandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
