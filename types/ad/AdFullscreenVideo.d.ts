import { Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdFullscreenVideoLoad {
  (event: BaseEvent): void;
}

interface _AdFullscreenVideoErrorDetail {
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
interface _AdFullscreenVideoError {
  (event: CustomEvent<_AdFullscreenVideoErrorDetail>): void;
}

/**
 * @desc 广告关闭的回调
 */
interface _AdFullscreenVideoClose {
  (event: BaseEvent): void;
}

/**
 * @desc 全屏视频广告属性
 */
interface _AdFullscreenVideoProps {
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
  onLoad: _AdFullscreenVideoLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdFullscreenVideoError;
  /**
   * @desc 广告关闭的回调
   */
  onClose: _AdFullscreenVideoClose;
}

/**
 * @desc 全屏视频广告
 */
type _AdFullscreenVideo = Component<Partial<_AdFullscreenVideoProps>>;

export {
  _AdFullscreenVideoLoad as AdFullscreenVideoLoad,
  _AdFullscreenVideoErrorDetail as AdFullscreenVideoErrorDetail,
  _AdFullscreenVideoError as AdFullscreenVideoError,
  _AdFullscreenVideoClose as AdFullscreenVideoClose,
  _AdFullscreenVideoProps as AdFullscreenVideoProps,
  _AdFullscreenVideo as AdFullscreenVideo,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdFullscreenVideoLoad extends _AdFullscreenVideoLoad {}
    export interface AdFullscreenVideoErrorDetail extends _AdFullscreenVideoErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdFullscreenVideoError extends _AdFullscreenVideoError {}
    /**
     * @desc 广告关闭的回调
     */
    export interface AdFullscreenVideoClose extends _AdFullscreenVideoClose {}
    /**
     * @desc 全屏视频广告属性
     */
    export interface AdFullscreenVideoProps extends _AdFullscreenVideoProps {}
    /**
     * @desc 全屏视频广告
     */
    export type AdFullscreenVideo = _AdFullscreenVideo;
  }
}
