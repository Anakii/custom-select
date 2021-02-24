import { Component, OnInit } from '@angular/core';
import { IWidget, WIDGET } from '../widget/Widget';

@Component({
  selector: 'app-jira-widget',
  templateUrl: './jira-widget.component.html',
  styleUrls: ['./jira-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: JiraWidgetComponent,
      multi: true
    }
  ]
})
export class JiraWidgetComponent implements OnInit, IWidget {

  constructor() { }
  refresh(): void {
    console.log("jira widget refreshing...");

  }
  load(): void {
    console.log("jira widget loading data...");

  }

  ngOnInit() {
  }

}
