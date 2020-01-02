import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LocalStorageKeys } from 'src/app/types/localStorage';

declare const expect: jest.Expect;

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.form).toBeTruthy();
  });

  it('should disable result field', () => {
    expect(component.form.controls.result.disabled).toBeTruthy();
  });

  it('should add names to forms', () => {
    Object.keys(component.form.controls).forEach((key: string) => {
      expect(component.form.controls[key].name).toEqual(key);
    });
  });

  it('should update values and include it in history', () => {
    component.form.controls.operand_a.patchValue(10);
    component.form.controls.operand_b.patchValue(20);
    component.operatorGroup.value = '+';
    component.updateValues();
    expect(component.form.controls.result.value).toEqual(10 + 20);
    const hist = JSON.parse(
      localStorage.getItem(LocalStorageKeys.History)
    ) as number[];
    expect(hist.includes(10 + 20)).toBeTruthy();
  });

  it('should not update values and include in history when operator is not set', () => {
    component.form.controls.operand_a.patchValue(10);
    component.form.controls.operand_b.patchValue(20);
    component.operatorGroup.value = null;
    localStorage.clear();
    component.updateValues();
    component.operatorGroup.value = 'egewg';
    component.updateValues();
    expect(component.form.controls.result.value).toEqual(null);
    const hist = JSON.parse(
      localStorage.getItem(LocalStorageKeys.History)
    ) as number[];
    expect(hist).toEqual(null);
  });

  it('should append to array when localStorage already has data', () => {
    localStorage.setItem(LocalStorageKeys.History, JSON.stringify([2]));
    component.form.controls.operand_a.patchValue(10);
    component.form.controls.operand_b.patchValue(20);
    component.operatorGroup.value = '+';
    component.updateValues();
    const hist = JSON.parse(
      localStorage.getItem(LocalStorageKeys.History)
    ) as number[];
    expect(hist).toEqual([2, 10 + 20]);
  });
});
