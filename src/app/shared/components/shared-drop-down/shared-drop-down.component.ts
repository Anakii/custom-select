import { Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-drop-down',
  templateUrl: './shared-drop-down.component.html',
  styleUrls: ['./shared-drop-down.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SharedDropDownComponent,
      multi: true
    }
  ]
})
export class SharedDropDownComponent implements OnInit, ControlValueAccessor {
  @Input() options: any[] = [];
  @Input() placeholderLabel: string;
  @Input() customOption: TemplateRef<any>;

  @Output() onSelectedItem: EventEmitter<any> = new EventEmitter<any>();

  toggled: boolean = false;
  selected: any;
  selectControl: FormControl;
  onChange: (item: any) => void
  @HostListener("document:click", ['$event'])
  toggleSelect(event: MouseEvent): void {
    if (this.toggled === true)
      this.onToggle(event);
  }
  constructor() { }
  writeValue(obj: any): void {
    this.selected = obj
    console.log("!!!", obj);

    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.selectControl = new FormControl(null, [Validators.required]);
  }

  onToggle(event: MouseEvent): void {
    event.stopPropagation();
    this.toggled = !this.toggled;
  }
  onSelect(item: any): void {
    this.selected = item;
    this.onChange(item);//out component will notify the form control in the parent that the value changed
    this.onSelectedItem.emit(item);
  }


}
