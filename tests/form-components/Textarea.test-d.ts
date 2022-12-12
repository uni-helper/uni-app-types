import { describe, expectTypeOf } from 'vitest';
import type {
  TextareaValue,
  TextareaConfirmType,
  TextareaOnFocusDetail,
  TextareaOnFocus,
  TextareaOnBlurDetail,
  TextareaOnBlur,
  TextareaOnLinechangeDetail,
  TextareaOnLinechange,
  TextareaOnInputDetail,
  TextareaOnInput,
  TextareaOnConfirmDetail,
  TextareaOnConfirm,
  TextareaOnKeyboardheightchangeDetail,
  TextareaOnKeyboardheightchange,
  TextareaProps,
  Textarea,
} from '@/form-components/Textarea';

describe('Textarea', () => {
  expectTypeOf<TextareaValue>().toBeString();
  expectTypeOf<TextareaValue>().toEqualTypeOf<UniHelper.TextareaValue>();

  expectTypeOf<TextareaConfirmType>().toBeString();
  expectTypeOf<TextareaConfirmType>().toEqualTypeOf<UniHelper.TextareaConfirmType>();

  expectTypeOf<TextareaOnFocusDetail>().toBeObject();
  expectTypeOf<TextareaOnFocusDetail>().toEqualTypeOf<UniHelper.TextareaOnFocusDetail>();

  expectTypeOf<TextareaOnFocus>().toBeFunction();
  expectTypeOf<TextareaOnFocus>().toEqualTypeOf<UniHelper.TextareaOnFocus>();

  expectTypeOf<TextareaOnBlurDetail>().toBeObject();
  expectTypeOf<TextareaOnBlurDetail>().toEqualTypeOf<UniHelper.TextareaOnBlurDetail>();

  expectTypeOf<TextareaOnBlur>().toBeFunction();
  expectTypeOf<TextareaOnBlur>().toEqualTypeOf<UniHelper.TextareaOnBlur>();

  expectTypeOf<TextareaOnLinechangeDetail>().toBeObject();
  expectTypeOf<TextareaOnLinechangeDetail>().toEqualTypeOf<UniHelper.TextareaOnLinechangeDetail>();

  expectTypeOf<TextareaOnLinechange>().toBeFunction();
  expectTypeOf<TextareaOnLinechange>().toEqualTypeOf<UniHelper.TextareaOnLinechange>();

  expectTypeOf<TextareaOnInputDetail>().toBeObject();
  expectTypeOf<TextareaOnInputDetail>().toEqualTypeOf<UniHelper.TextareaOnInputDetail>();

  expectTypeOf<TextareaOnInput>().toBeFunction();
  expectTypeOf<TextareaOnInput>().toEqualTypeOf<UniHelper.TextareaOnInput>();

  expectTypeOf<TextareaOnConfirmDetail>().toBeObject();
  expectTypeOf<TextareaOnConfirmDetail>().toEqualTypeOf<UniHelper.TextareaOnConfirmDetail>();

  expectTypeOf<TextareaOnConfirm>().toBeFunction();
  expectTypeOf<TextareaOnConfirm>().toEqualTypeOf<UniHelper.TextareaOnConfirm>();

  expectTypeOf<TextareaOnKeyboardheightchangeDetail>().toBeObject();
  expectTypeOf<TextareaOnKeyboardheightchangeDetail>().toEqualTypeOf<UniHelper.TextareaOnKeyboardheightchangeDetail>();

  expectTypeOf<TextareaOnKeyboardheightchange>().toBeFunction();
  expectTypeOf<TextareaOnKeyboardheightchange>().toEqualTypeOf<UniHelper.TextareaOnKeyboardheightchange>();

  expectTypeOf<TextareaProps>().toBeObject();
  expectTypeOf<TextareaProps>().toEqualTypeOf<UniHelper.TextareaProps>();

  expectTypeOf<Textarea>().not.toBeAny();
  expectTypeOf<Textarea>().toEqualTypeOf<UniHelper.Textarea>();
});
