import { Component } from '@angular/core';
import {
  CalculatorHistory,
  LocalStorageKeys
} from 'src/app/types/localStorage';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  history: CalculatorHistory;
  constructor() {
    this.history = JSON.parse(localStorage.getItem(LocalStorageKeys.History));
  }
}
