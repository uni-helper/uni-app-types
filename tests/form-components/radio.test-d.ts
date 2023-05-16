import { describe, expectTypeOf } from 'vitest';
import type { RadioValue, RadioProps, Radio, RadioInstance } from '@/index';

describe('Radio', () => {
  expectTypeOf<RadioValue>().toBeString();
  expectTypeOf<RadioValue>().toEqualTypeOf<UniHelper.RadioValue>();

  expectTypeOf<RadioProps>().toBeObject();
  expectTypeOf<RadioProps>().toEqualTypeOf<UniHelper.RadioProps>();

  expectTypeOf<Radio>().not.toBeAny();
  expectTypeOf<Radio>().toEqualTypeOf<UniHelper.Radio>();

  expectTypeOf<RadioInstance>().not.toBeAny();
  expectTypeOf<RadioInstance>().toEqualTypeOf<UniHelper.RadioInstance>();
});
