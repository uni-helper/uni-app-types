import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 设置键盘右下角按钮的文字
 * @desc send 发送
 * @desc search 搜索
 * @desc next 下一个
 * @desc go 前往
 * @desc done 完成
 */
export type TextareaConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

export interface TextareaProps {
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
  confirmType: TextareaConfirmType;
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
  onFocus: (
    event: CustomEvent<{
      value: TextareaProps['value'];
      height: number;
    }>,
  ) => void;
  /**
   * @desc 失焦时触发
   */
  onBlur: (
    event: CustomEvent<{
      value: TextareaProps['value'];
      height: number;
    }>,
  ) => void;
  /**
   * @desc 输入框行数变化时触发
   */
  onLinechange: (
    event: CustomEvent<{
      height: number;
      heightRpx: number;
      lineCount: number;
    }>,
  ) => void;
  /**
   * @desc 输入时触发
   */
  onInput: (
    event: CustomEvent<{
      value: TextareaProps['value'];
      cursor: number;
    }>,
  ) => string | void;
  /**
   * @desc 点击完成按钮时触发
   */
  onConfirm: (
    event: CustomEvent<{
      value: TextareaProps['value'];
    }>,
  ) => void;
  /**
   * @desc 键盘高度变化时触发
   */
  onKeyboardheightchange: (
    event: CustomEvent<{
      height: number;
      duration: number;
    }>,
  ) => void;
}

/**
 * @desc 多行输入框
 */
export type Textarea = Component<Partial<TextareaProps>>;
