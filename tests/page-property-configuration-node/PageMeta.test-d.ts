import { describe, expectTypeOf } from 'vitest';
import type {
  PageMetaBackgroundTextStyle,
  PageMetaOnResizeDetail,
  PageMetaOnResizeEvent,
  PageMetaOnResize,
  PageMetaOnScrollDetail,
  PageMetaOnScrollEvent,
  PageMetaOnScroll,
  PageMetaOnScrolldoneEvent,
  PageMetaOnScrolldone,
  PageMetaProps,
  PageMeta,
  PageMetaInstance,
} from '@/page-property-configuration-node/PageMeta';

describe('PageMeta', () => {
  expectTypeOf<PageMetaBackgroundTextStyle>().toBeString();
  expectTypeOf<PageMetaBackgroundTextStyle>().toEqualTypeOf<UniHelper.PageMetaBackgroundTextStyle>();

  expectTypeOf<PageMetaOnResizeDetail>().toBeObject();
  expectTypeOf<PageMetaOnResizeDetail>().toEqualTypeOf<UniHelper.PageMetaOnResizeDetail>();

  expectTypeOf<PageMetaOnResizeEvent>().toBeObject();
  expectTypeOf<PageMetaOnResizeEvent>().toEqualTypeOf<UniHelper.PageMetaOnResizeEvent>();

  expectTypeOf<PageMetaOnResize>().toBeFunction();
  expectTypeOf<PageMetaOnResize>().toEqualTypeOf<UniHelper.PageMetaOnResize>();

  expectTypeOf<PageMetaOnScrollDetail>().toBeObject();
  expectTypeOf<PageMetaOnScrollDetail>().toEqualTypeOf<UniHelper.PageMetaOnScrollDetail>();

  expectTypeOf<PageMetaOnScrollEvent>().toBeObject();
  expectTypeOf<PageMetaOnScrollEvent>().toEqualTypeOf<UniHelper.PageMetaOnScrollEvent>();

  expectTypeOf<PageMetaOnScroll>().toBeFunction();
  expectTypeOf<PageMetaOnScroll>().toEqualTypeOf<UniHelper.PageMetaOnScroll>();

  expectTypeOf<PageMetaOnScrolldoneEvent>().toBeObject();
  expectTypeOf<PageMetaOnScrolldoneEvent>().toEqualTypeOf<UniHelper.PageMetaOnScrolldoneEvent>();

  expectTypeOf<PageMetaOnScrolldone>().toBeFunction();
  expectTypeOf<PageMetaOnScrolldone>().toEqualTypeOf<UniHelper.PageMetaOnScrolldone>();

  expectTypeOf<PageMetaProps>().toBeObject();
  expectTypeOf<PageMetaProps>().toEqualTypeOf<UniHelper.PageMetaProps>();

  expectTypeOf<PageMeta>().not.toBeAny();
  expectTypeOf<PageMeta>().toEqualTypeOf<UniHelper.PageMeta>();

  expectTypeOf<PageMetaInstance>().not.toBeAny();
  expectTypeOf<PageMetaInstance>().toEqualTypeOf<UniHelper.PageMetaInstance>();
});
