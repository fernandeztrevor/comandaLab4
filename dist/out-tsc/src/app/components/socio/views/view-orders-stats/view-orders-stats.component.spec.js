import { async, TestBed } from '@angular/core/testing';
import { ViewOrdersStatsComponent } from './view-orders-stats.component';
describe('ViewOrdersStatsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewOrdersStatsComponent]
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
//# sourceMappingURL=view-orders-stats.component.spec.js.map