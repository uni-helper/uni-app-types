/**
 * @desc 触发事件的组件的一些属性值集合
 */
export interface BaseEventTarget {
  /**
   * @desc 事件源组件的id
   */
  id?: string;
  /**
   * @desc 事件源组件上由 data- 开头的自定义属性组成的集合
   */
  dataset?: Record<string, any>;
  [key: string]: any;
}

/**
 * @desc 当前组件的一些属性值集合
 */
export interface BaseEventCurrentTarget extends BaseEventTarget {}

/**
 * @desc 基础事件
 */
export interface BaseEvent {
  /**
   * @desc 事件类型
   */
  type?: string;
  /**
   * @desc 事件生成时的时间戳
   */
  timeStamp?: number;
  /**
   * @desc 触发事件的组件的一些属性值集合
   */
  target?: BaseEventTarget<T>;
  /**
   * @desc 当前组件的一些属性值集合
   */
  currentTarget?: BaseEventCurrentTarget;
  /**
   * @desc 事件标记数据
   */
  mark?: Record<string, any>;
  [key: string]: any;
}

/**
 * @desc 自定义事件
 */
export interface CustomEvent<T = Record<string, any>> extends BaseEvent {
  /**
   * @desc 额外信息
   */
  detail?: T;
  [key: string]: any;
}

/**
 * @desc 当前停留在屏幕中的触摸点信息
 */
export interface TouchEventTouch {
  /**
   * @desc 标志符
   */
  identifier?: number;
  /**
   * @desc 距离文档左上角的横向距离
   */
  pageX?: number;
  /**
   * @desc 距离文档左上角的纵向距离
   */
  pageY?: number;
  /**
   * @desc 距离页面可显示区域（屏幕除去导航条）左上角的横向距离
   */
  clientX?: number;
  /**
   * @desc 距离页面可显示区域（屏幕除去导航条）左上角的纵向距离
   */
  clientY?: number;
}

/**
 * @desc 当前停留在 canvas 中的触摸点信息
 */
export interface TouchEventCanvasTouch {
  /**
   * @desc 标志符
   */
  identifier?: number;
  /**
   * @desc 距离 canvas 左上角的横向距离
   */
  x?: number;
  /**
   * @desc 距离 canvas 左上角的纵向距离
   */
  y?: number;
}

/**
 * @desc 当前变化的屏幕触摸点信息
 */
export interface TouchEventChangedTouch extends TouchEventTouch {}

/**
 * @desc 当前变化的 canvas 触摸点信息
 */
export interface TouchEventCanvasChangedTouch extends TouchEventCanvasTouch {}

/**
 * @desc 触摸事件
 */
export interface TouchEvent<T = TouchEventTouch, D = TouchEventChangedTouch> extends BaseEvent {
  touches: T[];
  changedTouches: D[];
}
