import { async, TestBed } from '@angular/core/testing';
import { ManageProductsBartenderComponent } from './manage-products-bartender.component';
describe('ManageProductsBartenderComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManageProductsBartenderComponent]
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
//# sourceMappingURL=manage-products-bartender.component.spec.js.map