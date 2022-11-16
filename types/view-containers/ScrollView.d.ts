import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

export interface ScrollViewProps {
  /**
   * @desc 是否允许横向滚动
   * @desc 默认为 false
   */
  scrollX: boolean;
  /**
   * @desc 是否允许纵向滚动
   * @desc 默认为 false
   */
  scrollY: boolean;
  /**
   * @desc 距顶部/左边多远时触发 scrolltoupper 事件
   * @desc 单位为 px
   * @desc 默认为 50
   */
  upperThreshold: number | string;
  /**
   * @desc 距底部/右边多远时触发 scrolltolower 事件
   * @desc 单位为 px
   * @desc 默认为 50
   */
  lowerThreshold: number | string;
  /**
   * @desc 设置纵向滚动条位置
   * @desc 优先级低于 scroll-into-view
   */
  scrollTop: number | string;
  /**
   * @decs 设置横向滚动条位置
   * @desc 优先级低于 scroll-into-view
   */
  scrollLeft: number | string;
  /**
   * @desc 值应为某子元素 id，id 不能以数字开头
   * @desc 设置哪个方向可滚动，则在哪个方向滚动到该元素
   * @desc 优先级高于 scroll-top / scroll-left
   */
  scrollIntoView: string;
  /**
   * @desc 在设置滚动条位置时是否使用动画过渡
   * @desc 默认为 false
   */
  scrollWithAnimation: boolean;
  /**
   * @desc 是否允许 iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部
   * @desc 只支持纵向
   * @desc 默认为 false
   */
  enableBackToTop: boolean;
  /**
   * @desc 控制是否出现滚动条
   * @desc 默认为 false
   */
  showScrollbar: boolean;
  /**
   * @desc 是否开启自定义下拉刷新
   * @desc 默认为 false
   */
  refresherEnabled: boolean;
  /**
   * @desc 设置自定义下拉刷新阈值
   * @desc 默认为 45
   */
  refresherThreshold: number;
  /**
   * @desc 设置自定义下拉刷新默认样式
   * @desc none 不使用默认样式
   * @desc 默认为 black
   */
  refresherDefaultStyle: 'black' | 'white' | 'none';
  /**
   * @desc 自定义下拉刷新区域背景颜色
   * @desc 默认为 #FFF
   */
  refresherBackground: string;
  /**
   * @desc 设置当前下拉刷新状态
   * @desc true 下拉刷新已经被触发
   * @desc false 下拉刷新未被触发
   * @desc 默认为 false
   */
  refresherTriggered: boolean;
  /**
   * @desc 是否启用 flexbox 布局
   * @desc 开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其子节点
   * @desc 默认为 false
   */
  enableFlex: boolean;
  /**
   * @desc 是否开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效
   * @desc 安卓下可参考 CSS overflow-anchor 属性
   * @desc 默认为 false
   */
  scrollAnchoring: boolean;
  /**
   * @desc 滚动到顶部/左边时触发
   */
  onScrolltoupper: (event: BaseEvent) => void;
  /**
   * @desc 滚动到底部/右边时触发
   */
  onScrolltolower: (event: BaseEvent) => void;
  /**
   * @desc 滚动时触发
   */
  onScroll: (
    event: CustomEvent<{
      scrollLeft: number;
      scrollTop: number;
      scrollHeight: number;
      scrollWidth: number;
      deltaX: number;
      deltaY: number;
    }>,
  ) => void;
  /**
   * @desc 自定义下拉刷新控件被下拉时触发
   */
  onRefresherpulling: (event: BaseEvent) => void;
  /**
   * @desc 自定义下拉刷新被触发时触发
   */
  onRefresherrefresh: (event: BaseEvent) => void;
  /**
   * @desc 自定义下拉刷新被复位时触发
   */
  onRefresherrestore: (event: BaseEvent) => void;
  /**
   * @desc 自定义下拉刷新被中止时触发
   */
  onRefresherabort: (event: BaseEvent) => void;
}

/**
 * @desc 可滚动视图区域，用于区域滚动
 * @desc 在 webview 渲染的页面中，区域滚动的性能不及页面滚动
 * @desc 纵向滚动时，需要给 scroll-view 一个固定高度，通过 css 设置 height
 * @desc 横向滚动时，需要给 scroll-view 添加 white-space: nowrap; 样式
 * @desc scroll-view 是区域滚动，不会触发页面滚动，无法触发 pages.json 配置的下拉刷新、页面触底onReachBottomDistance、titleNView 的 transparent 透明渐变
 */
export type ScrollView = Component<Partial<ScrollViewProps>>;
