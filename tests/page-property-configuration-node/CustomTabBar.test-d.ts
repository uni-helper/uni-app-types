import { describe, expectTypeOf } from 'vitest';
import type {
  CustomTabBarDirection,
  CustomTabBarOnTabItemTapDetail,
  CustomTabBarOnTabItemTap,
  CustomTabBarProps,
  CustomTabBar,
  CustomTabBarInstance,
} from '@/page-property-configuration-node/CustomTabBar';

describe('CustomTabBar', () => {
  expectTypeOf<CustomTabBarDirection>().toBeString();
  expectTypeOf<CustomTabBarDirection>().toEqualTypeOf<UniHelper.CustomTabBarDirection>();

  expectTypeOf<CustomTabBarOnTabItemTapDetail>().toBeObject();
  expectTypeOf<CustomTabBarOnTabItemTapDetail>().toEqualTypeOf<UniHelper.CustomTabBarOnTabItemTapDetail>();

  expectTypeOf<CustomTabBarOnTabItemTap>().toBeFunction();
  expectTypeOf<CustomTabBarOnTabItemTap>().toEqualTypeOf<UniHelper.CustomTabBarOnTabItemTap>();

  expectTypeOf<CustomTabBarProps>().toBeObject();
  expectTypeOf<CustomTabBarProps>().toEqualTypeOf<UniHelper.CustomTabBarProps>();

  expectTypeOf<CustomTabBar>().not.toBeAny();
  expectTypeOf<CustomTabBar>().toEqualTypeOf<UniHelper.CustomTabBar>();

  expectTypeOf<CustomTabBarInstance>().not.toBeAny();
  expectTypeOf<CustomTabBarInstance>().toEqualTypeOf<UniHelper.CustomTabBarInstance>();
});
