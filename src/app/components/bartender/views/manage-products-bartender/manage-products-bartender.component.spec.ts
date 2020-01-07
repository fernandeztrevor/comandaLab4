import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductsBartenderComponent } from './manage-products-bartender.component';

describe('ManageProductsBartenderComponent', () => {
  let component: ManageProductsBartenderComponent;
  let fixture: ComponentFixture<ManageProductsBartenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductsBartenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsBartenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
