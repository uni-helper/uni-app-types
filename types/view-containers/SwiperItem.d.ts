import { Component } from '../Component';

/** swiper 直接子组件属性 */
type _SwiperItemProps = Partial<{
  /** 标识符 */
  itemId: string;
}>;

/**
 * swiper 直接子组件，宽高自动设置为父组件的 100%
 *
 * 不能被子组件自动撑开
 */
type _SwiperItem = Component<_SwiperItemProps>;

/** swiper 直接子组件实例 */
type _SwiperItemInstance = InstanceType<_SwiperItem>;

export {
  _SwiperItemProps as SwiperItemProps,
  _SwiperItem as SwiperItem,
  _SwiperItemInstance as SwiperItemInstance,
};

declare global {
  namespace UniHelper {
    /** swiper 直接子组件属性 */
    export type SwiperItemProps = _SwiperItemProps;
    /**
     * swiper 直接子组件，宽高自动设置为父组件的 100%
     *
     * 不能被子组件自动撑开
     */
    export type SwiperItem = _SwiperItem;
    /** swiper 直接子组件实例 */
    export type SwiperInstance = _SwiperItemInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * swiper 直接子组件，宽高自动设置为父组件的 100%
     *
     * 不能被子组件自动撑开
     */
    SwiperItem: _SwiperItem;
  }
}
