import { Component, AnyRecord } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 需要展示的内容
 */
type _SelectorPickerRange = string[] | AnyRecord[];

/**
 * @desc 当前选择的下标
 */
type _SelectorPickerValue = number;

/**
 * @desc 大屏时 UI 类型，支持 picker、select、auto
 */
type _SelectorPickerSelectorType = 'auto' | 'picker' | 'select';

interface _SelectorPickerOnChangeDetail {
  value: _SelectorPickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _SelectorPickerOnChange {
  (event: CustomEvent<_SelectorPickerOnChangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _SelectorPickerOnCancel {
  (event: BaseEvent): void;
}

interface _SelectorPickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为普通选择器
   */
  mode?: 'selector';
  /**
   * @desc 需要展示的内容
   * @desc 默认为 []
   */
  range: _SelectorPickerRange;
  /**
   * @desc 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
   */
  rangeKey: string;
  /**
   * @desc 当前选择的下标
   * @desc 默认为 0
   */
  value: _SelectorPickerValue;
  /**
   * @desc 大屏时 UI 类型，支持 picker、select、auto
   * @desc 默认在 iPad 以 picker 样式展示
   * @desc 默认在 PC 以 select 样式展示
   * @desc 默认为 auto
   */
  selectorType: _SelectorPickerSelectorType;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: _SelectorPickerOnChange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _SelectorPickerOnCancel;
}

/**
 * @desc 需要展示的内容
 */
type _MultiSelectorPickerRange = string[][] | AnyRecord[][];

/**
 * @desc 当前某列选择的下标
 */
type _MultiSelectorPickerValueElement = number;

/**
 * @desc 当前每列选择的下标
 */
type _MultiSelectorPickerValue = _MultiSelectorPickerValueElement[];

interface _MultiSelectorPickerOnChangeDetail {
  value: _MultiSelectorPickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _MultiSelectorPickerOnChange {
  (event: CustomEvent<_MultiSelectorPickerOnChangeDetail>): void;
}

interface _MultiSelectorPickerOnColumnchangeDetail {
  column: number;
  value: _MultiSelectorPickerValueElement;
}

/**
 * @desc 某一列 value 改变时触发
 */
interface _MultiSelectorPickerOnColumnchange {
  (event: CustomEvent<_MultiSelectorPickerOnColumnchangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _MultiSelectorPickerOnCancel {
  (event: BaseEvent): void;
}

interface _MultiSelectorPickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为多列选择器
   */
  mode: 'multiSelector';
  /**
   * @desc 需要展示的内容
   * @desc 默认为 []
   */
  range: _MultiSelectorPickerRange;
  /**
   * @desc 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
   */
  rangeKey: string;
  /**
   * @desc 当前每列选择的下标
   * @desc 默认为列数个 0 组成的数组
   */
  value: _MultiSelectorPickerValue;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: _MultiSelectorPickerOnChange;
  /**
   * @desc 某一列 value 改变时触发
   */
  onColumnchange: _MultiSelectorPickerOnColumnchange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _MultiSelectorPickerOnCancel;
}

/**
 * @desc 选中的时间
 * @desc 格式为 hh:mm
 */
type _TimePickerValue = string;

interface _TimePickerOnChangeDetail {
  value: _TimePickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _TimePickerOnChange {
  (event: CustomEvent<_TimePickerOnChangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _TimePickerOnCancel {
  (event: BaseEvent): void;
}

interface _TimePickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为时间选择器
   */
  mode: 'time';
  /**
   * @desc 选中的日期
   * @desc 格式为 hh:mm
   */
  value: _TimePickerValue;
  /**
   * @desc 有效日期范围的开始
   * @desc 格式为 hh:mm
   */
  start: _TimePickerValue;
  /**
   * @desc 有效日期范围的结束
   * @desc 格式为 hh:mm
   */
  end: _TimePickerValue;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: _TimePickerOnChange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _TimePickerOnCancel;
}

/**
 * @desc 选中的日期
 * @desc 格式为 YYYY-MM-DD
 */
type _DatePickerValue = string;

/**
 * @desc 选择器的粒度
 * @desc year 年
 * @desc month 月
 * @desc day 日
 */
type _DatePickerFields = 'year' | 'month' | 'day';

interface _DatePickerOnChangeDetail {
  value: _DatePickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _DatePickerOnChange {
  (event: CustomEvent<_DatePickerOnChangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _DatePickerOnCancel {
  (event: BaseEvent): void;
}

interface _DatePickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为日期选择器
   */
  mode: 'date';
  /**
   * @desc 选中的日期
   * @desc 格式为 YYYY-MM-DD
   */
  value: _DatePickerValue;
  /**
   * @desc 有效日期范围的开始
   * @desc 格式为 YYYY-MM-DD
   */
  start: _DatePickerValue;
  /**
   * @desc 有效日期范围的结束
   * @desc 格式为 YYYY-MM-DD
   */
  end: _DatePickerValue;
  /**
   * @desc 选择器的粒度
   * @desc year 年
   * @desc month 月
   * @desc day 日
   * @desc 默认为 day
   */
  fields: _DatePickerFields;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: _DatePickerOnChange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _DatePickerOnCancel;
}

type _RegionPickerValueElement = string;

/**
 * @desc 选中的省市区
 */
type _RegionPickerValue = _RegionPickerValueElement[];

/**
 * @desc 选择器层级
 * @desc province 省级
 * @desc city 市级
 * @desc region 区级
 * @desc sub-district 街道级
 */
type _RegionPickerLevel = 'province' | 'city' | 'region' | 'sub-district';

interface _RegionPickerOnChangeDetail {
  value: _RegionPickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _RegionPickerOnChange {
  (event: CustomEvent<_RegionPickerOnChangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _RegionPickerOnCancel {
  (event: BaseEvent): void;
}

interface _RegionPickerProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 设置为省市区选择器
   */
  mode: 'region';
  /**
   * @desc 选中的省市区
   * @desc 默认选中每一列第一个值
   */
  value: _RegionPickerValue;
  /**
   * @desc 可为每一列的顶部添加一个自定义的项
   */
  customItem: string;
  /**
   * @desc 选择器层级
   * @desc province 省级
   * @desc city 市级
   * @desc region 区级
   * @desc sub-district 街道级
   */
  level: _RegionPickerLevel;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc value 改变时触发
   */
  onChange: _RegionPickerOnChange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _RegionPickerOnCancel;
}

type _PickerValue =
  | _SelectorPickerValue
  | _MultiSelectorPickerValue
  | _TimePickerValue
  | _DatePickerValue
  | _RegionPickerValue;

/**
 * @desc 滚动选择器属性
 */
type _PickerProps =
  | _SelectorPickerProps
  | _MultiSelectorPickerProps
  | _TimePickerProps
  | _DatePickerProps
  | _RegionPickerProps;

/**
 * @desc 从底部弹起的滚动选择器，通过 mode 来区分
 */
type _Picker = Component<Partial<_PickerProps>>;

export {
  _SelectorPickerRange as SelectorPickerRange,
  _SelectorPickerValue as SelectorPickerValue,
  _SelectorPickerSelectorType as SelectorPickerSelectorType,
  _SelectorPickerOnChangeDetail as SelectorPickerOnChangeDetail,
  _SelectorPickerOnChange as SelectorPickerOnChange,
  _SelectorPickerOnCancel as SelectorPickerOnCancel,
  _SelectorPickerProps as SelectorPickerProps,
  _MultiSelectorPickerRange as MultiSelectorPickerRange,
  _MultiSelectorPickerValueElement as MultiSelectorPickerValueElement,
  _MultiSelectorPickerValue as MultiSelectorPickerValue,
  _MultiSelectorPickerOnChangeDetail as MultiSelectorPickerOnChangeDetail,
  _MultiSelectorPickerOnChange as MultiSelectorPickerOnChange,
  _MultiSelectorPickerOnColumnchangeDetail as MultiSelectorPickerOnColumnchangeDetail,
  _MultiSelectorPickerOnColumnchange as MultiSelectorPickerOnColumnchange,
  _MultiSelectorPickerOnCancel as MultiSelectorPickerOnCancel,
  _MultiSelectorPickerProps as MultiSelectorPickerProps,
  _TimePickerValue as TimePickerValue,
  _TimePickerOnChangeDetail as TimePickerOnChangeDetail,
  _TimePickerOnChange as TimePickerOnChange,
  _TimePickerOnCancel as TimePickerOnCancel,
  _TimePickerProps as TimePickerProps,
  _DatePickerValue as DatePickerValue,
  _DatePickerFields as DatePickerFields,
  _DatePickerOnChangeDetail as DatePickerOnChangeDetail,
  _DatePickerOnChange as DatePickerOnChange,
  _DatePickerOnCancel as DatePickerOnCancel,
  _DatePickerProps as DatePickerProps,
  _RegionPickerValueElement as RegionPickerValueElement,
  _RegionPickerValue as RegionPickerValue,
  _RegionPickerLevel as RegionPickerLevel,
  _RegionPickerOnChangeDetail as RegionPickerOnChangeDetail,
  _RegionPickerOnChange as RegionPickerOnChange,
  _RegionPickerOnCancel as RegionPickerOnCancel,
  _RegionPickerProps as RegionPickerProps,
  _PickerValue as PickerValue,
  _PickerProps as PickerProps,
  _Picker as Picker,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 需要展示的内容
     */
    export type SelectorPickerRange = _SelectorPickerRange;
    /**
     * @desc 当前选择的下标
     */
    export type SelectorPickerValue = _SelectorPickerValue;
    /**
     * @desc 大屏时 UI 类型，支持 picker、select、auto
     */
    export type SelectorPickerSelectorType = _SelectorPickerSelectorType;
    export interface SelectorPickerOnChangeDetail extends _SelectorPickerOnChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface SelectorPickerOnChange extends _SelectorPickerOnChange {}
    /**
     * @desc 取消选择时触发
     */
    export interface SelectorPickerOnCancel extends _SelectorPickerOnCancel {}
    export interface SelectorPickerProps extends _SelectorPickerProps {}
    /**
     * @desc 需要展示的内容
     */
    export type MultiSelectorPickerRange = _MultiSelectorPickerRange;
    /**
     * @desc 当前某列选择的下标
     */
    export type MultiSelectorPickerValueElement = _MultiSelectorPickerValueElement;
    /**
     * @desc 当前每列选择的下标
     */
    export type MultiSelectorPickerValue = _MultiSelectorPickerValue;
    export interface MultiSelectorPickerOnChangeDetail extends _MultiSelectorPickerOnChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface MultiSelectorPickerOnChange extends _MultiSelectorPickerOnChange {}
    export interface MultiSelectorPickerOnColumnchangeDetail
      extends _MultiSelectorPickerOnColumnchangeDetail {}
    /**
     * @desc 某一列 value 改变时触发
     */
    export interface MultiSelectorPickerOnColumnchange extends _MultiSelectorPickerOnColumnchange {}
    /**
     * @desc 取消选择时触发
     */
    export interface MultiSelectorPickerOnCancel extends _MultiSelectorPickerOnCancel {}
    export interface MultiSelectorPickerProps extends _MultiSelectorPickerProps {}
    /**
     * @desc 选中的时间
     * @desc 格式为 hh:mm
     */
    export type TimePickerValue = _TimePickerValue;
    export interface TimePickerOnChangeDetail extends _TimePickerOnChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface TimePickerOnChange extends _TimePickerOnChange {}
    /**
     * @desc 取消选择时触发
     */
    export interface TimePickerOnCancel extends _TimePickerOnCancel {}
    export interface TimePickerProps extends _TimePickerProps {}
    /**
     * @desc 选中的日期
     * @desc 格式为 YYYY-MM-DD
     */
    export type DatePickerValue = _DatePickerValue;
    /**
     * @desc 选择器的粒度
     * @desc year 年
     * @desc month 月
     * @desc day 日
     */
    export type DatePickerFields = _DatePickerFields;
    export interface DatePickerOnChangeDetail extends _DatePickerOnChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface DatePickerOnChange extends _DatePickerOnChange {}
    /**
     * @desc 取消选择时触发
     */
    export interface DatePickerOnCancel extends _DatePickerOnCancel {}
    export interface DatePickerProps extends _DatePickerProps {}
    export type RegionPickerValueElement = _RegionPickerValueElement;
    /**
     * @desc 选中的省市区
     */
    export type RegionPickerValue = _RegionPickerValue;
    /**
     * @desc 选择器层级
     * @desc province 省级
     * @desc city 市级
     * @desc region 区级
     * @desc sub-district 街道级
     */
    export type RegionPickerLevel = _RegionPickerLevel;
    export interface RegionPickerOnChangeDetail extends _RegionPickerOnChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface RegionPickerOnChange extends _RegionPickerOnChange {}
    /**
     * @desc 取消选择时触发
     */
    export interface RegionPickerOnCancel extends _RegionPickerOnCancel {}
    export type PickerValue = _PickerValue;
    export type RegionPickerProps = _RegionPickerProps;
    /**
     * @desc 滚动选择器属性
     */
    export type PickerProps = _PickerProps;
    /**
     * @desc 从底部弹起的滚动选择器，通过 mode 来区分
     */
    export type Picker = _Picker;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 从底部弹起的滚动选择器，通过 mode 来区分
     */
    Picker: _Picker;
  }
}
