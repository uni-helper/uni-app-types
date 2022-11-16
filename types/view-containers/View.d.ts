import { Component } from '../Component';

export interface ViewProps {
  /**
   * @desc 指定按下去的样式类
   * @desc 当 hover-class="none" 时，没有点击态效果
   * @desc 默认为 none
   */
  hoverClass: string;
  /**
   * @desc 指定是否阻止本节点的祖先节点出现点击态
   * @desc 默认为 false
   */
  hoverStopPropagation: boolean;
  /**
   * @desc 按住后多久出现点击态
   * @desc 单位为毫秒
   * @desc 默认为 50
   */
  hoverStartTime: number;
  /**
   * @desc 手指松开后点击态保留时间
   * @desc 单位为毫秒
   * @desc 默认为 400
   */
  hoverStayTime: number;
}

/**
 * @desc 视图容器，和 div 类似，用于包裹各种元素内容
 * @desc 包裹文字建议使用 text
 * @desc 如果使用 div，会编译成 view
 */
export type View = Component<Partial<ViewProps>>;
