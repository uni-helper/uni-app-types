import { Component } from '../Component';

interface _SwiperItemProps {
  /**
   * @desc 标识符
   */
  itemId: string;
}

/**
 * @desc swiper 直接子组件，宽高自动设置为父组件的 100%
 * @desc 不能被子组件自动撑开
 */
type _SwiperItem = Component<Partial<_SwiperItemProps>>;

export { _SwiperItemProps as SwiperItemProps, _SwiperItem as SwiperItem };

declare global {
  namespace UniHelper {
    export interface SwiperItemProps extends _SwiperItemProps {}
    /**
     * @desc swiper 直接子组件，宽高自动设置为父组件的 100%
     * @desc 不能被子组件自动撑开
     */
    export type SwiperItem = _SwiperItem;
  }
}
