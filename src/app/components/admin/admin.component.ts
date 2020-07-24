import { Component, OnInit } from '@angular/core';
import { WordModel } from 'src/app/models/word.model';
import { WordService } from 'src/app/services/word.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    words:WordModel[] = [];

    constructor(private wordsService: WordService) { }

    ngOnInit(): void {
        this.wordsService.getAll().subscribe(data => {
            this.words = data;
        });
    }

    save(english:string, spanish:string):void {
        let word:WordModel = new WordModel();

        word.english = english.toLowerCase();
        word.spanish = spanish.toLowerCase();

        this.wordsService.add(word);
    }
}
