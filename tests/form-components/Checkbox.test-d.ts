import { describe, expectTypeOf } from 'vitest';
import type { CheckboxValue, CheckboxProps, Checkbox } from '@/form-components/Checkbox';

describe('Checkbox', () => {
  expectTypeOf<CheckboxValue>().toBeString();
  expectTypeOf<CheckboxValue>().toEqualTypeOf<UniHelper.CheckboxValue>();

  expectTypeOf<CheckboxProps>().toBeObject();
  expectTypeOf<CheckboxProps>().toEqualTypeOf<UniHelper.CheckboxProps>();

  expectTypeOf<Checkbox>().not.toBeAny();
  expectTypeOf<Checkbox>().toEqualTypeOf<UniHelper.Checkbox>();
});
