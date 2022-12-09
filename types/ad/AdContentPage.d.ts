import { Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdContentPageOnLoad {
  (event: BaseEvent): void;
}

interface _AdContentPageOnErrorDetail {
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
interface _AdContentPageOnError {
  (event: CustomEvent<_AdContentPageOnErrorDetail>): void;
}

interface _AdContentPageOnStartDetail {
  /**
   * @desc 广告唯一标识
   */
  id: string;
  /**
   * @desc 广告类型
   * @desc 0 未知类型
   * @desc 1 普通信息流
   * @desc 2 sdk 内部广告
   * @desc 3 第三方广告
   * @desc 4 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /**
   * @desc 视频总时长
   */
  duration: number;
}

/**
 * @desc 广告开始播放时触发
 */
interface _AdContentPageOnStart {
  (event: CustomEvent<_AdContentPageOnStartDetail>): void;
}

interface _AdContentPageOnPauseDetail {
  /**
   * @desc 广告唯一标识
   */
  id: string;
  /**
   * @desc 广告类型
   * @desc 0 未知类型
   * @desc 1 普通信息流
   * @desc 2 sdk 内部广告
   * @desc 3 第三方广告
   * @desc 4 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /**
   * @desc 视频总时长
   */
  duration: number;
}

/**
 * @desc 广告暂停播放时触发
 */
interface _AdContentPageOnPause {
  (event: CustomEvent<_AdContentPageOnPauseDetail>): void;
}

interface _AdContentPageOnResumeDetail {
  /**
   * @desc 广告唯一标识
   */
  id: string;
  /**
   * @desc 广告类型
   * @desc 0 未知类型
   * @desc 1 普通信息流
   * @desc 2 sdk 内部广告
   * @desc 3 第三方广告
   * @desc 4 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /**
   * @desc 视频总时长
   */
  duration: number;
}

/**
 * @desc 广告恢复播放时触发
 */
interface _AdContentPageOnResume {
  (event: CustomEvent<_AdContentPageOnResumeDetail>): void;
}

interface _AdContentPageOnCompleteDetail {
  /**
   * @desc 广告唯一标识
   */
  id: string;
  /**
   * @desc 广告类型
   * @desc 0 未知类型
   * @desc 1 普通信息流
   * @desc 2 sdk 内部广告
   * @desc 3 第三方广告
   * @desc 4 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /**
   * @desc 视频总时长
   */
  duration: number;
}

/**
 * @desc 广告完成播放时触发
 */
interface _AdContentPageOnComplete {
  (event: CustomEvent<_AdContentPageOnCompleteDetail>): void;
}

/**
 * @desc 短视频内容联盟广告属性
 */
interface _AdContentPageProps {
  /**
   * @desc APP 广告位 id
   */
  adpid: string;
  /**
   * @desc 广告加载成功的回调
   */
  onLoad: _AdContentPageOnLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdContentPageOnError;
  /**
   * @desc 广告开始播放时触发
   */
  onStart: _AdContentPageOnStart;
  /**
   * @desc 广告暂停播放时触发
   */
  onPause: _AdContentPageOnPause;
  /**
   * @desc 广告恢复播放时触发
   */
  onResume: _AdContentPageOnResume;
  /**
   * @desc 广告完成播放时触发
   */
  onComplete: _AdContentPageOnComplete;
}

/**
 * @desc 短视频内容联盟广告
 */
type _AdContentPage = Component<Partial<_AdContentPageProps>>;

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
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdContentPageOnLoad extends _AdContentPageOnLoad {}
    export interface AdContentPageOnErrorDetail extends _AdContentPageOnErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdContentPageOnError extends _AdContentPageOnError {}
    export interface AdContentPageOnStartDetail extends _AdContentPageOnStartDetail {}
    /**
     * @desc 广告开始播放时触发
     */
    export interface AdContentPageOnStart extends _AdContentPageOnStart {}
    export interface AdContentPageOnPauseDetail extends _AdContentPageOnPauseDetail {}
    /**
     * @desc 广告暂停播放时触发
     */
    export interface AdContentPageOnPause extends _AdContentPageOnPause {}
    export interface AdContentPageOnResumeDetail extends _AdContentPageOnResumeDetail {}
    /**
     * @desc 广告恢复播放时触发
     */
    export interface AdContentPageOnResume extends _AdContentPageOnResume {}
    export interface AdContentPageOnCompleteDetail extends _AdContentPageOnCompleteDetail {}
    /**
     * @desc 广告完成播放时触发
     */
    export interface AdContentPageOnComplete extends _AdContentPageOnComplete {}
    /**
     * @desc 短视频内容联盟广告属性
     */
    export interface AdContentPageProps extends _AdContentPageProps {}
    /**
     * @desc 短视频内容联盟广告
     */
    export type AdContentPage = _AdContentPage;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 短视频内容联盟广告
     */
    AdContentPage: _AdContentPage;
  }
}
