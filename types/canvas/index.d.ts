import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 类型
 */
export type CanvasType = '2d' | 'webgl';

export interface CanvasProps {
  /**
   * @desc 类型
   */
  type: CanvasType;
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
  onTouchstart: (event: BaseEvent) => void;
  /**
   * @desc 手指触摸后移动时触发
   */
  onTouchmove: (event: BaseEvent) => void;
  /**
   * @desc 手指触摸动作结束时触发
   */
  onTouchend: (event: BaseEvent) => void;
  /**
   * @desc 手指触摸动作被打断时触发
   */
  onTouchcancel: (event: BaseEvent) => void;
  /**
   * @desc 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
   */
  onLongtap: (event: BaseEvent) => void;
  /**
   * @desc 发生错误时触发
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
}

/**
 * @desc 画布
 */
export type Canvas = Component<Partial<CanvasProps>>;
