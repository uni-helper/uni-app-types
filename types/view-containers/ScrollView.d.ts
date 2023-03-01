import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * 设置自定义下拉刷新默认样式
 *
 * none 不使用默认样式
 */
type _ScrollViewRefresherDefaultStyle = 'black' | 'white' | 'none';

/** 滚动到顶部/左边时触发 */
interface _ScrollViewOnScrolltoupper {
  (event: BaseEvent, ...params: any[]): void;
}

/** 滚动到底部/右边时触发 */
interface _ScrollViewOnScrolltolower {
  (event: BaseEvent, ...params: any[]): void;
}

interface _ScrollViewOnScrollDetail {
  scrollLeft: number;
  scrollTop: number;
  scrollHeight: number;
  scrollWidth: number;
  deltaX: number;
  deltaY: number;
}

/** 滚动时触发 */
interface _ScrollViewOnScroll {
  (event: CustomEvent<_ScrollViewOnScrollDetail>, ...params: any[]): void;
}

/** 自定义下拉刷新控件被下拉时触发 */
interface _ScrollViewOnRefresherpulling {
  (event: BaseEvent, ...params: any[]): void;
}

/** 自定义下拉刷新被触发时触发 */
interface _ScrollViewOnRefresherrefresh {
  (event: BaseEvent, ...params: any[]): void;
}

/** 自定义下拉刷新被复位时触发 */
interface _ScrollViewOnRefresherrestore {
  (event: BaseEvent, ...params: any[]): void;
}

/** 自定义下拉刷新被中止时触发 */
interface _ScrollViewOnRefresherabort {
  (event: BaseEvent, ...params: any[]): void;
}

/** 可滚动视图区域属性 */
type _ScrollViewProps = Partial<{
  /**
   * 是否允许横向滚动
   *
   * 默认为 false
   */
  scrollX: boolean;
  /**
   * 是否允许纵向滚动
   *
   * 默认为 false
   */
  scrollY: boolean;
  /**
   * 距顶部/左边多远时触发 scrolltoupper 事件
   *
   * 单位为 px
   *
   * 默认为 50
   */
  upperThreshold: number | string;
  /**
   * 距底部/右边多远时触发 scrolltolower 事件
   *
   * 单位为 px
   *
   * 默认为 50
   */
  lowerThreshold: number | string;
  /**
   * 设置纵向滚动条位置
   *
   * 优先级低于 scroll-into-view
   */
  scrollTop: number | string;
  /**
   * 优先级低于 scroll-into-view
   *
   * @decs 设置横向滚动条位置
   */
  scrollLeft: number | string;
  /**
   * 值应为某子元素 id，id 不能以数字开头
   *
   * 设置哪个方向可滚动，则在哪个方向滚动到该元素
   *
   * 优先级高于 scroll-top / scroll-left
   */
  scrollIntoView: string;
  /**
   * 在设置滚动条位置时是否使用动画过渡
   *
   * 默认为 false
   */
  scrollWithAnimation: boolean;
  /**
   * 是否允许 iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部
   *
   * 只支持纵向
   *
   * 默认为 false
   */
  enableBackToTop: boolean;
  /**
   * 控制是否出现滚动条
   *
   * 默认为 false
   */
  showScrollbar: boolean;
  /**
   * 是否开启自定义下拉刷新
   *
   * 默认为 false
   */
  refresherEnabled: boolean;
  /**
   * 设置自定义下拉刷新阈值
   *
   * 默认为 45
   */
  refresherThreshold: number;
  /**
   * 设置自定义下拉刷新默认样式
   *
   * none 不使用默认样式
   *
   * 默认为 black
   */
  refresherDefaultStyle: _ScrollViewRefresherDefaultStyle;
  /**
   * 自定义下拉刷新区域背景颜色
   *
   * 默认为 #FFF
   */
  refresherBackground: string;
  /**
   * 设置当前下拉刷新状态
   *
   * true 下拉刷新已经被触发
   *
   * false 下拉刷新未被触发
   *
   * 默认为 false
   */
  refresherTriggered: boolean;
  /**
   * 是否启用 flexbox 布局
   *
   * 开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其子节点
   *
   * 默认为 false
   */
  enableFlex: boolean;
  /**
   * 是否开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效
   *
   * 安卓下可参考 CSS overflow-anchor 属性
   *
   * 默认为 false
   */
  scrollAnchoring: boolean;
  /** 滚动到顶部/左边时触发 */
  onScrolltoupper: _ScrollViewOnScrolltoupper;
  /** 滚动到底部/右边时触发 */
  onScrolltolower: _ScrollViewOnScrolltolower;
  /** 滚动时触发 */
  onScroll: _ScrollViewOnScroll;
  /** 自定义下拉刷新控件被下拉时触发 */
  onRefresherpulling: _ScrollViewOnRefresherpulling;
  /** 自定义下拉刷新被触发时触发 */
  onRefresherrefresh: _ScrollViewOnRefresherrefresh;
  /** 自定义下拉刷新被复位时触发 */
  onRefresherrestore: _ScrollViewOnRefresherrestore;
  /** 自定义下拉刷新被中止时触发 */
  onRefresherabort: _ScrollViewOnRefresherabort;
}>;

