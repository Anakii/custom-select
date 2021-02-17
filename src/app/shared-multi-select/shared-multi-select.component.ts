import { Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-multi-select',
  templateUrl: './shared-multi-select.component.html',
  styleUrls: ['./shared-multi-select.component.scss']
})
export class SharedMultiSelectComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() placeholderLabel: string

  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>

  @Output() onSelectedItem: EventEmitter<any> = new EventEmitter<any>();

  toggled: boolean = false;
  selectedOptions: any[] = [];
  selectControl: FormControl;

  @HostListener("document:click", ['$event'])
  toggleSelect(event: MouseEvent): void {
    if (this.toggled === true)
      this.onToggle(event);
  }
  constructor() { }
  ngOnInit() {
    this.selectControl = new FormControl(null, [Validators.required])
  }
  displayMultipleOptions():string {
    return this.selectedOptions.join(",")
  }
  onToggle(event: MouseEvent): void {
    event.stopPropagation();
    this.toggled = !this.toggled;
  }
  onSelect(event:MouseEvent,item: any, index: number): void {
    event.stopPropagation()
    console.log(item);
    console.log("idx",index);
    console.log(this.findSelectedIdx(item, index));
    
    
    
    const selectedIdx: number = this.findSelectedIdx(item, index)
    if (selectedIdx !== -1) {
      this.removeItem(item)
      return
    }
    this.getItemPosition(item, index)
    this.selectedOptions.push(item);
    console.log(this.selectedOptions);

    // this.selected = item;
    // this.selectControl.setValue(item);
    // this.onSelectedItem.emit(item)

  }
  removeItem(item:any) {
    console.log(this.selectedOptions);
    const selectedIdx: number = this.findSelectedIdx(item, item)
    this.selectedOptions.splice(selectedIdx, 1);
    console.log(this.selectedOptions);
    
  }
  findSelectedIdx(item: any, index: number): number {
    return this.selectedOptions.findIndex(option=>item===option)// === -1?true:false
  }
  getItemPosition(item: any, index: number) {
    // this.selectedOptions.findIndex()
  }


}
