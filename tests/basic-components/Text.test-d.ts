import { describe, expectTypeOf } from 'vitest';
import type { TextSpace, TextProps, Text } from '@/basic-components/Text';

describe('Text', () => {
  expectTypeOf<TextSpace>().toBeString();
  expectTypeOf<TextSpace>().toEqualTypeOf<UniHelper.TextSpace>();

  expectTypeOf<TextProps>().toBeObject();
  expectTypeOf<TextProps>().toEqualTypeOf<UniHelper.TextProps>();

  expectTypeOf<Text>().not.toBeAny();
  expectTypeOf<Text>().toEqualTypeOf<UniHelper.Text>();
});
