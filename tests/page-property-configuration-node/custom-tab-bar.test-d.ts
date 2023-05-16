import { describe, expectTypeOf } from 'vitest';
import type {
  CustomTabBarDirection,
  CustomTabBarOnOnTabItemTapDetail,
  CustomTabBarOnOnTabItemTap,
  CustomTabBarProps,
  CustomTabBar,
  CustomTabBarInstance,
} from '@/index';

describe('CustomTabBar', () => {
  expectTypeOf<CustomTabBarDirection>().toBeString();
  expectTypeOf<CustomTabBarDirection>().toEqualTypeOf<UniHelper.CustomTabBarDirection>();

  expectTypeOf<CustomTabBarOnOnTabItemTapDetail>().toBeObject();
  expectTypeOf<CustomTabBarOnOnTabItemTapDetail>().toEqualTypeOf<UniHelper.CustomTabBarOnOnTabItemTapDetail>();

  expectTypeOf<CustomTabBarOnOnTabItemTap>().toBeFunction();
  expectTypeOf<CustomTabBarOnOnTabItemTap>().toEqualTypeOf<UniHelper.CustomTabBarOnOnTabItemTap>();

  expectTypeOf<CustomTabBarProps>().toBeObject();
  expectTypeOf<CustomTabBarProps>().toEqualTypeOf<UniHelper.CustomTabBarProps>();

  expectTypeOf<CustomTabBar>().not.toBeAny();
  expectTypeOf<CustomTabBar>().toEqualTypeOf<UniHelper.CustomTabBar>();

  expectTypeOf<CustomTabBarInstance>().not.toBeAny();
  expectTypeOf<CustomTabBarInstance>().toEqualTypeOf<UniHelper.CustomTabBarInstance>();
});
