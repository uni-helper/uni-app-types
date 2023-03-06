import { describe, expectTypeOf } from 'vitest';
import type {
  TextareaValue,
  TextareaConfirmType,
  TextareaOnFocusDetail,
  TextareaOnFocusEvent,
  TextareaOnFocus,
  TextareaOnBlurDetail,
  TextareaOnBlurEvent,
  TextareaOnBlur,
  TextareaOnLinechangeDetail,
  TextareaOnLinechangeEvent,
  TextareaOnLinechange,
  TextareaOnInputDetail,
  TextareaOnInputEvent,
  TextareaOnInput,
  TextareaOnConfirmDetail,
  TextareaOnConfirmEvent,
  TextareaOnConfirm,
  TextareaOnKeyboardheightchangeDetail,
  TextareaOnKeyboardheightchangeEvent,
  TextareaOnKeyboardheightchange,
  TextareaProps,
  Textarea,
  TextareaInstance,
} from '@/form-components/Textarea';

describe('Textarea', () => {
  expectTypeOf<TextareaValue>().toBeString();
  expectTypeOf<TextareaValue>().toEqualTypeOf<UniHelper.TextareaValue>();

  expectTypeOf<TextareaConfirmType>().toBeString();
  expectTypeOf<TextareaConfirmType>().toEqualTypeOf<UniHelper.TextareaConfirmType>();

  expectTypeOf<TextareaOnFocusDetail>().toBeObject();
  expectTypeOf<TextareaOnFocusDetail>().toEqualTypeOf<UniHelper.TextareaOnFocusDetail>();

  expectTypeOf<TextareaOnFocusEvent>().toBeObject();
  expectTypeOf<TextareaOnFocusEvent>().toEqualTypeOf<UniHelper.TextareaOnFocusEvent>();

  expectTypeOf<TextareaOnFocus>().toBeFunction();
  expectTypeOf<TextareaOnFocus>().toEqualTypeOf<UniHelper.TextareaOnFocus>();

  expectTypeOf<TextareaOnBlurDetail>().toBeObject();
  expectTypeOf<TextareaOnBlurDetail>().toEqualTypeOf<UniHelper.TextareaOnBlurDetail>();

  expectTypeOf<TextareaOnBlurEvent>().toBeObject();
  expectTypeOf<TextareaOnBlurEvent>().toEqualTypeOf<UniHelper.TextareaOnBlurEvent>();

  expectTypeOf<TextareaOnBlur>().toBeFunction();
  expectTypeOf<TextareaOnBlur>().toEqualTypeOf<UniHelper.TextareaOnBlur>();

  expectTypeOf<TextareaOnLinechangeDetail>().toBeObject();
  expectTypeOf<TextareaOnLinechangeDetail>().toEqualTypeOf<UniHelper.TextareaOnLinechangeDetail>();

  expectTypeOf<TextareaOnLinechangeEvent>().toBeObject();
  expectTypeOf<TextareaOnLinechangeEvent>().toEqualTypeOf<UniHelper.TextareaOnLinechangeEvent>();

  expectTypeOf<TextareaOnLinechange>().toBeFunction();
  expectTypeOf<TextareaOnLinechange>().toEqualTypeOf<UniHelper.TextareaOnLinechange>();

  expectTypeOf<TextareaOnInputDetail>().toBeObject();
  expectTypeOf<TextareaOnInputDetail>().toEqualTypeOf<UniHelper.TextareaOnInputDetail>();

  expectTypeOf<TextareaOnInputEvent>().toBeObject();
  expectTypeOf<TextareaOnInputEvent>().toEqualTypeOf<UniHelper.TextareaOnInputEvent>();

  expectTypeOf<TextareaOnInput>().toBeFunction();
  expectTypeOf<TextareaOnInput>().toEqualTypeOf<UniHelper.TextareaOnInput>();

  expectTypeOf<TextareaOnConfirmDetail>().toBeObject();
  expectTypeOf<TextareaOnConfirmDetail>().toEqualTypeOf<UniHelper.TextareaOnConfirmDetail>();

  expectTypeOf<TextareaOnConfirmEvent>().toBeObject();
  expectTypeOf<TextareaOnConfirmEvent>().toEqualTypeOf<UniHelper.TextareaOnConfirmEvent>();

  expectTypeOf<TextareaOnConfirm>().toBeFunction();
  expectTypeOf<TextareaOnConfirm>().toEqualTypeOf<UniHelper.TextareaOnConfirm>();

  expectTypeOf<TextareaOnKeyboardheightchangeDetail>().toBeObject();
  expectTypeOf<TextareaOnKeyboardheightchangeDetail>().toEqualTypeOf<UniHelper.TextareaOnKeyboardheightchangeDetail>();

  expectTypeOf<TextareaOnKeyboardheightchangeEvent>().toBeObject();
  expectTypeOf<TextareaOnKeyboardheightchangeEvent>().toEqualTypeOf<UniHelper.TextareaOnKeyboardheightchangeEvent>();

  expectTypeOf<TextareaOnKeyboardheightchange>().toBeFunction();
  expectTypeOf<TextareaOnKeyboardheightchange>().toEqualTypeOf<UniHelper.TextareaOnKeyboardheightchange>();

  expectTypeOf<TextareaProps>().toBeObject();
  expectTypeOf<TextareaProps>().toEqualTypeOf<UniHelper.TextareaProps>();

  expectTypeOf<Textarea>().not.toBeAny();
  expectTypeOf<Textarea>().toEqualTypeOf<UniHelper.Textarea>();

  expectTypeOf<TextareaInstance>().not.toBeAny();
  expectTypeOf<TextareaInstance>().toEqualTypeOf<UniHelper.TextareaInstance>();
});
