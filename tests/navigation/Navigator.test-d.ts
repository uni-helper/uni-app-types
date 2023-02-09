import { describe, expectTypeOf } from 'vitest';
import type {
  NavigatorOpenType,
  NavigatorAnimationType,
  NavigatorTarget,
  NavigatorVersion,
  NavigatorProps,
  Navigator,
  NavigatorInstance,
} from '@/navigation/Navigator';

describe('Navigator', () => {
  expectTypeOf<NavigatorOpenType>().toBeString();
  expectTypeOf<NavigatorOpenType>().toEqualTypeOf<UniHelper.NavigatorOpenType>();

  expectTypeOf<NavigatorAnimationType>().toBeString();
  expectTypeOf<NavigatorAnimationType>().toEqualTypeOf<UniHelper.NavigatorAnimationType>();

  expectTypeOf<NavigatorTarget>().toBeString();
  expectTypeOf<NavigatorTarget>().toEqualTypeOf<UniHelper.NavigatorTarget>();

  expectTypeOf<NavigatorVersion>().toBeString();
  expectTypeOf<NavigatorVersion>().toEqualTypeOf<UniHelper.NavigatorVersion>();

  expectTypeOf<NavigatorProps>().toBeObject();
  expectTypeOf<NavigatorProps>().toEqualTypeOf<UniHelper.NavigatorProps>();

  expectTypeOf<Navigator>().not.toBeAny();
  expectTypeOf<Navigator>().toEqualTypeOf<UniHelper.Navigator>();

  expectTypeOf<NavigatorInstance>().not.toBeAny();
  expectTypeOf<NavigatorInstance>().toEqualTypeOf<UniHelper.NavigatorInstance>();
});
