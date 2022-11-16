import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 下拉背景字体、loading 图的样式
 * @desc dark 暗色
 * @desc light 亮色
 */
export type PageMetaBackgroundTextStyle = 'dark' | 'light';

export interface PageMetaProps {
  /**
   * @desc 下拉背景字体、loading 图的样式
   * @desc dark 暗色
   * @desc light 亮色
   */
  backgroundTextStyle: PageMetaBackgroundTextStyle;
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
  onResize: (
    event: CustomEvent<{
      windowWidth: number;
      windowHeight: number;
    }>,
  ) => void;
  /**
   * @desc 页面滚动时触发
   */
  onScroll: (
    event: CustomEvent<{
      scrollTop: number;
    }>,
  ) => void;
  /**
   * @desc 通过改变 scroll-top 属性来使页面滚动，页面滚动结束后触发
   */
  onScrolldone: (event: BaseEvent) => void;
}

/**
 * @desc 页面属性配置节点，用于指定页面的一些属性、监听页面事件
 * @desc 可部分替代 pages.json
 * @desc 只能是页面内的第一个节点
 */
export type PageMeta = Component<Partial<PageMetaProps>>;
