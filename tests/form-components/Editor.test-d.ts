import { describe, expectTypeOf } from 'vitest';
import type {
  EditorOnReady,
  EditorOnFocusDetail,
  EditorOnFocus,
  EditorOnBlurDetail,
  EditorOnBlur,
  EditorOnInputDetail,
  EditorOnInput,
  EditorOnStatuschange,
  EditorProps,
  Editor,
  EditorInstance,
} from '@/form-components/Editor';

describe('Editor', () => {
  expectTypeOf<EditorOnReady>().toBeFunction();
  expectTypeOf<EditorOnReady>().toEqualTypeOf<UniHelper.EditorOnReady>();

  expectTypeOf<EditorOnFocusDetail>().toBeObject();
  expectTypeOf<EditorOnFocusDetail>().toEqualTypeOf<UniHelper.EditorOnFocusDetail>();

  expectTypeOf<EditorOnFocus>().toBeFunction();
  expectTypeOf<EditorOnFocus>().toEqualTypeOf<UniHelper.EditorOnFocus>();

  expectTypeOf<EditorOnBlurDetail>().toBeObject();
  expectTypeOf<EditorOnBlurDetail>().toEqualTypeOf<UniHelper.EditorOnBlurDetail>();

  expectTypeOf<EditorOnBlur>().toBeFunction();
  expectTypeOf<EditorOnBlur>().toEqualTypeOf<UniHelper.EditorOnBlur>();

  expectTypeOf<EditorOnInputDetail>().toBeObject();
  expectTypeOf<EditorOnInputDetail>().toEqualTypeOf<UniHelper.EditorOnInputDetail>();

  expectTypeOf<EditorOnInput>().toBeFunction();
  expectTypeOf<EditorOnInput>().toEqualTypeOf<UniHelper.EditorOnInput>();

  expectTypeOf<EditorOnStatuschange>().toBeFunction();
  expectTypeOf<EditorOnStatuschange>().toEqualTypeOf<UniHelper.EditorOnStatuschange>();

  expectTypeOf<EditorProps>().toBeObject();
  expectTypeOf<EditorProps>().toEqualTypeOf<UniHelper.EditorProps>();

  expectTypeOf<Editor>().not.toBeAny();
  expectTypeOf<Editor>().toEqualTypeOf<UniHelper.Editor>();

  expectTypeOf<EditorInstance>().not.toBeAny();
  expectTypeOf<EditorInstance>().toEqualTypeOf<UniHelper.EditorInstance>();
});
