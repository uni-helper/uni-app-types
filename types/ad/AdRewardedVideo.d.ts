import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 服务器回调透传数据
 */
interface _AdRewardedVideoUrlCallback {
  userId: string;
  extra: string;
}

/**
 * @desc 广告加载成功的回调
 */
interface _AdRewardedVideoOnLoad {
  (event: BaseEvent): void;
}

interface _AdRewardedVideoOnErrorDetail {
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
interface _AdRewardedVideoOnError {
  (event: CustomEvent<_AdRewardedVideoOnErrorDetail>): void;
}

/**
 * @desc 广告关闭的回调
 */
interface _AdRewardedVideoOnClose {
  (event: BaseEvent): void;
}

/**
 * @desc 激励视频广告属性
 */
interface _AdRewardedVideoProps {
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
   * @desc 服务器回调透传数据
   */
  urlCallback: _AdRewardedVideoUrlCallback;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: _AdRewardedVideoOnLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdRewardedVideoOnError;
  /**
   * @desc 广告关闭的回调
   */
  onClose: _AdRewardedVideoOnClose;
}

/**
 * @desc 激励视频广告
 */
type _AdRewardedVideo = Component<Partial<_AdRewardedVideoProps>>;

export {
  _AdRewardedVideoUrlCallback as AdRewardedVideoUrlCallback,
  _AdRewardedVideoOnLoad as AdRewardedVideoOnLoad,
  _AdRewardedVideoOnErrorDetail as AdRewardedVideoOnErrorDetail,
  _AdRewardedVideoOnError as AdRewardedVideoOnError,
  _AdRewardedVideoOnClose as AdRewardedVideoOnClose,
  _AdRewardedVideoProps as AdRewardedVideoProps,
  _AdRewardedVideo as AdRewardedVideo,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 服务器回调透传数据
     */
    export interface AdRewardedVideoUrlCallback extends _AdRewardedVideoUrlCallback {}
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdRewardedVideoOnLoad extends _AdRewardedVideoOnLoad {}
    export interface AdRewardedVideoOnErrorDetail extends _AdRewardedVideoOnErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdRewardedVideoOnError extends _AdRewardedVideoOnError {}
    /**
     * @desc 广告关闭的回调
     */
    export interface AdRewardedVideoOnClose extends _AdRewardedVideoOnClose {}
    /**
     * @desc 激励视频广告属性
     */
    export interface AdRewardedVideoProps extends _AdRewardedVideoProps {}
    /**
     * @desc 激励视频广告
     */
    export type AdRewardedVideo = _AdRewardedVideo;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 激励视频广告
     */
    AdRewardedVideo: _AdRewardedVideo;
  }
}
