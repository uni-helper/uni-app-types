import { Component } from '../Component';

/**
 * @desc 广告加载成功的回调
 */
interface _AdFullscreenVideoOnLoad {
  (event: BaseEvent): void;
}

interface _AdFullscreenVideoOnErrorDetail {
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
interface _AdFullscreenVideoOnError {
  (event: CustomEvent<_AdFullscreenVideoOnErrorDetail>): void;
}

/**
 * @desc 广告关闭的回调
 */
interface _AdFullscreenVideoOnClose {
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
  onLoad: _AdFullscreenVideoOnLoad;
  /**
   * @desc 广告加载失败的回调
   */
  onError: _AdFullscreenVideoOnError;
  /**
   * @desc 广告关闭的回调
   */
  onClose: _AdFullscreenVideoOnClose;
}

/**
 * @desc 全屏视频广告
 */
type _AdFullscreenVideo = Component<Partial<_AdFullscreenVideoProps>>;

export {
  _AdFullscreenVideoOnLoad as AdFullscreenVideoOnLoad,
  _AdFullscreenVideoOnErrorDetail as AdFullscreenVideoOnErrorDetail,
  _AdFullscreenVideoOnError as AdFullscreenVideoOnError,
  _AdFullscreenVideoOnClose as AdFullscreenVideoOnClose,
  _AdFullscreenVideoProps as AdFullscreenVideoProps,
  _AdFullscreenVideo as AdFullscreenVideo,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 广告加载成功的回调
     */
    export interface AdFullscreenVideoOnLoad extends _AdFullscreenVideoOnLoad {}
    export interface AdFullscreenVideoOnErrorDetail extends _AdFullscreenVideoOnErrorDetail {}
    /**
     * @desc 广告加载失败的回调
     */
    export interface AdFullscreenVideoOnError extends _AdFullscreenVideoOnError {}
    /**
     * @desc 广告关闭的回调
     */
    export interface AdFullscreenVideoOnClose extends _AdFullscreenVideoOnClose {}
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

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 全屏视频广告
     */
    AdFullscreenVideo: _AdFullscreenVideo;
  }
}
