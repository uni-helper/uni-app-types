import { Component, AnyRecord } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/** 需要展示的内容 */
type _SelectorPickerRange = string[] | AnyRecord[];

/** 当前选择的下标 */
type _SelectorPickerValue = number;

/** 大屏时 UI 类型，支持 picker、select、auto */
type _SelectorPickerSelectorType = 'auto' | 'picker' | 'select';

interface _SelectorPickerOnChangeDetail {
  value: _SelectorPickerValue;
}

/** value 改变时触发 */
interface _SelectorPickerOnChange {
  (event: CustomEvent<_SelectorPickerOnChangeDetail>, ...params: any[]): void;
}

/** 取消选择时触发 */
interface _SelectorPickerOnCancel {
  (event: BaseEvent, ...params: any[]): void;
}

type _SelectorPickerProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /** 设置为普通选择器 */
  mode?: 'selector';
  /**
   * 需要展示的内容
   *
   * 默认为 []
   */
  range: _SelectorPickerRange;
  /** 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 */
  rangeKey: string;
  /**
   * 当前选择的下标
   *
   * 默认为 0
   */
  value: _SelectorPickerValue;
  /**
   * 大屏时 UI 类型，支持 picker、select、auto
   *
   * 默认在 iPad 以 picker 样式展示
   *
   * 默认在 PC 以 select 样式展示
   *
   * 默认为 auto
   */
  selectorType: _SelectorPickerSelectorType;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /** value 改变时触发 */
  onChange: _SelectorPickerOnChange;
  /** 取消选择时触发 */
  onCancel: _SelectorPickerOnCancel;
}>;

/** 需要展示的内容 */
type _MultiSelectorPickerRange = string[][] | AnyRecord[][];

/** 当前某列选择的下标 */
type _MultiSelectorPickerValueElement = number;

/** 当前每列选择的下标 */
type _MultiSelectorPickerValue = _MultiSelectorPickerValueElement[];

interface _MultiSelectorPickerOnChangeDetail {
  value: _MultiSelectorPickerValue;
}

/** value 改变时触发 */
interface _MultiSelectorPickerOnChange {
  (event: CustomEvent<_MultiSelectorPickerOnChangeDetail>, ...params: any[]): void;
}

interface _MultiSelectorPickerOnColumnchangeDetail {
  column: number;
  value: _MultiSelectorPickerValueElement;
}

/** 某一列 value 改变时触发 */
interface _MultiSelectorPickerOnColumnchange {
  (event: CustomEvent<_MultiSelectorPickerOnColumnchangeDetail>, ...params: any[]): void;
}

/** 取消选择时触发 */
interface _MultiSelectorPickerOnCancel {
  (event: BaseEvent, ...params: any[]): void;
}

type _MultiSelectorPickerProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /** 设置为多列选择器 */
  mode: 'multiSelector';
  /**
   * 需要展示的内容
   *
   * 默认为 []
   */
  range: _MultiSelectorPickerRange;
  /** 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 */
  rangeKey: string;
  /**
   * 当前每列选择的下标
   *
   * 默认为列数个 0 组成的数组
   */
  value: _MultiSelectorPickerValue;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /** value 改变时触发 */
  onChange: _MultiSelectorPickerOnChange;
  /** 某一列 value 改变时触发 */
  onColumnchange: _MultiSelectorPickerOnColumnchange;
  /** 取消选择时触发 */
  onCancel: _MultiSelectorPickerOnCancel;
}>;

/**
 * 选中的时间
 *
 * 格式为 hh:mm
 */
type _TimePickerValue = string;

interface _TimePickerOnChangeDetail {
  value: _TimePickerValue;
}

/** value 改变时触发 */
interface _TimePickerOnChange {
  (event: CustomEvent<_TimePickerOnChangeDetail>, ...params: any[]): void;
}

/** 取消选择时触发 */
interface _TimePickerOnCancel {
  (event: BaseEvent, ...params: any[]): void;
}

