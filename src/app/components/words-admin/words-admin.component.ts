import { Component, OnInit } from '@angular/core';
import { WordModel } from 'src/app/models/word.model';
import { WordsService } from 'src/app/services/words.service';

@Component({
    selector: 'app-words-admin',
    templateUrl: './words-admin.component.html',
    styleUrls: ['./words-admin.component.scss']
})
export class WordsAdminComponent implements OnInit {

    words:WordModel[] = [];
    errorMessage:string = '';
    form = { eng: '', spa: ''};

    constructor(private wordsService: WordsService) { }

    ngOnInit(): void {
        this.requestWords();
    }

    save(english:string, spanish:string):void {
        let word:WordModel = new WordModel();

        word.english = english.toLowerCase();
        word.spanish = spanish.toLowerCase();

        this.wordsService.add(word)
        .toPromise()
        .then(data => {
            this.requestWords();
            this.form.eng = '';
            this.form.spa = '';
        })
        .catch(data => {
            console.log(data);
            this.errorMessage = 'No se ha podido guardar la palabra.';
        });
    }

    requestWords():void {
        this.wordsService.getAll().subscribe(data => {
            this.words = data;
        });
    }
}
