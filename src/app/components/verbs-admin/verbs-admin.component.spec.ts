import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsAdminComponent } from './verbs-admin.component';

describe('VerbsAdminComponent', () => {
    let component: VerbsAdminComponent;
    let fixture: ComponentFixture<VerbsAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ VerbsAdminComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VerbsAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
