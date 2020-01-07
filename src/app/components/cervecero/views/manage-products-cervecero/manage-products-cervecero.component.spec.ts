import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductsCerveceroComponent } from './manage-products-cervecero.component';

describe('ManageProductsCerveceroComponent', () => {
  let component: ManageProductsCerveceroComponent;
  let fixture: ComponentFixture<ManageProductsCerveceroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductsCerveceroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsCerveceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});