import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 实时模式
 * @dec live 直播
 * @desc RTC 实时通话，该模式时延更低
 */
export type LivePlayerMode = 'live' | 'RTC';

/**
 * @desc 画面方向
 * @desc vertical 纵向
 * @desc horizontal 横向
 */
export type LivePlayerOrientation = 'vertical' | 'horizontal';

/**
 * @desc 填充模式
 * @desc contain 图像长边填满屏幕，短边区域会被填充⿊⾊
 * @desc fillCrop 图像铺满屏幕，超出显示区域的部分将被截掉
 */
export type LivePlayerObjectFit = 'contain' | 'fillCrop';

/**
 * @desc 声音输出方式
 * @desc speaker 扬声器
 * @desc ear 听筒
 * @desc 默认为 speaker
 */
export type LivePlayerSoundMode = 'speaker' | 'ear';

/**
 * @desc 设置小窗模式
 * @desc push 路由 push 时触发小窗
 * @desc pop 路由 pop 时触发小窗
 */
export type LivePlayerPictureInPictureMode = 'push' | 'pop';

/**
 * @desc 状态码
 * @desc 2001 已经连接服务器
 * @desc 2002 已经连接服务器，开始拉流
 * @desc 2003 网络接收到首个视频数据包 IDR
 * @desc 2004 视频播放开始
 * @desc 2005 视频播放进度
 * @desc 2006 视频播放结束
 * @desc 2007 视频播放 Loading
 * @desc 2008 解码器启动
 * @desc 2009 视频分辨率改变
 * @desc -2301 网络断连，且经多次重连抢救无效，更多重试请自行重启播放
 * @desc -2302 获取加速拉流地址失败
 * @desc 2101 当前视频帧解码失败
 * @desc 2102 当前音频帧解码失败
 * @desc 2103 网络断连, 已启动自动重连
 * @desc 2104 网络来包不稳，可能是下行带宽不足，或由于主播端出流不均匀
 * @desc 2105 当前视频播放出现卡顿
 * @desc 2106 硬解启动失败，采用软解
 * @desc 2107 当前视频帧不连续，可能丢帧
 * @desc 2108 当前流硬解第一个 I 帧失败，SDK 自动切软解
 * @desc 3001 RTMP - DNS解析失败
 * @desc 3002 RTMP 服务器连接失败
 * @desc 3003 RTMP 服务器握手失败
 * @desc 3005 RTMP 读/写失败
 */
export type LivePlayerCode =
  | 2001
  | 2002
  | 2003
  | 2004
  | 2005
  | 2006
  | 2007
  | 2008
  | 2009
  | -2301
  | -2302
  | 2101
  | 2102
  | 2103
  | 2104
  | 2105
  | 2106
  | 2107
  | 2108
  | 3001
  | 3002
  | 3003
  | 3005;

/**
 * @desc 网络状态
 */
export interface LivePlayerInfo {
  /**
   * @desc 当前视频编/码器输出的比特率
   * @desc 单位为 kbps
   */
  videoBitrate?: number;
  /**
   * @desc 当前音频编/码器输出的比特率
   * @desc 单位为 kbps
   */
  audioBitrate?: number;
  /**
   * @desc 当前视频帧率
   */
  videoFPS?: number;
  /**
   * @desc 当前视频 GOP，也就是每两个关键帧 I 帧间隔时长
   * @desc 单位为 s
   */
  videoGOP?: number;
  /**
   * @desc 当前的发送/接收速度
   */
  netSpeed?: number;
  /**
   * @desc 网络抖动情况，抖动越大，网络越不稳定
   */
  netJitter?: number;
  /**
   * @desc 网络质量
   */
  netQualityLevel?: number;
  /**
   * @desc 视频画面的宽度
   */
  videoWidth?: number;
  /**
   * @desc 视频画面的高度
   */
  videoHeight?: number;
  /**
   * @desc 缓冲的视频总时长
   * @desc 单位为 ms
   */
  videoCache?: number;
  /**
   * @desc 缓冲的音频总时长
   * @desc 单位为 ms
   */
  audioCache?: number;
  /**
   * @desc 解码器中缓存的视频帧数 (Android 端硬解码时存在）
   */
  vDecCacheSize?: number;
  /**
   * @desc 缓冲的总视频帧数，该数值越大，播放延迟越高
   */
  vSumCacheSize?: number;
  /**
   * @desc 音画同步错位时间（播放），此数值越小，音画同步越好
   * @desc 单位为 ms
   */
  avPlayInterval?: number;
  /**
   * @desc 音画同步错位时间（网络），此数值越小，音画同步越好
   * @decs 单位为 ms
   */
  avRecvInterval?: number;
  /**
   * @desc 音频缓冲时长阈值，缓冲超过该阈值后，播放器会开始调控延时
   */
  audioCacheThreshold?: number;
}

