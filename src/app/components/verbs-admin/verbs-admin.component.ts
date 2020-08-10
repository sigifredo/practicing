import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { VerbModel } from '../../models/verb.model';
import { VerbsService } from 'src/app/services/verbs.service';

@Component({
    selector: 'app-verbs-admin',
    templateUrl: './verbs-admin.component.html',
    styleUrls: ['./verbs-admin.component.scss']
})
export class VerbsAdminComponent implements OnInit {

    verbs:VerbModel[] = [];
    errorMessage:string = '';
    form = { present: '', past: '', pastparticiple: ''};

    @ViewChild('pres') firstInput: ElementRef;

    constructor(private verbsService: VerbsService) { }

    ngOnInit(): void {
        this.requestWords();
    }

    save(present:string, past:string, pastparticiple:string):void {
        let verb:VerbModel = new VerbModel();

        verb.present = present.toLowerCase();
        verb.past = past.toLowerCase();
        verb.pastparticiple = pastparticiple.toLowerCase();

        this.verbsService.add(verb)
        .toPromise()
        .then(data => {
            this.requestWords();
            this.form.present = '';
            this.form.past = '';
            this.form.pastparticiple = '';
            this.firstInput.nativeElement.focus();
        })
        .catch(data => {
            console.log(data);
            this.errorMessage = 'No se ha podido guardar la palabra.';
        });
    }

    requestWords():void {
        this.verbsService.getAll().subscribe(data => {
            this.verbs = data;
        });
    }

}
