import { Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-multi-select',
  templateUrl: './shared-multi-select.component.html',
  styleUrls: ['./shared-multi-select.component.scss']
})
export class SharedMultiSelectComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() placeholderLabel: string;

  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<{ option: string }>;

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
  displayMultipleOptions(): string {
    return this.selectedOptions.join(", ");
  }
  onToggle(event: MouseEvent): void {
    event.stopPropagation();
    this.toggled = !this.toggled;
  }
  onSelect(event: MouseEvent, item: any): void {
    event.stopPropagation();
    const selectedIdx: number = this.findSelectedIdx(item);
    if (selectedIdx !== -1) {
      this.removeItem(item);
      return;
    }
    this.selectedOptions.push(item);
  }
  removeItem(item: any): void {
    const selectedIdx: number = this.findSelectedIdx(item);
    this.selectedOptions.splice(selectedIdx, 1);
  }

  findSelectedIdx(item: any): number {
    return this.selectedOptions.findIndex(option => item === option);
  }

}
