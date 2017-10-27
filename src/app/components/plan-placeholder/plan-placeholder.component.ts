import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
  selector: 'plan-placeholder',
  templateUrl: './plan-placeholder.component.html',
  styleUrls: ['./plan-placeholder.component.css']
})
export class PlanPlaceholderComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

}
