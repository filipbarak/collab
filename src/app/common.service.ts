import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  hasDoc: boolean = false;
  selectedProject = {};
  pageUrl = '';
  pageIdentifier = '';
  isIdea: boolean = false;
  isPlan: boolean = false;
  constructor() { }

}
