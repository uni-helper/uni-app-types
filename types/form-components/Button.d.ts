import { Component, AnyRecord } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 按钮的大小
 * @desc default 默认
 * @desc mini 小
 */
export type ButtonSize = 'default' | 'mini';

/**
 * @desc 按钮的样式类型，如想在多端统一颜色，请用 default 然后自行写样式
 * @desc primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ 小程序为浅蓝色
 * @desc default 白色
 * @desc warn 红色
 */
export type ButtonType = 'primary' | 'default' | 'warn';

/**
 * @desc 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
 * @desc submit 点击会触发 form 的 submit 事件
 * @desc reset 点击会触发 form 的 reset 事件
 */
export type ButtonFormType = 'submit' | 'reset';

/**
 * @desc 开放能力
 * @desc feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
 * @desc share 触发用户转发
 * @desc getUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
 * @desc contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
 * @desc getPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
 * @desc launchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
 * @desc openSetting 打开授权设置页
 * @desc chooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
 * @desc getAuthorize 支持小程序授权
 * @desc lifestyle 关注生活号
 * @desc contactShare 分享到通讯录好友
 * @desc openGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json 中必须配置 groupIdList
 * @desc openGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
 * @desc openPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json 中必须配置 publicIdList
 * @desc shareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
 * @desc addFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
 * @desc addColorSign 添加彩签，点击后添加状态有用户提示，无回调
 * @desc addGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
 * @desc addToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
 * @desc chooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
 * @desc chooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
 * @desc login 登录，可以从 `@login` 回调中确认是否登录成功
 * @desc subscribe 订阅类模板消息，需要用户授权才可发送
 * @desc favorite 触发用户收藏
 * @desc watchLater 触发用户稍后再看
 * @desc openProfile 触发打开用户主页
 */
export type ButtonOpenType =
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
 * @desc 返回用户信息的语言
 * @desc zh_CN 简体中文
 * @desc zh_TW 繁体中文
 * @desc en 英文
 */
export type ButtonLang = 'zh_CN' | 'zh_TW' | 'en';

