import { describe, expectTypeOf } from 'vitest';
import type {
  EditorOnReadyEvent,
  EditorOnReady,
  EditorOnFocusDetail,
  EditorOnFocusEvent,
  EditorOnFocus,
  EditorOnBlurDetail,
  EditorOnBlurEvent,
  EditorOnBlur,
  EditorOnInputDetail,
  EditorOnInputEvent,
  EditorOnInput,
  EditorOnStatuschangeEvent,
  EditorOnStatuschange,
  EditorProps,
  Editor,
  EditorInstance,
} from '@/index';

describe('Editor', () => {
  expectTypeOf<EditorOnReadyEvent>().toBeObject();
  expectTypeOf<EditorOnReadyEvent>().toEqualTypeOf<UniHelper.EditorOnReadyEvent>();

  expectTypeOf<EditorOnReady>().toBeFunction();
  expectTypeOf<EditorOnReady>().toEqualTypeOf<UniHelper.EditorOnReady>();

  expectTypeOf<EditorOnFocusDetail>().toBeObject();
  expectTypeOf<EditorOnFocusDetail>().toEqualTypeOf<UniHelper.EditorOnFocusDetail>();

  expectTypeOf<EditorOnFocusEvent>().toBeObject();
  expectTypeOf<EditorOnFocusEvent>().toEqualTypeOf<UniHelper.EditorOnFocusEvent>();

  expectTypeOf<EditorOnFocus>().toBeFunction();
  expectTypeOf<EditorOnFocus>().toEqualTypeOf<UniHelper.EditorOnFocus>();

  expectTypeOf<EditorOnBlurDetail>().toBeObject();
  expectTypeOf<EditorOnBlurDetail>().toEqualTypeOf<UniHelper.EditorOnBlurDetail>();

  expectTypeOf<EditorOnBlurEvent>().toBeObject();
  expectTypeOf<EditorOnBlurEvent>().toEqualTypeOf<UniHelper.EditorOnBlurEvent>();

  expectTypeOf<EditorOnBlur>().toBeFunction();
  expectTypeOf<EditorOnBlur>().toEqualTypeOf<UniHelper.EditorOnBlur>();

  expectTypeOf<EditorOnInputDetail>().toBeObject();
  expectTypeOf<EditorOnInputDetail>().toEqualTypeOf<UniHelper.EditorOnInputDetail>();

  expectTypeOf<EditorOnInputEvent>().toBeObject();
  expectTypeOf<EditorOnInputEvent>().toEqualTypeOf<UniHelper.EditorOnInputEvent>();

  expectTypeOf<EditorOnInput>().toBeFunction();
  expectTypeOf<EditorOnInput>().toEqualTypeOf<UniHelper.EditorOnInput>();

  expectTypeOf<EditorOnStatuschangeEvent>().toBeObject();
  expectTypeOf<EditorOnStatuschangeEvent>().toEqualTypeOf<UniHelper.EditorOnStatuschangeEvent>();

  expectTypeOf<EditorOnStatuschange>().toBeFunction();
  expectTypeOf<EditorOnStatuschange>().toEqualTypeOf<UniHelper.EditorOnStatuschange>();

  expectTypeOf<EditorProps>().toBeObject();
  expectTypeOf<EditorProps>().toEqualTypeOf<UniHelper.EditorProps>();

  expectTypeOf<Editor>().not.toBeAny();
  expectTypeOf<Editor>().toEqualTypeOf<UniHelper.Editor>();

  expectTypeOf<EditorInstance>().not.toBeAny();
  expectTypeOf<EditorInstance>().toEqualTypeOf<UniHelper.EditorInstance>();
});
