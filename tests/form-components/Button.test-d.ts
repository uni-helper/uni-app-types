import { describe, expectTypeOf } from 'vitest';
import type {
  ButtonSize,
  ButtonType,
  ButtonFormType,
  ButtonOpenType,
  ButtonLang,
  ButtonOnGetphonenumberDetail,
  ButtonOnGetphonenumber,
  ButtonOnError,
  ButtonOnOpensettingDetail,
  ButtonOnOpensetting,
  ButtonOnLaunchapp,
  ButtonOnChooseavatar,
  ButtonOnAddgroupapp,
  ButtonOnChooseaddress,
  ButtonOnChooseinvoicetitle,
  ButtonOnSubscribe,
  ButtonOnLogin,
  ButtonProps,
  Button,
} from '@/form-components/Button';

describe('Button', () => {
  expectTypeOf<ButtonSize>().toBeString();
  expectTypeOf<ButtonSize>().toEqualTypeOf<UniHelper.ButtonSize>();

  expectTypeOf<ButtonType>().toBeString();
  expectTypeOf<ButtonType>().toEqualTypeOf<UniHelper.ButtonType>();

  expectTypeOf<ButtonFormType>().toBeString();
  expectTypeOf<ButtonFormType>().toEqualTypeOf<UniHelper.ButtonFormType>();

  expectTypeOf<ButtonOpenType>().toBeString();
  expectTypeOf<ButtonOpenType>().toEqualTypeOf<UniHelper.ButtonOpenType>();

  expectTypeOf<ButtonLang>().toBeString();
  expectTypeOf<ButtonLang>().toEqualTypeOf<UniHelper.ButtonLang>();

  expectTypeOf<ButtonOnGetphonenumberDetail>().toBeObject();
  expectTypeOf<ButtonOnGetphonenumberDetail>().toEqualTypeOf<UniHelper.ButtonOnGetphonenumberDetail>();

  expectTypeOf<ButtonOnGetphonenumber>().toBeFunction();
  expectTypeOf<ButtonOnGetphonenumber>().toEqualTypeOf<UniHelper.ButtonOnGetphonenumber>();

  expectTypeOf<ButtonOnError>().toBeFunction();
  expectTypeOf<ButtonOnError>().toEqualTypeOf<UniHelper.ButtonOnError>();

  expectTypeOf<ButtonOnOpensettingDetail>().toBeObject();
  expectTypeOf<ButtonOnOpensettingDetail>().toEqualTypeOf<UniHelper.ButtonOnOpensettingDetail>();

  expectTypeOf<ButtonOnOpensetting>().toBeFunction();
  expectTypeOf<ButtonOnOpensetting>().toEqualTypeOf<UniHelper.ButtonOnOpensetting>();

  expectTypeOf<ButtonOnLaunchapp>().toBeFunction();
  expectTypeOf<ButtonOnLaunchapp>().toEqualTypeOf<UniHelper.ButtonOnLaunchapp>();

  expectTypeOf<ButtonOnChooseavatar>().toBeFunction();
  expectTypeOf<ButtonOnChooseavatar>().toEqualTypeOf<UniHelper.ButtonOnChooseavatar>();

  expectTypeOf<ButtonOnAddgroupapp>().toBeFunction();
  expectTypeOf<ButtonOnAddgroupapp>().toEqualTypeOf<UniHelper.ButtonOnAddgroupapp>();

  expectTypeOf<ButtonOnChooseaddress>().toBeFunction();
  expectTypeOf<ButtonOnChooseaddress>().toEqualTypeOf<UniHelper.ButtonOnChooseaddress>();

  expectTypeOf<ButtonOnChooseinvoicetitle>().toBeFunction();
  expectTypeOf<ButtonOnChooseinvoicetitle>().toEqualTypeOf<UniHelper.ButtonOnChooseinvoicetitle>();

  expectTypeOf<ButtonOnSubscribe>().toBeFunction();
  expectTypeOf<ButtonOnSubscribe>().toEqualTypeOf<UniHelper.ButtonOnSubscribe>();

  expectTypeOf<ButtonOnLogin>().toBeFunction();
  expectTypeOf<ButtonOnLogin>().toEqualTypeOf<UniHelper.ButtonOnLogin>();

  expectTypeOf<ButtonProps>().toBeObject();
  expectTypeOf<ButtonProps>().toEqualTypeOf<UniHelper.ButtonProps>();

  expectTypeOf<Button>().not.toBeAny();
  expectTypeOf<Button>().toEqualTypeOf<UniHelper.Button>();
});
