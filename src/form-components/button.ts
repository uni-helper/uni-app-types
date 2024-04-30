import type { Component, AnyRecord } from '../component';
import type { BaseEvent, CustomEvent } from '../events';

/**
 * 按钮的大小
 *
 * Default 默认
 *
 * Mini 小
 */
type _ButtonSize = 'default' | 'mini';

/**
 * 按钮的样式类型，如想在多端统一颜色，请用 default 然后自行写样式
 *
 * Primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ
 * 小程序为浅蓝色
 *
 * Default 白色
 *
 * Warn 红色
 */
type _ButtonType = 'primary' | 'default' | 'warn';

/**
 * 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
 *
 * Submit 点击会触发 form 的 submit 事件
 *
 * Reset 点击会触发 form 的 reset 事件
 */
type _ButtonFormType = 'submit' | 'reset';

/**
 * 开放能力
 *
 * Feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
 *
 * Share 触发用户转发
 *
 * GetUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
 *
 * Contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
 *
 * GetPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
 *
 * LaunchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
 *
 * OpenSetting 打开授权设置页
 *
 * ChooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
 *
 * GetAuthorize 支持小程序授权
 *
 * Lifestyle 关注生活号
 *
 * ContactShare 分享到通讯录好友
 *
 * OpenGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json
 * 中必须配置 groupIdList
 *
 * OpenGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
 *
 * OpenPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json
 * 中必须配置 publicIdList
 *
 * ShareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
 *
 * AddFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
 *
 * AddColorSign 添加彩签，点击后添加状态有用户提示，无回调
 *
 * AddGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
 *
 * AddToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
 *
 * ChooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
 *
 * ChooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
 *
 * Login 登录，可以从 `@login` 回调中确认是否登录成功
 *
 * Subscribe 订阅类模板消息，需要用户授权才可发送
 *
 * Favorite 触发用户收藏
 *
 * WatchLater 触发用户稍后再看
 *
 * OpenProfile 触发打开用户主页
 *
 * AgreePrivacyAuthorization 用户同意隐私协议按钮
 */
type _ButtonOpenType =
  | 'feedback'
  | 'share'
  | 'getUserInfo'
  | 'contact'
  | 'getPhoneNumber'
  | 'launchApp'
  | 'openSetting'
  | 'chooseAvatar'
  | 'getAuthorize'
  | 'lifestyle'
  | 'contactShare'
  | 'openGroupProfile'
  | 'openGuildProfile'
  | 'openPublicProfile'
  | 'shareMessageToFriend'
  | 'addFriend'
  | 'addColorSign'
  | 'addGroupApp'
  | 'addToFavorites'
  | 'chooseAddress'
  | 'chooseInvoiceTitle'
  | 'login'
  | 'subscribe'
  | 'favorite'
  | 'watchLater'
  | 'openProfile'
  | 'agreePrivacyAuthorization';

/**
 * 返回用户信息的语言
 *
 * Zh_CN 简体中文
 *
 * Zh_TW 繁体中文
 *
 * En 英文
 */
type _ButtonLang = 'zh_CN' | 'zh_TW' | 'en';

interface _ButtonOnGetphonenumberDetail {
  /** 错误信息 */
  errMsg?: string;
  /** 动态令牌 */
  code?: string;
  /** 包括敏感数据在内的完整用户信息的加密数据 */
  encryptedData?: string;
  /** 加密算法的初始向量 */
  iv?: string;
  /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据 */
  cloudID?: string;
}

type _ButtonOnGetphonenumberEvent = CustomEvent<_ButtonOnGetphonenumberDetail>;

/**
 * 获取用户手机号时回调
 *
 * Open-type="getPhoneNumber" 时有效
 */
interface _ButtonOnGetphonenumber {
  (event: _ButtonOnGetphonenumberEvent): void;
}

type _ButtonOnErrorEvent = BaseEvent;

/** 使用开放能力发生错误时回调 */
interface _ButtonOnError {
  (event: _ButtonOnErrorEvent): void;
}

interface _ButtonOnOpensettingDetail {
  authSetting: AnyRecord;
}

type _ButtonOnOpensettingEvent = CustomEvent<_ButtonOnOpensettingDetail>;

/**
 * 在打开授权设置页并关闭后回调
 *
 * Open-type="openSetting" 时有效
 */
