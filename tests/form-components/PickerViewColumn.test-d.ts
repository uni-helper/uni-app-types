import { describe, expectTypeOf } from 'vitest';
import type { PickerViewColumn } from '@/form-components/PickerViewColumn';

describe('PickerViewColumn', () => {
  expectTypeOf<PickerViewColumn>().not.toBeAny();
  expectTypeOf<PickerViewColumn>().toEqualTypeOf<UniHelper.PickerViewColumn>();
});
