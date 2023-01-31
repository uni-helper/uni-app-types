import { Component, AnyRecord } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * 按钮的大小
 *
 * default 默认
 *
 * mini 小
 */
type _ButtonSize = 'default' | 'mini';

/**
 * 按钮的样式类型，如想在多端统一颜色，请用 default 然后自行写样式
 *
 * primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ 小程序为浅蓝色
 *
 * default 白色
 *
 * warn 红色
 */
type _ButtonType = 'primary' | 'default' | 'warn';

/**
 * 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
 *
 * submit 点击会触发 form 的 submit 事件
 *
 * reset 点击会触发 form 的 reset 事件
 */
type _ButtonFormType = 'submit' | 'reset';

/**
 * 开放能力
 *
 * feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
 *
 * share 触发用户转发
 *
 * getUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
 *
 * contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
 *
 * getPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
 *
 * launchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
 *
 * openSetting 打开授权设置页
 *
 * chooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
 *
 * getAuthorize 支持小程序授权
 *
 * lifestyle 关注生活号
 *
 * contactShare 分享到通讯录好友
 *
 * openGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json 中必须配置 groupIdList
 *
 * openGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
 *
 * openPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json 中必须配置 publicIdList
 *
 * shareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
 *
 * addFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
 *
 * addColorSign 添加彩签，点击后添加状态有用户提示，无回调
 *
 * addGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
 *
 * addToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
 *
 * chooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
 *
 * chooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
 *
 * login 登录，可以从 `@login` 回调中确认是否登录成功
 *
 * subscribe 订阅类模板消息，需要用户授权才可发送
 *
 * favorite 触发用户收藏
 *
 * watchLater 触发用户稍后再看
 *
 * openProfile 触发打开用户主页
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
  | 'openProfile';

/**
 * 返回用户信息的语言
 *
 * zh_CN 简体中文
 *
 * zh_TW 繁体中文
 *
 * en 英文
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

/**
 * 获取用户手机号时回调
 *
 * open-type="getPhoneNumber" 时有效
 */
interface _ButtonOnGetphonenumber {
  (event: CustomEvent<_ButtonOnGetphonenumberDetail>): void;
}

/** 使用开放能力发生错误时回调 */
interface _ButtonOnError {
  (event: BaseEvent): void;
}

interface _ButtonOnOpensettingDetail {
  authSetting: AnyRecord;
}

/**
 * 在打开授权设置页并关闭后回调
 *
 * open-type="openSetting" 时有效
 */
interface _ButtonOnOpensetting {
  (event: CustomEvent<_ButtonOnOpensettingDetail>): void;
}

/**
 * 从小程序成功打开 APP 回调
 *
 * open-type="launchApp" 时有效
 */
interface _ButtonOnLaunchapp {
  (event: BaseEvent): void;
}

/**
 * 获取用户头像回调
 *
 * open-type="chooseAvatar" 时有效
 */
interface _ButtonOnChooseavatar {
  (event: BaseEvent): void;
}

/**
 * 添加群应用回调
 *
 * open-type="addGroupApp" 时有效
 */
interface _ButtonOnAddgroupapp {
  (event: BaseEvent): void;
}

/**
 * 用户编辑并选择收货地址回调
 *
 * open-type="chooseAddress" 时有效
 */
interface _ButtonOnChooseaddress {
  (event: BaseEvent): void;
}

/**
 * 用户选择发票抬头回调
 *
 * open-type="chooseInvoiceTitle" 时有效
 */
interface _ButtonOnChooseinvoicetitle {
  (event: BaseEvent): void;
}

/**
 * 订阅消息授权回调
 *
 * open-type="subscribe" 时有效
 */
interface _ButtonOnSubscribe {
  (event: BaseEvent): void;
}

/**
 * 登录回调
 *
 * open-type="login" 时有效
 */
interface _ButtonOnLogin {
  (event: BaseEvent): void;
}

