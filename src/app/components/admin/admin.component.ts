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
    errorMessage:string = '';
    form = { eng: '', spa: ''};

    constructor(private wordsService: WordService) { }

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
