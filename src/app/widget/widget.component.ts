import { Component, ContentChild, OnInit } from '@angular/core';
import { JiraWidgetComponent } from '../jira-widget/jira-widget.component';
import { IWidget, WIDGET } from './Widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @ContentChild(WIDGET, { static: true }) widget: IWidget
  constructor() { }

  ngOnInit() {
    // console.log(this.jiraWidget);
    this.widget.load()
  }
  onRefresh() {
    this.widget.refresh()
  }

}
