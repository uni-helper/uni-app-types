import { describe, expectTypeOf } from 'vitest';
import type { LabelProps, Label, LabelInstance } from '@/form-components/Label';

describe('Label', () => {
  expectTypeOf<LabelProps>().toBeObject();
  expectTypeOf<LabelProps>().toEqualTypeOf<UniHelper.LabelProps>();

  expectTypeOf<Label>().not.toBeAny();
  expectTypeOf<Label>().toEqualTypeOf<UniHelper.Label>();

  expectTypeOf<LabelInstance>().not.toBeAny();
  expectTypeOf<LabelInstance>().toEqualTypeOf<UniHelper.LabelInstance>();
});
