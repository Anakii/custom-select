import { Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-drop-down',
  templateUrl: './shared-drop-down.component.html',
  styleUrls: ['./shared-drop-down.component.scss']
})
export class SharedDropDownComponent implements OnInit {
  @Input() options: any[] = []
  @Input() placeholderLabel: string

  @Input() customOption: TemplateRef<any>

  @Output() onSelectedItem: EventEmitter<any> = new EventEmitter<any>();

  toggled: boolean = false;
  selected: any;
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

  onToggle(event: MouseEvent): void {
    event.stopPropagation();
    this.toggled = !this.toggled;
  }
  onSelect(item: any): void {
    this.selected = item;
    this.selectControl.setValue(item);
    this.onSelectedItem.emit(item)

  }


}
