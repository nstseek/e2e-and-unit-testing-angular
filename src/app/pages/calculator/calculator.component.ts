import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypedAbstractControl, TypedFormGroup } from 'src/app/types/form';
// import { merge } from 'rxjs';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { LocalStorageKeys, CalculatorHistory } from '../../types/localStorage';

type FormFields = 'operand_a' | 'operand_b' | 'result';

type Form = Record<FormFields, TypedAbstractControl<number>>;

type FormObject = Record<FormFields, number>;

const formObject: FormObject = {
  operand_a: null,
  operand_b: null,
  result: null
};

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  @ViewChild('operator', { static: null }) operatorGroup: MatButtonToggleGroup;
  form: TypedFormGroup<Form, FormObject>;

  constructor(private fb: FormBuilder) {
    this.form = (this.fb.group(formObject) as unknown) as TypedFormGroup<
      Form,
      FormObject
    >;
  }

  ngOnInit() {
    this.form.controls.result.disable();
    Object.keys(formObject).forEach(
      (key: string) => (this.form.controls[key].name = key)
    );
    // merge(
    //   this.form.controls.operand_a.valueChanges,
    //   this.form.controls.operand_b.valueChanges
    // ).subscribe(this.updateValues);
  }

  updateValues() {
    const formControls = this.form.controls;
    let result: number = null;
    switch (this.operatorGroup.value) {
      case '+':
        result = formControls.operand_a.value + formControls.operand_b.value;
        break;
      case '-':
        result = formControls.operand_a.value - formControls.operand_b.value;
        break;
      case '*':
        result = formControls.operand_a.value * formControls.operand_b.value;
        break;
      case '/':
        result = formControls.operand_a.value / formControls.operand_b.value;
        break;
      default:
    }
    if (result !== null) {
      formControls.result.patchValue(result);
      const oldHistory: CalculatorHistory = JSON.parse(
        localStorage.getItem(LocalStorageKeys.History)
      );
      if (oldHistory === null) {
        localStorage.setItem(
          LocalStorageKeys.History,
          JSON.stringify([result])
        );
      } else {
        oldHistory.push(result);
        localStorage.setItem(
          LocalStorageKeys.History,
          JSON.stringify(oldHistory)
        );
      }
    }
  }
}
