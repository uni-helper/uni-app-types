import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc input 类型
 * @desc text 文本输入键盘
 * @desc number 数字输入键盘
 * @desc idcard 身份证输入键盘
 * @desc digit 带小数点的数字键盘
 * @desc tel 电话输入键盘
 * @desc safe-password 密码安全输入键盘
 * @desc nickname 昵称输入键盘
 */
export type InputType =
  | 'text'
  | 'number'
  | 'idcard'
  | 'digit'
  | 'tel'
  | 'safe-password'
  | 'nickname';

/**
 * @desc 文本区域的语义，根据类型自动填充
 * @desc oneTimeCode 一次性验证码
 */
export type InputTextContentType = 'oneTimeCode';

/**
 * @desc 设置键盘右下角按钮的文字
 * @desc send 发送
 * @desc search 搜索
 * @desc next 下一个
 * @desc go 前往
 * @decs done 完成
 * @desc type="text" 时有效
 */
export type InputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

export interface InputProps {
  /**
   * @desc 在 form 中作为 key
   */
  name: string;
  /**
   * @desc 输入框的初始内容
   */
  value: string;
  /**
   * @desc input 类型
   * @desc text 文本输入键盘
   * @desc number 数字输入键盘
   * @desc idcard 身份证输入键盘
   * @desc digit 带小数点的数字键盘
   * @desc tel 电话输入键盘
   * @desc safe-password 密码安全输入键盘
   * @desc nickname 昵称输入键盘
   * @desc 默认为 text
   */
  type: InputType;
  /**
   * @desc 文本区域的语义，根据类型自动填充
   * @desc oneTimeCode 一次性验证码
   */
  textContentType: InputContentType;
  /**
   * @desc 是否是密码类型
   * @desc 默认为 false
   */
  password: boolean;
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
   * @desc 默认为 input-placeholder
   */
  placeholderClass: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 最大输入长度
   * @desc 设置为 -1 的时候不限制最大长度
   * @desc 默认为 140
   */
  maxlength: number;
  /**
   * @desc 指定光标与键盘的距离
   * @desc 取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   * @desc 单位为 px
   * @desc 默认为 0
   */
  cursorSpacing: number;
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
   * @desc 设置键盘右下角按钮的文字
   * @desc send 发送
   * @desc search 搜索
   * @desc next 下一个
   * @desc go 前往
   * @decs done 完成
   * @desc type="text" 时有效
   * @desc 默认为 done
   */
  confirmType: InputConfirmType;
  /**
   * @desc 点击键盘右下角按钮时是否保持键盘不收起
   * @desc 默认为 false
   */
  confirmHold: boolean;
  /**
   * @desc 指定 focus 时的光标位置
   */
  cursor: number;
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
   * @desc 聚焦时，点击页面的时候是否不收起键盘
   * @desc 默认为 false
   */
  holdKeyboard: boolean;
  /**
   * @desc 键盘收起时，是否自动失焦
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
   * @desc 是否强制 input 处于同层状态，仅在 iOS 生效
   * @desc 默认聚焦时 input 会切到非同层状态
   * @desc 默认为 false
   */
  alwaysEmbed: boolean;
  /**
   * @desc 安全键盘加密公钥的路径，只支持包内路径
   */
  safePasswordCertPath: string;
  /**
   * @desc 安全键盘输入密码长度
   */
  safePasswordLength: number;
  /**
   * @desc 安全键盘加密时间戳
   */
  safePasswordTimeStamp: number;
  /**
   * @desc 安全键盘加密盐值
   */
  safePasswordNonce: string;
  /**
   * @desc 安全键盘计算 hash 盐值，若指定 custom-hash 则无效
   */
  safePasswordSalt: string;
  /**
   * @desc 安全键盘计算 hash 的算法表达式
   */
  safePasswordCustomHash: string;
  /**
   * @desc 当 type 为 number、digit、idcard 时，数字键盘是否随机排列
   * @desc 默认为 false
   */
  randomNumber: boolean;
  /**
   * @desc 是否为受控组件
   * @desc 为 true 时，value 内容会完全受 setData 控制
   * @desc 默认为 false
   */
  controlled: boolean;
  /**
   * @desc 是否强制使用系统键盘和 Web-view 创建的 input 元素
   * @desc 为 true 时，confirm-type、confirm-hold 可能失效
   * @desc 默认为 false
   */
  alwaysSystem: boolean;
  /**
   * @desc 输入时触发
   */
  onInput: (
    event: CustomEvent<{
      value: InputProps['value'];
    }>,
  ) => string | void;
  /**
   * @desc 聚焦时触发
   */
  onFocus: (
    event: CustomEvent<{
      value: InputProps['value'];
      height: number;
    }>,
  ) => void;
  /**
   * @desc 失焦时触发
   */
  onBlur: (
    event: CustomEvent<{
      value: InputProps['value'];
    }>,
  ) => void;
  /**
   * @desc 点击完成按钮时触发
   */
  onConfirm: (
    event: CustomEvent<{
      value: InputProps['value'];
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

export type Input = Component<Partial<InputProps>>;
