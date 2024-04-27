import { Component } from '../component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * 图片裁剪、缩放的模式
 *
 * scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
 *
 * aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来，可以完整地将图片显示出来
 *
 * aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
 *
 * widthFix 宽度不变，高度自动变化，保持原图宽高比不变
 *
 * heightFix 高度不变，宽度自动变化，保持原图宽高比不变
 *
 * top 不缩放图片，只显示图片的顶部区域
 *
 * bottom 不缩放图片，只显示图片的底部区域
 *
 * center 不缩放图片，只显示图片的中间区域
 *
 * left 不缩放图片，只显示图片的左边区域
 *
 * right 不缩放图片，只显示图片的右边区域
 *
 * top left 不缩放图片，只显示图片的左上边区域
 *
 * top right 不缩放图片，只显示图片的右上边区域
 *
 * bottom left 不缩放图片，只显示图片的左下边区域
 *
 * bottom right 不缩放图片，只显示图片的右下边区域
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

type _ImageOnErrorEvent = BaseEvent;

/** 图片加载错误时触发 */
interface _ImageOnError {
  (event: _ImageOnErrorEvent): void;
}

interface _ImageOnLoadDetail {
  /**
   * 图片宽度
   *
   * 单位为 px
   */
  width: string;
  /**
   * 图片高度
   *
   * 单位为 px
   */
  height: string;
}

type _ImageOnLoadEvent = CustomEvent<_ImageOnLoadDetail>;

/** 图片加载完毕时触发 */
interface _ImageOnLoad {
  (event: _ImageOnLoadEvent): void;
}

/** 图片属性 */
type _ImageProps = Partial<{
  /** 图片资源地址 */
  src: string;
  /**
   * 图片裁剪、缩放的模式
   *
   * scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
   *
   * aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来，可以完整地将图片显示出来
   *
   * aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
   *
   * widthFix 宽度不变，高度自动变化，保持原图宽高比不变
   *
   * heightFix 高度不变，宽度自动变化，保持原图宽高比不变
   *
   * top 不缩放图片，只显示图片的顶部区域
   *
   * bottom 不缩放图片，只显示图片的底部区域
   *
   * center 不缩放图片，只显示图片的中间区域
   *
   * left 不缩放图片，只显示图片的左边区域
   *
   * right 不缩放图片，只显示图片的右边区域
   *
   * top left 不缩放图片，只显示图片的左上边区域
   *
   * top right 不缩放图片，只显示图片的右上边区域
   *
   * bottom left 不缩放图片，只显示图片的左下边区域
   *
   * bottom right 不缩放图片，只显示图片的右下边区域
   *
   * 默认为 scaleToFill
   */
  mode: _ImageMode;
  /**
   * 是否开启图片懒加载
   *
   * 只对 page 与 scroll-view 下的 image 有效
   *
   * 默认为 false
   */
  lazyLoad: boolean;
  /**
   * 是否使用图片显示动画效果
   *
   * 默认为 true
   */
  fadeShow: boolean;
  /**
   * 在系统不支持 webp 的情况下是否单独启用 webp
   *
   * 默认为 false
   */
  webp: boolean;
  /**
   * 是否开启长按图片显示识别小程序码菜单
   *
   * 默认为 false
   */
  showMenuByLongpress: boolean;
  /**
   * 是否能拖动图片
   *
   * 默认为 true
   */
  draggable: boolean;
  /** 图片加载错误时触发 */
  onError: _ImageOnError;
  /** 图片加载完毕时触发 */
  onLoad: _ImageOnLoad;
}>;

/** 图片 */
type _Image = Component<_ImageProps>;

/** 图片实例 */
type _ImageInstance = InstanceType<_Image>;

export {
  _ImageMode as ImageMode,
  _ImageOnErrorEvent as ImageOnErrorEvent,
  _ImageOnError as ImageOnError,
  _ImageOnLoadDetail as ImageOnLoadDetail,
  _ImageOnLoadEvent as ImageOnLoadEvent,
  _ImageOnLoad as ImageOnLoad,
  _ImageProps as ImageProps,
  _Image as Image,
  _ImageInstance as ImageInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 图片裁剪、缩放的模式
     *
     * scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
     *
     * aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来，可以完整地将图片显示出来
     *
     * aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
     *
     * widthFix 宽度不变，高度自动变化，保持原图宽高比不变
     *
     * heightFix 高度不变，宽度自动变化，保持原图宽高比不变
     *
     * top 不缩放图片，只显示图片的顶部区域
     *
     * bottom 不缩放图片，只显示图片的底部区域
     *
     * center 不缩放图片，只显示图片的中间区域
     *
     * left 不缩放图片，只显示图片的左边区域
     *
     * right 不缩放图片，只显示图片的右边区域
     *
     * top left 不缩放图片，只显示图片的左上边区域
     *
     * top right 不缩放图片，只显示图片的右上边区域
     *
     * bottom left 不缩放图片，只显示图片的左下边区域
     *
     * bottom right 不缩放图片，只显示图片的右下边区域
     */
    export type ImageMode = _ImageMode;
    export type ImageOnErrorEvent = _ImageOnErrorEvent;
    /** 图片加载错误时触发 */
    export interface ImageOnError extends _ImageOnError {}
    export interface ImageOnLoadDetail extends _ImageOnLoadDetail {}
    export type ImageOnLoadEvent = _ImageOnLoadEvent;
    /** 图片加载完毕时触发 */
    export interface ImageOnLoad extends _ImageOnLoad {}
    /** 图片属性 */
    export type ImageProps = _ImageProps;
    /** 图片 */
    export type Image = _Image;
    /** 图片实例 */
    export type ImageInstance = _ImageInstance;
  }
}
