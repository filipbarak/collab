import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
    selector: 'idea-placeholder',
    templateUrl: './idea-placeholder.component.html',
    styleUrls: ['./idea-placeholder.component.css']
})
export class IdeaPlaceholderComponent implements OnInit {


    constructor(private commonService: CommonService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }

}
