import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { SharedDropDownComponent } from './components/shared-drop-down/shared-drop-down.component';
import { SharedMultiSelectComponent } from './components/shared-multi-select/shared-multi-select.component';
import { SearchPipe } from './components/pipes/search.pipe';



@NgModule({
  declarations: [SharedDropDownComponent,SharedMultiSelectComponent,SearchPipe],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[SharedDropDownComponent,SharedMultiSelectComponent]
})
export class SharedModule { }
