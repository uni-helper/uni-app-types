import { Component } from '../Component';

interface _SwiperItemProps {
  /** 标识符 */
  itemId: string;
}

/**
 * Swiper 直接子组件，宽高自动设置为父组件的 100%
 *
 * 不能被子组件自动撑开
 */
type _SwiperItem = Component<Partial<_SwiperItemProps>>;

export { _SwiperItemProps as SwiperItemProps, _SwiperItem as SwiperItem };

declare global {
  namespace UniHelper {
    export interface SwiperItemProps extends _SwiperItemProps {}
    /**
     * Swiper 直接子组件，宽高自动设置为父组件的 100%
     *
     * 不能被子组件自动撑开
     */
    export type SwiperItem = _SwiperItem;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * Swiper 直接子组件，宽高自动设置为父组件的 100%
     *
     * 不能被子组件自动撑开
     */
    SwiperItem: _SwiperItem;
  }
}
