import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductsAdminComponent } from './manage-products-admin.component';

describe('ManageProductsAdminComponent', () => {
  let component: ManageProductsAdminComponent;
  let fixture: ComponentFixture<ManageProductsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
