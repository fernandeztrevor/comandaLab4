import { async, TestBed } from '@angular/core/testing';
import { ManageProductsCocineroComponent } from './manage-products-cocinero.component';
describe('ManageProductsCocineroComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManageProductsCocineroComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ManageProductsCocineroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=manage-products-cocinero.component.spec.js.map