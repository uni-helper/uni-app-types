import { describe, expectTypeOf } from 'vitest';
import type {
  WebViewStyles,
  WebViewOnMessageDetail,
  WebViewOnMessage,
  WebViewOnOnPostMessage,
  WebViewProps,
  WebView,
  WebViewInstance,
} from '@/web-view';

describe('WebView', () => {
  expectTypeOf<WebViewStyles>().toBeObject();
  expectTypeOf<WebViewStyles>().toEqualTypeOf<UniHelper.WebViewStyles>();

  expectTypeOf<WebViewOnMessageDetail>().toBeObject();
  expectTypeOf<WebViewOnMessageDetail>().toEqualTypeOf<UniHelper.WebViewOnMessageDetail>();

  expectTypeOf<WebViewOnMessage>().toBeFunction();
  expectTypeOf<WebViewOnMessage>().toEqualTypeOf<UniHelper.WebViewOnMessage>();

  expectTypeOf<WebViewOnOnPostMessage>().toBeObject();
  expectTypeOf<WebViewOnOnPostMessage>().toEqualTypeOf<UniHelper.WebViewOnOnPostMessage>();

  expectTypeOf<WebViewProps>().toBeObject();
  expectTypeOf<WebViewProps>().toEqualTypeOf<UniHelper.WebViewProps>();

  expectTypeOf<WebView>().not.toBeAny();
  expectTypeOf<WebView>().toEqualTypeOf<UniHelper.WebView>();

  expectTypeOf<WebViewInstance>().not.toBeAny();
  expectTypeOf<WebViewInstance>().toEqualTypeOf<UniHelper.WebViewInstance>();
});