interface _ButtonOnOpensetting {
  (event: _ButtonOnOpensettingEvent): void;
}

type _ButtonOnLaunchappEvent = BaseEvent;

/**
 * 从小程序成功打开 APP 回调
 *
 * Open-type="launchApp" 时有效
 */
interface _ButtonOnLaunchapp {
  (event: _ButtonOnLaunchappEvent): void;
}

type _ButtonOnChooseavatarEvent = BaseEvent;

/**
 * 获取用户头像回调
 *
 * Open-type="chooseAvatar" 时有效
 */
interface _ButtonOnChooseavatar {
  (event: _ButtonOnChooseavatarEvent): void;
}

type _ButtonOnAddgroupappEvent = BaseEvent;

/**
 * 添加群应用回调
 *
 * Open-type="addGroupApp" 时有效
 */
interface _ButtonOnAddgroupapp {
  (event: _ButtonOnAddgroupappEvent): void;
}

type _ButtonOnChooseaddressEvent = BaseEvent;

/**
 * 用户编辑并选择收货地址回调
 *
 * Open-type="chooseAddress" 时有效
 */
interface _ButtonOnChooseaddress {
  (event: _ButtonOnChooseaddressEvent): void;
}

type _ButtonOnChooseinvoicetitleEvent = BaseEvent;

/**
 * 用户选择发票抬头回调
 *
 * Open-type="chooseInvoiceTitle" 时有效
 */
interface _ButtonOnChooseinvoicetitle {
  (event: _ButtonOnChooseinvoicetitleEvent): void;
}

type _ButtonOnSubscribeEvent = BaseEvent;

/**
 * 订阅消息授权回调
 *
 * Open-type="subscribe" 时有效
 */
interface _ButtonOnSubscribe {
  (event: _ButtonOnSubscribeEvent): void;
}

type _ButtonOnLoginEvent = BaseEvent;

/**
 * 登录回调
 *
 * Open-type="login" 时有效
 */
interface _ButtonOnLogin {
  (event: _ButtonOnLoginEvent): void;
}

type _ButtonOnAgreeprivacyauthorizationEvent = BaseEvent;

/**
 * 用户同意隐私协议按钮回调
 *
 * Open-type="agreePrivacyAuthorization" 时有效
 */
interface _ButtonOnAgreeprivacyauthorization {
  (event: _ButtonOnAgreeprivacyauthorizationEvent): void;
}

