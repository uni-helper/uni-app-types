import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 输入框内容
 */
type _TextareaValue = string;

/**
 * @desc 设置键盘右下角按钮的文字
 * @desc send 发送
 * @desc search 搜索
 * @desc next 下一个
 * @desc go 前往
 * @desc done 完成
 */
type _TextareaConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

interface _TextareaFocusDetail {
  value: _TextareaValue;
  height: number;
}

/**
 * @desc 聚焦时触发
 */
interface _TextareaFocus {
  (event: CustomEvent<_TextareaFocusDetail>): void;
}

interface _TextareaBlurDetail {
  value: _TextareaValue;
  height: number;
}

/**
 * @desc 失焦时触发
 */
interface _TextareaBlur {
  (event: CustomEvent<_TextareaBlurDetail>);
}

interface _TextareaLinechangeDetail {
  height: number;
  heightRpx: number;
  lineCount: number;
}

/**
 * @desc 输入框行数变化时触发
 */
interface _TextareaLinechange {
  (event: CustomEvent<_TextareaLinechangeDetail>): void;
}

interface _TextareaInputDetail {
  value: _TextareaValue;
  cursor: number;
}

/**
 * @desc 输入时触发
 */
interface _TextareaInput {
  (event: CustomEvent<_TextareaInputDetail>): string | void;
}

interface _TextareaConfirmDetail {
  value: _TextareaValue;
}

/**
 * @desc 点击完成按钮时触发
 */
interface _TextareaConfirm {
  (event: CustomEvent<_TextareaConfirmDetail>): void;
}

interface _TextareaKeyboardheightchangeDetail {
  height: number;
  duration: number;
}

/**
 * @desc 键盘高度变化时触发
 */
interface _TextareaKeyboardheightchange {
  (event: CustomEvent<_TextareaKeyboardheightchangeDetail>): void;
}

/**
 * @desc 多行输入框属性
 */
interface _TextareaProps {
  /**
   * @desc 输入框的内容
   */
  value: string;
  /**
   * @desc 输入框为空时占位符
   */
  placeholder: string;
  /**
   * @desc 指定 placeholder 的样式
   */
  placeholderStyle: string;
  /**
   * @desc 指定 placeholder 的样式类
   * @desc 默认为 textarea-placeholder
   */
  placeholderClass: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 最大输入长度，设置为 -1 的时候不限制最大长度
   * @desc 默认为 140
   */
  maxlength: number;
  /**
   * @desc 是否获取焦点
   * @desc 默认为 false
   */
  focus: boolean;
  /**
   * @desc 是否自动聚焦，拉起键盘
   * @desc 默认为 false
   */
  autoFocus: boolean;
  /**
   * @desc 是否自动增高
   * @desc 设置时，样式里的 height 不生效
   * @desc 默认为 false
   */
  autoHeight: boolean;
  /**
   * @desc 如果 textarea 在 position: fixed 的区域内，需要指定为 true
   * @desc 默认为 false
   */
  fixed: boolean;
  /**
   * @desc 指定光标与键盘的距离
   * @desc 取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   * @desc 单位为 px
   * @desc 默认为 0
   */
  cursorSpacing: number;
  /**
   * @desc 指定 focus 时的光标位置
   */
  cursor: number;
  /**
   * @desc 设置键盘右下角按钮的文字
   * @desc send 发送
   * @desc search 搜索
   * @desc next 下一个
   * @desc go 前往
   * @desc done 完成
   * @desc 默认为 done
   */
  confirmType: _TextareaConfirmType;
  /**
   * @desc 点击键盘右下角按钮时是否保持键盘不收起
   * @desc 默认为 false
   */
  confirmHold: boolean;
  /**
   * @desc 是否显示键盘上方带有”完成“按钮那一栏
   * @desc 默认为 true
   */
  showConfirmBar: boolean;
  /**
   * @desc 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用
   * @desc 默认为 -1
   */
  selectionStart: number;
  /**
   * @desc 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用
   * @desc 默认为 -1
   */
  selectionEnd: number;
  /**
   * @desc 键盘弹起时，是否自动上推页面
   * @desc 默认为 true
   */
  adjustPosition: boolean;
  /**
   * @desc 是否去掉 iOS 下的默认内边距
   * @desc 默认为 false
   */
  disableDefaultPadding: boolean;
  /**
   * @desc 聚焦时点击页面的时候是否不收起键盘
   * @desc 默认为 false
   */
  holdKeyboard: boolean;
  /**
   * @desc 键盘收起时是否自动失焦
   * @desc 默认为 false
   */
  autoBlur: boolean;
  /**
   * @desc 是否忽略组件内对文本合成系统事件的处理
   * @desc 为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件
   * @desc 默认为 true
   */
  ignoreCompositionEvent: boolean;
  /**
   * @desc 聚焦时触发
   */
  onFocus: _TextareaFocus;
  /**
   * @desc 失焦时触发
   */
  onBlur: _TextareaBlur;
  /**
   * @desc 输入框行数变化时触发
   */
  onLinechange: _TextareaLinechange;
  /**
   * @desc 输入时触发
   */
  onInput: _TextareaInput;
  /**
   * @desc 点击完成按钮时触发
   */
  onConfirm: _TextareaConfirm;
  /**
   * @desc 键盘高度变化时触发
   */
  onKeyboardheightchange: _TextareaKeyboardheightchange;
}

