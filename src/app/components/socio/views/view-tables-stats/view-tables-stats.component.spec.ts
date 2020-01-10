import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTablesStatsComponent } from './view-tables-stats.component';

describe('ViewTablesStatsComponent', () => {
  let component: ViewTablesStatsComponent;
  let fixture: ComponentFixture<ViewTablesStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTablesStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTablesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
