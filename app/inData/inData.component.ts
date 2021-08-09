import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inData',
  templateUrl: './inData.component.html'
})
export class InDataComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor(aaa: AppComponent) {
    let a: any = {
      el: { name: 'Hydrogen', symbol: 'H' },
      comment: 'Hello',
      n1: 'X',
      n2: 'O'
    };
    let b: string = 'a';
    let c: string = 'c';
    let d: string = 'd';

    aaa.update(a, b, c, d);
  }
}
