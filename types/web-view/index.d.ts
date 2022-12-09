import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 样式
 */
interface _WebViewStyles {
  /**
   * @desc 进度条样式
   * @desc 仅加载网络 HTML 时生效
   * @desc 设置为 false 时禁用进度条
   * @desc 默认为 { color: '#00ff00' }
   */
  progress: boolean | { color: string };
}

interface _WebViewOnMessageDetail {
  data: any[];
}

/**
 * @desc 网页向应用 postMessage 时，会在特定时机（后退、组件销毁、分享）触发并收到消息
 */
interface _WebViewOnMessage {
  (event: CustomEvent<_WebViewOnMessageDetail>): void;
}

/**
 * @desc 网页向应用实时 postMessage
 */
interface _WebViewOnOnPostMessage {
  (event: BaseEvent): void;
}

/**
 * @desc web 浏览器组件属性
 */
interface _WebViewProps {
  /**
   * @desc 指向网页的链接
   */
  src: string;
  /**
   * @desc 用于为 iframe 指定其特征策略
   */
  allow: string;
  /**
   * @desc 该属性对呈现在 iframe 框架中的内容启用一些额外的限制条件
   */
  sandbox: string;
  /**
   * @desc 样式
   */
  webviewStyles: _WebViewStyles;
  /**
   * @desc 是否自动更新当前页面标题
   */
  updateTitle: boolean;
  /**
   * @desc 网页向应用 postMessage 时，会在特定时机（后退、组件销毁、分享）触发并收到消息
   */
  onMessage: _WebViewOnMessage;
  /**
   * @desc 网页向应用实时 postMessage
   */
  onOnPostMessage: _WebViewOnOnPostMessage;
}

/**
 * @desc web 浏览器组件，可承载网页
 */
type _WebView = Component<Partial<_WebViewProps>>;

export {
  _WebViewStyles as WebViewStyles,
  _WebViewOnMessageDetail as WebViewOnMessageDetail,
  _WebViewOnMessage as WebViewOnMessage,
  _WebViewOnOnPostMessage as WebViewOnOnPostMessage,
  _WebViewProps as WebViewProps,
  _WebView as WebView,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 样式
     */
    export interface WebViewStyles extends _WebViewStyles {}
    export interface WebViewOnMessageDetail extends _WebViewOnMessageDetail {}
    /**
     * @desc 网页向应用 postMessage 时，会在特定时机（后退、组件销毁、分享）触发并收到消息
     */
    export interface WebViewOnMessage extends _WebViewOnMessage {}
    /**
     * @desc 网页向应用实时 postMessage
     */
    export interface WebViewOnOnPostMessage extends _WebViewOnOnPostMessage {}
    /**
     * @desc web 浏览器组件属性
     */
    export interface WebViewProps extends _WebViewProps {}
    /**
     * @desc web 浏览器组件，可承载网页
     */
    export type WebView = _WebView;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc web 浏览器组件，可承载网页
     */
    WebView: _WebView;
  }
}
