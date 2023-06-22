/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListePlaintComponent } from './ListePlaint.component';

describe('ListePlaintComponent', () => {
  let component: ListePlaintComponent;
  let fixture: ComponentFixture<ListePlaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePlaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePlaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