/** 按钮属性 */
interface _ButtonProps {
  /**
   * 按钮的大小
   *
   * default 默认
   *
   * mini 小
   *
   * 默认为 default
   */
  size: _ButtonSize;
  /**
   * 按钮的样式类型
   *
   * primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ 小程序为浅蓝色
   *
   * default 白色
   *
   * warn 红色
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
   * submit 点击会触发 form 的 submit 事件
   *
   * reset 点击会触发 form 的 reset 事件
   *
   * 没有默认值
   */
  formType: _ButtonFormType;
  /**
   * 开放能力
   *
   * feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
   *
   * share 触发用户转发
   *
   * getUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
   *
   * contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
   *
   * getPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
   *
   * launchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
   *
   * openSetting 打开授权设置页
   *
   * chooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
   *
   * getAuthorize 支持小程序授权
   *
   * lifestyle 关注生活号
   *
   * contactShare 分享到通讯录好友
   *
   * openGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json 中必须配置 groupIdList
   *
   * openGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
   *
   * openPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json 中必须配置
   * publicIdList
   *
   * shareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
   *
   * addFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
   *
   * addColorSign 添加彩签，点击后添加状态有用户提示，无回调
   *
   * addGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
   *
   * addToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
   *
   * chooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
   *
   * chooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
   *
   * login 登录，可以从 `@login` 回调中确认是否登录成功
   *
   * subscribe 订阅类模板消息，需要用户授权才可发送
   *
   * favorite 触发用户收藏
   *
   * watchLater 触发用户稍后再看
   *
   * openProfile 触发打开用户主页
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
   * open-type="launchApp" 时有效
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
   * zh_CN 简体中文
   *
   * zh_TW 繁体中文
   *
   * en 英文
   *
   * 默认为 en
   */
  lang: _ButtonLang;
  /**
   * 会话来源
   *
   * open-type="contact" 时有效
   */
  sessionFrom: string;
  /**
   * 会话内消息卡片标题
   *
   * open-type="contact" 时有效
   *
   * 默认为当前标题
   */
  sendMessageTitle: string;
  /**
   * 会话内消息卡片点击跳转小程序路径
   *
   * open-type="contact" 时有效
   *
   * 默认为当前分享路径
   */
  sendMessagePath: string;
  /**
   * 会话内消息卡片图片
   *
   * open-type="contact" 时有效
   *
   * 默认为截图
   */
  sendMessageImg: string;
  /**
   * 是否显示会话内消息卡片
   *
   * 设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息
   *
   * open-type="contact" 时有效
   *
   * 默认为 false
   */
  showMessageCard: boolean;
  /**
   * 打开群资料卡时，传递的群号
   *
   * open-type="openGroupProfile" 时有效
   */
  groupId: string;
  /**
   * 打开频道页面时，传递的频道号
   *
   * open-type="openGuildProfile" 时有效
   */
  guildId: string;
  /**
   * 打开公众号资料卡时，传递的号码
   *
   * open-type="openPublicProfile" 时有效
   */
  publicId: string;
  /**
   * 获取用户手机号时回调
   *
   * open-type="getPhoneNumber" 时有效
   */
  onGetphonenumber: _ButtonOnGetphonenumber;
  /** 使用开放能力发生错误时回调 */
  onError: _ButtonOnError;
  /**
   * 在打开授权设置页并关闭后回调
   *
   * open-type="openSetting" 时有效
   */
  onOpensetting: _ButtonOnOpensetting;
  /**
   * 从小程序成功打开 APP 回调
   *
   * open-type="launchApp" 时有效
   */
  onLaunchapp: _ButtonOnLaunchapp;
  /**
   * 获取用户头像回调
   *
   * open-type="chooseAvatar" 时有效
   */
  onChooseavatar: _ButtonOnChooseavatar;
  /**
   * 添加群应用回调
   *
   * open-type="addGroupApp" 时有效
   */
  onAddgroupapp: _ButtonOnAddgroupapp;
  /**
   * 用户编辑并选择收货地址回调
   *
   * open-type="chooseAddress" 时有效
   */
  onChooseaddress: _ButtonOnChooseaddress;
  /**
   * 用户选择发票抬头回调
   *
   * open-type="chooseInvoiceTitle" 时有效
   */
  onChooseinvoicetitle: _ButtonOnChooseinvoicetitle;
  /**
   * 订阅消息授权回调
   *
   * open-type="subscribe" 时有效
   */
  onSubscribe: _ButtonOnSubscribe;
  /**
   * 登录回调
   *
   * open-type="login" 时有效
   */
  onLogin: _ButtonOnLogin;
}

/** 按钮 */
type _Button = Component<Partial<_ButtonProps>>;

export {
  _ButtonSize as ButtonSize,
  _ButtonType as ButtonType,
  _ButtonFormType as ButtonFormType,
  _ButtonOpenType as ButtonOpenType,
  _ButtonLang as ButtonLang,
  _ButtonOnGetphonenumberDetail as ButtonOnGetphonenumberDetail,
  _ButtonOnGetphonenumber as ButtonOnGetphonenumber,
  _ButtonOnError as ButtonOnError,
  _ButtonOnOpensettingDetail as ButtonOnOpensettingDetail,
  _ButtonOnOpensetting as ButtonOnOpensetting,
  _ButtonOnLaunchapp as ButtonOnLaunchapp,
  _ButtonOnChooseavatar as ButtonOnChooseavatar,
  _ButtonOnAddgroupapp as ButtonOnAddgroupapp,
  _ButtonOnChooseaddress as ButtonOnChooseaddress,
  _ButtonOnChooseinvoicetitle as ButtonOnChooseinvoicetitle,
  _ButtonOnSubscribe as ButtonOnSubscribe,
  _ButtonOnLogin as ButtonOnLogin,
  _ButtonProps as ButtonProps,
  _Button as Button,
};

