/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlaintComponent } from './Plaint.component';

describe('PlaintComponent', () => {
  let component: PlaintComponent;
  let fixture: ComponentFixture<PlaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
