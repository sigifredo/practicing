import { Component, OnInit } from '@angular/core';
import { WordModel } from 'src/app/models/word.model';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    save(english:string, spanish:string):void {
        let word:WordModel = new WordModel();

        word.english = english.toLowerCase();
        word.spanish = spanish.toLowerCase();

        console.log(word);
    }
}
