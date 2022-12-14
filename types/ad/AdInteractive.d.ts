import { Component } from '../Component';

/** 广告加载成功的回调 */
interface _AdInteractiveOnLoad {
  (event: BaseEvent): void;
}

interface _AdInteractiveOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

/** 广告加载失败的回调 */
interface _AdInteractiveOnError {
  (event: CustomEvent<_AdInteractiveOnErrorDetail>): void;
}

/** 互动广告属性 */
interface _AdInteractiveProps {
  /** APP 广告位 id */
  adpid: string;
  /** 点击广告后打开的页面路径 */
  openPagePath: string;
  /** 广告加载成功的回调 */
  onLoad: _AdInteractiveOnLoad;
  /** 广告加载失败的回调 */
  onError: _AdInteractiveOnError;
}

/** 互动广告 */
type _AdInteractive = Component<Partial<_AdInteractiveProps>>;

export {
  _AdInteractiveOnLoad as AdInteractiveOnLoad,
  _AdInteractiveOnErrorDetail as AdInteractiveOnErrorDetail,
  _AdInteractiveOnError as AdInteractiveOnError,
  _AdInteractiveProps as AdInteractiveProps,
  _AdInteractive as AdInteractive,
};

declare global {
  namespace UniHelper {
    /** 广告加载成功的回调 */
    export interface AdInteractiveOnLoad extends _AdInteractiveOnLoad {}
    export interface AdInteractiveOnErrorDetail extends _AdInteractiveOnErrorDetail {}
    /** 广告加载失败的回调 */
    export interface AdInteractiveOnError extends _AdInteractiveOnError {}
    /** 互动广告属性 */
    export interface AdInteractiveProps extends _AdInteractiveProps {}
    /** 互动广告 */
    export type AdInteractive = _AdInteractive;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 互动广告 */
    AdInteractive: _AdInteractive;
  }
}
