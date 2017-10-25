import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    @ViewChild('iframe') iframe;

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
    }


}
