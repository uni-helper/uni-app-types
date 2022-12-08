import { Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdContentPageLoad {
  (event: BaseEvent): void;
}

interface _AdContentPageErrorDetail {
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
interface _AdContentPageError {
  (event: CustomEvent<_AdContentPageErrorDetail>): void;
}

interface _AdContentPageStartDetail {
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
interface _AdContentPageStart {
  (event: CustomEvent<_AdContentPageStartDetail>): void;
}

interface _AdContentPagePauseDetail {
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
interface _AdContentPagePause {
  (event: CustomEvent<_AdContentPagePauseDetail>): void;
}

interface _AdContentPageResumeDetail {
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
interface _AdContentPageResume {
  (event: CustomEvent<_AdContentPageResumeDetail>): void;
}

interface _AdContentPageCompleteDetail {
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
interface _AdContentPageComplete {
  (event: CustomEvent<_AdContentPageCompleteDetail>): void;
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
  onLoad: _AdContentPageLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdContentPageError;
  /**
   * @desc 广告开始播放时触发
   */
  onStart: _AdContentPageStart;
  /**
   * @desc 广告暂停播放时触发
   */
  onPause: _AdContentPagePause;
  /**
   * @desc 广告恢复播放时触发
   */
  onResume: _AdContentPageResume;
  /**
   * @desc 广告完成播放时触发
   */
  onComplete: _AdContentPageComplete;
}

/**
 * @desc 短视频内容联盟广告
 */
type _AdContentPage = Component<Partial<_AdContentPageProps>>;

export {
  _AdContentPageLoad as AdContentPageLoad,
  _AdContentPageErrorDetail as AdContentPageErrorDetail,
  _AdContentPageError as AdContentPageError,
  _AdContentPageStartDetail as AdContentPageStartDetail,
  _AdContentPageStart as AdContentPageStart,
  _AdContentPagePauseDetail as AdContentPagePauseDetail,
  _AdContentPagePause as AdContentPagePause,
  _AdContentPageResumeDetail as AdContentPageResumeDetail,
  _AdContentPageResume as AdContentPageResume,
  _AdContentPageCompleteDetail as AdContentPageCompleteDetail,
  _AdContentPageComplete as AdContentPageComplete,
  _AdContentPageProps as AdContentPageProps,
  _AdContentPage as AdContentPage,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdContentPageLoad extends _AdContentPageLoad {}
    export interface AdContentPageErrorDetail extends _AdContentPageErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdContentPageError extends _AdContentPageError {}
    export interface AdContentPageStartDetail extends _AdContentPageStartDetail {}
    /**
     * @desc 广告开始播放时触发
     */
    export interface AdContentPageStart extends _AdContentPageStart {}
    export interface AdContentPagePauseDetail extends _AdContentPagePauseDetail {}
    /**
     * @desc 广告暂停播放时触发
     */
    export interface AdContentPagePause extends _AdContentPagePause {}
    export interface AdContentPageResumeDetail extends _AdContentPageResumeDetail {}
    /**
     * @desc 广告恢复播放时触发
     */
    export interface AdContentPageResume extends _AdContentPageResume {}
    export interface AdContentPageCompleteDetail extends _AdContentPageCompleteDetail {}
    /**
     * @desc 广告完成播放时触发
     */
    export interface AdContentPageComplete extends _AdContentPageComplete {}
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
