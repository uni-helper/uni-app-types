import { Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdInterstitialOnLoad {
  (event: BaseEvent): void;
}

interface _AdInterstitialOnErrorDetail {
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
interface _AdInterstitialOnError {
  (event: CustomEvent<_AdInterstitialOnErrorDetail>): void;
}

/**
 * @desc 广告关闭的回调
 */
interface _AdInterstitialOnClose {
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
  onLoad: _AdInterstitialOnLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdInterstitialOnError;
  /**
   * @desc 广告关闭的回调
   */
  onClose: _AdInterstitialOnClose;
}

/**
 * @desc 插屏广告
 */
type _AdInterstitial = Component<Partial<_AdInterstitialProps>>;

export {
  _AdInterstitialOnLoad as AdInterstitialOnLoad,
  _AdInterstitialOnErrorDetail as AdInterstitialOnErrorDetail,
  _AdInterstitialOnError as AdInterstitialOnError,
  _AdInterstitialOnClose as AdInterstitialOnClose,
  _AdInterstitialProps as AdInterstitialProps,
  _AdInterstitial as AdInterstitial,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdInterstitialOnLoad extends _AdInterstitialOnLoad {}
    export interface AdInterstitialOnErrorDetail extends _AdInterstitialOnErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdInterstitialOnError extends _AdInterstitialOnError {}
    /**
     * @desc 广告关闭的回调
     */
    export interface AdInterstitialOnClose extends _AdInterstitialOnClose {}
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