export interface ButtonProps {
  /**
   * @desc 按钮的大小
   * @desc default 默认
   * @desc mini 小
   * @desc 默认为 default
   */
  size: ButtonSize;
  /**
   * @desc 按钮的样式类型
   * @desc primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ 小程序为浅蓝色
   * @desc default 白色
   * @desc warn 红色
   * @desc 默认为 default
   */
  type: ButtonType;
  /**
   * @desc 按钮是否镂空，背景色透明
   * @desc 默认为 false
   */
  plain: boolean;
  /**
   * @desc 是否禁用
   */
  disabled: boolean;
  /**
   * @desc 是否带 loading 图标
   * @desc 默认为 false
   */
  loading: boolean;
  /**
   * @desc 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
   * @desc submit 点击会触发 form 的 submit 事件
   * @desc reset 点击会触发 form 的 reset 事件
   * @desc 没有默认值
   */
  formType: ButtonFormType;
  /**
   * @desc 开放能力
   * @desc feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
   * @desc share 触发用户转发
   * @desc getUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
   * @desc contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
   * @desc getPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
   * @desc launchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
   * @desc openSetting 打开授权设置页
   * @desc chooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
   * @desc getAuthorize 支持小程序授权
   * @desc lifestyle 关注生活号
   * @desc contactShare 分享到通讯录好友
   * @desc openGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json 中必须配置 groupIdList
   * @desc openGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
   * @desc openPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json 中必须配置 publicIdList
   * @desc shareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
   * @desc addFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
   * @desc addColorSign 添加彩签，点击后添加状态有用户提示，无回调
   * @desc addGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
   * @desc addToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
   * @desc chooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
   * @desc chooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
   * @desc login 登录，可以从 `@login` 回调中确认是否登录成功
   * @desc subscribe 订阅类模板消息，需要用户授权才可发送
   * @desc favorite 触发用户收藏
   * @desc watchLater 触发用户稍后再看
   * @desc openProfile 触发打开用户主页
   */
  openType: ButtonOpenType;
  /**
   * @desc 指定按下去的样式类
   * @desc 当 hover-class="none" 时，没有点击态效果
   * @desc 默认为 button-hover
   */
  hoverClass: string;
  /**
   * @desc 按住后多久出现点击态
   * @desc 单位为 ms
   * @desc 默认为 20
   */
  hoverStartTime: number;
  /**
   * @desc 手指松开后点击态保留时间
   * @desc 单位为 ms
   * @desc 默认为 70
   */
  hoverStayTime: number;
  /**
   * @desc 打开 APP 时，向 APP 传递的参数
   * @desc open-type="launchApp" 时有效
   */
  appParameter: string;
  /**
   * @desc 指定是否阻止本节点的祖先节点出现点击态
   * @desc 默认为 false
   */
  hoverStopPropagation: boolean;
  /**
   * @desc 返回用户信息的语言
   * @desc zh_CN 简体中文
   * @desc zh_TW 繁体中文
   * @desc en 英文
   * @desc 默认为 en
   */
  lang: ButtonLang;
  /**
   * @desc 会话来源
   * @desc open-type="contact" 时有效
   */
  sessionFrom: string;
  /**
   * @desc 会话内消息卡片标题
   * @desc open-type="contact" 时有效
   * @desc 默认为当前标题
   */
  sendMessageTitle: string;
  /**
   * @desc 会话内消息卡片点击跳转小程序路径
   * @desc open-type="contact" 时有效
   * @desc 默认为当前分享路径
   */
  sendMessagePath: string;
  /**
   * @desc 会话内消息卡片图片
   * @desc open-type="contact" 时有效
   * @desc 默认为截图
   */
  sendMessageImg: string;
  /**
   * @desc 是否显示会话内消息卡片
   * @desc 设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息
   * @desc open-type="contact" 时有效
   * @desc 默认为 false
   */
  showMessageCard: boolean;
  /**
   * @desc 打开群资料卡时，传递的群号
   * @desc open-type="openGroupProfile" 时有效
   */
  groupId: string;
  /**
   * @desc 打开频道页面时，传递的频道号
   * @desc open-type="openGuildProfile" 时有效
   */
  guildId: string;
  /**
   * @desc 打开公众号资料卡时，传递的号码
   * @desc open-type="openPublicProfile" 时有效
   */
  publicId: string;
  /**
   * @desc 获取用户手机号时回调
   * @desc open-type="getPhoneNumber" 时有效
   */
  onGetphonenumber: (
    event: CustomEvent<{
      /**
       * @desc 错误信息
       */
      errMsg?: string;
      /**
       * @desc 动态令牌
       */
      code?: string;
      /**
       * @desc 包括敏感数据在内的完整用户信息的加密数据
       */
      encryptedData?: string;
      /**
       * @desc 加密算法的初始向量
       */
      iv?: string;
      /**
       * @desc 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据
       */
      cloudID?: string;
    }>,
  ) => void;
  /**
   * @desc 使用开放能力发生错误时回调
   */
  onError: (event: BaseEvent) => void;
  /**
   * @desc 在打开授权设置页并关闭后回调
   * @desc open-type="openSetting" 时有效
   */
  onOpensetting: (
    event: CustomEvent<{
      authSetting: AnyRecord;
    }>,
  ) => void;
  /**
   * @desc 从小程序成功打开 APP 回调
   * @desc open-type="launchApp" 时有效
   */
  onLaunchapp: (event: BaseEvent) => void;
  /**
   * @desc 获取用户头像回调
   * @desc open-type="chooseAvatar" 时有效
   */
  onChooseavatar: (event: BaseEvent) => void;
  /**
   * @desc 添加群应用回调
   * @desc open-type="addGroupApp" 时有效
   */
  onAddgroupapp: (event: BaseEvent) => void;
  /**
   * @desc 用户编辑并选择收货地址回调
   * @desc open-type="chooseAddress" 时有效
   */
  onChooseaddress: (event: BaseEvent) => void;
  /**
   * @desc 用户选择发票抬头回调
   * @desc open-type="chooseInvoiceTitle" 时有效
   */
  onChooseinvoicetitle: (event: BaseEvent) => void;
  /**
   * @desc 订阅消息授权回调
   * @desc open-type="subscribe" 时有效
   */
  onSubscribe: (event: BaseEvent) => void;
  /**
   * @desc 登录回调
   * @desc open-type="login" 时有效
   */
  onLogin: (event: BaseEvent) => void;
}

/**
 * @desc 按钮
 */
export type Button = Component<Partial<ButtonProps>>;
