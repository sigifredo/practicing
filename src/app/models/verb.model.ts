

export class VerbModel {
    id: number;
    present: string;
    past: string;
    pastparticiple: string;
    score: number;

    constructor() {
        this.id = 0;
        this.present = '';
        this.past = '';
        this.pastparticiple = '';
        this.score = 0;
    }
}