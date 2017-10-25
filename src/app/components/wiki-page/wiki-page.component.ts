import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ChatComponent} from '../chat/chat.component';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
    selector: 'wiki-page',
    templateUrl: './wiki-page.component.html',
    styleUrls: ['./wiki-page.component.scss']
})
export class WikiPageComponent implements OnInit {
    public editorContent;
    public isFroalaActive: boolean;
    public froalaHtml: string;
    public options = {
        placeholder: 'Edit this wiki',
        events: {
            'froalaEditor.focus': (e, editor) => {
                this.froalaHtml = editor.html.get();
                console.log(this.froalaHtml, 'HTML');
            }
        }
    }

    constructor(private modalService: NgbModal, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.isFroalaActive = this.editorContent === undefined;
        this.route.params
            .subscribe((params: Params) => {
            console.log(params, 'Params.');
            });
    }

    openChat() {
        this.modalService.open(ChatComponent);
    }

    saveWiki() {
        this.isFroalaActive = false;
        if (this.editorContent === undefined || this.editorContent === '') {
            this.editorContent = 'There is nothing here...';
        }
    }

    editWiki() {
        this.isFroalaActive = true;
        if (this.editorContent === 'There is nothing here...') {
            this.editorContent = undefined;
        }
    }


}
