import { Component } from '../Component';
import { CustomEvent } from '../events';

/** 输入框内容 */
type _TextareaValue = string;

/**
 * 设置键盘右下角按钮的文字
 *
 * send 发送
 *
 * search 搜索
 *
 * next 下一个
 *
 * go 前往
 *
 * done 完成
 */
type _TextareaConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

interface _TextareaOnFocusDetail {
  value: _TextareaValue;
  height: number;
}

/** 聚焦时触发 */
interface _TextareaOnFocus {
  (event: CustomEvent<_TextareaOnFocusDetail>): void;
}

interface _TextareaOnBlurDetail {
  value: _TextareaValue;
  height: number;
}

/** 失焦时触发 */
interface _TextareaOnBlur {
  (event: CustomEvent<_TextareaOnBlurDetail>);
}

interface _TextareaOnLinechangeDetail {
  height: number;
  heightRpx: number;
  lineCount: number;
}

/** 输入框行数变化时触发 */
interface _TextareaOnLinechange {
  (event: CustomEvent<_TextareaOnLinechangeDetail>): void;
}

interface _TextareaOnInputDetail {
  value: _TextareaValue;
  cursor: number;
}

/** 输入时触发 */
interface _TextareaOnInput {
  (event: CustomEvent<_TextareaOnInputDetail>): string | void;
}

interface _TextareaOnConfirmDetail {
  value: _TextareaValue;
}

/** 点击完成按钮时触发 */
interface _TextareaOnConfirm {
  (event: CustomEvent<_TextareaOnConfirmDetail>): void;
}

interface _TextareaOnKeyboardheightchangeDetail {
  height: number;
  duration: number;
}

/** 键盘高度变化时触发 */
interface _TextareaOnKeyboardheightchange {
  (event: CustomEvent<_TextareaOnKeyboardheightchangeDetail>): void;
}

/** 多行输入框属性 */
interface _TextareaProps {
  /** 输入框的内容 */
  value: string;
  /** 输入框为空时占位符 */
  placeholder: string;
  /** 指定 placeholder 的样式 */
  placeholderStyle: string;
  /**
   * 指定 placeholder 的样式类
   *
   * 默认为 textarea-placeholder
   */
  placeholderClass: string;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度
   *
   * 默认为 140
   */
  maxlength: number;
  /**
   * 是否获取焦点
   *
   * 默认为 false
   */
  focus: boolean;
  /**
   * 是否自动聚焦，拉起键盘
   *
   * 默认为 false
   */
  autoFocus: boolean;
  /**
   * 是否自动增高
   *
   * 设置时，样式里的 height 不生效
   *
   * 默认为 false
   */
  autoHeight: boolean;
  /**
   * 如果 textarea 在 position: fixed 的区域内，需要指定为 true
   *
   * 默认为 false
   */
  fixed: boolean;
  /**
   * 指定光标与键盘的距离
   *
   * 取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   *
   * 单位为 px
   *
   * 默认为 0
   */
  cursorSpacing: number;
  /** 指定 focus 时的光标位置 */
  cursor: number;
  /**
   * 设置键盘右下角按钮的文字
   *
   * send 发送
   *
   * search 搜索
   *
   * next 下一个
   *
   * go 前往
   *
   * done 完成
   *
   * 默认为 done
   */
  confirmType: _TextareaConfirmType;
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   *
   * 默认为 false
   */
  confirmHold: boolean;
  /**
   * 是否显示键盘上方带有”完成“按钮那一栏
   *
   * 默认为 true
   */
  showConfirmBar: boolean;
  /**
   * 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用
   *
   * 默认为 -1
   */
  selectionStart: number;
  /**
   * 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用
   *
   * 默认为 -1
   */
  selectionEnd: number;
  /**
   * 键盘弹起时，是否自动上推页面
   *
   * 默认为 true
   */
  adjustPosition: boolean;
  /**
   * 是否去掉 iOS 下的默认内边距
   *
   * 默认为 false
   */
  disableDefaultPadding: boolean;
  /**
   * 聚焦时点击页面的时候是否不收起键盘
   *
   * 默认为 false
   */
  holdKeyboard: boolean;
  /**
   * 键盘收起时是否自动失焦
   *
   * 默认为 false
   */
  autoBlur: boolean;
  /**
   * 是否忽略组件内对文本合成系统事件的处理
   *
   * 为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件
   *
   * 默认为 true
   */
  ignoreCompositionEvent: boolean;
  /** 聚焦时触发 */
  onFocus: _TextareaOnFocus;
  /** 失焦时触发 */
  onBlur: _TextareaOnBlur;
  /** 输入框行数变化时触发 */
  onLinechange: _TextareaOnLinechange;
  /** 输入时触发 */
  onInput: _TextareaOnInput;
  /** 点击完成按钮时触发 */
  onConfirm: _TextareaOnConfirm;
  /** 键盘高度变化时触发 */
  onKeyboardheightchange: _TextareaOnKeyboardheightchange;
}

