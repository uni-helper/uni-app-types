import { Component } from '../Component';

/** 广告加载成功的回调 */
interface _AdFullscreenVideoOnLoad {
  (event: BaseEvent): void;
}

interface _AdFullscreenVideoOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

/** 广告加载失败的回调 */
interface _AdFullscreenVideoOnError {
  (event: CustomEvent<_AdFullscreenVideoOnErrorDetail>): void;
}

/** 广告关闭的回调 */
interface _AdFullscreenVideoOnClose {
  (event: BaseEvent): void;
}

/** 全屏视频广告属性 */
interface _AdFullscreenVideoProps {
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
  /** 广告加载成功的回调 */
  onLoad: _AdFullscreenVideoOnLoad;
  /** 广告加载失败的回调 */
  onError: _AdFullscreenVideoOnError;
  /** 广告关闭的回调 */
  onClose: _AdFullscreenVideoOnClose;
}

/** 全屏视频广告 */
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
    /** 广告加载成功的回调 */
    export interface AdFullscreenVideoOnLoad extends _AdFullscreenVideoOnLoad {}
    export interface AdFullscreenVideoOnErrorDetail extends _AdFullscreenVideoOnErrorDetail {}
    /** 广告加载失败的回调 */
    export interface AdFullscreenVideoOnError extends _AdFullscreenVideoOnError {}
    /** 广告关闭的回调 */
    export interface AdFullscreenVideoOnClose extends _AdFullscreenVideoOnClose {}
    /** 全屏视频广告属性 */
    export interface AdFullscreenVideoProps extends _AdFullscreenVideoProps {}
    /** 全屏视频广告 */
    export type AdFullscreenVideo = _AdFullscreenVideo;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 全屏视频广告 */
    AdFullscreenVideo: _AdFullscreenVideo;
  }
}
