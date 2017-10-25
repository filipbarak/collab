import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
  selector: 'single-document',
  templateUrl: './single-document.component.html',
  styleUrls: ['./single-document.component.css']
})
export class SingleDocumentComponent implements OnInit {
  @Input() documents;

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

}
