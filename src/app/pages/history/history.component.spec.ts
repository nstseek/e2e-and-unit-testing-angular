import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { CalculatorHistory, LocalStorageKeys } from 'src/app/types/localStorage';

const history: CalculatorHistory = [2, 5, 8];

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    localStorage.setItem(LocalStorageKeys.History, JSON.stringify(history));
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch entries from localStorage', () => {
    expect(component.history).toEqual(history);
  });
});
