import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 导致变更的原因
 * @desc autoplay 自动播放
 * @desc touch 用户滑动
 * @desc 空字符串 其它原因
 */
type _SwiperSource = 'autoplay' | 'touch' | '';

/**
 * @desc swiper 切换动画类型
 */
type _SwiperEasingFunction =
  | 'default'
  | 'linear'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic';

interface _SwiperChangeDetail {
  /**
   * @desc 当前所在滑块的下标
   */
  current: number;
  /**
   * @desc 导致变更的原因
   * @desc autoplay 自动播放
   * @desc touch 用户滑动
   * @desc 空字符串 其它原因
   */
  source: _SwiperSource;
}

/**
 * @desc current 改变时触发
 */
interface _SwiperChange {
  (event: CustomEvent<_SwiperChangeDetail>): void;
}

interface _SwiperTransitionDetail {
  dx?: number;
  dy?: number;
}

/**
 * @desc swiper-item 位置改变时触发
 */
interface _SwiperTransition {
  (event: CustomEvent<_SwiperTransitionDetail>): void;
}

interface _SwiperAnimationfinishDetail {
  /**
   * @desc 当前所在滑块的下标
   */
  current: number;
  /**
   * @desc 导致变更的原因
   * @desc autoplay 自动播放
   * @desc touch 用户滑动
   * @desc 空字符串其它原因
   */
  source: _SwiperSource;
}

/**
 * @desc 动画结束时触发
 */
interface _SwiperAnimationfinish {
  (event: CustomEvent<_SwiperAnimationfinishDetail>): void;
}

/**
 * @desc 滑块视图容器属性
 */
interface _SwiperProps {
  /**
   * @desc 是否显示面板指示点
   * @desc 默认为 false
   */
  indicatorDots: boolean;
  /**
   * @desc 指示点颜色
   * @desc 默认为 rgba(0, 0, 0, 0.3)
   */
  indicatorColor: string;
  /**
   * @desc 当前选中的指示点颜色
   * @desc 默认为 #000000
   */
  indicatorActiveColor: string;
  /**
   * @desc swiper-item 可见时的 class
   */
  activeClass: string;
  /**
   * @desc acceleration 设置为 true 时且处于滑动过程中，中间若干屏处于可见时的 class
   */
  changingClass: boolean;
  /**
   * @desc 是否自动切换
   * @desc 默认为 false
   */
  autoplay: boolean;
  /**
   * @desc 当前所在滑块的下标
   * @desc 默认为 0
   */
  current: number;
  /**
   * @desc 当前所在滑块的 item-id ，不能与 current 被同时指定
   */
  currentItemId: string;
  /**
   * @desc 自动切换时间间隔
   * @desc 默认为 5000
   */
  interval: number;
  /**
   * @desc 滑动动画时长
   * @desc 默认为 500
   */
  duration: number;
  /**
   * @desc 是否采用衔接滑动，即播放到末尾后重新回到开头
   * @desc 默认为 false
   */
  circular: boolean;
  /**
   * @desc 滑动方向是否为纵向
   * @desc 默认为 false
   */
  vertical: boolean;
  /**
   * @desc 前边距，可用于露出前一项的一小部分
   * @desc 接受 px 和 rpx 值
   * @desc 默认为 0px
   */
  previousMargin: string;
  /**
   * @desc 后边距，可用于露出后一项的一小部分
   * @desc 接受 px 和 rpx 值
   * @desc 默认为 0px
   */
  nextMargin: string;
  /**
   * @desc 当开启时，会根据滑动速度，连续滑动多屏
   * @desc 默认 false
   */
  acceleration: boolean;
  /**
   * @desc 是否禁用代码变动触发 swiper 切换时使用动画
   * @desc 默认为 false
   */
  disableProgrammaticAnimation: boolean;
  /**
   * @desc 同时显示的滑块数量
   * @desc 默认为 1
   */
  displayMultipleItems: number;
  /**
   * @desc 是否跳过未显示的滑块布局
   * @desc 设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
   * @desc 默认为 false
   */
  skipHiddenItemLayout: boolean;
  /**
   * @desc 是否禁止用户 touch 操作
   * @desc 默认为 false
   */
  disableTouch: boolean;
  /**
   * @desc 是否监听用户的触摸事件
   * @desc 只在初始化时有效，不支持动态修改
   * @desc 默认为 true
   */
  touchable: boolean;
  /**
   * @desc 指定 swiper 切换缓动动画类型
   * @desc 默认为 default
   */
  easingFunction: _SwiperEasingFunction;
  /**
   * @desc current 改变时触发
   */
  onChange: _SwiperChange;
  /**
   * @desc swiper-item 位置改变时触发
   */
  onTransition: _SwiperTransition;
  /**
   * @desc 动画结束时触发
   */
  onAnimationfinish: _SwiperAnimationfinish;
}

/**
 * @desc 滑块视图容器，一般用于左右滑动或上下滑动，比如 banner 轮播图
 * @desc 注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换
 * @desc swiper 下的每个 swiper-item 是一个滑动切换区域，不能停留在 2 个滑动区域之间
 */
type _Swiper = Component<Partial<_SwiperProps>>;

export {
  _SwiperSource as SwiperSource,
  _SwiperEasingFunction as SwiperEasingFunction,
  _SwiperChangeDetail as SwiperChangeDetail,
  _SwiperChange as SwiperChange,
  _SwiperTransitionDetail as SwiperTransitionDetail,
  _SwiperTransition as SwiperTransition,
  _SwiperAnimationfinishDetail as SwiperAnimationfinishDetail,
  _SwiperAnimationfinish as SwiperAnimationfinish,
  _SwiperProps as SwiperProps,
  _Swiper as Swiper,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 导致变更的原因
     * @desc autoplay 自动播放
     * @desc touch 用户滑动
     * @desc 空字符串 其它原因
     */
    export type SwiperSource = _SwiperSource;
    /**
     * @desc swiper 切换动画类型
     */
    export type SwiperEasingFunction = _SwiperEasingFunction;
    export interface SwiperChangeDetail extends _SwiperChangeDetail {}
    /**
     * @desc current 改变时触发
     */
    export interface SwiperChange extends _SwiperChange {}
    export interface SwiperTransitionDetail extends _SwiperTransitionDetail {}
    /**
     * @desc swiper-item 位置改变时触发
     */
    export interface SwiperTransition extends _SwiperTransition {}
    export interface SwiperAnimationfinishDetail extends _SwiperAnimationfinishDetail {}
    /**
     * @desc 动画结束时触发
     */
    export interface SwiperAnimationfinish extends _SwiperAnimationfinish {}
    /**
     * @desc 滑块视图容器属性
     */
    export interface SwiperProps extends _SwiperProps {}
    /**
     * @desc 滑块视图容器，一般用于左右滑动或上下滑动，比如 banner 轮播图
     * @desc 注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换
     * @desc swiper 下的每个 swiper-item 是一个滑动切换区域，不能停留在 2 个滑动区域之间
     */
    export interface Swiper extends _Swiper {}
  }
}
