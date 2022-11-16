import { Component } from '../Component';

/**
 * @desc 屏幕方向
 * @desc landscape 横向
 * @desc portrait 纵向
 */
export type MatchMediaOrientation = 'landscape' | 'portrait';

export interface MatchMediaProps {
  /**
   * @desc 页面最小宽度
   * @desc 单位为 px
   */
  minWidth: number;
  /**
   * @desc 页面最大宽度
   * @desc 单位为 px
   */
  maxWidth: number;
  /**
   * @desc 页面宽度
   * @desc 单位为 px
   */
  width: number;
  /**
   * @desc 页面最小高度
   * @desc 单位为 px
   */
  minHeight: number;
  /**
   * @desc 页面最大高度
   * @desc 单位为 px
   */
  maxHeight: number;
  /**
   * @desc 页面高度
   * @desc 单位为 px
   */
  height: number;
  /**
   * @desc 屏幕方向
   * @desc landscape 横向
   * @desc portrait 纵向
   */
  orientation: MatchMediaOrientation;
}

/**
 * @desc media query 匹配检测节点
 * @desc 类似于网页开发中使用媒体查询来适配大屏小屏，这是一个可适配不同屏幕的基本视图组件
 * @desc 可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示
 */
export type MatchMedia = Component<Partial<MatchMediaProps>>;
