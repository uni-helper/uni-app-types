import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/** 样式 */
interface _WebViewStyles {
  /**
   * 进度条样式
   *
   * 仅加载网络 HTML 时生效
   *
   * 设置为 false 时禁用进度条
   *
   * 默认为 { color: '#00ff00' }
   */
  progress: boolean | { color: string };
}

interface _WebViewOnMessageDetail {
  data: any[];
}

type _WebViewOnMessageEvent = CustomEvent<_WebViewOnMessageDetail>;

/** 网页向应用 postMessage 时，会在特定时机（后退、组件销毁、分享）触发并收到消息 */
interface _WebViewOnMessage {
  (event: _WebViewOnMessageEvent): void;
}

type _WebViewOnOnPostMessageEvent = BaseEvent;

/** 网页向应用实时 postMessage */
interface _WebViewOnOnPostMessage {
  (event: _WebViewOnOnPostMessageEvent): void;
}

/** Web 浏览器组件属性 */
type _WebViewProps = Partial<{
  /** 指向网页的链接 */
  src: string;
  /** 用于为 iframe 指定其特征策略 */
  allow: string;
  /** 该属性对呈现在 iframe 框架中的内容启用一些额外的限制条件 */
  sandbox: string;
  /** 样式 */
  webviewStyles: _WebViewStyles;
  /** 是否自动更新当前页面标题 */
  updateTitle: boolean;
  /** 网页向应用 postMessage 时，会在特定时机（后退、组件销毁、分享）触发并收到消息 */
  onMessage: _WebViewOnMessage;
  /** 网页向应用实时 postMessage */
  onOnPostMessage: _WebViewOnOnPostMessage;
}>;

/** Web 浏览器组件，可承载网页 */
type _WebView = Component<_WebViewProps>;

/** Web 浏览器组件实例 */
type _WebViewInstance = InstanceType<_WebView>;

export {
  _WebViewStyles as WebViewStyles,
  _WebViewOnMessageDetail as WebViewOnMessageDetail,
  _WebViewOnMessageEvent as WebViewOnMessageEvent,
  _WebViewOnMessage as WebViewOnMessage,
  _WebViewOnOnPostMessageEvent as WebViewOnOnPostMessageEvent,
  _WebViewOnOnPostMessage as WebViewOnOnPostMessage,
  _WebViewProps as WebViewProps,
  _WebView as WebView,
  _WebViewInstance as WebViewInstance,
};

declare global {
  namespace UniHelper {
    /** 样式 */
    export interface WebViewStyles extends _WebViewStyles {}
    export interface WebViewOnMessageDetail extends _WebViewOnMessageDetail {}
    export type WebViewOnMessageEvent = _WebViewOnMessageEvent;
    /** 网页向应用 postMessage 时，会在特定时机（后退、组件销毁、分享）触发并收到消息 */
    export interface WebViewOnMessage extends _WebViewOnMessage {}
    export type WebViewOnOnPostMessageEvent = _WebViewOnOnPostMessageEvent;
    /** 网页向应用实时 postMessage */
    export interface WebViewOnOnPostMessage extends _WebViewOnOnPostMessage {}
    /** Web 浏览器组件属性 */
    export type WebViewProps = _WebViewProps;
    /** Web 浏览器组件，可承载网页 */
    export type WebView = _WebView;
    /** Web 浏览器组件实例 */
    export type WebViewInstance = _WebViewInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** Web 浏览器组件，可承载网页 */
    WebView: _WebView;
  }
}
