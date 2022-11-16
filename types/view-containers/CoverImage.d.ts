import { Component } from '../Component';
import { BaseEvent } from '../events';

export interface CoverImageProps {
  /**
   * @desc 图片路径
   * @desc 支持本地路径、网络路径
   * @desc 不支持 base64 格式
   */
  src: string;
  /**
   * @desc 图片加载成功时触发
   */
  onLoad: (event: BaseEvent) => void;
  /**
   * @desc 图片加载失败时触发
   */
  onError: (event: BaseEvent) => void;
}

/**
 * @desc 覆盖在原生组件之上的图片视图
 * @desc 可覆盖的原生组件同 cover-view
 * @desc 支持嵌套在 cover-view 里
 */
export type CoverImage = Component<Partial<CoverImageProps>>;
