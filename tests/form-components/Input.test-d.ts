import { describe, expectTypeOf } from 'vitest';
import type {
  InputValue,
  InputType,
  InputTextContentType,
  InputConfirmType,
  InputInputMode,
  InputOnInputDetail,
  InputOnInput,
  InputOnFocusDetail,
  InputOnFocus,
  InputOnBlurDetail,
  InputOnBlur,
  InputOnConfirmDetail,
  InputOnConfirm,
  InputOnKeyboardheightchangeDetail,
  InputOnKeyboardheightchange,
  InputProps,
  Input,
  InputInstance,
} from '@/form-components/Input';

describe('Input', () => {
  expectTypeOf<InputValue>().toBeString();
  expectTypeOf<InputValue>().toEqualTypeOf<UniHelper.InputValue>();

  expectTypeOf<InputType>().toBeString();
  expectTypeOf<InputType>().toEqualTypeOf<UniHelper.InputType>();

  expectTypeOf<InputTextContentType>().toBeString();
  expectTypeOf<InputTextContentType>().toEqualTypeOf<UniHelper.InputTextContentType>();

  expectTypeOf<InputInputMode>().toBeString();
  expectTypeOf<InputInputMode>().toEqualTypeOf<UniHelper.InputInputMode>();

  expectTypeOf<InputConfirmType>().toBeString();
  expectTypeOf<InputConfirmType>().toEqualTypeOf<UniHelper.InputConfirmType>();

  expectTypeOf<InputOnInputDetail>().toBeObject();
  expectTypeOf<InputOnInputDetail>().toEqualTypeOf<UniHelper.InputOnInputDetail>();

  expectTypeOf<InputOnInput>().toBeFunction();
  expectTypeOf<InputOnInput>().toEqualTypeOf<UniHelper.InputOnInput>();

  expectTypeOf<InputOnFocusDetail>().toBeObject();
  expectTypeOf<InputOnFocusDetail>().toEqualTypeOf<UniHelper.InputOnFocusDetail>();

  expectTypeOf<InputOnFocus>().toBeFunction();
  expectTypeOf<InputOnFocus>().toEqualTypeOf<UniHelper.InputOnFocus>();

  expectTypeOf<InputOnBlurDetail>().toBeObject();
  expectTypeOf<InputOnBlurDetail>().toEqualTypeOf<UniHelper.InputOnBlurDetail>();

  expectTypeOf<InputOnBlur>().toBeFunction();
  expectTypeOf<InputOnBlur>().toEqualTypeOf<UniHelper.InputOnBlur>();

  expectTypeOf<InputOnConfirmDetail>().toBeObject();
  expectTypeOf<InputOnConfirmDetail>().toEqualTypeOf<UniHelper.InputOnConfirmDetail>();

  expectTypeOf<InputOnConfirm>().toBeFunction();
  expectTypeOf<InputOnConfirm>().toEqualTypeOf<UniHelper.InputOnConfirm>();

  expectTypeOf<InputOnKeyboardheightchangeDetail>().toBeObject();
  expectTypeOf<InputOnKeyboardheightchangeDetail>().toEqualTypeOf<UniHelper.InputOnKeyboardheightchangeDetail>();

  expectTypeOf<InputOnKeyboardheightchange>().toBeFunction();
  expectTypeOf<InputOnKeyboardheightchange>().toEqualTypeOf<UniHelper.InputOnKeyboardheightchange>();

  expectTypeOf<InputProps>().toBeObject();
  expectTypeOf<InputProps>().toEqualTypeOf<UniHelper.InputProps>();

  expectTypeOf<Input>().not.toBeAny();
  expectTypeOf<Input>().toEqualTypeOf<UniHelper.Input>();

  expectTypeOf<InputInstance>().not.toBeAny();
  expectTypeOf<InputInstance>().toEqualTypeOf<UniHelper.InputInstance>();
});
