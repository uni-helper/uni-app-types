import { AnyRecord, Component } from '../Component';

/** 广告加载成功的回调 */
interface _AdDrawOnLoad {
  (event: BaseEvent): void;
}

interface _AdDrawOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

/** 广告加载失败的回调 */
interface _AdDrawOnError {
  (event: CustomEvent<_AdDrawOnErrorDetail>): void;
}

/** 沉浸视频流广告属性 */
type _AdDrawProps = Partial<{
  /** APP 广告位 id */
  adpid: string;
  /** 广告数据 */
  data: AnyRecord;
  /** 广告加载成功的回调 */
  onLoad: AdDrawOnLoad;
  /** 广告加载失败的回调 */
  onError: AdDrawOnError;
}>;

/** 沉浸视频流广告 */
type _AdDraw = Component<_AdDrawProps>;

/** 沉浸视频流广告实例 */
type _AdDrawInstance = InstanceType<_AdDraw>;

export {
  _AdDrawOnLoad as AdDrawOnLoad,
  _AdDrawOnErrorDetail as AdDrawOnErrorDetail,
  _AdDrawOnError as AdDrawOnError,
  _AdDrawProps as AdDrawProps,
  _AdDraw as AdDraw,
  _AdDrawInstance as AdDrawInstance,
};

declare global {
  namespace UniHelper {
    /** 广告加载成功的回调 */
    export interface AdDrawOnLoad extends _AdDrawOnLoad {}
    export interface AdDrawOnErrorDetail extends _AdDrawOnErrorDetail {}
    /** 广告加载失败的回调 */
    export interface AdDrawOnError extends _AdDrawOnError {}
    /** 沉浸视频流广告属性 */
    export type AdDrawProps = _AdDrawProps;
    /** 沉浸视频流广告 */
    export type AdDraw = _AdDraw;
    /** 沉浸视频流广告实例 */
    export type AdDrawInstance = _AdDrawInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 沉浸视频流广告 */
    AdDraw: _AdDraw;
  }
}
