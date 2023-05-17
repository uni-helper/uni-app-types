import { Component } from '../component';
import { BaseEvent } from '../events';

type _AdInteractiveOnLoadEvent = BaseEvent;

/** 广告加载成功的回调 */
interface _AdInteractiveOnLoad {
  (event: _AdInteractiveOnLoadEvent): void;
}

interface _AdInteractiveOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

type _AdInteractiveOnErrorEvent = CustomEvent<_AdInteractiveOnErrorDetail>;

/** 广告加载失败的回调 */
interface _AdInteractiveOnError {
  (event: _AdInteractiveOnErrorEvent): void;
}

/** 互动广告属性 */
type _AdInteractiveProps = Partial<{
  /** APP 广告位 id */
  adpid: string;
  /** 点击广告后打开的页面路径 */
  openPagePath: string;
  /** 广告加载成功的回调 */
  onLoad: _AdInteractiveOnLoad;
  /** 广告加载失败的回调 */
  onError: _AdInteractiveOnError;
}>;

/** 互动广告 */
type _AdInteractive = Component<_AdInteractiveProps>;

/** 互动广告实例 */
type _AdInteractiveInstance = InstanceType<_AdInteractive>;

export {
  _AdInteractiveOnLoadEvent as AdInteractiveOnLoadEvent,
  _AdInteractiveOnLoad as AdInteractiveOnLoad,
  _AdInteractiveOnErrorDetail as AdInteractiveOnErrorDetail,
  _AdInteractiveOnErrorEvent as AdInteractiveOnErrorEvent,
  _AdInteractiveOnError as AdInteractiveOnError,
  _AdInteractiveProps as AdInteractiveProps,
  _AdInteractive as AdInteractive,
  _AdInteractiveInstance as AdInteractiveInstance,
};

declare global {
  namespace UniHelper {
    export type AdInteractiveOnLoadEvent = _AdInteractiveOnLoadEvent;
    /** 广告加载成功的回调 */
    export interface AdInteractiveOnLoad extends _AdInteractiveOnLoad {}
    export interface AdInteractiveOnErrorDetail extends _AdInteractiveOnErrorDetail {}
    export type AdInteractiveOnErrorEvent = _AdInteractiveOnErrorEvent;
    /** 广告加载失败的回调 */
    export interface AdInteractiveOnError extends _AdInteractiveOnError {}
    /** 互动广告属性 */
    export type AdInteractiveProps = _AdInteractiveProps;
    /** 互动广告 */
    export type AdInteractive = _AdInteractive;
    /** 互动广告实例 */
    export type AdInteractiveInstance = _AdInteractiveInstance;
  }
}

// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 互动广告 */
    AdInteractive: _AdInteractive;
  }
}
