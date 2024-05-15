import type { Component } from '../component';
import type { BaseEvent, CustomEvent } from '../events';

type _AdInterstitialOnLoadEvent = BaseEvent;

/** 广告加载成功的回调 */
interface _AdInterstitialOnLoad {
  (event: _AdInterstitialOnLoadEvent): void;
}

interface _AdInterstitialOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

type _AdInterstitialOnErrorEvent = CustomEvent<_AdInterstitialOnErrorDetail>;

/** 广告加载失败的回调 */
interface _AdInterstitialOnError {
  (event: _AdInterstitialOnErrorEvent): void;
}

type _AdInterstitialOnCloseEvent = BaseEvent;

/** 广告关闭的回调 */
interface _AdInterstitialOnClose {
  (event: _AdInterstitialOnCloseEvent): void;
}

/** 插屏广告属性 */
type _AdInterstitialProps = Partial<{
  /** APP 广告位 id */
  adpid: string | number | (string | number)[];
  /**
   * 是否在页面就绪后加载广告数据
   *
   * 默认为 true
   */
  preload: boolean;
  /**
   * 是否自动加载下一条广告数据
   *
   * 默认为 false
   */
  loadnext: boolean;
  /** 广告加载成功的回调 */
  onLoad: _AdInterstitialOnLoad;
  /** 广告加载失败的回调 */
  onError: _AdInterstitialOnError;
  /** 广告关闭的回调 */
  onClose: _AdInterstitialOnClose;
}>;

/** 插屏广告 */
type _AdInterstitial = Component<_AdInterstitialProps>;

/** 插屏广告实例 */
type _AdInterstitialInstance = InstanceType<_AdInterstitial>;

export {
  _AdInterstitialOnLoadEvent as AdInterstitialOnLoadEvent,
  _AdInterstitialOnLoad as AdInterstitialOnLoad,
  _AdInterstitialOnErrorDetail as AdInterstitialOnErrorDetail,
  _AdInterstitialOnErrorEvent as AdInterstitialOnErrorEvent,
  _AdInterstitialOnError as AdInterstitialOnError,
  _AdInterstitialOnCloseEvent as AdInterstitialOnCloseEvent,
  _AdInterstitialOnClose as AdInterstitialOnClose,
  _AdInterstitialProps as AdInterstitialProps,
  _AdInterstitial as AdInterstitial,
  _AdInterstitialInstance as AdInterstitialInstance,
};

declare global {
  namespace UniHelper {
    export type AdInterstitialOnLoadEvent = _AdInterstitialOnLoadEvent;
    /** 广告加载成功的回调 */
    export interface AdInterstitialOnLoad extends _AdInterstitialOnLoad {}
    export interface AdInterstitialOnErrorDetail
      extends _AdInterstitialOnErrorDetail {}
    export type AdInterstitialOnErrorEvent = _AdInterstitialOnErrorEvent;
    /** 广告加载失败的回调 */
    export interface AdInterstitialOnError extends _AdInterstitialOnError {}
    export type AdInterstitialOnCloseEvent = _AdInterstitialOnCloseEvent;
    /** 广告关闭的回调 */
    export interface AdInterstitialOnClose extends _AdInterstitialOnClose {}
    /** 插屏广告属性 */
    export type AdInterstitialProps = _AdInterstitialProps;
    /** 插屏广告 */
    export type AdInterstitial = _AdInterstitial;
    /** 插屏广告实例 */
    export type AdInterstitialInstance = _AdInterstitialInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 插屏广告 */
    AdInterstitial: _AdInterstitial;
  }
}
