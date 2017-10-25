import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'single-document',
  templateUrl: './single-document.component.html',
  styleUrls: ['./single-document.component.css']
})
export class SingleDocumentComponent implements OnInit {
  @Input() documents;

  constructor() { }

  ngOnInit() {
  }

}