/** 多行输入框 */
type _Textarea = Component<Partial<_TextareaProps>>;

export {
  _TextareaValue as TextareaValue,
  _TextareaConfirmType as TextareaConfirmType,
  _TextareaOnFocusDetail as TextareaOnFocusDetail,
  _TextareaOnFocus as TextareaOnFocus,
  _TextareaOnBlurDetail as TextareaOnBlurDetail,
  _TextareaOnBlur as TextareaOnBlur,
  _TextareaOnLinechangeDetail as TextareaOnLinechangeDetail,
  _TextareaOnLinechange as TextareaOnLinechange,
  _TextareaOnInputDetail as TextareaOnInputDetail,
  _TextareaOnInput as TextareaOnInput,
  _TextareaOnConfirmDetail as TextareaOnConfirmDetail,
  _TextareaOnConfirm as TextareaOnConfirm,
  _TextareaOnKeyboardheightchangeDetail as TextareaOnKeyboardheightchangeDetail,
  _TextareaOnKeyboardheightchange as TextareaOnKeyboardheightchange,
  _TextareaProps as TextareaProps,
  _Textarea as Textarea,
};

declare global {
  namespace UniHelper {
    /** 输入框内容 */
    export type TextareaValue = _TextareaValue;
    /**
     * 设置键盘右下角按钮的文字
     *
     * send 发送
     *
     * search 搜索
     *
     * next 下一个
     *
     * go 前往
     *
     * done 完成
     */
    export type TextareaConfirmType = _TextareaConfirmType;
    export interface TextareaOnFocusDetail extends _TextareaOnFocusDetail {}
    /** 聚焦时触发 */
    export interface TextareaOnFocus extends _TextareaOnFocus {}
    export interface TextareaOnBlurDetail extends _TextareaOnBlurDetail {}
    /** 失焦时触发 */
    export interface TextareaOnBlur extends _TextareaOnBlur {}
    export interface TextareaOnLinechangeDetail extends _TextareaOnLinechangeDetail {}
    /** 输入框行数变化时触发 */
    export interface TextareaOnLinechange extends _TextareaOnLinechange {}
    export interface TextareaOnInputDetail extends _TextareaOnInputDetail {}
    /** 输入时触发 */
    export interface TextareaOnInput extends _TextareaOnInput {}
    export interface TextareaOnConfirmDetail extends _TextareaOnConfirmDetail {}
    /** 点击完成按钮时触发 */
    export interface TextareaOnConfirm extends _TextareaOnConfirm {}
    export interface TextareaOnKeyboardheightchangeDetail
      extends _TextareaOnKeyboardheightchangeDetail {}
    /** 键盘高度变化时触发 */
    export interface TextareaOnKeyboardheightchange extends _TextareaOnKeyboardheightchange {}
    /** 多行输入框属性 */
    export interface TextareaProps extends _TextareaProps {}
    /** 多行输入框 */
    export type Textarea = _Textarea;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 多行输入框 */
    Textarea: _Textarea;
  }
}
