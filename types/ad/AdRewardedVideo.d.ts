import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/** 服务器回调透传数据 */
interface _AdRewardedVideoUrlCallback {
  userId: string;
  extra: string;
}

/** 广告加载成功的回调 */
interface _AdRewardedVideoOnLoad {
  (event: BaseEvent, ...params: any[]): void;
}

interface _AdRewardedVideoOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

/** 广告加载失败的回调 */
interface _AdRewardedVideoOnError {
  (event: CustomEvent<_AdRewardedVideoOnErrorDetail>, ...params: any[]): void;
}

/** 广告关闭的回调 */
interface _AdRewardedVideoOnClose {
  (event: BaseEvent, ...params: any[]): void;
}

/** 激励视频广告属性 */
type _AdRewardedVideoProps = Partial<{
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
  /** 服务器回调透传数据 */
  urlCallback: _AdRewardedVideoUrlCallback;
  /** 广告加载成功的回调 */
  onLoad: _AdRewardedVideoOnLoad;
  /** 广告加载失败的回调 */
  onError: _AdRewardedVideoOnError;
  /** 广告关闭的回调 */
  onClose: _AdRewardedVideoOnClose;
}>;

/** 激励视频广告 */
type _AdRewardedVideo = Component<_AdRewardedVideoProps>;

/** 激励视频广告实例 */
type _AdRewardedVideoInstance = InstanceType<_AdRewardedVideo>;

export {
  _AdRewardedVideoUrlCallback as AdRewardedVideoUrlCallback,
  _AdRewardedVideoOnLoad as AdRewardedVideoOnLoad,
  _AdRewardedVideoOnErrorDetail as AdRewardedVideoOnErrorDetail,
  _AdRewardedVideoOnError as AdRewardedVideoOnError,
  _AdRewardedVideoOnClose as AdRewardedVideoOnClose,
  _AdRewardedVideoProps as AdRewardedVideoProps,
  _AdRewardedVideo as AdRewardedVideo,
  _AdRewardedVideoInstance as AdRewardedVideoInstance,
};

declare global {
  namespace UniHelper {
    /** 服务器回调透传数据 */
    export interface AdRewardedVideoUrlCallback extends _AdRewardedVideoUrlCallback {}
    /** 广告加载成功的回调 */
    export interface AdRewardedVideoOnLoad extends _AdRewardedVideoOnLoad {}
    export interface AdRewardedVideoOnErrorDetail extends _AdRewardedVideoOnErrorDetail {}
    /** 广告加载失败的回调 */
    export interface AdRewardedVideoOnError extends _AdRewardedVideoOnError {}
    /** 广告关闭的回调 */
    export interface AdRewardedVideoOnClose extends _AdRewardedVideoOnClose {}
    /** 激励视频广告属性 */
    export type AdRewardedVideoProps = _AdRewardedVideoProps;
    /** 激励视频广告 */
    export type AdRewardedVideo = _AdRewardedVideo;
    /** 激励视频广告实例 */
    export type AdRewardedVideoInstance = _AdRewardedVideoInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 激励视频广告 */
    AdRewardedVideo: _AdRewardedVideo;
  }
}
