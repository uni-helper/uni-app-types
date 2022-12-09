import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 下拉背景字体、loading 图的样式
 * @desc dark 暗色
 * @desc light 亮色
 */
type _PageMetaBackgroundTextStyle = 'dark' | 'light';

interface _PageMetaOnResizeDetail {
  windowWidth: number;
  windowHeight: number;
}

/**
 * @desc 页面尺寸变化时触发
 */
interface _PageMetaOnResize {
  (event: CustomEvent<_PageMetaOnResizeDetail>): void;
}

interface _PageMetaOnScrollDetail {
  scrollTop: number;
}

/**
 * @desc 页面滚动时触发
 */
interface _PageMetaOnScroll {
  (event: CustomEvent<_PageMetaOnScrollDetail>): void;
}

/**
 * @desc 通过改变 scroll-top 属性来使页面滚动，页面滚动结束后触发
 */
interface _PageMetaOnScrolldone {
  (event: BaseEvent): void;
}

/**
 * @desc 页面属性配置节点属性
 */
interface _PageMetaProps {
  /**
   * @desc 下拉背景字体、loading 图的样式
   * @desc dark 暗色
   * @desc light 亮色
   */
  backgroundTextStyle: _PageMetaBackgroundTextStyle;
  /**
   * @desc 窗口的背景色
   */
  backgroundColor: string;
  /**
   * @desc 顶部窗口的十六进制背景色，仅 iOS 支持
   */
  backgroundColorTop: string;
  /**
   * @desc 底部窗口的十六进制背景色，仅 iOS 支持
   */
  backgroundColorBottom: string;
  /**
   * @desc 滚动位置，在被设置时页面会滚动到对应位置
   * @desc 单位为 px / rpx
   */
  scrollTop: string;
  /**
   * @desc 滚动动画时长
   * @desc 默认为 300
   */
  scrollDuration: number;
  /**
   * @desc 页面根节点样式
   * @desc 页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点
   */
  pageStyle: string;
  /**
   * @desc 页面的根字体大小
   */
  rootFontSize: string;
  /**
   * @desc 是否开启自动下拉刷新
   * @desc 默认为 false
   */
  enablePullDownRefresh: boolean;
  /**
   * @desc 页面尺寸变化时触发
   */
  onResize: _PageMetaOnResize;
  /**
   * @desc 页面滚动时触发
   */
  onScroll: _PageMetaOnScroll;
  /**
   * @desc 通过改变 scroll-top 属性来使页面滚动，页面滚动结束后触发
   */
  onScrolldone: _PageMetaOnScrolldone;
}

/**
 * @desc 页面属性配置节点，用于指定页面的一些属性、监听页面事件
 * @desc 可部分替代 pages.json
 * @desc 只能是页面内的第一个节点
 */
type _PageMeta = Component<Partial<_PageMetaProps>>;

export {
  _PageMetaBackgroundTextStyle as PageMetaBackgroundTextStyle,
  _PageMetaOnResizeDetail as PageMetaOnResizeDetail,
  _PageMetaOnResize as PageMetaOnResize,
  _PageMetaOnScrollDetail as PageMetaOnScrollDetail,
  _PageMetaOnScroll as PageMetaOnScroll,
  _PageMetaOnScrolldone as PageMetaOnScrolldone,
  _PageMetaProps as PageMetaProps,
  _PageMeta as PageMeta,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 下拉背景字体、loading 图的样式
     * @desc dark 暗色
     * @desc light 亮色
     */
    export type PageMetaBackgroundTextStyle = _PageMetaBackgroundTextStyle;
    export interface PageMetaOnResizeDetail extends _PageMetaOnResizeDetail {}
    /**
     * @desc 页面尺寸变化时触发
     */
    export interface PageMetaOnResize extends _PageMetaOnResize {}
    export interface PageMetaOnScrollDetail extends _PageMetaOnScrollDetail {}
    /**
     * @desc 页面滚动时触发
     */
    export interface PageMetaOnScroll extends _PageMetaOnScroll {}
    /**
     * @desc 通过改变 scroll-top 属性来使页面滚动，页面滚动结束后触发
     */
    export interface PageMetaOnScrolldone extends _PageMetaOnScrolldone {}
    /**
     * @desc 页面属性配置节点属性
     */
    export interface PageMetaProps extends _PageMetaProps {}
    /**
     * @desc 页面属性配置节点，用于指定页面的一些属性、监听页面事件
     * @desc 可部分替代 pages.json
     * @desc 只能是页面内的第一个节点
     */
    export type PageMeta = _PageMeta;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 页面属性配置节点，用于指定页面的一些属性、监听页面事件
     * @desc 可部分替代 pages.json
     * @desc 只能是页面内的第一个节点
     */
    PageMeta: _PageMeta;
  }
}
