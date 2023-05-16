import { describe, expectTypeOf } from 'vitest';
import type { TextSpace, TextProps, Text, TextInstance } from '@/index';

describe('Text', () => {
  expectTypeOf<TextSpace>().toBeString();
  expectTypeOf<TextSpace>().toEqualTypeOf<UniHelper.TextSpace>();

  expectTypeOf<TextProps>().toBeObject();
  expectTypeOf<TextProps>().toEqualTypeOf<UniHelper.TextProps>();

  expectTypeOf<Text>().not.toBeAny();
  expectTypeOf<Text>().toEqualTypeOf<UniHelper.Text>();

  expectTypeOf<TextInstance>().not.toBeAny();
  expectTypeOf<TextInstance>().toEqualTypeOf<UniHelper.TextInstance>();
});
