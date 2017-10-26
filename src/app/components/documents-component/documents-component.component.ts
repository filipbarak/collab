import {
    animate, Component, keyframes, OnInit, state, style, transition,
    trigger
} from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
    selector: 'documents-component',
    templateUrl: './documents-component.component.html',
    styleUrls: ['./documents-component.component.css'],
    animations: [
        trigger('bulbState', [
            state('normal', style({
                transform: 'scale(1)',
                opacity: 1
            })),
            state('clicked', style({
                transform: 'scale(1)',
                opacity: 1,
            })),
            transition('normal => clicked', [
                animate(300, keyframes([
                    style({
                        transform: 'scale(0.6)',
                        offset: 0.4,
                        color: 'yellow'
                    }),
                    style({
                        transform: 'scale(0.7)',
                        offset: 0.6,
                        color: 'yellow'
                    }),
                    style({
                        transform: 'scale(0.8)',
                        offset: 0.8,
                        color: 'yellow'
                    }),
                    style({
                        transform: 'scale(1)',
                        offset: 1,
                        color: 'yellow'
                    })
                ]))
            ])
        ])
    ]

})
export class DocumentsComponentComponent implements OnInit {
    public documents = [];
    public bulbState: string = 'normal';
    private count = 0;

    constructor() {
    }

    ngOnInit() {
    }

    createDocument() {
        this.documents.push({
            'title': 'New Project',
            'imgPath': '../../../assets/blockchain-green.jpg',
            'id': this.count++,
            'state': 'normal'
        });
        if (this.bulbState === 'normal') {
            this.bulbState = 'clicked';
            console.log(document, 'DOC.');
            setTimeout(() => {
                this.bulbState = 'normal';
            }, 300);
        }
    }

}
