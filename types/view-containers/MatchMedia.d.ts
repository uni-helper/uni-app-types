import { Component } from '../Component';

/**
 * 屏幕方向
 *
 * Landscape 横向
 *
 * Portrait 纵向
 */
type _MatchMediaOrientation = 'landscape' | 'portrait';

/** Media query 匹配检测节点属性 */
interface _MatchMediaProps {
  /**
   * 页面最小宽度
   *
   * 单位为 px
   */
  minWidth: number;
  /**
   * 页面最大宽度
   *
   * 单位为 px
   */
  maxWidth: number;
  /**
   * 页面宽度
   *
   * 单位为 px
   */
  width: number;
  /**
   * 页面最小高度
   *
   * 单位为 px
   */
  minHeight: number;
  /**
   * 页面最大高度
   *
   * 单位为 px
   */
  maxHeight: number;
  /**
   * 页面高度
   *
   * 单位为 px
   */
  height: number;
  /**
   * 屏幕方向
   *
   * Landscape 横向
   *
   * Portrait 纵向
   */
  orientation: _MatchMediaOrientation;
}

/**
 * Media query 匹配检测节点
 *
 * 类似于网页开发中使用媒体查询来适配大屏小屏，这是一个可适配不同屏幕的基本视图组件
 *
 * 可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示
 */
type _MatchMedia = Component<Partial<_MatchMediaProps>>;

export {
  _MatchMediaOrientation as MatchMediaOrientation,
  _MatchMediaProps as MatchMediaProps,
  _MatchMedia as MatchMedia,
};

declare global {
  namespace UniHelper {
    /**
     * 屏幕方向
     *
     * Landscape 横向
     *
     * Portrait 纵向
     */
    export type MatchMediaOrientation = _MatchMediaOrientation;
    /** Media query 匹配检测节点属性 */
    export interface MatchMediaProps extends _MatchMediaProps {}
    /**
     * Media query 匹配检测节点
     *
     * 类似于网页开发中使用媒体查询来适配大屏小屏，这是一个可适配不同屏幕的基本视图组件
     *
     * 可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示
     */
    export type MatchMedia = _MatchMedia;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * Media query 匹配检测节点
     *
     * 类似于网页开发中使用媒体查询来适配大屏小屏，这是一个可适配不同屏幕的基本视图组件
     *
     * 可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示
     */
    MatchMedia: _MatchMedia;
  }
}
