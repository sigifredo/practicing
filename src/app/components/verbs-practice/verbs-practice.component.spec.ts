import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsPracticeComponent } from './verbs-practice.component';

describe('VerbsPracticeComponent', () => {
    let component: VerbsPracticeComponent;
    let fixture: ComponentFixture<VerbsPracticeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ VerbsPracticeComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VerbsPracticeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
