import { Component, AnyRecord } from '../Component';

/**
 * @desc 跳转方式
 * @desc navigate 对应 navigateTo
 * @desc redirect 对应 redirectTo
 * @desc switchTab 对应 switchTab
 * @desc reLaunch 对应 reLaunch
 * @desc navigateBack 对应 navigateBack
 * @desc exit 退出小程序，target="miniProgram"时生效
 */
type _NavigatorOpenType =
  | 'navigate'
  | 'redirect'
  | 'switchTab'
  | 'reLaunch'
  | 'navigateBack'
  | 'exit';

/**
 * @desc 窗口的显示/关闭的动画类型
 * @desc open-type="navigateTo" 或 open-type="navigateBack" 时有效
 * @desc 默认为 pop-in 显示、pop-out 关闭
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
 * @desc 在哪个目标上发生跳转
 * @desc self 当前小程序
 * @desc miniProgram 其它小程序
 */
type _NavigatorTarget = 'self' | 'miniProgram';

/**
 * @desc 要打开的小程序版本
 * @desc 如果当前小程序是正式版，则打开的小程序必定是正式版
 * @desc develop 开发版
 * @desc trial 体验版
 * @desc release 正式版
 * @desc target="miniProgram" 时有效
 * @desc 默认为 release
 */
type _NavigatorVersion = 'develop' | 'trial' | 'release';

/**
 * @desc 页面跳转属性
 */
interface _NavigatorProps {
  /**
   * @desc 应用内的跳转链接
   * @desc 值为相对路径或绝对路径
   * @desc 例子：../first/first、/pages/first/first
   */
  url: string;
  /**
   * @desc 跳转方式
   * @desc navigate 对应 navigateTo
   * @desc redirect 对应 redirectTo
   * @desc switchTab 对应 switchTab
   * @desc reLaunch 对应 reLaunch
   * @desc navigateBack 对应 navigateBack
   * @desc exit 退出小程序，target="miniProgram"时生效
   * @desc 默认为 navigate
   */
  openType: _NavigatorOpenType;
  /**
   * @desc 回退的层数
   * @desc open-type="navigateBack" 时有效
   * @desc 默认为 1
   */
  delta: number;
  /**
   * @desc 窗口的显示/关闭的动画类型
   * @desc open-type="navigateTo" 或 open-type="navigateBack" 时有效
   * @desc 默认为 pop-in 显示、pop-out 关闭
   */
  animationType: _NavigatorAnimationType;
  /**
   * @desc 窗口的显示/关闭动画的持续时间
   * @desc open-type="navigateTo" 或 open-type="navigateBack" 时有效
   * @desc 默认为 300
   */
  animationDuration: number;
  /**
   * @desc 指定点击时的样式类
   * @desc hover-class="none" 时，没有点击态效果
   * @desc 默认为 navigator-hover
   */
  hoverClass: string;
  /**
   * @desc 指定是否阻止本节点的祖先节点出现点击态
   * @desc 默认为 false
   */
  hoverStopPropagation: boolean;
  /**
   * @desc 按住后多久出现点击态
   * @desc 单位为 ms
   * @desc 默认为 50
   */
  hoverStartTime: number;
  /**
   * @desc 手指松开后点击态保留时间
   * @desc 单位为 ms
   * @desc 默认为 600
   */
  hoverStayTime: number;
  /**
   * @desc 在哪个目标上发生跳转
   * @desc self 当前小程序
   * @desc miniProgram 其它小程序
   * @desc 默认为 self
   */
  target: _NavigatorTarget;
  /**
   * @desc 要打开的小程序 appId
   * @desc target="miniProgram" 时有效
   */
  appId: string;
  /**
   * @desc 打开的页面路径，如果为空则打开首页
   * @desc target="miniProgram" 时有效
   */
  path: string;
  /**
   * @desc 需要传递给目标应用的数据
   * @desc target="miniProgram" 时有效
   */
  extraData: AnyRecord;
  /**
   * @desc 要打开的小程序版本
   * @desc 如果当前小程序是正式版，则打开的小程序必定是正式版
   * @desc develop 开发版
   * @desc trial 体验版
   * @desc release 正式版
   * @desc target="miniProgram" 时有效
   * @desc 默认为 release
   */
  version: _NavigatorVersion;
  /**
   * @desc 当传递该参数后，可以不传 app-id 和 path
   * @desc target="miniProgram" 时有效
   */
  shortLink: string;
}

/**
 * @desc 页面跳转
 * @desc 该组件类似 HTML 中的 a 组件，但只能跳转本地页面
 * @desc 目标页面必须在 pages.json 中注册
 */
type _Navigator = Component<Partial<_NavigatorProps>>;

export {
  _NavigatorOpenType as NavigatorOpenType,
  _NavigatorAnimationType as NavigatorAnimationType,
  _NavigatorTarget as NavigatorTarget,
  _NavigatorVersion as NavigatorVersion,
  _NavigatorProps as NavigatorProps,
  _Navigator as Navigator,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 跳转方式
     * @desc navigate 对应 navigateTo
     * @desc redirect 对应 redirectTo
     * @desc switchTab 对应 switchTab
     * @desc reLaunch 对应 reLaunch
     * @desc navigateBack 对应 navigateBack
     * @desc exit 退出小程序，target="miniProgram"时生效
     */
    export type NavigatorOpenType = _NavigatorOpenType;
    /**
     * @desc 窗口的显示/关闭的动画类型
     * @desc open-type="navigateTo" 或 open-type="navigateBack" 时有效
     * @desc 默认为 pop-in 显示、pop-out 关闭
     */
    export type NavigatorAnimationType = _NavigatorAnimationType;
    /**
     * @desc 在哪个目标上发生跳转
     * @desc self 当前小程序
     * @desc miniProgram 其它小程序
     */
    export type NavigatorTarget = _NavigatorTarget;
    /**
     * @desc 要打开的小程序版本
     * @desc 如果当前小程序是正式版，则打开的小程序必定是正式版
     * @desc develop 开发版
     * @desc trial 体验版
     * @desc release 正式版
     * @desc target="miniProgram" 时有效
     * @desc 默认为 release
     */
    export type NavigatorVersion = _NavigatorVersion;
    /**
     * @desc 页面跳转属性
     */
    export interface NavigatorProps extends _NavigatorProps {}
    /**
     * @desc 页面跳转
     * @desc 该组件类似 HTML 中的 a 组件，但只能跳转本地页面
     * @desc 目标页面必须在 pages.json 中注册
     */
    export type Navigator = _Navigator;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 页面跳转
     * @desc 该组件类似 HTML 中的 a 组件，但只能跳转本地页面
     * @desc 目标页面必须在 pages.json 中注册
     */
    Navigator: _Navigator;
  }
}
