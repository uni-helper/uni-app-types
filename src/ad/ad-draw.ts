import type { AnyRecord, Component } from '../component';
import type { BaseEvent, CustomEvent } from '../events';

type _AdDrawOnLoadEvent = BaseEvent;

/** 广告加载成功的回调 */
interface _AdDrawOnLoad {
  (event: _AdDrawOnLoadEvent): void;
}

interface _AdDrawOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

type _AdDrawOnErrorEvent = CustomEvent<_AdDrawOnErrorDetail>;

/** 广告加载失败的回调 */
interface _AdDrawOnError {
  (event: _AdDrawOnErrorEvent): void;
}

/** 沉浸视频流广告属性 */
type _AdDrawProps = Partial<{
  /** APP 广告位 id */
  adpid: string;
  /** 广告数据 */
  data: AnyRecord;
  /** 广告加载成功的回调 */
  onLoad: _AdDrawOnLoad;
  /** 广告加载失败的回调 */
  onError: _AdDrawOnError;
}>;

/** 沉浸视频流广告 */
type _AdDraw = Component<_AdDrawProps>;

/** 沉浸视频流广告实例 */
type _AdDrawInstance = InstanceType<_AdDraw>;

export {
  _AdDrawOnLoadEvent as AdDrawOnLoadEvent,
  _AdDrawOnLoad as AdDrawOnLoad,
  _AdDrawOnErrorDetail as AdDrawOnErrorDetail,
  _AdDrawOnErrorEvent as AdDrawOnErrorEvent,
  _AdDrawOnError as AdDrawOnError,
  _AdDrawProps as AdDrawProps,
  _AdDraw as AdDraw,
  _AdDrawInstance as AdDrawInstance,
};

declare global {
  namespace UniHelper {
    export type AdDrawOnLoadEvent = _AdDrawOnLoadEvent;
    /** 广告加载成功的回调 */
    export interface AdDrawOnLoad extends _AdDrawOnLoad {}
    export interface AdDrawOnErrorDetail extends _AdDrawOnErrorDetail {}
    export type AdDrawOnErrorEvent = _AdDrawOnErrorEvent;
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
