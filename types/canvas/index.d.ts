import { Component } from '../Component';
import { BaseEvent, TouchCanvasEvent } from '../events';

/**
 * @desc 类型
 */
type _CanvasType = '2d' | 'webgl';

/**
 * @desc 手指触摸动作开始时触发
 */
interface _CanvasTouchstart {
  (event: TouchCanvasEvent): void;
}

/**
 * @desc 手指触摸后移动时触发
 */
interface _CanvasTouchmove {
  (event: TouchCanvasEvent): void;
}

/**
 * @desc 手指触摸动作结束时触发
 */
interface _CanvasTouchend {
  (event: TouchCanvasEvent): void;
}

/**
 * @desc 手指触摸动作被打断时触发
 */
interface _CanvasTouchcancel {
  (event: TouchCanvasEvent): void;
}

/**
 * @desc 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
 */
interface _CanvasLongtap {
  (event: BaseEvent): void;
}

interface _CanvasErrorDetail {
  /**
   * @desc 错误信息
   */
  errMsg: string;
}

/**
 * @desc 发生错误时触发
 */
interface _CanvasError {
  (event: CustomEvent<_CanvasErrorDetail>): void;
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
  onTouchstart: _CanvasTouchstart;
  /**
   * @desc 手指触摸后移动时触发
   */
  onTouchmove: _CanvasTouchmove;
  /**
   * @desc 手指触摸动作结束时触发
   */
  onTouchend: _CanvasTouchend;
  /**
   * @desc 手指触摸动作被打断时触发
   */
  onTouchcancel: _CanvasTouchcancel;
  /**
   * @desc 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
   */
  onLongtap: _CanvasLongtap;
  /**
   * @desc 发生错误时触发
   */
  onError: _CanvasError;
}

/**
 * @desc 画布
 */
type _Canvas = Component<Partial<_CanvasProps>>;

export {
  _CanvasType as CanvasType,
  _CanvasTouchstart as CanvasTouchstart,
  _CanvasTouchmove as CanvasTouchmove,
  _CanvasTouchend as CanvasTouchend,
  _CanvasTouchcancel as CanvasTouchcancel,
  _CanvasLongtap as CanvasLongtap,
  _CanvasErrorDetail as CanvasErrorDetail,
  _CanvasError as CanvasError,
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
    export interface CanvasTouchstart extends _CanvasTouchstart {}
    /**
     * @desc 手指触摸后移动时触发
     */
    export interface CanvasTouchmove extends _CanvasTouchmove {}
    /**
     * @desc 手指触摸动作结束时触发
     */
    export interface CanvasTouchend extends _CanvasTouchend {}
    /**
     * @desc 手指触摸动作被打断时触发
     */
    export interface CanvasTouchcancel extends _CanvasTouchcancel {}
    /**
     * @desc 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
     */
    export interface CanvasLongtap extends _CanvasLongtap {}
    export interface CanvasErrorDetail extends _CanvasErrorDetail {}
    /**
     * @desc 发生错误时触发
     */
    export interface CanvasError extends _CanvasError {}
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
