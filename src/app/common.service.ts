import { Injectable } from '@angular/core';
const plan = require('../app/placeholders/plan.html');
const idea = require('../app/placeholders/idea.html');

@Injectable()
export class CommonService {
  planTemplate = plan;
  ideaTemplate = idea;
  hasDoc: boolean = false;
  selectedProject = {};
  pageUrl = '';
  pageIdentifier = '';
  isIdea: boolean = false;
  isPlan: boolean = false;
  constructor() {
    console.log(plan, 'Man');
  }

}

declare var require: any;