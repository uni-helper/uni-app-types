import { Component } from '../Component';
import { BaseEvent, TouchCanvasEvent } from '../events';

/**
 * @desc 类型
 */
type _CanvasType = '2d' | 'webgl';

/**
 * @desc 手指触摸动作开始时触发
 */
interface _CanvasOnTouchstart {
  (event: TouchCanvasEvent): void;
}

/**
 * @desc 手指触摸后移动时触发
 */
interface _CanvasOnTouchmove {
  (event: TouchCanvasEvent): void;
}

/**
 * @desc 手指触摸动作结束时触发
 */
interface _CanvasOnTouchend {
  (event: TouchCanvasEvent): void;
}

/**
 * @desc 手指触摸动作被打断时触发
 */
interface _CanvasOnTouchcancel {
  (event: TouchCanvasEvent): void;
}

/**
 * @desc 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
 */
interface _CanvasOnLongtap {
  (event: BaseEvent): void;
}

interface _CanvasOnErrorDetail {
  /**
   * @desc 错误信息
   */
  errMsg: string;
}

/**
 * @desc 发生错误时触发
 */
interface _CanvasOnError {
  (event: CustomEvent<_CanvasOnErrorDetail>): void;
}

/**
 * @desc 画布属性
 */
interface _CanvasProps {
  /**
   * @desc 类型
   */
  type: _CanvasType;
  /**
   * @desc 唯一标识符
   */
  canvasId: string;
  /**
   * @desc 当在 canvas 中移动时且有绑定手势事件时，是否禁止屏幕滚动以及下拉刷新
   * @desc 默认为 false
   */
  disableScroll: boolean;
  /**
   * @desc 是否启用高清处理
   * @desc 默认为 true
   */
  hidpi: boolean;
  /**
   * @desc 手指触摸动作开始时触发
   */
  onTouchstart: _CanvasOnTouchstart;
  /**
   * @desc 手指触摸后移动时触发
   */
  onTouchmove: _CanvasOnTouchmove;
  /**
   * @desc 手指触摸动作结束时触发
   */
  onTouchend: _CanvasOnTouchend;
  /**
   * @desc 手指触摸动作被打断时触发
   */
  onTouchcancel: _CanvasOnTouchcancel;
  /**
   * @desc 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
   */
  onLongtap: _CanvasOnLongtap;
  /**
   * @desc 发生错误时触发
   */
  onError: _CanvasOnError;
}

/**
 * @desc 画布
 */
type _Canvas = Component<Partial<_CanvasProps>>;

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
};

declare global {
  namespace UniHelper {
    /**
     * @desc 类型
     */
    export type CanvasType = _CanvasType;
    /**
     * @desc 手指触摸动作开始时触发
     */
    export interface CanvasOnTouchstart extends _CanvasOnTouchstart {}
    /**
     * @desc 手指触摸后移动时触发
     */
    export interface CanvasOnTouchmove extends _CanvasOnTouchmove {}
    /**
     * @desc 手指触摸动作结束时触发
     */
    export interface CanvasOnTouchend extends _CanvasOnTouchend {}
    /**
     * @desc 手指触摸动作被打断时触发
     */
    export interface CanvasOnTouchcancel extends _CanvasOnTouchcancel {}
    /**
     * @desc 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
     */
    export interface CanvasOnLongtap extends _CanvasOnLongtap {}
    export interface CanvasOnErrorDetail extends _CanvasOnErrorDetail {}
    /**
     * @desc 发生错误时触发
     */
    export interface CanvasOnError extends _CanvasOnError {}
    /**
     * @desc 画布属性
     */
    export interface CanvasProps extends _CanvasProps {}
    /**
     * @desc 画布
     */
    export type Canvas = _Canvas;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 画布
     */
    Canvas: _Canvas;
  }
}
