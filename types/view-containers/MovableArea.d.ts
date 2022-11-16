import { Component } from '../Component';

export interface MovableAreaProps {
  /**
   * @desc 当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area
   * @desc 默认为 false
   */
  scaleArea: boolean;
}

/**
 * @desc 可拖动区域
 * @desc movable-area 指代可拖动的范围，在其中内嵌 movable-view 组件用于指示可拖动的区域
 * @desc 即手指/鼠标按住 movable-view 拖动或双指缩放，但拖不出 movable-area 规定的范围
 * @desc 也可以不拖动，而使用代码来触发 movable-view 在 movable-area 里的移动缩放
 * @desc 默认宽高为 10px
 */
export type MovableArea = Component<Partial<MovableAreaProps>>;
