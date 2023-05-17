import { Component } from '../component';
import { BaseEvent, CustomEvent } from '../events';

/** 服务器回调透传数据 */
interface _AdRewardedVideoUrlCallback {
  userId: string;
  extra: string;
}

type _AdRewardedVideoOnLoadEvent = BaseEvent;

/** 广告加载成功的回调 */
interface _AdRewardedVideoOnLoad {
  (event: _AdRewardedVideoOnLoadEvent): void;
}

interface _AdRewardedVideoOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

type _AdRewardedVideoOnErrorEvent = CustomEvent<_AdRewardedVideoOnErrorDetail>;

/** 广告加载失败的回调 */
interface _AdRewardedVideoOnError {
  (event: _AdRewardedVideoOnErrorEvent): void;
}

type _AdRewardedVideoOnCloseEvent = BaseEvent;

/** 广告关闭的回调 */
interface _AdRewardedVideoOnClose {
  (event: _AdRewardedVideoOnCloseEvent): void;
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
  _AdRewardedVideoOnLoadEvent as AdRewardedVideoOnLoadEvent,
  _AdRewardedVideoOnLoad as AdRewardedVideoOnLoad,
  _AdRewardedVideoOnErrorDetail as AdRewardedVideoOnErrorDetail,
  _AdRewardedVideoOnErrorEvent as AdRewardedVideoOnErrorEvent,
  _AdRewardedVideoOnError as AdRewardedVideoOnError,
  _AdRewardedVideoOnCloseEvent as AdRewardedVideoOnCloseEvent,
  _AdRewardedVideoOnClose as AdRewardedVideoOnClose,
  _AdRewardedVideoProps as AdRewardedVideoProps,
  _AdRewardedVideo as AdRewardedVideo,
  _AdRewardedVideoInstance as AdRewardedVideoInstance,
};

declare global {
  namespace UniHelper {
    /** 服务器回调透传数据 */
    export interface AdRewardedVideoUrlCallback extends _AdRewardedVideoUrlCallback {}
    export type AdRewardedVideoOnLoadEvent = _AdRewardedVideoOnLoadEvent;
    /** 广告加载成功的回调 */
    export interface AdRewardedVideoOnLoad extends _AdRewardedVideoOnLoad {}
    export interface AdRewardedVideoOnErrorDetail extends _AdRewardedVideoOnErrorDetail {}
    export type AdRewardedVideoOnErrorEvent = _AdRewardedVideoOnErrorEvent;
    /** 广告加载失败的回调 */
    export interface AdRewardedVideoOnError extends _AdRewardedVideoOnError {}
    export type AdRewardedVideoOnCloseEvent = _AdRewardedVideoOnCloseEvent;
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

// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 激励视频广告 */
    AdRewardedVideo: _AdRewardedVideo;
  }
}