/**
 * 可滚动视图区域，用于区域滚动
 *
 * 在 webview 渲染的页面中，区域滚动的性能不及页面滚动
 *
 * 纵向滚动时，需要给 scroll-view 一个固定高度，通过 css 设置 height
 *
 * 横向滚动时，需要给 scroll-view 添加 white-space: nowrap; 样式
 *
 * scroll-view 是区域滚动，不会触发页面滚动，无法触发 pages.json 配置的下拉刷新、页面触底onReachBottomDistance、titleNView 的
 * transparent 透明渐变
 */
type _ScrollView = Component<_ScrollViewProps>;

/** 可滚动视图区域实例 */
type _ScrollViewInstance = InstanceType<_ScrollView>;

export {
  _ScrollViewRefresherDefaultStyle as ScrollViewRefresherDefaultStyle,
  _ScrollViewOnScrolltoupper as ScrollViewOnScrolltoupper,
  _ScrollViewOnScrolltolower as ScrollViewOnScrolltolower,
  _ScrollViewOnScrollDetail as ScrollViewOnScrollDetail,
  _ScrollViewOnScroll as ScrollViewOnScroll,
  _ScrollViewOnRefresherpulling as ScrollViewOnRefresherpulling,
  _ScrollViewOnRefresherrefresh as ScrollViewOnRefresherrefresh,
  _ScrollViewOnRefresherrestore as ScrollViewOnRefresherrestore,
  _ScrollViewOnRefresherabort as ScrollViewOnRefresherabort,
  _ScrollViewProps as ScrollViewProps,
  _ScrollView as ScrollView,
  _ScrollViewInstance as ScrollViewInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 设置自定义下拉刷新默认样式
     *
     * none 不使用默认样式
     */
    export type ScrollViewRefresherDefaultStyle = _ScrollViewRefresherDefaultStyle;
    /** 滚动到顶部/左边时触发 */
    export interface ScrollViewOnScrolltoupper extends _ScrollViewOnScrolltoupper {}
    /** 滚动到底部/右边时触发 */
    export interface ScrollViewOnScrolltolower extends _ScrollViewOnScrolltolower {}
    export interface ScrollViewOnScrollDetail extends _ScrollViewOnScrollDetail {}
    /** 滚动时触发 */
    export interface ScrollViewOnScroll extends _ScrollViewOnScroll {}
    /** 自定义下拉刷新控件被下拉时触发 */
    export interface ScrollViewOnRefresherpulling extends _ScrollViewOnRefresherpulling {}
    /** 自定义下拉刷新被触发时触发 */
    export interface ScrollViewOnRefresherrefresh extends _ScrollViewOnRefresherrefresh {}
    /** 自定义下拉刷新被复位时触发 */
    export interface ScrollViewOnRefresherrestore extends _ScrollViewOnRefresherrestore {}
    /** 自定义下拉刷新被中止时触发 */
    export interface ScrollViewOnRefresherabort extends _ScrollViewOnRefresherabort {}
    /** 可滚动视图区域属性 */
    export type ScrollViewProps = _ScrollViewProps;
    /**
     * 可滚动视图区域，用于区域滚动
     *
     * 在 webview 渲染的页面中，区域滚动的性能不及页面滚动
     *
     * 纵向滚动时，需要给 scroll-view 一个固定高度，通过 css 设置 height
     *
     * 横向滚动时，需要给 scroll-view 添加 white-space: nowrap; 样式
     *
     * scroll-view 是区域滚动，不会触发页面滚动，无法触发 pages.json 配置的下拉刷新、页面触底 onReachBottomDistance、titleNView 的
     * transparent 透明渐变
     */
    export type ScrollView = _ScrollView;
    /** 可滚动视图区域实例 */
    export type ScrollViewInstance = _ScrollViewInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 可滚动视图区域，用于区域滚动
     *
     * 在 webview 渲染的页面中，区域滚动的性能不及页面滚动
     *
     * 纵向滚动时，需要给 scroll-view 一个固定高度，通过 css 设置 height
     *
     * 横向滚动时，需要给 scroll-view 添加 white-space: nowrap; 样式
     *
     * scroll-view 是区域滚动，不会触发页面滚动，无法触发 pages.json 配置的下拉刷新、页面触底 onReachBottomDistance、titleNView 的
     * transparent 透明渐变
     */
    ScrollView: _ScrollView;
  }
}
