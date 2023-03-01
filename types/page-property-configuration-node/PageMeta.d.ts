import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * 下拉背景字体、loading 图的样式
 *
 * dark 暗色
 *
 * light 亮色
 */
type _PageMetaBackgroundTextStyle = 'dark' | 'light';

interface _PageMetaOnResizeDetail {
  windowWidth: number;
  windowHeight: number;
}

/** 页面尺寸变化时触发 */
interface _PageMetaOnResize {
  (event: CustomEvent<_PageMetaOnResizeDetail>, ...params: any[]): void;
}

interface _PageMetaOnScrollDetail {
  scrollTop: number;
}

/** 页面滚动时触发 */
interface _PageMetaOnScroll {
  (event: CustomEvent<_PageMetaOnScrollDetail>, ...params: any[]): void;
}

/** 通过改变 scroll-top 属性来使页面滚动，页面滚动结束后触发 */
interface _PageMetaOnScrolldone {
  (event: BaseEvent, ...params: any[]): void;
}

/** 页面属性配置节点属性 */
type _PageMetaProps = Partial<{
  /**
   * 下拉背景字体、loading 图的样式
   *
   * dark 暗色
   *
   * light 亮色
   */
  backgroundTextStyle: _PageMetaBackgroundTextStyle;
  /** 窗口的背景色 */
  backgroundColor: string;
  /** 顶部窗口的十六进制背景色，仅 iOS 支持 */
  backgroundColorTop: string;
  /** 底部窗口的十六进制背景色，仅 iOS 支持 */
  backgroundColorBottom: string;
  /**
   * 滚动位置，在被设置时页面会滚动到对应位置
   *
   * 单位为 px / rpx
   */
  scrollTop: string;
  /**
   * 滚动动画时长
   *
   * 默认为 300
   */
  scrollDuration: number;
  /**
   * 页面根节点样式
   *
   * 页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点
   */
  pageStyle: string;
  /** 页面的根字体大小 */
  rootFontSize: string;
  /**
   * 是否开启自动下拉刷新
   *
   * 默认为 false
   */
  enablePullDownRefresh: boolean;
  /** 页面尺寸变化时触发 */
  onResize: _PageMetaOnResize;
  /** 页面滚动时触发 */
  onScroll: _PageMetaOnScroll;
  /** 通过改变 scroll-top 属性来使页面滚动，页面滚动结束后触发 */
  onScrolldone: _PageMetaOnScrolldone;
}>;

/**
 * 页面属性配置节点，用于指定页面的一些属性、监听页面事件
 *
 * 可部分替代 pages.json
 *
 * 只能是页面内的第一个节点
 */
type _PageMeta = Component<_PageMetaProps>;

/** 页面属性配置节点实例 */
type _PageMetaInstance = InstanceType<_PageMeta>;

export {
  _PageMetaBackgroundTextStyle as PageMetaBackgroundTextStyle,
  _PageMetaOnResizeDetail as PageMetaOnResizeDetail,
  _PageMetaOnResize as PageMetaOnResize,
  _PageMetaOnScrollDetail as PageMetaOnScrollDetail,
  _PageMetaOnScroll as PageMetaOnScroll,
  _PageMetaOnScrolldone as PageMetaOnScrolldone,
  _PageMetaProps as PageMetaProps,
  _PageMeta as PageMeta,
  _PageMetaInstance as PageMetaInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 下拉背景字体、loading 图的样式
     *
     * dark 暗色
     *
     * light 亮色
     */
    export type PageMetaBackgroundTextStyle = _PageMetaBackgroundTextStyle;
    export interface PageMetaOnResizeDetail extends _PageMetaOnResizeDetail {}
    /** 页面尺寸变化时触发 */
    export interface PageMetaOnResize extends _PageMetaOnResize {}
    export interface PageMetaOnScrollDetail extends _PageMetaOnScrollDetail {}
    /** 页面滚动时触发 */
    export interface PageMetaOnScroll extends _PageMetaOnScroll {}
    /** 通过改变 scroll-top 属性来使页面滚动，页面滚动结束后触发 */
    export interface PageMetaOnScrolldone extends _PageMetaOnScrolldone {}
    /** 页面属性配置节点属性 */
    export type PageMetaProps = _PageMetaProps;
    /**
     * 页面属性配置节点，用于指定页面的一些属性、监听页面事件
     *
     * 可部分替代 pages.json
     *
     * 只能是页面内的第一个节点
     */
    export type PageMeta = _PageMeta;
    /** 页面属性配置节点实例 */
    export type PageMetaInstance = _PageMetaInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 页面属性配置节点，用于指定页面的一些属性、监听页面事件
     *
     * 可部分替代 pages.json
     *
     * 只能是页面内的第一个节点
     */
    PageMeta: _PageMeta;
  }
}
