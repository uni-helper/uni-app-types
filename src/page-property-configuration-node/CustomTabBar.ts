import { Component } from '../Component';

/**
 * 选项的排列方向
 *
 * vertical 纵向
 *
 * horizontal 横向
 */
type _CustomTabBarDirection = 'vertical' | 'horizontal';

interface _CustomTabBarOnOnTabItemTapDetail {
  /** 被点击 tabItem 的序号，从 0 开始 */
  index: number;
  /** 被点击 tabItem 的页面路径 */
  pagePath: string;
  /** 被点击 tabItem 的按钮文字 */
  text: string;
}

/** 点击事件 */
interface _CustomTabBarOnOnTabItemTap {
  (detail: _CustomTabBarOnOnTabItemTapDetail): void;
}

/** 自定义 tabBar 组件属性 */
type _CustomTabBarProps = Partial<{
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
  onOnTabItemTap: _CustomTabBarOnOnTabItemTap;
}>;

/** 自定义 tabBar 组件 */
type _CustomTabBar = Component<_CustomTabBarProps>;

/** 自定义 tabBar 组件实例 */
type _CustomTabBarInstance = InstanceType<_CustomTabBar>;

export {
  _CustomTabBarDirection as CustomTabBarDirection,
  _CustomTabBarOnOnTabItemTapDetail as CustomTabBarOnOnTabItemTapDetail,
  _CustomTabBarOnOnTabItemTap as CustomTabBarOnOnTabItemTap,
  _CustomTabBarProps as CustomTabBarProps,
  _CustomTabBar as CustomTabBar,
  _CustomTabBarInstance as CustomTabBarInstance,
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
    export interface CustomTabBarOnOnTabItemTapDetail extends _CustomTabBarOnOnTabItemTapDetail {}
    /** 点击事件 */
    export interface CustomTabBarOnOnTabItemTap extends _CustomTabBarOnOnTabItemTap {}
    /** 自定义 tabBar 组件属性 */
    export type CustomTabBarProps = _CustomTabBarProps;
    /** 自定义 tabBar 组件 */
    export type CustomTabBar = _CustomTabBar;
    /** 自定义 tabBar 组件实例 */
    export type CustomTabBarInstance = _CustomTabBarInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 自定义 tabBar 组件 */
    CustomTabBar: _CustomTabBar;
  }
}
