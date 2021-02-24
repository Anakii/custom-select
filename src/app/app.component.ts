import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  options: any[] = [1, 2, 3, 4]
  form: FormGroup
  constructor(private data: DataService) {
    this.data.getTExt().subscribe(console.log)

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      favoriteNumber: new FormControl("2"),
      favoriteNumberCustom: new FormControl(null)
    })
  }
}
