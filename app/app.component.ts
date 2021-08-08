import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns = ['name', 'symbol', 'comment'];
  dataSource = new ExampleDataSource(initialData);

  update(el: Element, comment: string) {
    if (comment == null) { return; }
    // copy and mutate
    const copy = this.dataSource.data().slice()
    el.comment = comment;
    this.dataSource.update(copy);
  }
}

export interface Element {
  name: string;
  symbol: string;
  comment?: string;
}

const initialData: Element[] = [
  {name: 'Hydrogen', symbol: 'H'},
  {name: 'Helium', symbol: 'He'},
  {name: 'Lithium', symbol: 'Li'},
  {name: 'Beryllium', symbol: 'Be'},
  {name: 'Boron', symbol: 'B'},
  {name: 'Carbon', symbol: 'C'},
  {name: 'Nitrogen', symbol: 'N'},
  {name: 'Oxygen', symbol: 'O'},
  {name: 'Fluorine', symbol: 'F'},
  {name: 'Neon', symbol: 'Ne'},
  {name: 'Sodium', symbol: 'Na'},
  {name: 'Magnesium', symbol: 'Mg'},
  {name: 'Aluminum', symbol: 'Al'},
  {name: 'Silicon', symbol: 'Si'},
  {name: 'Phosphorus', symbol: 'P'},
  {name: 'Sulfur', symbol: 'S'},
  {name: 'Chlorine', symbol: 'Cl'},
  {name: 'Argon', symbol: 'Ar'},
  {name: 'Potassium', symbol: 'K'},
  {name: 'Calcium', symbol: 'Ca'},
];

/**
 * Fuente de datos para proporcionar qué datos se deben representar en la tabla. Lo observable proporcionado
 * in connect debería emitir exactamente los datos que debería representar la tabla. Si los datos son
 * alterado, el observable debería emitir ese nuevo conjunto de datos en la secuencia. En nuestro caso aquí,
 * devolvemos una secuencia que contiene solo un conjunto de datos que no cambia.
 */
export class ExampleDataSource extends DataSource<any> {

  private dataSubject = new BehaviorSubject<Element[]>([]);

  data() {
    return this.dataSubject.value;
  }

  update(data) {
    this.dataSubject.next(data);
  }

  constructor(data: any[]) {
    super();
    this.dataSubject.next(data);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return this.dataSubject;
  }

  disconnect() {}
}