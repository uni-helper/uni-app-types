import { Component, AnyRecord } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 编辑器初始化完成时触发
 */
interface _EditorReady {
  (event: BaseEvent): void;
}

interface _EditorFocusDetail {
  html: string;
  text: string;
  delta: AnyRecord;
}

/**
 * @desc 编辑器聚焦时触发
 */
interface _EditorFocus {
  (event: CustomEvent<_EditorFocusDetail>): void;
}

interface _EditorBlurDetail {
  html: string;
  text: string;
  delta: AnyRecord;
}

/**
 * @desc 编辑器失焦时触发
 */
interface _EditorBlur {
  (event: CustomEvent<_EditorBlurDetail>): void;
}

interface _EditorInputDetail {
  html: string;
  text: string;
  delta: AnyRecord;
}

/**
 * @desc 编辑器内容改变时触发
 */
interface _EditorInput {
  (event: CustomEvent<_EditorInputDetail>): void;
}

/**
 * @desc 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
 */
interface _EditorStatuschange {
  (event: BaseEvent): void;
}

/**
 * @desc 编辑器属性
 */
interface _EditorProps {
  /**
   * @desc 是否只读
   * @desc 默认为 false
   */
  readOnly: boolean;
  /**
   * @desc 提示信息
   */
  placeholder: string;
  /**
   * @desc 点击图片时是否显示图片大小控件
   * @desc 默认为 false
   */
  showImgSize: boolean;
  /**
   * @desc 点击图片时是否显示工具栏控件
   * @desc 默认为 false
   */
  showImgToolbar: boolean;
  /**
   * @desc 点击图片时是否显示修改尺寸控件
   * @desc 默认为 false
   */
  showImgResize: string;
  /**
   * @desc 编辑器初始化完成时触发
   */
  onReady: _EditorReady;
  /**
   * @desc 编辑器聚焦时触发
   */
  onFocus: _EditorFocus;
  /**
   * @desc 编辑器失焦时触发
   */
  onBlur: _EditorBlur;
  /**
   * @desc 编辑器内容改变时触发
   */
  onInput: _EditorInput;
  /**
   * @desc 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
   */
  onStatuschange: _EditorStatuschange;
}

/**
 * @desc 富文本编辑器，可以对图片、文字进行编辑和混排
 * @desc 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
 * @desc 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
 * @desc 图片控件仅初始化时设置有效
 */
type _Editor = Component<Partial<_EditorProps>>;

export {
  _EditorReady as EditorReady,
  _EditorFocusDetail as EditorFocusDetail,
  _EditorFocus as EditorFocus,
  _EditorBlurDetail as EditorBlurDetail,
  _EditorBlur as EditorBlur,
  _EditorInputDetail as EditorInputDetail,
  _EditorInput as EditorInput,
  _EditorStatuschange as EditorStatuschange,
  _EditorProps as EditorProps,
  _Editor as Editor,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 编辑器初始化完成时触发
     */
    export interface EditorReady extends _EditorReady {}
    export interface EditorFocusDetail extends _EditorFocusDetail {}
    /**
     * @desc 编辑器聚焦时触发
     */
    export interface EditorFocus extends _EditorFocus {}
    export interface EditorBlurDetail extends _EditorBlurDetail {}
    /**
     * @desc 编辑器失焦时触发
     */
    export interface EditorBlur extends _EditorBlur {}
    export interface EditorInputDetail extends _EditorInputDetail {}
    /**
     * @desc 编辑器内容改变时触发
     */
    export interface EditorInput extends _EditorInput {}
    /**
     * @desc 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
     */
    export interface EditorStatuschange extends _EditorStatuschange {}
    /**
     * @desc 编辑器属性
     */
    export interface EditorProps extends _EditorProps {}
    /**
     * @desc 富文本编辑器，可以对图片、文字进行编辑和混排
     * @desc 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
     * @desc 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
     * @desc 图片控件仅初始化时设置有效
     */
    export type Editor = _Editor;
  }
}
