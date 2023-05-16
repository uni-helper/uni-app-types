import { Component, AnyRecord } from '../component';
import { BaseEvent, CustomEvent } from '../events';

type _EditorOnReadyEvent = BaseEvent;

/** 编辑器初始化完成时触发 */
interface _EditorOnReady {
  (event: _EditorOnReadyEvent): void;
}

interface _EditorOnFocusDetail {
  html: string;
  text: string;
  delta: AnyRecord;
}

type _EditorOnFocusEvent = CustomEvent<_EditorOnFocusDetail>;

/** 编辑器聚焦时触发 */
interface _EditorOnFocus {
  (event: _EditorOnFocusEvent): void;
}

interface _EditorOnBlurDetail {
  html: string;
  text: string;
  delta: AnyRecord;
}

type _EditorOnBlurEvent = CustomEvent<_EditorOnBlurDetail>;

/** 编辑器失焦时触发 */
interface _EditorOnBlur {
  (event: _EditorOnBlurEvent): void;
}

interface _EditorOnInputDetail {
  html: string;
  text: string;
  delta: AnyRecord;
}

type _EditorOnInputEvent = CustomEvent<_EditorOnInputDetail>;

/** 编辑器内容改变时触发 */
interface _EditorOnInput {
  (event: _EditorOnInputEvent): void;
}

type _EditorOnStatuschangeEvent = BaseEvent;

/** 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 */
interface _EditorOnStatuschange {
  (event: _EditorOnStatuschangeEvent): void;
}

/** 编辑器属性 */
type _EditorProps = Partial<{
  /**
   * 是否只读
   *
   * 默认为 false
   */
  readOnly: boolean;
  /** 提示信息 */
  placeholder: string;
  /**
   * 点击图片时是否显示图片大小控件
   *
   * 默认为 false
   */
  showImgSize: boolean;
  /**
   * 点击图片时是否显示工具栏控件
   *
   * 默认为 false
   */
  showImgToolbar: boolean;
  /**
   * 点击图片时是否显示修改尺寸控件
   *
   * 默认为 false
   */
  showImgResize: string;
  /** 编辑器初始化完成时触发 */
  onReady: _EditorOnReady;
  /** 编辑器聚焦时触发 */
  onFocus: _EditorOnFocus;
  /** 编辑器失焦时触发 */
  onBlur: _EditorOnBlur;
  /** 编辑器内容改变时触发 */
  onInput: _EditorOnInput;
  /** 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 */
  onStatuschange: _EditorOnStatuschange;
}>;

/**
 * 富文本编辑器，可以对图片、文字进行编辑和混排
 *
 * 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
 *
 * 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
 *
 * 图片控件仅初始化时设置有效
 */
type _Editor = Component<_EditorProps>;

/** 富文本编辑器实例 */
type _EditorInstance = InstanceType<_Editor>;

export {
  _EditorOnReadyEvent as EditorOnReadyEvent,
  _EditorOnReady as EditorOnReady,
  _EditorOnFocusDetail as EditorOnFocusDetail,
  _EditorOnFocusEvent as EditorOnFocusEvent,
  _EditorOnFocus as EditorOnFocus,
  _EditorOnBlurDetail as EditorOnBlurDetail,
  _EditorOnBlurEvent as EditorOnBlurEvent,
  _EditorOnBlur as EditorOnBlur,
  _EditorOnInputDetail as EditorOnInputDetail,
  _EditorOnInputEvent as EditorOnInputEvent,
  _EditorOnInput as EditorOnInput,
  _EditorOnStatuschangeEvent as EditorOnStatuschangeEvent,
  _EditorOnStatuschange as EditorOnStatuschange,
  _EditorProps as EditorProps,
  _Editor as Editor,
  _EditorInstance as EditorInstance,
};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 富文本编辑器，可以对图片、文字进行编辑和混排
     *
     * 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
     *
     * 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
     *
     * 图片控件仅初始化时设置有效
     */
    Editor: _Editor;
  }
}

declare global {
  namespace UniHelper {
    export type EditorOnReadyEvent = _EditorOnReadyEvent;
    /** 编辑器初始化完成时触发 */
    export interface EditorOnReady extends _EditorOnReady {}
    export interface EditorOnFocusDetail extends _EditorOnFocusDetail {}
    export type EditorOnFocusEvent = _EditorOnFocusEvent;
    /** 编辑器聚焦时触发 */
    export interface EditorOnFocus extends _EditorOnFocus {}
    export interface EditorOnBlurDetail extends _EditorOnBlurDetail {}
    export type EditorOnBlurEvent = _EditorOnBlurEvent;
    /** 编辑器失焦时触发 */
    export interface EditorOnBlur extends _EditorOnBlur {}
    export interface EditorOnInputDetail extends _EditorOnInputDetail {}
    export type EditorOnInputEvent = _EditorOnInputEvent;
    /** 编辑器内容改变时触发 */
    export interface EditorOnInput extends _EditorOnInput {}
    export type EditorOnStatuschangeEvent = _EditorOnStatuschangeEvent;
    /** 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 */
    export interface EditorOnStatuschange extends _EditorOnStatuschange {}
    /** 编辑器属性 */
    export type EditorProps = _EditorProps;
    /**
     * 富文本编辑器，可以对图片、文字进行编辑和混排
     *
     * 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
     *
     * 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
     *
     * 图片控件仅初始化时设置有效
     */
    export type Editor = _Editor;
    /** 富文本编辑器实例 */
    export type EditorInstance = _EditorInstance;
  }
}
