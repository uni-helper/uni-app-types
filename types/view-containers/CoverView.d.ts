import { Component } from '../Component';

export interface CoverViewProps {
  /**
   * @desc 设置顶部滚动偏移量
   * @desc 仅在设置了 overflow-y: scroll 成为滚动元素后生效
   */
  scrollTop: number | string;
}

/**
 * @desc 覆盖在原生组件之上的文本视图
 * @desc app-vue 和小程序框架，渲染引擎是 webview
 * @desc 为了优化体验，部分组件如 map、video、textarea、canvas 通过原生控件实现，原生组件层级高于前端组件
 * @desc 为了能正常覆盖原生组件，设计了 cover-view
 */
export type CoverView = Component<Partial<CoverViewProps>>;
