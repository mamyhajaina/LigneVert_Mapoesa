import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepporatgeComponent } from './list-repporatge.component';

describe('ListRepporatgeComponent', () => {
  let component: ListRepporatgeComponent;
  let fixture: ComponentFixture<ListRepporatgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRepporatgeComponent]
    });
    fixture = TestBed.createComponent(ListRepporatgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
