import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {
  @Input() placeholder: string = 'Search...';
  @Output() onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value: string) {
    this.onValue.emit(value);
  }
}
