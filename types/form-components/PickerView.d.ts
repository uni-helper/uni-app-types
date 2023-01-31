import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

type _PickerViewValueElement = number;

/** 依次表示 picker-view 内 picker-view-column 选择的下标 */
type _PickerViewValue = _PickerViewValueElement[];

interface _PickerViewOnChangeDetail {
  value: _PickerViewValue;
}

/** value 改变时触发 */
interface _PickerViewOnChange {
  (event: CustomEvent<_PickerViewOnChangeDetail>): void;
}

/** 滚动选择开始时触发 */
interface _PickerViewOnPickstart {
  (event: BaseEvent): void;
}

/** 滚动选择结束时触发 */
interface _PickerViewOnPickend {
  (event: BaseEvent): void;
}

interface _PickerViewProps {
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
}

/** 嵌入页面的滚动选择器，比 picker 更灵活 */
type _PickerView = Component<Partial<_PickerViewProps>>;

export {
  _PickerViewValueElement as PickerViewValueElement,
  _PickerViewValue as PickerViewValue,
  _PickerViewOnChangeDetail as PickerViewOnChangeDetail,
  _PickerViewOnChange as PickerViewOnChange,
  _PickerViewOnPickstart as PickerViewOnPickstart,
  _PickerViewOnPickend as PickerViewOnPickend,
  _PickerViewProps as PickerViewProps,
  _PickerView as PickerView,
};

declare global {
  namespace UniHelper {
    export type PickerViewValueElement = _PickerViewValueElement;
    /** 依次表示 picker-view 内 picker-view-column 选择的下标 */
    export type PickerViewValue = _PickerViewValue;
    export interface PickerViewOnChangeDetail extends _PickerViewOnChangeDetail {}
    /** value 改变时触发 */
    export interface PickerViewOnChange extends _PickerViewOnChange {}
    /** 滚动选择开始时触发 */
    export interface PickerViewOnPickstart extends _PickerViewOnPickstart {}
    /** 滚动选择结束时触发 */
    export interface PickerViewOnPickend extends _PickerViewOnPickend {}
    export interface PickerViewProps extends _PickerViewProps {}
    /** 嵌入页面的滚动选择器，比 picker 更灵活 */
    export type PickerView = _PickerView;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 嵌入页面的滚动选择器，比 picker 更灵活 */
    PickerView: _PickerView;
  }
}
