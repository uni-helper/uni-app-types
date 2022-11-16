import { Component } from '../Component';

/**
 * @desc 选项的排列方向
 * @desc vertical 纵向
 * @desc horizontal 横向
 */
export type CustomTabBarDirection = 'vertical' | 'horizontal';

export interface CustomTabBarProps {
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
  onTabItemTap: ({
    index,
    pagePath,
    text,
  }: {
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
  }) => void;
}

/**
 * @desc 自定义 tabBar 组件
 */
export type CustomTabBar = Component<Partial<CustomTabBarProps>>;
