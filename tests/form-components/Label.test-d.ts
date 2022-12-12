import { describe, expectTypeOf } from 'vitest';
import type { LabelProps, Label } from '@/form-components/Label';

describe('Label', () => {
  expectTypeOf<LabelProps>().toBeObject();
  expectTypeOf<LabelProps>().toEqualTypeOf<UniHelper.LabelProps>();

  expectTypeOf<Label>().not.toBeAny();
  expectTypeOf<Label>().toEqualTypeOf<UniHelper.Label>();
});
