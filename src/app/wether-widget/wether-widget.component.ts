import { Component, OnInit } from '@angular/core';
import { IWidget, WIDGET } from '../widget/Widget';

@Component({
  selector: 'app-wether-widget',
  templateUrl: './wether-widget.component.html',
  styleUrls: ['./wether-widget.component.scss'],
  providers: [{
    provide: WIDGET,
    useExisting: WetherWidgetComponent,
    multi: true
  }]
})
export class WetherWidgetComponent implements OnInit, IWidget {

  constructor() { }

  ngOnInit(): void {
  }
  refresh(): void {
    console.log("wether widget refreshing...");
  }
  load(): void {
    console.log("wether widget loading data...");
  }
}
