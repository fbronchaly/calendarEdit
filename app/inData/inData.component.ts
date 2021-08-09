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

constructor(){
  aaa:AppComponent
}

  a: string = "";
  b: string = "";
  c: string = "";
  d: string = "";

  this.aaa.update(a,b,c,d);
}
