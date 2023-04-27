import { Component } from '../Component';
import { CustomEvent } from '../events';

/** 取值 */
type _SliderValue = number;

interface _SliderOnChangeDetail {
  value: _SliderValue;
}

type _SliderOnChangeEvent = CustomEvent<_SliderOnChangeDetail>;

/** 完成一次拖动后触发 */
interface _SliderOnChange {
  (event: _SliderOnChangeEvent): void;
}

interface _SliderOnChangingDetail {
  value: _SliderValue;
}

type _SliderOnChangingEvent = CustomEvent<_SliderOnChangingDetail>;

/** 拖动过程中触发 */
interface _SliderOnChanging {
  (event: _SliderOnChangingEvent): void;
}

/** 滑动选择器属性 */
type _SliderProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /**
   * 最小值
   *
   * 默认为 0
   */
  min: _SliderValue;
  /**
   * 最大值
   *
   * 默认为 100
   */
  max: _SliderValue;
  /**
   * 步长，取值必须大于 0，并且可被 (max - min) 整除
   *
   * 默认为 1
   */
  step: _SliderValue;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 当前取值
   *
   * 默认为 0
   */
  value: _SliderValue;
  /**
   * 滑块左侧已选择部分的线条颜色
   *
   * 默认为各平台默认色
   */
  activeColor: string;
  /**
   * 滑块右侧背景条的颜色
   *
   * 默认为 #e9e9e9
   */
  backgroundColor: string;
  /**
   * 滑块的大小
   *
   * 取值范围为 12 - 28
   *
   * 默认为 28
   */
  blockSize: number;
  /**
   * 滑块的颜色
   *
   * 默认为 #fff
   */
  blockColor: string;
  /**
   * 是否显示当前 value
   *
   * 默认为 false
   */
  showValue: boolean;
  /** 完成一次拖动后触发 */
  onChange: _SliderOnChange;
  /** 拖动过程中触发 */
  onChanging: _SliderOnChanging;
}>;

/** 滑动选择器 */
type _Slider = Component<_SliderProps>;

/** 滑动选择器实例 */
type _SliderInstance = InstanceType<_Slider>;

export {
  _SliderValue as SliderValue,
  _SliderOnChangeDetail as SliderOnChangeDetail,
  _SliderOnChangeEvent as SliderOnChangeEvent,
  _SliderOnChange as SliderOnChange,
  _SliderOnChangingDetail as SliderOnChangingDetail,
  _SliderOnChangingEvent as SliderOnChangingEvent,
  _SliderOnChanging as SliderOnChanging,
  _SliderProps as SliderProps,
  _Slider as Slider,
  _SliderInstance as SliderInstance,
};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 滑动选择器 */
    Slider: _Slider;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 滑动选择器 */
      Slider: _Slider;
    }
  }
  namespace UniHelper {
    /** 取值 */
    export type SliderValue = _SliderValue;
    export interface SliderOnChangeDetail extends _SliderOnChangeDetail {}
    export type SliderOnChangeEvent = _SliderOnChangeEvent;
    /** 完成一次拖动后触发 */
    export interface SliderOnChange extends _SliderOnChange {}
    export interface SliderOnChangingDetail extends _SliderOnChangingDetail {}
    export type SliderOnChangingEvent = _SliderOnChangingEvent;
    /** 拖动过程中触发 */
    export interface SliderOnChanging extends _SliderOnChanging {}
    /** 滑动选择器属性 */
    export type SliderProps = _SliderProps;
    /** 滑动选择器 */
    export type Slider = _Slider;
    /** 滑动选择器实例 */
    export type SliderInstance = _SliderInstance;
  }
}
