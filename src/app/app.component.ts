import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  options:any[] = [1,2,3,4]
  constructor(private data:DataService){
    this.data.getTExt().subscribe(console.log)

  }
}
