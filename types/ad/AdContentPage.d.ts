import { Component } from '../Component';

/** 广告加载成功的回调 */
interface _AdContentPageOnLoad {
  (event: BaseEvent, ...params: any[]): void;
}

interface _AdContentPageOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

/** 广告加载失败的回调 */
interface _AdContentPageOnError {
  (event: CustomEvent<_AdContentPageOnErrorDetail>, ...params: any[]): void;
}

interface _AdContentPageOnStartDetail {
  /** 广告唯一标识 */
  id: string;
  /**
   * 广告类型
   *
   * 0 未知类型
   *
   * 1 普通信息流
   *
   * 2 sdk 内部广告
   *
   * 3 第三方广告
   *
   * 4 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /** 视频总时长 */
  duration: number;
}

/** 广告开始播放时触发 */
interface _AdContentPageOnStart {
  (event: CustomEvent<_AdContentPageOnStartDetail>, ...params: any[]): void;
}

interface _AdContentPageOnPauseDetail {
  /** 广告唯一标识 */
  id: string;
  /**
   * 广告类型
   *
   * 0 未知类型
   *
   * 1 普通信息流
   *
   * 2 sdk 内部广告
   *
   * 3 第三方广告
   *
   * 4 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /** 视频总时长 */
  duration: number;
}

/** 广告暂停播放时触发 */
interface _AdContentPageOnPause {
  (event: CustomEvent<_AdContentPageOnPauseDetail>, ...params: any[]): void;
}

interface _AdContentPageOnResumeDetail {
  /** 广告唯一标识 */
  id: string;
  /**
   * 广告类型
   *
   * 0 未知类型
   *
   * 1 普通信息流
   *
   * 2 sdk 内部广告
   *
   * 3 第三方广告
   *
   * 4 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /** 视频总时长 */
  duration: number;
}

/** 广告恢复播放时触发 */
interface _AdContentPageOnResume {
  (event: CustomEvent<_AdContentPageOnResumeDetail>, ...params: any[]): void;
}

interface _AdContentPageOnCompleteDetail {
  /** 广告唯一标识 */
  id: string;
  /**
   * 广告类型
   *
   * 0 未知类型
   *
   * 1 普通信息流
   *
   * 2 sdk 内部广告
   *
   * 3 第三方广告
   *
   * 4 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /** 视频总时长 */
  duration: number;
}

/** 广告完成播放时触发 */
interface _AdContentPageOnComplete {
  (event: CustomEvent<_AdContentPageOnCompleteDetail>, ...params: any[]): void;
}

/** 短视频内容联盟广告属性 */
type _AdContentPageProps = Partial<{
  /** APP 广告位 id */
  adpid: string;
  /** 广告加载成功的回调 */
  onLoad: _AdContentPageOnLoad;
  /** 广告加载失败的回调 */
  onError: _AdContentPageOnError;
  /** 广告开始播放时触发 */
  onStart: _AdContentPageOnStart;
  /** 广告暂停播放时触发 */
  onPause: _AdContentPageOnPause;
  /** 广告恢复播放时触发 */
  onResume: _AdContentPageOnResume;
  /** 广告完成播放时触发 */
  onComplete: _AdContentPageOnComplete;
}>;

/** 短视频内容联盟广告 */
type _AdContentPage = Component<_AdContentPageProps>;

/** 短视频内容联盟广告实例 */
type _AdContentPageInstance = InstanceType<_AdContentPage>;

export {
  _AdContentPageOnLoad as AdContentPageOnLoad,
  _AdContentPageOnErrorDetail as AdContentPageOnErrorDetail,
  _AdContentPageOnError as AdContentPageOnError,
  _AdContentPageOnStartDetail as AdContentPageOnStartDetail,
  _AdContentPageOnStart as AdContentPageOnStart,
  _AdContentPageOnPauseDetail as AdContentPageOnPauseDetail,
  _AdContentPageOnPause as AdContentPageOnPause,
  _AdContentPageOnResumeDetail as AdContentPageOnResumeDetail,
  _AdContentPageOnResume as AdContentPageOnResume,
  _AdContentPageOnCompleteDetail as AdContentPageOnCompleteDetail,
  _AdContentPageOnComplete as AdContentPageOnComplete,
  _AdContentPageProps as AdContentPageProps,
  _AdContentPage as AdContentPage,
  _AdContentPageInstance as AdContentPageInstance,
};

declare global {
  namespace UniHelper {
    /** 广告加载成功的回调 */
    export interface AdContentPageOnLoad extends _AdContentPageOnLoad {}
    export interface AdContentPageOnErrorDetail extends _AdContentPageOnErrorDetail {}
    /** 广告加载失败的回调 */
    export interface AdContentPageOnError extends _AdContentPageOnError {}
    export interface AdContentPageOnStartDetail extends _AdContentPageOnStartDetail {}
    /** 广告开始播放时触发 */
    export interface AdContentPageOnStart extends _AdContentPageOnStart {}
    export interface AdContentPageOnPauseDetail extends _AdContentPageOnPauseDetail {}
    /** 广告暂停播放时触发 */
    export interface AdContentPageOnPause extends _AdContentPageOnPause {}
    export interface AdContentPageOnResumeDetail extends _AdContentPageOnResumeDetail {}
    /** 广告恢复播放时触发 */
    export interface AdContentPageOnResume extends _AdContentPageOnResume {}
    export interface AdContentPageOnCompleteDetail extends _AdContentPageOnCompleteDetail {}
    /** 广告完成播放时触发 */
    export interface AdContentPageOnComplete extends _AdContentPageOnComplete {}
    /** 短视频内容联盟广告属性 */
    export type AdContentPageProps = _AdContentPageProps;
    /** 短视频内容联盟广告 */
    export type AdContentPage = _AdContentPage;
    /** 短视频内容联盟广告实例 */
    export type AdContentPageInstance = _AdContentPageInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 短视频内容联盟广告 */
    AdContentPage: _AdContentPage;
  }
}
