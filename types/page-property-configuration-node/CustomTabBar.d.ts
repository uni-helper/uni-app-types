import { Component } from '../Component';

/**
 * 选项的排列方向
 *
 * vertical 纵向
 *
 * horizontal 横向
 */
type _CustomTabBarDirection = 'vertical' | 'horizontal';

interface _CustomTabBarOnTabItemTapDetail {
  /** 被点击 tabItem 的序号，从 0 开始 */
  index: number;
  /** 被点击 tabItem 的页面路径 */
  pagePath: string;
  /** 被点击 tabItem 的按钮文字 */
  text: string;
}

/** 点击事件 */
interface _CustomTabBarOnTabItemTap {
  (detail: _CustomTabBarOnTabItemTapDetail): void;
}

/** 自定义 tabBar 组件属性 */
interface _CustomTabBarProps {
  /**
   * 选项的排列方向
   *
   * vertical 纵向
   *
   * horizontal 横向
   *
   * 默认为 horizontal
   */
  direction: _CustomTabBarDirection;
  /**
   * 是否显示 icon
   *
   * 默认为 false
   */
  showIcon: boolean;
  /**
   * 选中的 tabBar 选项索引值
   *
   * 默认为 0
   */
  selected: number;
  /** 点击事件 */
  onTabItemTap: _CustomTabBarOnTabItemTap;
}

/** 自定义 tabBar 组件 */
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
     * 选项的排列方向
     *
     * vertical 纵向
     *
     * horizontal 横向
     */
    export type CustomTabBarDirection = _CustomTabBarDirection;
    export interface CustomTabBarOnTabItemTapDetail extends _CustomTabBarOnTabItemTapDetail {}
    /** 点击事件 */
    export interface CustomTabBarOnTabItemTap extends _CustomTabBarOnTabItemTap {}
    /** 自定义 tabBar 组件属性 */
    export interface CustomTabBarProps extends _CustomTabBarProps {}
    /** 自定义 tabBar 组件 */
    export type CustomTabBar = _CustomTabBar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 自定义 tabBar 组件 */
    CustomTabBar: _CustomTabBar;
  }
}
