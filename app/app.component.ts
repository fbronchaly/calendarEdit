import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns = ['name', 'symbol', 'comment', 'n1', 'n2'];
  dataSource = new ExampleDataSource(initialData);

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    console.log('1');
    this.items.push(newItem);
    console.log(this.items);
  }

  update(el: Element, comment: string, n1: string, n2: string) {
    console.log('Elemento: ');
    console.log(el);
    console.log('Comentario: ' + comment + n1 + n2);

    if (comment == null) {
      return;
    }
    // copy and mutate
    const copy = this.dataSource.data().slice();
    el.comment = comment; // Actualiza el elemento en copy
    el.symbol = 'RACATA';
    this.dataSource.update(copy);
  }
}

export interface Element {
  name: string;
  symbol: string;
  comment?: string;
  n1?: string;
  n2?: string;
}

const initialData: Element[] = [
  { name: 'Hydrogen', symbol: 'H', n1: '', n2: '' },
  { name: 'Helium', symbol: 'He', n1: '', n2: '' },
  { name: 'Lithium', symbol: 'Li', n1: '', n2: '' },
  { name: 'Beryllium', symbol: 'Be', n1: '', n2: '' },
  { name: 'Boron', symbol: 'B', n1: '', n2: '' },
  { name: 'Carbon', symbol: 'C', n1: '', n2: '' },
  { name: 'Nitrogen', symbol: 'N', n1: '', n2: '' },
  { name: 'Oxygen', symbol: 'O', n1: '', n2: '' },
  { name: 'Fluorine', symbol: 'F', n1: '', n2: '' },
  { name: 'Neon', symbol: 'Ne', n1: '', n2: '' },
  { name: 'Sodium', symbol: 'Na', n1: '', n2: '' },
  { name: 'Magnesium', symbol: 'Mg', n1: '', n2: '' },
  { name: 'Aluminum', symbol: 'Al', n1: '', n2: '' },
  { name: 'Silicon', symbol: 'Si', n1: '', n2: '' },
  { name: 'Phosphorus', symbol: 'P', n1: '', n2: '' },
  { name: 'Sulfur', symbol: 'S', n1: '', n2: '' },
  { name: 'Chlorine', symbol: 'Cl', n1: '', n2: '' },
  { name: 'Argon', symbol: 'Ar', n1: '', n2: '' },
  { name: 'Potassium', symbol: 'K', n1: '', n2: '' },
  { name: 'Calcium', symbol: 'Ca', n1: '', n2: '' }
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
    console.log('DATASUBJECT');
    console.log(this.dataSubject);
    return this.dataSubject.value;
  }

  update(data) {
    this.dataSubject.next(data);
  }

  constructor(data: any[]) {
    super();
    this.dataSubject.next(data);
    console.log(data);
  }

  /* Función de conexión llamada por la tabla para recuperar una secuencia que contiene los datos para representar. */
  connect(): Observable<Element[]> {
    return this.dataSubject;
  }

  disconnect() {}
}
