import { FormGroup, AbstractControl } from '@angular/forms';

export interface TypedFormGroup<K, T> extends Omit<FormGroup, 'controls'> {
  controls: K;
  values: T;
  value: T;
}

export interface TypedAbstractControl<T> extends AbstractControl {
  name?: string;
  value: T;
  patchValue(value: T, object?: object);
  setValue(value: T, object?: object);
}