export interface LivePlayerProps {
  /**
   * @desc 唯一标志符
   */
  id: string;
  /**
   * @desc 音视频地址
   */
  src: string;
  /**
   * @desc 实时模式
   * @dec live 直播
   * @desc RTC 实时通话，该模式时延更低
   * @desc 默认为 live
   */
  mode: LivePlayerMode;
  /**
   * @desc 是否自动播放
   * @desc 默认为 false
   */
  autoplay: boolean;
  /**
   * @desc 是否静音
   * @desc 默认为 false
   */
  muted: boolean;
  /**
   * @desc 画面方向
   * @desc vertical 纵向
   * @desc horizontal 横向
   * @desc 默认为 vertical
   */
  orientation: LivePlayerOrientation;
  /**
   * @desc 填充模式
   * @desc contain 图像长边填满屏幕，短边区域会被填充⿊⾊
   * @desc fillCrop 图像铺满屏幕，超出显示区域的部分将被截掉
   * @desc 默认为 contain
   */
  objectFit: LivePlayerObjectFit;
  /**
   * @desc 进入后台时是否静音
   * @desc 默认为 false
   */
  backgroundMute: boolean;
  /**
   * @desc 声音输出方式
   * @desc speaker 扬声器
   * @desc ear 听筒
   * @desc 默认为 speaker
   */
  soundMode: LivePlayerSoundMode;
  /**
   * @desc 最小缓冲区
   * @desc 单位为 s
   * @desc 默认为 1
   */
  minCache: number;
  /**
   * @desc 最大缓冲区
   * @desc 单位为 s
   * @desc 默认为 3
   */
  maxCache: number;
  /**
   * @desc 设置小窗模式，空字符串或通过数组形式设置多种模式
   */
  pictureInPictureMode: LivePlayerPictureInPictureMode | LivePlayerPictureInPictureMode[];
  /**
   * @desc 播放状态变化时触发
   */
  onStatechange: (
    event: CustomEvent<{
      /**
       * @desc 状态码
       * @desc 2001 已经连接服务器
       * @desc 2002 已经连接服务器，开始拉流
       * @desc 2003 网络接收到首个视频数据包 IDR
       * @desc 2004 视频播放开始
       * @desc 2005 视频播放进度
       * @desc 2006 视频播放结束
       * @desc 2007 视频播放 Loading
       * @desc 2008 解码器启动
       * @desc 2009 视频分辨率改变
       * @desc -2301 网络断连，且经多次重连抢救无效，更多重试请自行重启播放
       * @desc -2302 获取加速拉流地址失败
       * @desc 2101 当前视频帧解码失败
       * @desc 2102 当前音频帧解码失败
       * @desc 2103 网络断连, 已启动自动重连
       * @desc 2104 网络来包不稳，可能是下行带宽不足，或由于主播端出流不均匀
       * @desc 2105 当前视频播放出现卡顿
       * @desc 2106 硬解启动失败，采用软解
       * @desc 2107 当前视频帧不连续，可能丢帧
       * @desc 2108 当前流硬解第一个 I 帧失败，SDK 自动切软解
       * @desc 3001 RTMP - DNS解析失败
       * @desc 3002 RTMP 服务器连接失败
       * @desc 3003 RTMP 服务器握手失败
       * @desc 3005 RTMP 读/写失败
       */
      code: LivePlayerCode;
    }>,
  ) => void;
  /**
   * @desc 网络状态变化时触发
   */
  onNetstatus: (
    event: CustomEvent<{
      /**
       * @desc 网络状态
       */
      info: LivePlayerInfo;
    }>,
  ) => void;
  /**
   * @desc 全屏变化时触发
   */
  onFullscreenchange: (
    event: CustomEvent<{
      direction: LivePlayerOrientation;
      fullScreen: boolean;
    }>,
  ) => void;
  /**
   * @desc 播放音量变化时触发
   */
  onAudiovolumenotify: (event: BaseEvent) => void;
  /**
   * @desc 播放器进入小窗时触发
   */
  onEnterpictureinpicture: (event: BaseEvent) => void;
  /**
   * @desc 播放器退出小窗时触发
   */
  onLeavepictureinpicture: (event: BaseEvent) => void;
}

/**
 * @desc 实时音视频播放（直播拉流）
 */
export type LivePlayer = Component<Partial<LivePlayerProps>>;
