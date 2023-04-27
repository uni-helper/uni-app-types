import { Component, AnyRecord } from '../Component';

/**
 * 跳转方式
 *
 * navigate 对应 navigateTo
 *
 * redirect 对应 redirectTo
 *
 * switchTab 对应 switchTab
 *
 * reLaunch 对应 reLaunch
 *
 * navigateBack 对应 navigateBack
 *
 * exit 退出小程序，target="miniProgram"时生效
 */
type _NavigatorOpenType =
  | 'navigate'
  | 'redirect'
  | 'switchTab'
  | 'reLaunch'
  | 'navigateBack'
  | 'exit';

/**
 * 窗口的显示/关闭的动画类型
 *
 * open-type="navigateTo" 或 open-type="navigateBack" 时有效
 *
 * 默认为 pop-in 显示、pop-out 关闭
 */
type _NavigatorAnimationType =
  | 'slide-in-right'
  | 'slide-out-right'
  | 'slide-in-left'
  | 'slide-out-left'
  | 'slide-in-top'
  | 'slide-out-top'
  | 'slide-in-bottom'
  | 'slide-out-bottom'
  | 'pop-in'
  | 'pop-out'
  | 'fade-in'
  | 'fade-out'
  | 'zoom-in'
  | 'zoom-out'
  | 'zoom-fade-in'
  | 'zoom-fade-out'
  | 'none';

/**
 * 在哪个目标上发生跳转
 *
 * self 当前小程序
 *
 * miniProgram 其它小程序
 */
type _NavigatorTarget = 'self' | 'miniProgram';

/**
 * 要打开的小程序版本
 *
 * 如果当前小程序是正式版，则打开的小程序必定是正式版
 *
 * develop 开发版
 *
 * trial 体验版
 *
 * release 正式版
 *
 * target="miniProgram" 时有效
 *
 * 默认为 release
 */
type _NavigatorVersion = 'develop' | 'trial' | 'release';

/** 页面跳转属性 */
type _NavigatorProps = Partial<{
  /**
   * 应用内的跳转链接
   *
   * 值为相对路径或绝对路径
   *
   * 例子：../first/first、/pages/first/first
   */
  url: string;
  /**
   * 跳转方式
   *
   * navigate 对应 navigateTo
   *
   * redirect 对应 redirectTo
   *
   * switchTab 对应 switchTab
   *
   * reLaunch 对应 reLaunch
   *
   * navigateBack 对应 navigateBack
   *
   * exit 退出小程序，target="miniProgram"时生效
   *
   * 默认为 navigate
   */
  openType: _NavigatorOpenType;
  /**
   * 回退的层数
   *
   * open-type="navigateBack" 时有效
   *
   * 默认为 1
   */
  delta: number;
  /**
   * 窗口的显示/关闭的动画类型
   *
   * open-type="navigateTo" 或 open-type="navigateBack" 时有效
   *
   * 默认为 pop-in 显示、pop-out 关闭
   */
  animationType: _NavigatorAnimationType;
  /**
   * 窗口的显示/关闭动画的持续时间
   *
   * open-type="navigateTo" 或 open-type="navigateBack" 时有效
   *
   * 默认为 300
   */
  animationDuration: number;
  /**
   * 指定点击时的样式类
   *
   * hover-class="none" 时，没有点击态效果
   *
   * 默认为 navigator-hover
   */
  hoverClass: string;
  /**
   * 指定是否阻止本节点的祖先节点出现点击态
   *
   * 默认为 false
   */
  hoverStopPropagation: boolean;
  /**
   * 按住后多久出现点击态
   *
   * 单位为 ms
   *
   * 默认为 50
   */
  hoverStartTime: number;
  /**
   * 手指松开后点击态保留时间
   *
   * 单位为 ms
   *
   * 默认为 600
   */
  hoverStayTime: number;
  /**
   * 在哪个目标上发生跳转
   *
   * self 当前小程序
   *
   * miniProgram 其它小程序
   *
   * 默认为 self
   */
  target: _NavigatorTarget;
  /**
   * 要打开的小程序 appId
   *
   * target="miniProgram" 时有效
   */
  appId: string;
  /**
   * 打开的页面路径，如果为空则打开首页
   *
   * target="miniProgram" 时有效
   */
  path: string;
  /**
   * 需要传递给目标应用的数据
   *
   * target="miniProgram" 时有效
   */
  extraData: AnyRecord;
  /**
   * 要打开的小程序版本
   *
   * 如果当前小程序是正式版，则打开的小程序必定是正式版
   *
   * develop 开发版
   *
   * trial 体验版
   *
   * release 正式版
   *
   * target="miniProgram" 时有效
   *
   * 默认为 release
   */
  version: _NavigatorVersion;
  /**
   * 当传递该参数后，可以不传 app-id 和 path
   *
   * target="miniProgram" 时有效
   */
  shortLink: string;
}>;

/**
 * 页面跳转组件
 *
 * 该组件类似 HTML 中的 a 组件，但只能跳转本地页面
 *
 * 目标页面必须在 pages.json 中注册
 */
type _Navigator = Component<_NavigatorProps>;

/** 页面跳转组件实例 */
type _NavigatorInstance = InstanceType<_Navigator>;

export {
  _NavigatorOpenType as NavigatorOpenType,
  _NavigatorAnimationType as NavigatorAnimationType,
  _NavigatorTarget as NavigatorTarget,
  _NavigatorVersion as NavigatorVersion,
  _NavigatorProps as NavigatorProps,
  _Navigator as Navigator,
  _NavigatorInstance as NavigatorInstance,
};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 页面跳转组件
     *
     * 该组件类似 HTML 中的 a 组件，但只能跳转本地页面
     *
     * 目标页面必须在 pages.json 中注册
     */
    Navigator: _Navigator;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 页面跳转组件
       *
       * 该组件类似 HTML 中的 a 组件，但只能跳转本地页面
       *
       * 目标页面必须在 pages.json 中注册
       */
      Navigator: _Navigator;
    }
  }
  namespace UniHelper {
    /**
     * 跳转方式
     *
     * navigate 对应 navigateTo
     *
     * redirect 对应 redirectTo
     *
     * switchTab 对应 switchTab
     *
     * reLaunch 对应 reLaunch
     *
     * navigateBack 对应 navigateBack
     *
     * exit 退出小程序，target="miniProgram"时生效
     */
    export type NavigatorOpenType = _NavigatorOpenType;
    /**
     * 窗口的显示/关闭的动画类型
     *
     * open-type="navigateTo" 或 open-type="navigateBack" 时有效
     *
     * 默认为 pop-in 显示、pop-out 关闭
     */
    export type NavigatorAnimationType = _NavigatorAnimationType;
    /**
     * 在哪个目标上发生跳转
     *
     * self 当前小程序
     *
     * miniProgram 其它小程序
     */
    export type NavigatorTarget = _NavigatorTarget;
    /**
     * 要打开的小程序版本
     *
     * 如果当前小程序是正式版，则打开的小程序必定是正式版
     *
     * develop 开发版
     *
     * trial 体验版
     *
     * release 正式版
     *
     * target="miniProgram" 时有效
     *
     * 默认为 release
     */
    export type NavigatorVersion = _NavigatorVersion;
    /** 页面跳转属性 */
    export type NavigatorProps = _NavigatorProps;
    /**
     * 页面跳转组件
     *
     * 该组件类似 HTML 中的 a 组件，但只能跳转本地页面
     *
     * 目标页面必须在 pages.json 中注册
     */
    export type Navigator = _Navigator;
    /** 页面跳转组件实例 */
    export type NavigatorInstance = _NavigatorInstance;
  }
}