/** 按钮属性 */
type _ButtonProps = Partial<{
  /**
   * 按钮的大小
   *
   * Default 默认
   *
   * Mini 小
   *
   * 默认为 default
   */
  size: _ButtonSize;
  /**
   * 按钮的样式类型
   *
   * Primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ
   * 小程序为浅蓝色
   *
   * Default 白色
   *
   * Warn 红色
   *
   * 默认为 default
   */
  type: _ButtonType;
  /**
   * 按钮是否镂空，背景色透明
   *
   * 默认为 false
   */
  plain: boolean;
  /** 是否禁用 */
  disabled: boolean;
  /**
   * 是否带 loading 图标
   *
   * 默认为 false
   */
  loading: boolean;
  /**
   * 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
   *
   * Submit 点击会触发 form 的 submit 事件
   *
   * Reset 点击会触发 form 的 reset 事件
   *
   * 没有默认值
   */
  formType: _ButtonFormType;
  /**
   * 开放能力
   *
   * Feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
   *
   * Share 触发用户转发
   *
   * GetUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
   *
   * Contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
   *
   * GetPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
   *
   * LaunchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
   *
   * OpenSetting 打开授权设置页
   *
   * ChooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
   *
   * GetAuthorize 支持小程序授权
   *
   * Lifestyle 关注生活号
   *
   * ContactShare 分享到通讯录好友
   *
   * OpenGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时
   * manifest.json 中必须配置 groupIdList
   *
   * OpenGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
   *
   * OpenPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时
   * manifest.json 中必须配置 publicIdList
   *
   * ShareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
   *
   * AddFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
   *
   * AddColorSign 添加彩签，点击后添加状态有用户提示，无回调
   *
   * AddGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
   *
   * AddToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
   *
   * ChooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
   *
   * ChooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
   *
   * Login 登录，可以从 `@login` 回调中确认是否登录成功
   *
   * Subscribe 订阅类模板消息，需要用户授权才可发送
   *
   * Favorite 触发用户收藏
   *
   * WatchLater 触发用户稍后再看
   *
   * OpenProfile 触发打开用户主页
   */
  openType: _ButtonOpenType;
  /**
   * 指定按下去的样式类
   *
   * 当 hover-class="none" 时，没有点击态效果
   *
   * 默认为 button-hover
   */
  hoverClass: string;
  /**
   * 按住后多久出现点击态
   *
   * 单位为 ms
   *
   * 默认为 20
   */
  hoverStartTime: number;
  /**
   * 手指松开后点击态保留时间
   *
   * 单位为 ms
   *
   * 默认为 70
   */
  hoverStayTime: number;
  /**
   * 打开 APP 时，向 APP 传递的参数
   *
   * Open-type="launchApp" 时有效
   */
  appParameter: string;
  /**
   * 指定是否阻止本节点的祖先节点出现点击态
   *
   * 默认为 false
   */
  hoverStopPropagation: boolean;
  /**
   * 返回用户信息的语言
   *
   * Zh_CN 简体中文
   *
   * Zh_TW 繁体中文
   *
   * En 英文
   *
   * 默认为 en
   */
  lang: _ButtonLang;
  /**
   * 会话来源
   *
   * Open-type="contact" 时有效
   */
  sessionFrom: string;
  /**
   * 会话内消息卡片标题
   *
   * Open-type="contact" 时有效
   *
   * 默认为当前标题
   */
  sendMessageTitle: string;
  /**
   * 会话内消息卡片点击跳转小程序路径
   *
   * Open-type="contact" 时有效
   *
   * 默认为当前分享路径
   */
  sendMessagePath: string;
  /**
   * 会话内消息卡片图片
   *
   * Open-type="contact" 时有效
   *
   * 默认为截图
   */
  sendMessageImg: string;
  /**
   * 是否显示会话内消息卡片
   *
   * 设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息
   *
   * Open-type="contact" 时有效
   *
   * 默认为 false
   */
  showMessageCard: boolean;
  /**
   * 打开群资料卡时，传递的群号
   *
   * Open-type="openGroupProfile" 时有效
   */
  groupId: string;
  /**
   * 打开频道页面时，传递的频道号
   *
   * Open-type="openGuildProfile" 时有效
   */
  guildId: string;
  /**
   * 打开公众号资料卡时，传递的号码
   *
   * Open-type="openPublicProfile" 时有效
   */
  publicId: string;
  /**
   * 获取用户手机号时回调
   *
   * Open-type="getPhoneNumber" 时有效
   */
  onGetphonenumber: _ButtonOnGetphonenumber;
  /** 使用开放能力发生错误时回调 */
  onError: _ButtonOnError;
  /**
   * 在打开授权设置页并关闭后回调
   *
   * Open-type="openSetting" 时有效
   */
  onOpensetting: _ButtonOnOpensetting;
  /**
   * 从小程序成功打开 APP 回调
   *
   * Open-type="launchApp" 时有效
   */
  onLaunchapp: _ButtonOnLaunchapp;
  /**
   * 获取用户头像回调
   *
   * Open-type="chooseAvatar" 时有效
   */
  onChooseavatar: _ButtonOnChooseavatar;
  /**
   * 添加群应用回调
   *
   * Open-type="addGroupApp" 时有效
   */
  onAddgroupapp: _ButtonOnAddgroupapp;
  /**
   * 用户编辑并选择收货地址回调
   *
   * Open-type="chooseAddress" 时有效
   */
  onChooseaddress: _ButtonOnChooseaddress;
  /**
   * 用户选择发票抬头回调
   *
   * Open-type="chooseInvoiceTitle" 时有效
   */
  onChooseinvoicetitle: _ButtonOnChooseinvoicetitle;
  /**
   * 订阅消息授权回调
   *
   * Open-type="subscribe" 时有效
   */
  onSubscribe: _ButtonOnSubscribe;
  /**
   * 登录回调
   *
   * Open-type="login" 时有效
   */
  onLogin: _ButtonOnLogin;
  /**
   * 用户同意隐私协议回调
   *
   * Open-type="agreePrivacyAuthorization" 时有效
   */
  onAgreeprivacyauthorization: _ButtonOnAgreeprivacyauthorization;
}>;

