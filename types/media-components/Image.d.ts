import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 图片裁剪、缩放的模式
 * @desc scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
 * @desc aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来，可以完整地将图片显示出来
 * @desc aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
 * @desc widthFix 宽度不变，高度自动变化，保持原图宽高比不变
 * @desc heightFix 高度不变，宽度自动变化，保持原图宽高比不变
 * @desc top 不缩放图片，只显示图片的顶部区域
 * @desc bottom 不缩放图片，只显示图片的底部区域
 * @desc center 不缩放图片，只显示图片的中间区域
 * @desc left 不缩放图片，只显示图片的左边区域
 * @desc right 不缩放图片，只显示图片的右边区域
 * @desc top left 不缩放图片，只显示图片的左上边区域
 * @desc top right 不缩放图片，只显示图片的右上边区域
 * @desc bottom left 不缩放图片，只显示图片的左下边区域
 * @desc bottom right 不缩放图片，只显示图片的右下边区域
 */
type _ImageMode =
  | 'scaleToFill'
  | 'aspectFit'
  | 'aspectFill'
  | 'widthFix'
  | 'heightFix'
  | 'top'
  | 'bottom'
  | 'center'
  | 'left'
  | 'right'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';

/**
 * @desc 图片加载错误时触发
 */
interface _ImageOnError {
  (event: BaseEvent): void;
}

interface _ImageOnLoadDetail {
  /**
   * @desc 图片宽度
   * @desc 单位为 px
   */
  width: string;
  /**
   * @desc 图片高度
   * @desc 单位为 px
   */
  height: string;
}

/**
 * @desc 图片加载完毕时触发
 */
interface _ImageOnLoad {
  (event: CustomEvent<_ImageOnLoadDetail>): void;
}

/**
 * @desc 图片属性
 */
interface _ImageProps {
  /**
   * @desc 图片资源地址
   */
  src: string;
  /**
   * @desc 图片裁剪、缩放的模式
   * @desc scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
   * @desc aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来，可以完整地将图片显示出来
   * @desc aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
   * @desc widthFix 宽度不变，高度自动变化，保持原图宽高比不变
   * @desc heightFix 高度不变，宽度自动变化，保持原图宽高比不变
   * @desc top 不缩放图片，只显示图片的顶部区域
   * @desc bottom 不缩放图片，只显示图片的底部区域
   * @desc center 不缩放图片，只显示图片的中间区域
   * @desc left 不缩放图片，只显示图片的左边区域
   * @desc right 不缩放图片，只显示图片的右边区域
   * @desc top left 不缩放图片，只显示图片的左上边区域
   * @desc top right 不缩放图片，只显示图片的右上边区域
   * @desc bottom left 不缩放图片，只显示图片的左下边区域
   * @desc bottom right 不缩放图片，只显示图片的右下边区域
   * @desc 默认为 scaleToFill
   */
  mode: _ImageMode;
  /**
   * @desc 是否开启图片懒加载
   * @desc 只对 page 与 scroll-view 下的 image 有效
   * @desc 默认为 false
   */
  lazyLoad: boolean;
  /**
   * @desc 是否使用图片显示动画效果
   * @desc 默认为 true
   */
  fadeShow: boolean;
  /**
   * @desc 在系统不支持 webp 的情况下是否单独启用 webp
   * @desc 默认为 false
   */
  webp: boolean;
  /**
   * @desc 是否开启长按图片显示识别小程序码菜单
   * @desc 默认为 false
   */
  showMenuByLongpress: boolean;
  /**
   * @desc 是否能拖动图片
   * @desc 默认为 true
   */
  draggable: boolean;
  /**
   * @desc 图片加载错误时触发
   */
  onError: _ImageOnError;
  /**
   * @desc 图片加载完毕时触发
   */
  onLoad: _ImageOnLoad;
}

/**
 * @desc 图片
 */
type _Image = Component<Partial<_ImageProps>>;

export {
  _ImageMode as ImageMode,
  _ImageOnError as ImageOnError,
  _ImageOnLoadDetail as ImageOnLoadDetail,
  _ImageOnLoad as ImageOnLoad,
  _ImageProps as ImageProps,
  _Image as Image,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 图片裁剪、缩放的模式
     * @desc scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
     * @desc aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来，可以完整地将图片显示出来
     * @desc aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
     * @desc widthFix 宽度不变，高度自动变化，保持原图宽高比不变
     * @desc heightFix 高度不变，宽度自动变化，保持原图宽高比不变
     * @desc top 不缩放图片，只显示图片的顶部区域
     * @desc bottom 不缩放图片，只显示图片的底部区域
     * @desc center 不缩放图片，只显示图片的中间区域
     * @desc left 不缩放图片，只显示图片的左边区域
     * @desc right 不缩放图片，只显示图片的右边区域
     * @desc top left 不缩放图片，只显示图片的左上边区域
     * @desc top right 不缩放图片，只显示图片的右上边区域
     * @desc bottom left 不缩放图片，只显示图片的左下边区域
     * @desc bottom right 不缩放图片，只显示图片的右下边区域
     */
    export type ImageMode = _ImageMode;
    /**
     * @desc 图片加载错误时触发
     */
    export interface ImageOnError extends _ImageOnError {}
    export interface ImageOnLoadDetail extends _ImageOnLoadDetail {}
    /**
     * @desc 图片加载完毕时触发
     */
    export interface ImageOnLoad extends _ImageOnLoad {}
    /**
     * @desc 图片属性
     */
    export interface ImageProps extends _ImageProps {}
    /**
     * @desc 图片
     */
    export type Image = _Image;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 图片
     */
    Image: _Image;
  }
}
