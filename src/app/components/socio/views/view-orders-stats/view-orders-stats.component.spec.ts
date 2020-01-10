import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersStatsComponent } from './view-orders-stats.component';

describe('ViewOrdersStatsComponent', () => {
  let component: ViewOrdersStatsComponent;
  let fixture: ComponentFixture<ViewOrdersStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrdersStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
