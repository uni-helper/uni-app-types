import { describe, expectTypeOf } from 'vitest';
import type {
  RichTextSpace,
  RichTextTextNode,
  RichTextNodeNode,
  RichTextNode,
  RichTextNodes,
  RichTextOnItemclick,
  RichTextProps,
  RichText,
  RichTextInstance,
} from '@/basic-components/RichText';

describe('RichText', () => {
  expectTypeOf<RichTextSpace>().toBeString();
  expectTypeOf<RichTextSpace>().toEqualTypeOf<UniHelper.RichTextSpace>();

  expectTypeOf<RichTextTextNode>().toBeObject();
  expectTypeOf<RichTextTextNode>().toEqualTypeOf<UniHelper.RichTextTextNode>();

  expectTypeOf<RichTextNodeNode>().toBeObject();
  expectTypeOf<RichTextNodeNode>().toEqualTypeOf<UniHelper.RichTextNodeNode>();

  expectTypeOf<RichTextNode>().toBeObject();
  expectTypeOf<RichTextNode>().toEqualTypeOf<UniHelper.RichTextNode>();

  expectTypeOf<RichTextNodes>().toEqualTypeOf<UniHelper.RichTextNodes>;

  expectTypeOf<RichTextOnItemclick>().toBeFunction();
  expectTypeOf<RichTextOnItemclick>().toEqualTypeOf<UniHelper.RichTextOnItemclick>();

  expectTypeOf<RichTextProps>().toBeObject();
  expectTypeOf<RichTextProps>().toEqualTypeOf<UniHelper.RichTextProps>();

  expectTypeOf<RichText>().not.toBeAny();
  expectTypeOf<RichText>().toEqualTypeOf<UniHelper.RichText>();

  expectTypeOf<RichTextInstance>().not.toBeAny();
  expectTypeOf<RichTextInstance>().toEqualTypeOf<UniHelper.RichTextInstance>();
});
