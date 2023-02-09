import { describe, expectTypeOf } from 'vitest';
import type {
  PageMetaBackgroundTextStyle,
  PageMetaOnResizeDetail,
  PageMetaOnResize,
  PageMetaOnScrollDetail,
  PageMetaOnScroll,
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

  expectTypeOf<PageMetaOnResize>().toBeFunction();
  expectTypeOf<PageMetaOnResize>().toEqualTypeOf<UniHelper.PageMetaOnResize>();

  expectTypeOf<PageMetaOnScrollDetail>().toBeObject();
  expectTypeOf<PageMetaOnScrollDetail>().toEqualTypeOf<UniHelper.PageMetaOnScrollDetail>();

  expectTypeOf<PageMetaOnScroll>().toBeFunction();
  expectTypeOf<PageMetaOnScroll>().toEqualTypeOf<UniHelper.PageMetaOnScroll>();

  expectTypeOf<PageMetaOnScrolldone>().toBeFunction();
  expectTypeOf<PageMetaOnScrolldone>().toEqualTypeOf<UniHelper.PageMetaOnScrolldone>();

  expectTypeOf<PageMetaProps>().toBeObject();
  expectTypeOf<PageMetaProps>().toEqualTypeOf<UniHelper.PageMetaProps>();

  expectTypeOf<PageMeta>().not.toBeAny();
  expectTypeOf<PageMeta>().toEqualTypeOf<UniHelper.PageMeta>();

  expectTypeOf<PageMetaInstance>().not.toBeAny();
  expectTypeOf<PageMetaInstance>().toEqualTypeOf<UniHelper.PageMetaInstance>();
});
