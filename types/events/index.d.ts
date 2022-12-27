// https://github.com/wechat-miniprogram/api-typings/blob/5dab2fb5f471f683ad297de32c0e33ede295dcff/types/wx/lib.wx.event.d.ts
import { AnyRecord } from '../Component';

/** 组件的一些属性值集合 */
interface _EventTarget<Dataset extends AnyRecord = AnyRecord> {
  /** 事件源组件的id */
  id?: string;
  /** 当前组件的类型 */
  tagName?: string;
  /** 事件源组件上由 data- 开头的自定义属性组成的集合 */
  dataset?: Dataset;
  /** 距离页面顶部的偏移量 */
  offsetTop: number;
  /** 距离页面左边的偏移量 */
  offsetLeft: number;
  [key: string]: any;
}

/** 基础事件 */
interface _BaseEvent<
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> {
  /** 事件类型 */
  type?: string;
  /** 事件生成时的时间戳 */
  timeStamp?: number;
  /** 事件冒泡路径上所有由 mark: 开头的自定义属性组成的集合 */
  mark?: Mark;
  /** 触发事件的源组件的一些属性值集合 */
  target?: _EventTarget<TargetDataset>;
  /** 事件绑定的当前组件的一些属性值集合 */
  currentTarget?: _EventTarget<CurrentTargetDataset>;
  [key: string]: any;
}

/** 自定义事件 */
interface _CustomEvent<
  Detail extends AnyRecord = AnyRecord,
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> extends _BaseEvent<Mark, CurrentTargetDataset, TargetDataset> {
  /** 额外信息 */
  detail?: Detail;
  [key: string]: any;
}

/** 当前停留在屏幕中的触摸点信息 */
interface _TouchDetail {
  /** 标志符 */
  identifier?: number;
  /** 距离文档左上角的横向距离 */
  pageX?: number;
  /** 距离文档左上角的纵向距离 */
  pageY?: number;
  /** 距离页面可显示区域（屏幕除去导航条）左上角的横向距离 */
  clientX?: number;
  /** 距离页面可显示区域（屏幕除去导航条）左上角的纵向距离 */
  clientY?: number;
}

/** 当前停留在 canvas 中的触摸点信息 */
interface _TouchCanvasDetail {
  /** 标志符 */
  identifier?: number;
  /** 距离 canvas 左上角的横向距离 */
  x?: number;
  /** 距离 canvas 左上角的纵向距离 */
  y?: number;
}

/** 触摸事件 */
interface _BaseTouchEvent<
  Detail extends AnyRecord = AnyRecord,
  T extends _TouchDetail | _TouchCanvasDetail = _TouchDetail,
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> extends _CustomEvent<Detail, Mark, CurrentTargetDataset, TargetDataset> {
  /** 当前停留在屏幕中的触摸点信息的数组 */
  touches: T[];
  /** 当前变化的触摸点信息的数组 */
  changedTouches: T[];
}

/** 触摸事件响应 */
interface _TouchEvent<
  Detail extends AnyRecord = AnyRecord,
  Mark extends AnyRecord = AnyRecord,
  CurrentTargetDataset extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = CurrentTargetDataset,
> extends _BaseTouchEvent<Detail, _TouchDetail, Mark, CurrentTargetDataset, TargetDataset> {}

/** Canvas 触摸事件响应 */
interface _TouchCanvasEvent<
  Mark extends AnyRecord = AnyRecord,
  TargetDataset extends AnyRecord = AnyRecord,
> extends _BaseTouchEvent<never, _TouchCanvasDetail, Mark, never, TargetDataset> {
  currentTarget: never;
}

export {
  _EventTarget as EventTarget,
  _BaseEvent as BaseEvent,
  _CustomEvent as CustomEvent,
  _TouchDetail as TouchDetail,
  _TouchCanvasDetail as TouchCanvasDetail,
  _BaseTouchEvent as BaseTouchEvent,
  _TouchEvent as TouchEvent,
  _TouchCanvasEvent as TouchCanvasEvent,
};

declare global {
  namespace UniHelper {
    /** 组件的一些属性值集合 */
    export interface EventTarget extends _EventTarget {}
    /** 基础事件 */
    export interface BaseEvent extends _BaseEvent {}
    /** 自定义事件 */
    export interface CustomEvent extends _CustomEvent {}
    /** 当前停留在屏幕中的触摸点信息 */
    export interface TouchDetail extends _TouchDetail {}
    /** 当前停留在 canvas 中的触摸点信息 */
    export interface TouchCanvasDetail extends _TouchCanvasDetail {}
    /** 触摸事件 */
    export interface BaseTouchEvent extends _BaseTouchEvent {}
    /** 触摸事件响应 */
    export interface TouchEvent extends _TouchEvent {}
    /** Canvas 触摸事件响应 */
    export interface TouchCanvasEvent extends _TouchCanvasEvent {}
  }
}
