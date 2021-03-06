import {animate, Component, keyframes, OnInit, state, style, transition, trigger, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ChatComponent} from '../chat/chat.component';
import {ActivatedRoute, Params} from '@angular/router';
import {CommonService} from '../../common.service';

const packageJ = require('../../../../package.json');


@Component({
    selector: 'wiki-page',
    templateUrl: './wiki-page.component.html',
    styleUrls: ['./wiki-page.component.scss'],

})
export class WikiPageComponent implements OnInit {
    private filteredProjects = [];
    version = packageJ.version;
    private editable: boolean = false;
    public isFroalaActive: boolean;
    public froalaHtml: string;
    @ViewChild('chat') chatComponent;
    public options = {
        placeholder: 'Edit this wiki',
        events: {
            'froalaEditor.focus': (e, editor) => {
                this.froalaHtml = editor.html.get();
                console.log(this.froalaHtml, 'HTML');
            }
        }
    };

    constructor(private modalService: NgbModal, private route: ActivatedRoute, public commonService: CommonService) {
    }

    ngOnInit() {
        this.isFroalaActive = this.commonService === undefined;
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
        //Some API here
    }

    saveTitle(title, value) {
        this.editable = true;
        title = value;
        console.log(title, value);

    }

    filterProjects(evt, value, dropdown?) {
        if (value) {
            this.filteredProjects = this.commonService.documents.filter(i => i.title.toLowerCase().includes(value.toLowerCase()));
            evt.stopPropagation();
            dropdown.open();
        }
        else {
            this.filteredProjects = [];
            dropdown.close();
        }
    }

}

declare var require: any;