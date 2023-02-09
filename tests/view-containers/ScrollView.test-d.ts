import { describe, expectTypeOf } from 'vitest';
import type {
  ScrollViewRefresherDefaultStyle,
  ScrollViewOnScrolltoupper,
  ScrollViewOnScrolltolower,
  ScrollViewOnScrollDetail,
  ScrollViewOnScroll,
  ScrollViewOnRefresherpulling,
  ScrollViewOnRefresherrefresh,
  ScrollViewOnRefresherrestore,
  ScrollViewOnRefresherabort,
  ScrollViewProps,
  ScrollView,
  ScrollViewInstance,
} from '@/view-containers/ScrollView';

describe('ScrollView', () => {
  expectTypeOf<ScrollViewRefresherDefaultStyle>().toBeString();
  expectTypeOf<ScrollViewRefresherDefaultStyle>().toEqualTypeOf<UniHelper.ScrollViewRefresherDefaultStyle>();

  expectTypeOf<ScrollViewOnScrolltoupper>().toBeFunction();
  expectTypeOf<ScrollViewOnScrolltoupper>().toEqualTypeOf<UniHelper.ScrollViewOnScrolltoupper>();

  expectTypeOf<ScrollViewOnScrolltolower>().toBeFunction();
  expectTypeOf<ScrollViewOnScrolltolower>().toEqualTypeOf<UniHelper.ScrollViewOnScrolltolower>();

  expectTypeOf<ScrollViewOnScrollDetail>().toBeObject();
  expectTypeOf<ScrollViewOnScrollDetail>().toEqualTypeOf<UniHelper.ScrollViewOnScrollDetail>();

  expectTypeOf<ScrollViewOnScroll>().toBeFunction();
  expectTypeOf<ScrollViewOnScroll>().toEqualTypeOf<UniHelper.ScrollViewOnScroll>();

  expectTypeOf<ScrollViewOnRefresherpulling>().toBeFunction();
  expectTypeOf<ScrollViewOnRefresherpulling>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherpulling>();

  expectTypeOf<ScrollViewOnRefresherrefresh>().toBeFunction();
  expectTypeOf<ScrollViewOnRefresherrefresh>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherrefresh>();

  expectTypeOf<ScrollViewOnRefresherrestore>().toBeFunction();
  expectTypeOf<ScrollViewOnRefresherrestore>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherrestore>();

  expectTypeOf<ScrollViewOnRefresherabort>().toBeFunction();
  expectTypeOf<ScrollViewOnRefresherabort>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherabort>();

  expectTypeOf<ScrollViewProps>().toBeObject();
  expectTypeOf<ScrollViewProps>().toEqualTypeOf<UniHelper.ScrollViewProps>();

  expectTypeOf<ScrollView>().not.toBeAny();
  expectTypeOf<ScrollView>().toEqualTypeOf<UniHelper.ScrollView>();

  expectTypeOf<ScrollViewInstance>().not.toBeAny();
  expectTypeOf<ScrollViewInstance>().toEqualTypeOf<UniHelper.ScrollViewInstance>();
});
