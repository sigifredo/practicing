import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsPracticeComponent } from './words-practice.component';

describe('WordsPracticeComponent', () => {
    let component: WordsPracticeComponent;
    let fixture: ComponentFixture<WordsPracticeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WordsPracticeComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WordsPracticeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
