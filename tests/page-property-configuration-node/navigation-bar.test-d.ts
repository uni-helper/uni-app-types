import { describe, expectTypeOf } from 'vitest';
import type {
  NavigationBarSubtitleOverflow,
  NavigationBarTitleAlign,
  NavigationBarBackgroundRepeat,
  NavigationBarBlurEffect,
  NavigationFrontColor,
  NavigationBarColorAnimationTimingFunc,
  NavigationBarProps,
  NavigationBar,
  NavigationBarInstance,
} from '@/index';

describe('NavigationBar', () => {
  expectTypeOf<NavigationBarSubtitleOverflow>().toBeString();
  expectTypeOf<NavigationBarSubtitleOverflow>().toEqualTypeOf<UniHelper.NavigationBarSubtitleOverflow>();

  expectTypeOf<NavigationBarTitleAlign>().toBeString();
  expectTypeOf<NavigationBarTitleAlign>().toEqualTypeOf<UniHelper.NavigationBarTitleAlign>();

  expectTypeOf<NavigationBarBackgroundRepeat>().toBeString();
  expectTypeOf<NavigationBarBackgroundRepeat>().toEqualTypeOf<UniHelper.NavigationBarBackgroundRepeat>();

  expectTypeOf<NavigationBarBlurEffect>().toBeString();
  expectTypeOf<NavigationBarBlurEffect>().toEqualTypeOf<UniHelper.NavigationBarBlurEffect>();

  expectTypeOf<NavigationFrontColor>().toBeString();
  expectTypeOf<NavigationFrontColor>().toEqualTypeOf<UniHelper.NavigationFrontColor>();

  expectTypeOf<NavigationBarColorAnimationTimingFunc>().toBeString();
  expectTypeOf<NavigationBarColorAnimationTimingFunc>().toEqualTypeOf<UniHelper.NavigationBarColorAnimationTimingFunc>();

  expectTypeOf<NavigationBarProps>().toBeObject();
  expectTypeOf<NavigationBarProps>().toEqualTypeOf<UniHelper.NavigationBarProps>();

  expectTypeOf<NavigationBar>().not.toBeAny();
  expectTypeOf<NavigationBar>().toEqualTypeOf<UniHelper.NavigationBar>();

  expectTypeOf<NavigationBarInstance>().not.toBeAny();
  expectTypeOf<NavigationBarInstance>().toEqualTypeOf<UniHelper.NavigationBarInstance>();
});
