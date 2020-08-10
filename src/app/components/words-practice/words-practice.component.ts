import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { WordModel } from 'src/app/models/word.model';

@Component({
    selector: 'app-words-practice',
    templateUrl: './words-practice.component.html',
    styleUrls: ['./words-practice.component.scss']
})
export class WordsPracticeComponent implements OnInit {

    private words:WordModel[] = [];
    message = { class: 'message', value: '' };
    option = { question: '', answer: '' };
    formResponse:string = '';

    constructor(private wordsService: WordsService) { }

    ngOnInit(): void {
        this.wordsService.getAll().subscribe(data => {
            this.words = data;
            this.getNextQuestion();
        });
    }

    checkAnswers(response:string) {
        if (response.toLowerCase() == this.option.answer) {
            this.message.class = 'message';
            this.message.value = 'Respuesta correcta';
            this.getNextQuestion();
        }
        else {
            this.message.class = 'error';
            this.message.value = 'Respuesta incorrecta';
        }
        this.formResponse = '';
    }

    getNextQuestion():void {
        let i = Math.floor(Math.random()*this.words.length);
        let j = Math.floor(Math.random()*2);

        if (j == 0) {
            if (this.option.question == this.words[i].english) {
                this.getNextQuestion();
            }
            else {
                this.option.question = this.words[i].english;
                this.option.answer = this.words[i].spanish;
            }
        }
        else {
            if (this.option.question == this.words[i].spanish) {
                this.getNextQuestion();
            }
            else {
                this.option.question = this.words[i].spanish;
                this.option.answer = this.words[i].english;
            }
        }
    }
}
