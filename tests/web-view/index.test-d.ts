import { describe, expectTypeOf } from 'vitest';
import type {
  WebViewStyles,
  WebViewOnMessageDetail,
  WebViewOnMessageEvent,
  WebViewOnMessage,
  WebViewOnOnPostMessage,
  WebViewOnOnPostMessageEvent,
  WebViewProps,
  WebView,
  WebViewInstance,
} from '@/web-view';

describe('WebView', () => {
  expectTypeOf<WebViewStyles>().toBeObject();
  expectTypeOf<WebViewStyles>().toEqualTypeOf<UniHelper.WebViewStyles>();

  expectTypeOf<WebViewOnMessageDetail>().toBeObject();
  expectTypeOf<WebViewOnMessageDetail>().toEqualTypeOf<UniHelper.WebViewOnMessageDetail>();

  expectTypeOf<WebViewOnMessageEvent>().toBeObject();
  expectTypeOf<WebViewOnMessageEvent>().toEqualTypeOf<UniHelper.WebViewOnMessageEvent>();

  expectTypeOf<WebViewOnMessage>().toBeFunction();
  expectTypeOf<WebViewOnMessage>().toEqualTypeOf<UniHelper.WebViewOnMessage>();

  expectTypeOf<WebViewOnOnPostMessageEvent>().toBeObject();
  expectTypeOf<WebViewOnOnPostMessageEvent>().toEqualTypeOf<UniHelper.WebViewOnOnPostMessageEvent>();

  expectTypeOf<WebViewOnOnPostMessage>().toBeFunction();
  expectTypeOf<WebViewOnOnPostMessage>().toEqualTypeOf<UniHelper.WebViewOnOnPostMessage>();

  expectTypeOf<WebViewProps>().toBeObject();
  expectTypeOf<WebViewProps>().toEqualTypeOf<UniHelper.WebViewProps>();

  expectTypeOf<WebView>().not.toBeAny();
  expectTypeOf<WebView>().toEqualTypeOf<UniHelper.WebView>();

  expectTypeOf<WebViewInstance>().not.toBeAny();
  expectTypeOf<WebViewInstance>().toEqualTypeOf<UniHelper.WebViewInstance>();
});