/**
 * @desc 多行输入框
 */
type _Textarea = Component<Partial<_TextareaProps>>;

export {
  _TextareaValue as TextareaValue,
  _TextareaConfirmType as TextareaConfirmType,
  _TextareaFocusDetail as TextareaFocusDetail,
  _TextareaFocus as TextareaFocus,
  _TextareaBlurDetail as TextareaBlurDetail,
  _TextareaBlur as TextareaBlur,
  _TextareaLinechangeDetail as TextareaLinechangeDetail,
  _TextareaLinechange as TextareaLinechange,
  _TextareaInputDetail as TextareaInputDetail,
  _TextareaInput as TextareaInput,
  _TextareaConfirmDetail as TextareaConfirmDetail,
  _TextareaConfirm as TextareaConfirm,
  _TextareaKeyboardheightchangeDetail as TextareaKeyboardheightchangeDetail,
  _TextareaKeyboardheightchange as TextareaKeyboardheightchange,
  _TextareaProps as TextareaProps,
  _Textarea as Textarea,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 输入框内容
     */
    export type TextareaValue = _TextareaValue;
    /**
     * @desc 设置键盘右下角按钮的文字
     * @desc send 发送
     * @desc search 搜索
     * @desc next 下一个
     * @desc go 前往
     * @desc done 完成
     */
    export type TextareaConfirmType = _TextareaConfirmType;
    export interface TextareaFocusDetail extends _TextareaFocusDetail {}
    /**
     * @desc 聚焦时触发
     */
    export interface TextareaFocus extends _TextareaFocus {}
    export interface TextareaBlurDetail extends _TextareaBlurDetail {}
    /**
     * @desc 失焦时触发
     */
    export interface TextareaBlur extends _TextareaBlur {}
    export interface TextareaLinechangeDetail extends _TextareaLinechangeDetail {}
    /**
     * @desc 输入框行数变化时触发
     */
    export interface TextareaLinechange extends _TextareaLinechange {}
    export interface TextareaInputDetail extends _TextareaInputDetail {}
    /**
     * @desc 输入时触发
     */
    export interface TextareaInput extends _TextareaInput {}
    export interface TextareaConfirmDetail extends _TextareaConfirmDetail {}
    /**
     * @desc 点击完成按钮时触发
     */
    export interface TextareaConfirm extends _TextareaConfirm {}
    export interface TextareaKeyboardheightchangeDetail
      extends _TextareaKeyboardheightchangeDetail {}
    /**
     * @desc 键盘高度变化时触发
     */
    export interface TextareaKeyboardheightchange extends _TextareaKeyboardheightchange {}
    /**
     * @desc 多行输入框属性
     */
    export interface TextareaProps extends _TextareaProps {}
    /**
     * @desc 多行输入框
     */
    export type Textarea = _Textarea;
  }
}