type _TimePickerProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /** 设置为时间选择器 */
  mode: 'time';
  /**
   * 选中的日期
   *
   * 格式为 hh:mm
   */
  value: _TimePickerValue;
  /**
   * 有效日期范围的开始
   *
   * 格式为 hh:mm
   */
  start: _TimePickerValue;
  /**
   * 有效日期范围的结束
   *
   * 格式为 hh:mm
   */
  end: _TimePickerValue;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /** value 改变时触发 */
  onChange: _TimePickerOnChange;
  /** 取消选择时触发 */
  onCancel: _TimePickerOnCancel;
}>;

/**
 * 选中的日期
 *
 * 格式为 YYYY-MM-DD
 */
type _DatePickerValue = string;

/**
 * 选择器的粒度
 *
 * year 年
 *
 * month 月
 *
 * day 日
 */
type _DatePickerFields = 'year' | 'month' | 'day';

interface _DatePickerOnChangeDetail {
  value: _DatePickerValue;
}

/** value 改变时触发 */
interface _DatePickerOnChange {
  (event: CustomEvent<_DatePickerOnChangeDetail>, ...params: any[]): void;
}

/** 取消选择时触发 */
interface _DatePickerOnCancel {
  (event: BaseEvent, ...params: any[]): void;
}

type _DatePickerProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /** 设置为日期选择器 */
  mode: 'date';
  /**
   * 选中的日期
   *
   * 格式为 YYYY-MM-DD
   */
  value: _DatePickerValue;
  /**
   * 有效日期范围的开始
   *
   * 格式为 YYYY-MM-DD
   */
  start: _DatePickerValue;
  /**
   * 有效日期范围的结束
   *
   * 格式为 YYYY-MM-DD
   */
  end: _DatePickerValue;
  /**
   * 选择器的粒度
   *
   * year 年
   *
   * month 月
   *
   * day 日
   *
   * 默认为 day
   */
  fields: _DatePickerFields;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /** value 改变时触发 */
  onChange: _DatePickerOnChange;
  /** 取消选择时触发 */
  onCancel: _DatePickerOnCancel;
}>;

type _RegionPickerValueElement = string;

/** 选中的省市区 */
type _RegionPickerValue = _RegionPickerValueElement[];

/**
 * 选择器层级
 *
 * province 省级
 *
 * city 市级
 *
 * region 区级
 *
 * sub-district 街道级
 */
type _RegionPickerLevel = 'province' | 'city' | 'region' | 'sub-district';

interface _RegionPickerOnChangeDetail {
  value: _RegionPickerValue;
}

/** value 改变时触发 */
interface _RegionPickerOnChange {
  (event: CustomEvent<_RegionPickerOnChangeDetail>, ...params: any[]): void;
}

/** 取消选择时触发 */
interface _RegionPickerOnCancel {
  (event: BaseEvent, ...params: any[]): void;
}

type _RegionPickerProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /** 设置为省市区选择器 */
  mode: 'region';
  /**
   * 选中的省市区
   *
   * 默认选中每一列第一个值
   */
  value: _RegionPickerValue;
  /** 可为每一列的顶部添加一个自定义的项 */
  customItem: string;
  /**
   * 选择器层级
   *
   * province 省级
   *
   * city 市级
   *
   * region 区级
   *
   * sub-district 街道级
   */
  level: _RegionPickerLevel;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /** value 改变时触发 */
  onChange: _RegionPickerOnChange;
  /** 取消选择时触发 */
  onCancel: _RegionPickerOnCancel;
}>;

type _PickerValue =
  | _SelectorPickerValue
  | _MultiSelectorPickerValue
  | _TimePickerValue
  | _DatePickerValue
  | _RegionPickerValue;

/** 滚动选择器属性 */
type _PickerProps =
  | _SelectorPickerProps
  | _MultiSelectorPickerProps
  | _TimePickerProps
  | _DatePickerProps
  | _RegionPickerProps;

/** 从底部弹起的滚动选择器，通过 mode 来区分 */
type _Picker = Component<_PickerProps>;

/** 从底部弹起的滚动选择器实例 */
type _PickerInstance = InstanceType<_Picker>;

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
  _PickerInstance as PickerInstance,
};

