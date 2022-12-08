import { Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdInterstitialLoad {
  (event: BaseEvent): void;
}

interface _AdInterstitialErrorDetail {
  /**
   * @desc 错误码
   */
  errCode: number;
  /**
   * @desc 错误信息
   */
  errMsg: string;
}

/**
 * @desc 广告加载失败的回调
 */
interface _AdInterstitialError {
  (event: CustomEvent<_AdInterstitialErrorDetail>): void;
}

/**
 * @desc 广告关闭的回调
 */
interface _AdInterstitialClose {
  (event: BaseEvent): void;
}

/**
 * @desc 插屏广告属性
 */
interface _AdInterstitialProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string | number | (string | number)[];
  /**
   * @desc 是否在页面就绪后加载广告数据
   * @desc 默认为 true
   */
  preload: boolean;
  /**
   * @desc 是否自动加载下一条广告数据
   * @desc 默认为 false
   */
  loadnext: boolean;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: _AdInterstitialLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdInterstitialError;
  /**
   * @desc 广告关闭的回调
   */
  onClose: _AdInterstitialClose;
}

/**
 * @desc 插屏广告
 */
type _AdInterstitial = Component<Partial<_AdInterstitialProps>>;

export {
  _AdInterstitialLoad as AdInterstitialLoad,
  _AdInterstitialErrorDetail as AdInterstitialErrorDetail,
  _AdInterstitialError as AdInterstitialError,
  _AdInterstitialClose as AdInterstitialClose,
  _AdInterstitialProps as AdInterstitialProps,
  _AdInterstitial as AdInterstitial,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdInterstitialLoad extends _AdInterstitialLoad {}
    export interface AdInterstitialErrorDetail extends _AdInterstitialErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdInterstitialError extends _AdInterstitialError {}
    /**
     * @desc 广告关闭的回调
     */
    export interface AdInterstitialClose extends _AdInterstitialClose {}
    /**
     * @desc 插屏广告属性
     */
    export interface AdInterstitialProps extends _AdInterstitialProps {}
    /**
     * @desc 插屏广告
     */
    export type AdInterstitial = _AdInterstitial;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 插屏广告
     */
    AdInterstitial: _AdInterstitial;
  }
}