declare global {
  namespace UniHelper {
    /**
     * 按钮的大小
     *
     * default 默认
     *
     * mini 小
     */
    export type ButtonSize = _ButtonSize;
    /**
     * 按钮的样式类型，如想在多端统一颜色，请用 default 然后自行写样式
     *
     * primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ 小程序为浅蓝色
     *
     * default 白色
     *
     * warn 红色
     */
    export type ButtonType = _ButtonType;
    /**
     * 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
     *
     * submit 点击会触发 form 的 submit 事件
     *
     * reset 点击会触发 form 的 reset 事件
     */
    export type ButtonFormType = _ButtonFormType;

    /**
     * 开放能力
     *
     * feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
     *
     * share 触发用户转发
     *
     * getUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
     *
     * contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
     *
     * getPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
     *
     * launchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
     *
     * openSetting 打开授权设置页
     *
     * chooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
     *
     * getAuthorize 支持小程序授权
     *
     * lifestyle 关注生活号
     *
     * contactShare 分享到通讯录好友
     *
     * openGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json 中必须配置
     * groupIdList
     *
     * openGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
     *
     * openPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json 中必须配置
     * publicIdList
     *
     * shareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
     *
     * addFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
     *
     * addColorSign 添加彩签，点击后添加状态有用户提示，无回调
     *
     * addGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
     *
     * addToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
     *
     * chooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
     *
     * chooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
     *
     * login 登录，可以从 `@login` 回调中确认是否登录成功
     *
     * subscribe 订阅类模板消息，需要用户授权才可发送
     *
     * favorite 触发用户收藏
     *
     * watchLater 触发用户稍后再看
     *
     * openProfile 触发打开用户主页
     */
    export type ButtonOpenType = _ButtonOpenType;
    /**
     * 返回用户信息的语言
     *
     * zh_CN 简体中文
     *
     * zh_TW 繁体中文
     *
     * en 英文
     */
    export type ButtonLang = _ButtonLang;
    export interface ButtonOnGetphonenumberDetail extends _ButtonOnGetphonenumberDetail {}
    /**
     * 获取用户手机号时回调
     *
     * open-type="getPhoneNumber" 时有效
     */
    export interface ButtonOnGetphonenumber extends _ButtonOnGetphonenumber {}
    /** 使用开放能力发生错误时回调 */
    export interface ButtonOnError extends _ButtonOnError {}
    export interface ButtonOnOpensettingDetail extends _ButtonOnOpensettingDetail {}
    /**
     * 在打开授权设置页并关闭后回调
     *
     * open-type="openSetting" 时有效
     */
    export interface ButtonOnOpensetting extends _ButtonOnOpensetting {}
    /**
     * 从小程序成功打开 APP 回调
     *
     * open-type="launchApp" 时有效
     */
    export interface ButtonOnLaunchapp extends _ButtonOnLaunchapp {}
    /**
     * 获取用户头像回调
     *
     * open-type="chooseAvatar" 时有效
     */
    export interface ButtonOnChooseavatar extends _ButtonOnChooseavatar {}
    /**
     * 添加群应用回调
     *
     * open-type="addGroupApp" 时有效
     */
    export interface ButtonOnAddgroupapp extends _ButtonOnAddgroupapp {}
    /**
     * 用户编辑并选择收货地址回调
     *
     * open-type="chooseAddress" 时有效
     */
    export interface ButtonOnChooseaddress extends _ButtonOnChooseaddress {}
    /**
     * 用户选择发票抬头回调
     *
     * open-type="chooseInvoiceTitle" 时有效
     */
    export interface ButtonOnChooseinvoicetitle extends _ButtonOnChooseinvoicetitle {}
    /**
     * 订阅消息授权回调
     *
     * open-type="subscribe" 时有效
     */
    export interface ButtonOnSubscribe extends _ButtonOnSubscribe {}
    /**
     * 登录回调
     *
     * open-type="login" 时有效
     */
    export interface ButtonOnLogin extends _ButtonOnLogin {}
    /** 按钮属性 */
    export interface ButtonProps extends _ButtonProps {}
    /** 按钮 */
    export type Button = _Button;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 按钮 */
    Button: _Button;
  }
}
