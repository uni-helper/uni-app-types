import { Component } from '../Component';
import { BaseEvent } from '../events';

/** 图片加载成功时触发 */
interface _CoverImageOnLoad {
  (event: BaseEvent, ...params: any[]): void;
}

/** 图片加载失败时触发 */
interface _CoverImageOnError {
  (event: BaseEvent, ...params: any[]): void;
}

/** 覆盖在原生组件之上的图片视图属性 */
type _CoverImageProps = Partial<{
  /**
   * 图片路径
   *
   * 支持本地路径、网络路径
   *
   * 不支持 base64 格式
   */
  src: string;
  /** 图片加载成功时触发 */
  onLoad: _CoverImageOnLoad;
  /** 图片加载失败时触发 */
  onError: _CoverImageOnError;
}>;

/**
 * 覆盖在原生组件之上的图片视图
 *
 * 可覆盖的原生组件同 cover-view
 *
 * 支持嵌套在 cover-view 里
 */
type _CoverImage = Component<_CoverImageProps>;

/** 覆盖在原生组件之上的图片视图实例 */
type _CoverImageInstance = InstanceType<_CoverImage>;

export {
  _CoverImageOnLoad as CoverImageOnLoad,
  _CoverImageOnError as CoverImageOnError,
  _CoverImageProps as CoverImageProps,
  _CoverImage as CoverImage,
  _CoverImageInstance as CoverImageInstance,
};

declare global {
  namespace UniHelper {
    /** 图片加载成功时触发 */
    export interface CoverImageOnLoad extends _CoverImageOnLoad {}
    /** 图片加载失败时触发 */
    export interface CoverImageOnError extends _CoverImageOnError {}
    /** 覆盖在原生组件之上的图片视图属性 */
    export type CoverImageProps = _CoverImageProps;
    /**
     * 覆盖在原生组件之上的图片视图
     *
     * 可覆盖的原生组件同 cover-view
     *
     * 支持嵌套在 cover-view 里
     */
    export type CoverImage = _CoverImage;
    /** 覆盖在原生组件之上的图片视图实例 */
    export type CoverImageInstance = _CoverImageInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 覆盖在原生组件之上的图片视图
     *
     * 可覆盖的原生组件同 cover-view
     *
     * 支持嵌套在 cover-view 里
     */
    CoverImage: _CoverImage;
  }
}
