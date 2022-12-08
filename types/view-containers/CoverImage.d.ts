import { Component } from '../Component';
import { BaseEvent } from '../events';

/**
 * @desc 图片加载成功时触发
 */
interface _CoverImageLoad {
  (event: BaseEvent): void;
}

/**
 * @desc 图片加载失败时触发
 */
interface _CoverImageError {
  (event: BaseEvent): void;
}

/**
 * @desc 覆盖在原生组件之上的图片视图属性
 */
interface _CoverImageProps {
  /**
   * @desc 图片路径
   * @desc 支持本地路径、网络路径
   * @desc 不支持 base64 格式
   */
  src: string;
  /**
   * @desc 图片加载成功时触发
   */
  onLoad: _CoverImageLoad;
  /**
   * @desc 图片加载失败时触发
   */
  onError: _CoverImageError;
}

/**
 * @desc 覆盖在原生组件之上的图片视图
 * @desc 可覆盖的原生组件同 cover-view
 * @desc 支持嵌套在 cover-view 里
 */
type _CoverImage = Component<Partial<_CoverImageProps>>;

export {
  _CoverImageLoad as CoverImageLoad,
  _CoverImageError as CoverImageError,
  _CoverImageProps as CoverImageProps,
  _CoverImage as CoverImage,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 图片加载成功时触发
     */
    export interface CoverImageLoad extends _CoverImageLoad {}
    /**
     * @desc 图片加载失败时触发
     */
    export interface CoverImageError extends _CoverImageError {}
    /**
     * @desc 覆盖在原生组件之上的图片视图属性
     */
    export interface CoverImageProps extends _CoverImageProps {}
    /**
     * @desc 覆盖在原生组件之上的图片视图
     * @desc 可覆盖的原生组件同 cover-view
     * @desc 支持嵌套在 cover-view 里
     */
    export type CoverImage = _CoverImage;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 覆盖在原生组件之上的图片视图
     * @desc 可覆盖的原生组件同 cover-view
     * @desc 支持嵌套在 cover-view 里
     */
    CoverImage: _CoverImage;
  }
}