/** 按钮 */
type _Button = Component<_ButtonProps>;

/** 按钮实例 */
type _ButtonInstance = InstanceType<_Button>;

export {
  _ButtonSize as ButtonSize,
  _ButtonType as ButtonType,
  _ButtonFormType as ButtonFormType,
  _ButtonOpenType as ButtonOpenType,
  _ButtonLang as ButtonLang,
  _ButtonOnGetphonenumberDetail as ButtonOnGetphonenumberDetail,
  _ButtonOnGetphonenumberEvent as ButtonOnGetphonenumberEvent,
  _ButtonOnGetphonenumber as ButtonOnGetphonenumber,
  _ButtonOnErrorEvent as ButtonOnErrorEvent,
  _ButtonOnError as ButtonOnError,
  _ButtonOnOpensettingDetail as ButtonOnOpensettingDetail,
  _ButtonOnOpensettingEvent as ButtonOnOpensettingEvent,
  _ButtonOnOpensetting as ButtonOnOpensetting,
  _ButtonOnLaunchappEvent as ButtonOnLaunchappEvent,
  _ButtonOnLaunchapp as ButtonOnLaunchapp,
  _ButtonOnChooseavatarEvent as ButtonOnChooseavatarEvent,
  _ButtonOnChooseavatar as ButtonOnChooseavatar,
  _ButtonOnAddgroupappEvent as ButtonOnAddgroupappEvent,
  _ButtonOnAddgroupapp as ButtonOnAddgroupapp,
  _ButtonOnChooseaddressEvent as ButtonOnChooseaddressEvent,
  _ButtonOnChooseaddress as ButtonOnChooseaddress,
  _ButtonOnChooseinvoicetitleEvent as ButtonOnChooseinvoicetitleEvent,
  _ButtonOnChooseinvoicetitle as ButtonOnChooseinvoicetitle,
  _ButtonOnSubscribeEvent as ButtonOnSubscribeEvent,
  _ButtonOnSubscribe as ButtonOnSubscribe,
  _ButtonOnLoginEvent as ButtonOnLoginEvent,
  _ButtonOnLogin as ButtonOnLogin,
  _ButtonOnAgreeprivacyauthorizationEvent as ButtonOnAgreeprivacyauthorizationEvent,
  _ButtonOnAgreeprivacyauthorization as ButtonOnAgreeprivacyauthorization,
  _ButtonProps as ButtonProps,
  _Button as Button,
  _ButtonInstance as ButtonInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 按钮的大小
     *
     * Default 默认
     *
     * Mini 小
     */
    export type ButtonSize = _ButtonSize;
    /**
     * 按钮的样式类型，如想在多端统一颜色，请用 default 然后自行写样式
     *
     * Primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ
     * 小程序为浅蓝色
     *
     * Default 白色
     *
     * Warn 红色
     */
    export type ButtonType = _ButtonType;
    /**
     * 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
     *
     * Submit 点击会触发 form 的 submit 事件
     *
     * Reset 点击会触发 form 的 reset 事件
     */
    export type ButtonFormType = _ButtonFormType;

    /**
     * 开放能力
     *
     * Feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
     *
     * Share 触发用户转发
     *
     * GetUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
     *
     * Contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
     *
     * GetPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
     *
     * LaunchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
     *
     * OpenSetting 打开授权设置页
     *
     * ChooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
     *
     * GetAuthorize 支持小程序授权
     *
     * Lifestyle 关注生活号
     *
     * ContactShare 分享到通讯录好友
     *
     * OpenGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时
     * manifest.json 中必须配置 groupIdList
     *
     * OpenGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
     *
     * OpenPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时
     * manifest.json 中必须配置 publicIdList
     *
     * ShareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
     *
     * AddFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
     *
     * AddColorSign 添加彩签，点击后添加状态有用户提示，无回调
     *
     * AddGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
     *
     * AddToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
     *
     * ChooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
     *
     * ChooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
     *
     * Login 登录，可以从 `@login` 回调中确认是否登录成功
     *
     * Subscribe 订阅类模板消息，需要用户授权才可发送
     *
     * Favorite 触发用户收藏
     *
     * WatchLater 触发用户稍后再看
     *
     * OpenProfile 触发打开用户主页
     *
     * AgreePrivacyAuthorization 用户同意隐私协议
     */
    export type ButtonOpenType = _ButtonOpenType;
    /**
     * 返回用户信息的语言
     *
     * Zh_CN 简体中文
     *
     * Zh_TW 繁体中文
     *
     * En 英文
     */
    export type ButtonLang = _ButtonLang;
    export interface ButtonOnGetphonenumberDetail
      extends _ButtonOnGetphonenumberDetail {}
    export type ButtonOnGetphonenumberEvent = _ButtonOnGetphonenumberEvent;
    /**
     * 获取用户手机号时回调
     *
     * Open-type="getPhoneNumber" 时有效
     */
    export interface ButtonOnGetphonenumber extends _ButtonOnGetphonenumber {}
    export type ButtonOnErrorEvent = _ButtonOnErrorEvent;
    /** 使用开放能力发生错误时回调 */
    export interface ButtonOnError extends _ButtonOnError {}
    export interface ButtonOnOpensettingDetail
      extends _ButtonOnOpensettingDetail {}
    export type ButtonOnOpensettingEvent = _ButtonOnOpensettingEvent;
    /**
     * 在打开授权设置页并关闭后回调
     *
     * Open-type="openSetting" 时有效
     */
    export interface ButtonOnOpensetting extends _ButtonOnOpensetting {}
    export type ButtonOnLaunchappEvent = _ButtonOnLaunchappEvent;
    /**
     * 从小程序成功打开 APP 回调
     *
     * Open-type="launchApp" 时有效
     */
    export interface ButtonOnLaunchapp extends _ButtonOnLaunchapp {}
    export type ButtonOnChooseavatarEvent = _ButtonOnChooseavatarEvent;
    /**
     * 获取用户头像回调
     *
     * Open-type="chooseAvatar" 时有效
     */
    export interface ButtonOnChooseavatar extends _ButtonOnChooseavatar {}
    export type ButtonOnAddgroupappEvent = _ButtonOnAddgroupappEvent;
    /**
     * 添加群应用回调
     *
     * Open-type="addGroupApp" 时有效
     */
    export interface ButtonOnAddgroupapp extends _ButtonOnAddgroupapp {}
    export type ButtonOnChooseaddressEvent = _ButtonOnChooseaddressEvent;
    /**
     * 用户编辑并选择收货地址回调
     *
     * Open-type="chooseAddress" 时有效
     */
    export interface ButtonOnChooseaddress extends _ButtonOnChooseaddress {}
    export type ButtonOnChooseinvoicetitleEvent =
      _ButtonOnChooseinvoicetitleEvent;
    /**
     * 用户选择发票抬头回调
     *
     * Open-type="chooseInvoiceTitle" 时有效
     */
    export interface ButtonOnChooseinvoicetitle
      extends _ButtonOnChooseinvoicetitle {}
    export type ButtonOnSubscribeEvent = _ButtonOnSubscribeEvent;
    /**
     * 订阅消息授权回调
     *
     * Open-type="subscribe" 时有效
     */
    export interface ButtonOnSubscribe extends _ButtonOnSubscribe {}
    export type ButtonOnLoginEvent = _ButtonOnLoginEvent;
    /**
     * 登录回调
     *
     * Open-type="login" 时有效
     */
    export interface ButtonOnLogin extends _ButtonOnLogin {}
    export type ButtonOnAgreeprivacyauthorizationEvent =
      _ButtonOnAgreeprivacyauthorizationEvent;
    /**
     * 用户同意隐私协议回调
     *
     * Open-type="agreePrivacyAuthorization" 时有效
     */
    export interface ButtonOnAgreeprivacyauthorization
      extends _ButtonOnAgreeprivacyauthorization {}
    /** 按钮属性 */
    export type ButtonProps = _ButtonProps;
    /** 按钮 */
    export type Button = _Button;
    /** 按钮实例 */
    export type ButtonInstance = _ButtonInstance;
  }
}

// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 按钮 */
    Button: _Button;
  }
}

// 3.0 <= Vue <= 3.2
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 按钮 */
      button: _Button;
    }
  }
}

// 3.3 <= Vue
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module 'vue3/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      /** 按钮 */
      button: _Button;
    }
  }
}
