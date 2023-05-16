import { describe, expectTypeOf } from 'vitest';
import type {
  ScrollViewRefresherDefaultStyle,
  ScrollViewOnScrolltoupperEvent,
  ScrollViewOnScrolltoupper,
  ScrollViewOnScrolltolowerEvent,
  ScrollViewOnScrolltolower,
  ScrollViewOnScrollDetail,
  ScrollViewOnScrollEvent,
  ScrollViewOnScroll,
  ScrollViewOnRefresherpullingEvent,
  ScrollViewOnRefresherpulling,
  ScrollViewOnRefresherrefreshEvent,
  ScrollViewOnRefresherrefresh,
  ScrollViewOnRefresherrestoreEvent,
  ScrollViewOnRefresherrestore,
  ScrollViewOnRefresherabortEvent,
  ScrollViewOnRefresherabort,
  ScrollViewProps,
  ScrollView,
  ScrollViewInstance,
} from '@/index';

describe('ScrollView', () => {
  expectTypeOf<ScrollViewRefresherDefaultStyle>().toBeString();
  expectTypeOf<ScrollViewRefresherDefaultStyle>().toEqualTypeOf<UniHelper.ScrollViewRefresherDefaultStyle>();

  expectTypeOf<ScrollViewOnScrolltoupperEvent>().toBeObject();
  expectTypeOf<ScrollViewOnScrolltoupperEvent>().toEqualTypeOf<UniHelper.ScrollViewOnScrolltoupperEvent>();

  expectTypeOf<ScrollViewOnScrolltoupper>().toBeFunction();
  expectTypeOf<ScrollViewOnScrolltoupper>().toEqualTypeOf<UniHelper.ScrollViewOnScrolltoupper>();

  expectTypeOf<ScrollViewOnScrolltolowerEvent>().toBeObject();
  expectTypeOf<ScrollViewOnScrolltolowerEvent>().toEqualTypeOf<UniHelper.ScrollViewOnScrolltolowerEvent>();

  expectTypeOf<ScrollViewOnScrolltolower>().toBeFunction();
  expectTypeOf<ScrollViewOnScrolltolower>().toEqualTypeOf<UniHelper.ScrollViewOnScrolltolower>();

  expectTypeOf<ScrollViewOnScrollDetail>().toBeObject();
  expectTypeOf<ScrollViewOnScrollDetail>().toEqualTypeOf<UniHelper.ScrollViewOnScrollDetail>();

  expectTypeOf<ScrollViewOnScrollEvent>().toBeObject();
  expectTypeOf<ScrollViewOnScrollEvent>().toEqualTypeOf<UniHelper.ScrollViewOnScrollEvent>();

  expectTypeOf<ScrollViewOnScroll>().toBeFunction();
  expectTypeOf<ScrollViewOnScroll>().toEqualTypeOf<UniHelper.ScrollViewOnScroll>();

  expectTypeOf<ScrollViewOnRefresherpullingEvent>().toBeObject();
  expectTypeOf<ScrollViewOnRefresherpullingEvent>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherpullingEvent>();

  expectTypeOf<ScrollViewOnRefresherpulling>().toBeFunction();
  expectTypeOf<ScrollViewOnRefresherpulling>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherpulling>();

  expectTypeOf<ScrollViewOnRefresherrefreshEvent>().toBeObject();
  expectTypeOf<ScrollViewOnRefresherrefreshEvent>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherrefreshEvent>();

  expectTypeOf<ScrollViewOnRefresherrefresh>().toBeFunction();
  expectTypeOf<ScrollViewOnRefresherrefresh>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherrefresh>();

  expectTypeOf<ScrollViewOnRefresherrestoreEvent>().toBeObject();
  expectTypeOf<ScrollViewOnRefresherrestoreEvent>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherrestoreEvent>();

  expectTypeOf<ScrollViewOnRefresherrestore>().toBeFunction();
  expectTypeOf<ScrollViewOnRefresherrestore>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherrestore>();

  expectTypeOf<ScrollViewOnRefresherabortEvent>().toBeObject();
  expectTypeOf<ScrollViewOnRefresherabortEvent>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherabortEvent>();

  expectTypeOf<ScrollViewOnRefresherabort>().toBeFunction();
  expectTypeOf<ScrollViewOnRefresherabort>().toEqualTypeOf<UniHelper.ScrollViewOnRefresherabort>();

  expectTypeOf<ScrollViewProps>().toBeObject();
  expectTypeOf<ScrollViewProps>().toEqualTypeOf<UniHelper.ScrollViewProps>();

  expectTypeOf<ScrollView>().not.toBeAny();
  expectTypeOf<ScrollView>().toEqualTypeOf<UniHelper.ScrollView>();

  expectTypeOf<ScrollViewInstance>().not.toBeAny();
  expectTypeOf<ScrollViewInstance>().toEqualTypeOf<UniHelper.ScrollViewInstance>();
});
