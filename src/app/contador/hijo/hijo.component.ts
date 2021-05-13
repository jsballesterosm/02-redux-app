import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.recuders';
import * as actions from '../../contador/contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {
  
  contador: number = 0;

  constructor( private store: Store<AppState>) {

    this.store.select('contador').subscribe(contador => this.contador = contador);
   }

  ngOnInit(): void {
  }

  multiplicar() {
    this.store.dispatch( actions.multiplicar( { numero: 2 } ) );
  }

  dividir() {
    this.store.dispatch( actions.dividir( { numero: 2 } ) );
  }

}
