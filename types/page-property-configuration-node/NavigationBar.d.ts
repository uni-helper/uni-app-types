import { Component } from '../Component';

/**
 * @desc 副标题文字超出显示区域时处理方式
 * @desc clip 超出显示区域时内容裁剪
 * @desc ellipsis 超出显示区域时尾部显示省略标记
 */
type _NavigationBarSubtitleOverflow = 'clip' | 'ellipsis';

/**
 * @desc 标题对齐方式
 * @desc center 居中对齐
 * @desc left 左对齐
 * @desc auto 自动
 */
type _NavigationBarTitleAlign = 'center' | 'left' | 'auto';

/**
 * @desc 背景图片重复方式
 * @desc backgroundImage 设置为图片路径时有效
 * @desc repeat 背景图片在垂直方向和水平方向平铺
 * @desc repeat-x 背景图片在水平方向平铺，垂直方向拉伸
 * @desc repeat-y 背景图片在垂直方向平铺，水平方向拉伸
 * @desc 背景图片在垂直方向和水平方向都拉伸
 */
type _NavigationBarBackgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

/**
 * @desc 高斯模糊标题栏的风格
 * @desc dark 暗风格模糊，对应 iOS 原生 UIBlurEffectStyleDark 效果
 * @desc extralight 高亮风格模糊，对应 iOS 原生 UIBlurEffectStyleExtraLight 效果
 * @desc light 亮风格模糊，对应 iOS 原生 UIBlurEffectStyleLight 效果
 * @desc none 无模糊效果
 */
type _NavigationBarBlurEffect = 'none' | 'dark' | 'extralight' | 'light';

/**
 * @desc 导航条前景颜色值，包括按钮、标题、状态栏的颜色
 */
type _NavigationFrontColor = '#ffffff' | '#000000';

/**
 * @desc 改变导航栏颜色时的动画方式
 */
type _NavigationBarColorAnimationTimingFunc = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';

/**
 * @desc 页面导航条配置节点属性
 */
interface _NavigationBarProps {
  /**
   * @desc 导航条标题
   */
  title: string;
  /**
   * @desc 标题图标
   * @desc 仅支持本地文件路径、相对路径
   * @desc 固定宽高 34px
   * @desc 设置后标题将居左显示
   */
  titleIcon: string;
  /**
   * @desc 标题图标圆角
   * @desc 单位为 px
   */
  titleIconRadius: string;
  /**
   * @desc 副标题文字内容
   * @desc 设置副标题后将显示两行标题，副标题在主标题下方
   * @desc 设置副标题后将居左显示
   */
  subtitleText: string;
  /**
   * @desc 副标题文字字体大小
   * @desc 单位为 px
   * @desc 默认为 12px
   */
  subtitleSize: string;
  /**
   * @desc 副标题文字颜色
   * @desc 默认为主标题文字颜色
   */
  subtitleColor: string;
  /**
   * @desc 副标题文字超出显示区域时处理方式
   * @desc clip 超出显示区域时内容裁剪
   * @desc ellipsis 超出显示区域时尾部显示省略标记
   * @desc 默认为 ellipsis
   */
  subtitleOverflow: _NavigationBarSubtitleOverflow;
  /**
   * @desc 标题对齐方式
   * @desc center 居中对齐
   * @desc left 左对齐
   * @desc auto 自动
   * @desc 默认 Android left，iOS center
   */
  titleAlign: _NavigationBarTitleAlign;
  /**
   * @desc 背景图片
   * @desc 支持本地文件路径、相对路径、渐变色
   */
  backgroundImage: string;
  /**
   * @desc 背景图片重复方式
   * @desc backgroundImage 设置为图片路径时有效
   * @desc repeat 背景图片在垂直方向和水平方向平铺
   * @desc repeat-x 背景图片在水平方向平铺，垂直方向拉伸
   * @desc repeat-y 背景图片在垂直方向平铺，水平方向拉伸
   * @desc 背景图片在垂直方向和水平方向都拉伸
   * @desc 默认为 no-repeat
   */
  backgroundRepeat: _NavigationBarBackgroundRepeat;
  /**
   * @desc 高斯模糊标题栏的风格
   * @desc dark 暗风格模糊，对应 iOS 原生 UIBlurEffectStyleDark 效果
   * @desc extralight 高亮风格模糊，对应 iOS 原生 UIBlurEffectStyleExtraLight 效果
   * @desc light 亮风格模糊，对应 iOS 原生 UIBlurEffectStyleLight 效果
   * @desc none 无模糊效果
   * @desc 默认为 none
   */
  blurEffect: _NavigationBarBlurEffect;
  /**
   * @desc 是否在导航条显示 loading 加载提示
   * @desc 默认为 false
   */
  loading: boolean;
  /**
   * @desc 导航条前景颜色值，包括按钮、标题、状态栏的颜色
   */
  frontColor: _NavigationFrontColor;
  /**
   * @desc 导航条背景颜色值
   */
  backgroundColor: string;
  /**
   * @desc 改变导航栏颜色时的动画时长
   * @desc 默认为 0
   */
  colorAnimationDuration: number;
  /**
   * @desc 改变导航栏颜色时的动画方式
   */
  colorAnimationTimingFunc: _NavigationBarColorAnimationTimingFunc;
}

