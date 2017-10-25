import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'documents-component',
    templateUrl: './documents-component.component.html',
    styleUrls: ['./documents-component.component.css']
})
export class DocumentsComponentComponent implements OnInit {
    public documents = [];
    private count = 0;

    constructor() {
    }

    ngOnInit() {
    }

    createDocument() {
        this.documents.push({
            'title': 'New Project',
            'imgPath': '../../../assets/blockchain-green.jpg',
            'id': this.count++
        });
        console.log(this.documents);
    }

}
