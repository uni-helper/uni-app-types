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

interface _SelectorPickerChangeDetail {
  value: _SelectorPickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _SelectorPickerChange {
  (event: CustomEvent<_SelectorPickerChangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _SelectorPickerCancel {
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
  onChange: _SelectorPickerChange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _SelectorPickerCancel;
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

interface _MultiSelectorPickerChangeDetail {
  value: _MultiSelectorPickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _MultiSelectorPickerChange {
  (event: CustomEvent<_MultiSelectorPickerChangeDetail>): void;
}

interface _MultiSelectorPickerColumnchangeDetail {
  column: number;
  value: _MultiSelectorPickerValueElement;
}

/**
 * @desc 某一列 value 改变时触发
 */
interface _MultiSelectorPickerColumnchange {
  (event: CustomEvent<_MultiSelectorPickerColumnchangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _MultiSelectorPickerCancel {
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
  onChange: _MultiSelectorPickerChange;
  /**
   * @desc 某一列 value 改变时触发
   */
  onColumnchange: _MultiSelectorPickerColumnchange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _MultiSelectorPickerCancel;
}

/**
 * @desc 选中的时间
 * @desc 格式为 hh:mm
 */
type _TimePickerValue = 'string';

interface _TimePickerChangeDetail {
  value: _TimePickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _TimePickerChange {
  (event: CustomEvent<_TimePickerChangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _TimePickerCancel {
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
  onChange: _TimePickerChange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _TimePickerCancel;
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

interface _DatePickerChangeDetail {
  value: _DatePickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _DatePickerChange {
  (event: CustomEvent<_DatePickerChangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _DatePickerCancel {
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
  onChange: _DatePickerChange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _DatePickerCancel;
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

interface _RegionPickerChangeDetail {
  value: _RegionPickerValue;
}

/**
 * @desc value 改变时触发
 */
interface _RegionPickerChange {
  (event: CustomEvent<_RegionPickerChangeDetail>): void;
}

/**
 * @desc 取消选择时触发
 */
interface _RegionPickerCancel {
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
  onChange: _RegionPickerChange;
  /**
   * @desc 取消选择时触发
   */
  onCancel: _RegionPickerCancel;
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
  _SelectorPickerChangeDetail as SelectorPickerChangeDetail,
  _SelectorPickerChange as SelectorPickerChange,
  _SelectorPickerCancel as SelectorPickerCancel,
  _SelectorPickerProps as SelectorPickerProps,
  _MultiSelectorPickerRange as MultiSelectorPickerRange,
  _MultiSelectorPickerValueElement as MultiSelectorPickerValueElement,
  _MultiSelectorPickerValue as MultiSelectorPickerValue,
  _MultiSelectorPickerChangeDetail as MultiSelectorPickerChangeDetail,
  _MultiSelectorPickerChange as MultiSelectorPickerChange,
  _MultiSelectorPickerColumnchangeDetail as MultiSelectorPickerColumnchangeDetail,
  _MultiSelectorPickerColumnchange as MultiSelectorPickerColumnchange,
  _MultiSelectorPickerCancel as MultiSelectorPickerCancel,
  _MultiSelectorPickerProps as MultiSelectorPickerProps,
  _TimePickerValue as TimePickerValue,
  _TimePickerChangeDetail as TimePickerChangeDetail,
  _TimePickerChange as TimePickerChange,
  _TimePickerCancel as TimePickerCancel,
  _TimePickerProps as TimePickerProps,
  _DatePickerValue as DatePickerValue,
  _DatePickerFields as DatePickerFields,
  _DatePickerChangeDetail as DatePickerChangeDetail,
  _DatePickerChange as DatePickerChange,
  _DatePickerCancel as DatePickerCancel,
  _DatePickerProps as DatePickerProps,
  _RegionPickerValueElement as RegionPickerValueElement,
  _RegionPickerValue as RegionPickerValue,
  _RegionPickerLevel as RegionPickerLevel,
  _RegionPickerChangeDetail as RegionPickerChangeDetail,
  _RegionPickerChange as RegionPickerChange,
  _RegionPickerCancel as RegionPickerCancel,
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
    export interface SelectorPickerChangeDetail extends _SelectorPickerChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface SelectorPickerChange extends _SelectorPickerChange {}
    /**
     * @desc 取消选择时触发
     */
    export interface SelectorPickerCancel extends _SelectorPickerCancel {}
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
    export interface MultiSelectorPickerChangeDetail extends _MultiSelectorPickerChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface MultiSelectorPickerChange extends MultiSelectorPickerChange {}
    export interface MultiSelectorPickerColumnchangeDetail
      extends _MultiSelectorPickerColumnchangeDetail {}
    /**
     * @desc 某一列 value 改变时触发
     */
    export interface MultiSelectorPickerColumnchange extends _MultiSelectorPickerColumnchange {}
    /**
     * @desc 取消选择时触发
     */
    export interface MultiSelectorPickerCancel extends _MultiSelectorPickerCancel {}
    export interface MultiSelectorPickerProps extends _MultiSelectorPickerProps {}
    /**
     * @desc 选中的时间
     * @desc 格式为 hh:mm
     */
    export type TimePickerValue = _TimePickerValue;
    export interface TimePickerChangeDetail extends _TimePickerChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface TimePickerChange extends _TimePickerChange {}
    /**
     * @desc 取消选择时触发
     */
    export interface TimePickerCancel extends _TimePickerCancel {}
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
    export interface DatePickerChangeDetail extends _DatePickerChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface DatePickerChange extends _DatePickerChange {}
    /**
     * @desc 取消选择时触发
     */
    export interface DatePickerCancel extends _DatePickerCancel {}
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
    export interface RegionPickerChangeDetail extends _RegionPickerChangeDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface RegionPickerChange extends _RegionPickerChange {}
    /**
     * @desc 取消选择时触发
     */
    export interface RegionPickerCancel extends _RegionPickerCancel {}
    export type PickerValue = _PickerValue;
    export type RegionPickerProps = _RegionPickerProps;
    /**
     * @desc 滚动选择器属性
     */
    export interface PickerProps extends _PickerProps {}
    /**
     * @desc 从底部弹起的滚动选择器，通过 mode 来区分
     */
    export type Picker = _Picker;
  }
}