/**
 * @desc 页面导航条配置节点，用于指定导航栏的一些属性
 * @desc 只能是 page-meta 组件内的第一个节点，需要配合 page-meta 一同使用
 */
type _NavigationBar = Component<Partial<_NavigationBarProps>>;

export {
  _NavigationBarSubtitleOverflow as NavigationBarSubtitleOverflow,
  _NavigationBarTitleAlign as NavigationBarTitleAlign,
  _NavigationBarBackgroundRepeat as NavigationBarBackgroundRepeat,
  _NavigationBarBlurEffect as NavigationBarBlurEffect,
  _NavigationFrontColor as NavigationFrontColor,
  _NavigationBarColorAnimationTimingFunc as NavigationBarColorAnimationTimingFunc,
  _NavigationBarProps as NavigationBarProps,
  _NavigationBar as NavigationBar,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 副标题文字超出显示区域时处理方式
     * @desc clip 超出显示区域时内容裁剪
     * @desc ellipsis 超出显示区域时尾部显示省略标记
     */
    export type NavigationBarSubtitleOverflow = _NavigationBarSubtitleOverflow;
    /**
     * @desc 标题对齐方式
     * @desc center 居中对齐
     * @desc left 左对齐
     * @desc auto 自动
     */
    export type NavigationBarTitleAlign = _NavigationBarTitleAlign;
    /**
     * @desc 背景图片重复方式
     * @desc backgroundImage 设置为图片路径时有效
     * @desc repeat 背景图片在垂直方向和水平方向平铺
     * @desc repeat-x 背景图片在水平方向平铺，垂直方向拉伸
     * @desc repeat-y 背景图片在垂直方向平铺，水平方向拉伸
     * @desc 背景图片在垂直方向和水平方向都拉伸
     */
    export type NavigationBarBackgroundRepeat = _NavigationBarBackgroundRepeat;
    /**
     * @desc 高斯模糊标题栏的风格
     * @desc dark 暗风格模糊，对应 iOS 原生 UIBlurEffectStyleDark 效果
     * @desc extralight 高亮风格模糊，对应 iOS 原生 UIBlurEffectStyleExtraLight 效果
     * @desc light 亮风格模糊，对应 iOS 原生 UIBlurEffectStyleLight 效果
     * @desc none 无模糊效果
     */
    export type NavigationBarBlurEffect = _NavigationBarBlurEffect;
    /**
     * @desc 导航条前景颜色值，包括按钮、标题、状态栏的颜色
     */
    export type NavigationFrontColor = _NavigationFrontColor;
    /**
     * @desc 改变导航栏颜色时的动画方式
     */
    export type NavigationBarColorAnimationTimingFunc = _NavigationBarColorAnimationTimingFunc;
    /**
     * @desc 页面导航条配置节点属性
     */
    export interface NavigationBarProps extends _NavigationBarProps {}
    /**
     * @desc 页面导航条配置节点，用于指定导航栏的一些属性
     * @desc 只能是 page-meta 组件内的第一个节点，需要配合 page-meta 一同使用
     */
    export type NavigationBar = _NavigationBar;
  }
}