declare global {
  namespace UniHelper {
    /** 需要展示的内容 */
    export type SelectorPickerRange = _SelectorPickerRange;
    /** 当前选择的下标 */
    export type SelectorPickerValue = _SelectorPickerValue;
    /** 大屏时 UI 类型，支持 picker、select、auto */
    export type SelectorPickerSelectorType = _SelectorPickerSelectorType;
    export interface SelectorPickerOnChangeDetail extends _SelectorPickerOnChangeDetail {}
    /** value 改变时触发 */
    export interface SelectorPickerOnChange extends _SelectorPickerOnChange {}
    /** 取消选择时触发 */
    export interface SelectorPickerOnCancel extends _SelectorPickerOnCancel {}
    export type SelectorPickerProps = _SelectorPickerProps;
    /** 需要展示的内容 */
    export type MultiSelectorPickerRange = _MultiSelectorPickerRange;
    /** 当前某列选择的下标 */
    export type MultiSelectorPickerValueElement = _MultiSelectorPickerValueElement;
    /** 当前每列选择的下标 */
    export type MultiSelectorPickerValue = _MultiSelectorPickerValue;
    export interface MultiSelectorPickerOnChangeDetail extends _MultiSelectorPickerOnChangeDetail {}
    /** value 改变时触发 */
    export interface MultiSelectorPickerOnChange extends _MultiSelectorPickerOnChange {}
    export interface MultiSelectorPickerOnColumnchangeDetail
      extends _MultiSelectorPickerOnColumnchangeDetail {}
    /** 某一列 value 改变时触发 */
    export interface MultiSelectorPickerOnColumnchange extends _MultiSelectorPickerOnColumnchange {}
    /** 取消选择时触发 */
    export interface MultiSelectorPickerOnCancel extends _MultiSelectorPickerOnCancel {}
    export type MultiSelectorPickerProps = _MultiSelectorPickerProps;
    /**
     * 选中的时间
     *
     * 格式为 hh:mm
     */
    export type TimePickerValue = _TimePickerValue;
    export interface TimePickerOnChangeDetail extends _TimePickerOnChangeDetail {}
    /** value 改变时触发 */
    export interface TimePickerOnChange extends _TimePickerOnChange {}
    /** 取消选择时触发 */
    export interface TimePickerOnCancel extends _TimePickerOnCancel {}
    export type TimePickerProps = _TimePickerProps;
    /**
     * 选中的日期
     *
     * 格式为 YYYY-MM-DD
     */
    export type DatePickerValue = _DatePickerValue;
    /**
     * 选择器的粒度
     *
     * year 年
     *
     * month 月
     *
     * day 日
     */
    export type DatePickerFields = _DatePickerFields;
    export interface DatePickerOnChangeDetail extends _DatePickerOnChangeDetail {}
    /** value 改变时触发 */
    export interface DatePickerOnChange extends _DatePickerOnChange {}
    /** 取消选择时触发 */
    export interface DatePickerOnCancel extends _DatePickerOnCancel {}
    export type DatePickerProps = _DatePickerProps;
    export type RegionPickerValueElement = _RegionPickerValueElement;
    /** 选中的省市区 */
    export type RegionPickerValue = _RegionPickerValue;
    /**
     * 选择器层级
     *
     * province 省级
     *
     * city 市级
     *
     * region 区级
     *
     * sub-district 街道级
     */
    export type RegionPickerLevel = _RegionPickerLevel;
    export interface RegionPickerOnChangeDetail extends _RegionPickerOnChangeDetail {}
    /** value 改变时触发 */
    export interface RegionPickerOnChange extends _RegionPickerOnChange {}
    /** 取消选择时触发 */
    export interface RegionPickerOnCancel extends _RegionPickerOnCancel {}
    export type PickerValue = _PickerValue;
    export type RegionPickerProps = _RegionPickerProps;
    /** 滚动选择器属性 */
    export type PickerProps = _PickerProps;
    /** 从底部弹起的滚动选择器，通过 mode 来区分 */
    export type Picker = _Picker;
    /** 从底部弹起的滚动选择器实例 */
    export type PickerInstance = _PickerInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 从底部弹起的滚动选择器，通过 mode 来区分 */
    Picker: _Picker;
  }
}
