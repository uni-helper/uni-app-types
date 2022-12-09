import { Component } from '../Component';

/**
 * @desc 选项的排列方向
 * @desc vertical 纵向
 * @desc horizontal 横向
 */
type _CustomTabBarDirection = 'vertical' | 'horizontal';

interface _CustomTabBarOnTabItemTapDetail {
  /**
   * @desc 被点击 tabItem 的序号，从 0 开始
   */
  index: number;
  /**
   * @desc 被点击 tabItem 的页面路径
   */
  pagePath: string;
  /**
   * @desc 被点击 tabItem 的按钮文字
   */
  text: string;
}

/**
 * @desc 点击事件
 */
interface _CustomTabBarOnTabItemTap {
  (detail: _CustomTabBarOnTabItemTapDetail): void;
}

/**
 * @desc 自定义 tabBar 组件属性
 */
interface _CustomTabBarProps {
  /**
   * @desc 选项的排列方向
   * @desc vertical 纵向
   * @desc horizontal 横向
   * @desc 默认为 horizontal
   */
  direction: 'vertical' | 'horizontal';
  /**
   * @desc 是否显示 icon
   * @desc 默认为 false
   */
  showIcon: boolean;
  /**
   * @desc 选中的 tabBar 选项索引值
   * @desc 默认为 0
   */
  selected: number;
  /**
   * @desc 点击事件
   */
  onTabItemTap: _CustomTabBarOnTabItemTap;
}

/**
 * @desc 自定义 tabBar 组件
 */
type _CustomTabBar = Component<Partial<_CustomTabBarProps>>;

export {
  _CustomTabBarDirection as CustomTabBarDirection,
  _CustomTabBarOnTabItemTapDetail as CustomTabBarOnTabItemTapDetail,
  _CustomTabBarOnTabItemTap as CustomTabBarOnTabItemTap,
  _CustomTabBarProps as CustomTabBarProps,
  _CustomTabBar as CustomTabBar,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 选项的排列方向
     * @desc vertical 纵向
     * @desc horizontal 横向
     */
    export type CustomTabBarDirection = _CustomTabBarDirection;
    export interface CustomTabBarOnTabItemTapDetail extends _CustomTabBarOnTabItemTapDetail {}
    /**
     * @desc 点击事件
     */
    export interface CustomTabBarOnTabItemTap extends _CustomTabBarOnTabItemTap {}
    /**
     * @desc 自定义 tabBar 组件属性
     */
    export interface CustomTabBarProps extends _CustomTabBarProps {}
    /**
     * @desc 自定义 tabBar 组件
     */
    export type CustomTabBar = _CustomTabBar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 自定义 tabBar 组件
     */
    CustomTabBar: _CustomTabBar;
  }
}
