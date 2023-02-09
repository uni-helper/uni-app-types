import { Component } from '../Component';
import { BaseEvent, TouchCanvasEvent } from '../events';

/** 类型 */
type _CanvasType = '2d' | 'webgl';

/** 手指触摸动作开始时触发 */
interface _CanvasOnTouchstart {
  (event: TouchCanvasEvent): void;
}

/** 手指触摸后移动时触发 */
interface _CanvasOnTouchmove {
  (event: TouchCanvasEvent): void;
}

/** 手指触摸动作结束时触发 */
interface _CanvasOnTouchend {
  (event: TouchCanvasEvent): void;
}

/** 手指触摸动作被打断时触发 */
interface _CanvasOnTouchcancel {
  (event: TouchCanvasEvent): void;
}

/** 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 */
interface _CanvasOnLongtap {
  (event: BaseEvent): void;
}

interface _CanvasOnErrorDetail {
  /** 错误信息 */
  errMsg: string;
}

/** 发生错误时触发 */
interface _CanvasOnError {
  (event: CustomEvent<_CanvasOnErrorDetail>): void;
}

/** 画布属性 */
type _CanvasProps = Partial<{
  /** 类型 */
  type: _CanvasType;
  /** 唯一标识符 */
  canvasId: string;
  /**
   * 当在 canvas 中移动时且有绑定手势事件时，是否禁止屏幕滚动以及下拉刷新
   *
   * 默认为 false
   */
  disableScroll: boolean;
  /**
   * 是否启用高清处理
   *
   * 默认为 true
   */
  hidpi: boolean;
  /** 手指触摸动作开始时触发 */
  onTouchstart: _CanvasOnTouchstart;
  /** 手指触摸后移动时触发 */
  onTouchmove: _CanvasOnTouchmove;
  /** 手指触摸动作结束时触发 */
  onTouchend: _CanvasOnTouchend;
  /** 手指触摸动作被打断时触发 */
  onTouchcancel: _CanvasOnTouchcancel;
  /** 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 */
  onLongtap: _CanvasOnLongtap;
  /** 发生错误时触发 */
  onError: _CanvasOnError;
}>;

/** 画布 */
type _Canvas = Component<_CanvasProps>;

/** 画布实例 */
type _CanvasInstance = InstanceType<_Canvas>;

export {
  _CanvasType as CanvasType,
  _CanvasOnTouchstart as CanvasOnTouchstart,
  _CanvasOnTouchmove as CanvasOnTouchmove,
  _CanvasOnTouchend as CanvasOnTouchend,
  _CanvasOnTouchcancel as CanvasOnTouchcancel,
  _CanvasOnLongtap as CanvasOnLongtap,
  _CanvasOnErrorDetail as CanvasOnErrorDetail,
  _CanvasOnError as CanvasOnError,
  _CanvasProps as CanvasProps,
  _Canvas as Canvas,
  _CanvasInstance as CanvasInstance,
};

declare global {
  namespace UniHelper {
    /** 类型 */
    export type CanvasType = _CanvasType;
    /** 手指触摸动作开始时触发 */
    export interface CanvasOnTouchstart extends _CanvasOnTouchstart {}
    /** 手指触摸后移动时触发 */
    export interface CanvasOnTouchmove extends _CanvasOnTouchmove {}
    /** 手指触摸动作结束时触发 */
    export interface CanvasOnTouchend extends _CanvasOnTouchend {}
    /** 手指触摸动作被打断时触发 */
    export interface CanvasOnTouchcancel extends _CanvasOnTouchcancel {}
    /** 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 */
    export interface CanvasOnLongtap extends _CanvasOnLongtap {}
    export interface CanvasOnErrorDetail extends _CanvasOnErrorDetail {}
    /** 发生错误时触发 */
    export interface CanvasOnError extends _CanvasOnError {}
    /** 画布属性 */
    export type CanvasProps = _CanvasProps;
    /** 画布 */
    export type Canvas = _Canvas;
    /** 画布实例 */
    export type CanvasInstance = _CanvasInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 画布 */
    Canvas: _Canvas;
  }
}
