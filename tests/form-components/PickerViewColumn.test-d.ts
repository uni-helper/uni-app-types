import { describe, expectTypeOf } from 'vitest';
import type {
  PickerViewColumn,
  PickerViewColumnInstance,
  PickerViewColumnProps,
} from '@/form-components/PickerViewColumn';

describe('PickerViewColumn', () => {
  expectTypeOf<PickerViewColumnProps>().not.toBeAny();
  expectTypeOf<PickerViewColumnProps>().toEqualTypeOf<UniHelper.PickerViewColumnProps>();

  expectTypeOf<PickerViewColumn>().not.toBeAny();
  expectTypeOf<PickerViewColumn>().toEqualTypeOf<UniHelper.PickerViewColumn>();

  expectTypeOf<PickerViewColumnInstance>().not.toBeAny();
  expectTypeOf<PickerViewColumnInstance>().toEqualTypeOf<UniHelper.PickerViewColumnInstance>();
});
