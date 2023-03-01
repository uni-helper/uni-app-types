import { Component } from '../Component';
import { CustomEvent } from '../events';

/** 输入框的内容 */
type _InputValue = string;

/**
 * input 类型
 *
 * text 文本输入键盘
 *
 * number 数字输入键盘
 *
 * idcard 身份证输入键盘
 *
 * digit 带小数点的数字键盘
 *
 * tel 电话输入键盘
 *
 * safe-password 密码安全输入键盘
 *
 * nickname 昵称输入键盘
 */
type _InputType = 'text' | 'number' | 'idcard' | 'digit' | 'tel' | 'safe-password' | 'nickname';

/**
 * 文本区域的语义，根据类型自动填充
 *
 * oneTimeCode 一次性验证码
 */
type _InputTextContentType = 'oneTimeCode';

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
 * type="text" 时有效
 *
 * @decs done 完成
 */
type _InputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

/**
 * 枚举属性，提供了用户在编辑元素或其内容时可能输入的数据类型的提示
 *
 * none 无虚拟键盘，常用于实现自己的键盘输入控件
 *
 * text 使用用户本地区域设置的标准文本输入键盘
 *
 * decimal 小数输入键盘，包含数字和分隔符，减号键的显示与否因设备而异
 *
 * numeric 数字输入键盘，减号键的显示与否因设备而异
 *
 * tel 电话输入键盘，表单内电话输入框应使用 type="tel"
 *
 * search 搜索输入键盘
 *
 * email 邮件地址输入键盘，表单内邮件地址输入框应使用 type="email"
 *
 * url 网址输入键盘，表单内网址输入因 type="url"
 */
type _InputInputMode = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

interface _InputOnInputDetail {
  value: _InputValue;
  /** 光标位置 */
  cursor?: number;
  /** 键值 */
  keyCode?: number;
}

/** 输入时触发 */
interface _InputOnInput {
  (event: CustomEvent<_InputOnInputDetail>): string | void;
}

interface _InputOnFocusDetail {
  value: _InputValue;
  /** 键盘高度 */
  height?: number;
}

/** 聚焦时触发 */
interface _InputOnFocus {
  (event: CustomEvent<_InputOnFocusDetail>, ...params: any[]): void;
}

interface _InputOnBlurDetail {
  value: _InputValue;
}

/** 失焦时触发 */
interface _InputOnBlur {
  (event: CustomEvent<_InputOnBlurDetail>, ...params: any[]): void;
}

interface _InputOnConfirmDetail {
  value: _InputValue;
}

/** 点击完成按钮时触发 */
interface _InputOnConfirm {
  (event: CustomEvent<_InputOnConfirmDetail>, ...params: any[]): void;
}

interface _InputOnKeyboardheightchangeDetail {
  /** 键盘高度 */
  height: number;
  duration: number;
}

/** 键盘高度变化时触发 */
interface _InputOnKeyboardheightchange {
  (event: CustomEvent<_InputOnKeyboardheightchangeDetail>, ...params: any[]): void;
}

/** 输入框属性 */
type _InputProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /** 输入框的初始内容 */
  value: _InputValue;
  /**
   * input 类型
   *
   * text 文本输入键盘
   *
   * number 数字输入键盘
   *
   * idcard 身份证输入键盘
   *
   * digit 带小数点的数字键盘
   *
   * tel 电话输入键盘
   *
   * safe-password 密码安全输入键盘
   *
   * nickname 昵称输入键盘
   *
   * 默认为 text
   */
  type: _InputType;
  /**
   * 文本区域的语义，根据类型自动填充
   *
   * oneTimeCode 一次性验证码
   */
  textContentType: _InputTextContentType;
  /**
   * 是否是密码类型
   *
   * 默认为 false
   */
  password: boolean;
  /** 输入框为空时占位符 */
  placeholder: string;
  /** 指定 placeholder 的样式 */
  placeholderStyle: string;
  /**
   * 指定 placeholder 的样式类
   *
   * 默认为 input-placeholder
   */
  placeholderClass: string;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 最大输入长度
   *
   * 设置为 -1 的时候不限制最大长度
   *
   * 默认为 140
   */
  maxlength: number;
  /**
   * 指定光标与键盘的距离
   *
   * 取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   *
   * 单位为 px
   *
   * 默认为 0
   */
  cursorSpacing: number;
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
   * type="text" 时有效
   *
   * 默认为 done
   *
   * @decs done 完成
   */
  confirmType: _InputConfirmType;
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   *
   * 默认为 false
   */
  confirmHold: boolean;
  /** 指定 focus 时的光标位置 */
  cursor: number;
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
   * 聚焦时，点击页面的时候是否不收起键盘
   *
   * 默认为 false
   */
  holdKeyboard: boolean;
  /**
   * 键盘收起时，是否自动失焦
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
  /**
   * 是否强制 input 处于同层状态，仅在 iOS 生效
   *
   * 默认聚焦时 input 会切到非同层状态
   *
   * 默认为 false
   */
  alwaysEmbed: boolean;
  /** focus 时，点击页面的时候不收起键盘 */
  holdKeyboard: boolean;
  /** 安全键盘加密公钥的路径，只支持包内路径 */
  safePasswordCertPath: string;
  /** 安全键盘输入密码长度 */
  safePasswordLength: number;
  /** 安全键盘加密时间戳 */
  safePasswordTimeStamp: number;
  /** 安全键盘加密盐值 */
  safePasswordNonce: string;
  /** 安全键盘计算 hash 盐值，若指定 custom-hash 则无效 */
  safePasswordSalt: string;
  /** 安全键盘计算 hash 的算法表达式 */
  safePasswordCustomHash: string;
  /**
   * 当 type 为 number、digit、idcard 时，数字键盘是否随机排列
   *
   * 默认为 false
   */
  randomNumber: boolean;
  /**
   * 是否为受控组件
   *
   * 为 true 时，value 内容会完全受 setData 控制
   *
   * 默认为 false
   */
  controlled: boolean;
  /**
   * 是否强制使用系统键盘和 Web-view 创建的 input 元素
   *
   * 为 true 时，confirm-type、confirm-hold 可能失效
   *
   * 默认为 false
   */
  alwaysSystem: boolean;
  /**
   * 枚举属性，提供了用户在编辑元素或其内容时可能输入的数据类型的提示
   *
   * none 无虚拟键盘，常用于实现自己的键盘输入控件
   *
   * text 使用用户本地区域设置的标准文本输入键盘
   *
   * decimal 小数输入键盘，包含数字和分隔符，减号键的显示与否因设备而异
   *
   * numeric 数字输入键盘，减号键的显示与否因设备而异
   *
   * tel 电话输入键盘，表单内电话输入框应使用 type="tel"
   *
   * search 搜索输入键盘
   *
   * email 邮件地址输入键盘，表单内邮件地址输入框应使用 type="email"
   *
   * url 网址输入键盘，表单内网址输入因 type="url"
   */
  inputMode: _InputInputMode;
  /** 输入时触发 */
  onInput: _InputOnInput;
  /** 聚焦时触发 */
  onFocus: _InputOnFocus;
  /** 失焦时触发 */
  onBlur: _InputOnBlur;
  /** 点击完成按钮时触发 */
  onConfirm: _InputOnConfirm;
  /** 键盘高度变化时触发 */
  onKeyboardheightchange: _InputOnKeyboardheightchange;
}>;

