import { Component, OnInit } from '@angular/core';
import { VerbsService } from 'src/app/services/verbs.service';
import { VerbModel } from '../../models/verb.model';

@Component({
    selector: 'app-verbs-practice',
    templateUrl: './verbs-practice.component.html',
    styleUrls: ['./verbs-practice.component.scss']
})
export class VerbsPracticeComponent implements OnInit {

    private verbs:VerbModel[] = [];
    message = { class: 'message', value: '' };
    option = { present: '', past: '', pastparticiple: '' };
    formResponse = { past: '', pastparticiple: '' };

    constructor(private verbsService: VerbsService) { }

    ngOnInit(): void {
        this.verbsService.getAll().subscribe(data => {
            this.verbs = data;
            this.getNextQuestion();
        });
    }

    checkAnswers(past:string, pastparticiple:string) {
        if (past.toLowerCase() == this.option.past && pastparticiple.toLowerCase() == this.option.pastparticiple) {
            this.message.class = 'message';
            this.message.value = 'Respuesta correcta';
            this.getNextQuestion();
        }
        else {
            this.message.class = 'error';
            this.message.value = 'Respuesta incorrecta';
        }
        this.formResponse.past = '';
        this.formResponse.pastparticiple = '';
    }

    getNextQuestion():void {
        let i = Math.floor(Math.random()*this.verbs.length);

        if (this.option.present == this.verbs[i].present) {
            this.getNextQuestion();
        }
        else {
            this.option.present = this.verbs[i].present;
            this.option.past = this.verbs[i].past;
            this.option.pastparticiple = this.verbs[i].pastparticiple;
        }
    }

}
