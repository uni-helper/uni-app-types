import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

type _PickerViewValueElement = number;

/** 依次表示 picker-view 内 picker-view-column 选择的下标 */
type _PickerViewValue = _PickerViewValueElement[];

interface _PickerViewOnChangeDetail {
  value: _PickerViewValue;
}

type _PickerViewOnChangeEvent = CustomEvent<_PickerViewOnChangeDetail>;

/** value 改变时触发 */
interface _PickerViewOnChange {
  (event: _PickerViewOnChangeEvent): void;
}

type _PickerViewOnPickstartEvent = BaseEvent;

/** 滚动选择开始时触发 */
interface _PickerViewOnPickstart {
  (event: _PickerViewOnPickstartEvent): void;
}

type _PickerViewOnPickendEvent = BaseEvent;

/** 滚动选择结束时触发 */
interface _PickerViewOnPickend {
  (event: _PickerViewOnPickendEvent): void;
}

type _PickerViewProps = Partial<{
  /**
   * 依次表示 picker-view 内 picker-view-column 选择的下标
   *
   * 超出 picker-view-column 可选项长度时，选择最后一项
   */
  value: _PickerViewValue;
  /** 设置选择器中间选中框的样式 */
  indicatorStyle: string;
  /** 设置选择器中间选中框的类名 */
  indicatorClass: string;
  /** 设置蒙层的样式 */
  maskStyle: string;
  /** 设置蒙层的类名 */
  maskClass: string;
  /**
   * 是否在手指松开时立即触发 change 事件
   *
   * 若不开启则会在滚动动画结束后触发 change 事件
   *
   * 默认为 false
   */
  immediateChange: boolean;
  /** value 改变时触发 */
  onChange: _PickerViewOnChange;
  /** 滚动选择开始时触发 */
  onPickstart: _PickerViewOnPickstart;
  /** 滚动选择结束时触发 */
  onPickend: _PickerViewOnPickend;
}>;

/** 嵌入页面的滚动选择器，比 picker 更灵活 */
type _PickerView = Component<_PickerViewProps>;

/** 嵌入页面的滚动选择器 */
type _PickerViewInstance = InstanceType<_PickerView>;

export {
  _PickerViewValueElement as PickerViewValueElement,
  _PickerViewValue as PickerViewValue,
  _PickerViewOnChangeDetail as PickerViewOnChangeDetail,
  _PickerViewOnChangeEvent as PickerViewOnChangeEvent,
  _PickerViewOnChange as PickerViewOnChange,
  _PickerViewOnPickstartEvent as PickerViewOnPickstartEvent,
  _PickerViewOnPickstart as PickerViewOnPickstart,
  _PickerViewOnPickendEvent as PickerViewOnPickendEvent,
  _PickerViewOnPickend as PickerViewOnPickend,
  _PickerViewProps as PickerViewProps,
  _PickerView as PickerView,
  _PickerViewInstance as PickerViewInstance,
};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 嵌入页面的滚动选择器，比 picker 更灵活 */
    PickerView: _PickerView;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 嵌入页面的滚动选择器，比 picker 更灵活 */
      PickerView: _PickerView;
    }
  }
  namespace UniHelper {
    export type PickerViewValueElement = _PickerViewValueElement;
    /** 依次表示 picker-view 内 picker-view-column 选择的下标 */
    export type PickerViewValue = _PickerViewValue;
    export interface PickerViewOnChangeDetail extends _PickerViewOnChangeDetail {}
    export type PickerViewOnChangeEvent = _PickerViewOnChangeEvent;
    /** value 改变时触发 */
    export interface PickerViewOnChange extends _PickerViewOnChange {}
    export type PickerViewOnPickstartEvent = _PickerViewOnPickstartEvent;
    /** 滚动选择开始时触发 */
    export interface PickerViewOnPickstart extends _PickerViewOnPickstart {}
    export type PickerViewOnPickendEvent = _PickerViewOnPickendEvent;
    /** 滚动选择结束时触发 */
    export interface PickerViewOnPickend extends _PickerViewOnPickend {}
    export type PickerViewProps = _PickerViewProps;
    /** 嵌入页面的滚动选择器，比 picker 更灵活 */
    export type PickerView = _PickerView;
    /** 嵌入页面的滚动选择器实例 */
    export type PickerViewInstance = _PickerViewInstance;
  }
}