/** 输入框 */
type _Input = Component<_InputProps>;

/** 输入框实例 */
type _InputInstance = InstanceType<_Input>;

export {
  _InputValue as InputValue,
  _InputType as InputType,
  _InputTextContentType as InputTextContentType,
  _InputConfirmType as InputConfirmType,
  _InputInputMode as InputInputMode,
  _InputOnInputDetail as InputOnInputDetail,
  _InputOnInput as InputOnInput,
  _InputOnFocusDetail as InputOnFocusDetail,
  _InputOnFocus as InputOnFocus,
  _InputOnBlurDetail as InputOnBlurDetail,
  _InputOnBlur as InputOnBlur,
  _InputOnConfirmDetail as InputOnConfirmDetail,
  _InputOnConfirm as InputOnConfirm,
  _InputOnKeyboardheightchangeDetail as InputOnKeyboardheightchangeDetail,
  _InputOnKeyboardheightchange as InputOnKeyboardheightchange,
  _InputProps as InputProps,
  _Input as Input,
  _InputInstance as InputInstance,
};

declare global {
  namespace UniHelper {
    /** 输入框的内容 */
    export type InputValue = _InputValue;
    /**
     * input 类型
     *
     * text 文本输入键盘
     *
     * number 数字输入键盘
     *
     * idcard 身份证输入键盘
     *
     * digit 带小数点的数字键盘
     *
     * tel 电话输入键盘
     *
     * safe-password 密码安全输入键盘
     *
     * nickname 昵称输入键盘
     */
    export type InputType = _InputType;
    /**
     * 文本区域的语义，根据类型自动填充
     *
     * oneTimeCode 一次性验证码
     */
    export type InputTextContentType = _InputTextContentType;
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
     * type="text" 时有效
     *
     * @decs done 完成
     */
    export type InputConfirmType = _InputConfirmType;
    /**
     * 枚举属性，提供了用户在编辑元素或其内容时可能输入的数据类型的提示
     *
     * none 无虚拟键盘，常用于实现自己的键盘输入控件
     *
     * text 使用用户本地区域设置的标准文本输入键盘
     *
     * decimal 小数输入键盘，包含数字和分隔符，减号键的显示与否因设备而异
     *
     * numeric 数字输入键盘，减号键的显示与否因设备而异
     *
     * tel 电话输入键盘，表单内电话输入框应使用 type="tel"
     *
     * search 搜索输入键盘
     *
     * email 邮件地址输入键盘，表单内邮件地址输入框应使用 type="email"
     *
     * url 网址输入键盘，表单内网址输入因 type="url"
     */
    export type InputInputMode = _InputInputMode;
    export interface InputOnInputDetail extends _InputOnInputDetail {}
    /** 输入时触发 */
    export interface InputOnInput extends _InputOnInput {}
    export interface InputOnFocusDetail extends _InputOnFocusDetail {}
    /** 聚焦时触发 */
    export interface InputOnFocus extends _InputOnFocus {}
    export interface InputOnBlurDetail extends _InputOnBlurDetail {}
    /** 失焦时触发 */
    export interface InputOnBlur extends _InputOnBlur {}
    export interface InputOnConfirmDetail extends _InputOnConfirmDetail {}
    /** 点击完成按钮时触发 */
    export interface InputOnConfirm extends _InputOnConfirm {}
    export interface InputOnKeyboardheightchangeDetail extends _InputOnKeyboardheightchangeDetail {}
    /** 键盘高度变化时触发 */
    export interface InputOnKeyboardheightchange extends _InputOnKeyboardheightchange {}
    /** 输入框属性 */
    export type InputProps = _InputProps;
    /** 输入框 */
    export type Input = _Input;
    /** 输入框实例 */
    export type InputInstance = _InputInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 输入框 */
    Input: _Input;
  }
}
