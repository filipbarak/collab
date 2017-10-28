import {animate, Component, keyframes, OnInit, state, style, transition, trigger, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    animations: [
        trigger('chatModal', [
            state('in', style({
                transform: 'scale(1)',
                opacity: 1
            })),
            transition('void => *', [
                animate(500, keyframes([
                    style({
                        transform: 'scale(0.5)',
                        opacity: 0,
                        offset: 0
                    }),
                    style({
                        transform: 'scale(0.7px)',
                        opacity: 0.5,
                        offset: 0.4
                    }),
                    style({
                        transform: 'scale(0.9)',
                        opacity: 0.8,
                        offset: 0.8
                    }),
                    style({
                        transform: 'scale(1)',
                        opacity: 1,
                        offset: 1
                    })
                ]))
            ])
        ])
    ]
})
export class ChatComponent implements OnInit {

    @ViewChild('iframe') iframe;

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
    }


}
