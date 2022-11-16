import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 推流视频模式
 * @desc SD 标清
 * @desc HD 高清
 * @desc FHD 超清
 */
export type LivePusherMode = 'SD' | 'HD' | 'FHD';

/**
 * @desc 画面方向
 * @desc vertical 纵向
 * @desc horizontal 横向
 */
export type LivePusherOrientation = 'vertical' | 'horizontal';

/**
 * @desc 音质
 * @desc high 高音质 48KHz
 * @desc low 低音质 16KHz
 */
export type LivePusherAudioQuality = 'high' | 'low';

/**
 * @desc 使用的摄像头
 * @desc front 前置摄像头
 * @desc back 后置摄像头
 */
export type LivePusherDevicePosition = 'front' | 'back';

/**
 * @desc 控制本地预览画面是否镜像
 * @desc auto 前置摄像头镜像，后置摄像头不镜像
 * @desc enable 前后置摄像头均镜像
 * @desc disable 前后置摄像头均不镜像
 */
export type LivePusherLocalMirror = 'auto' | 'enable' | 'disable';

/**
 * @desc 音频混响类型
 * @desc 0 关闭
 * @desc 1 KTV
 * @desc 2 小房间
 * @desc 3 大会堂
 * @desc 4 低沉
 * @desc 5 洪亮
 * @desc 6 金属声
 * @desc 7 磁性
 */
export type LivePusherAudioReverbType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * @desc 音量类型
 * @desc 自动
 * @desc media 媒体音量
 * @desc voicecall 通话音量
 */
export type LivePusherAudioVolumeType = 'auto' | 'media' | 'voicecall';

/**
 * @desc 状态码
 * @desc 1001 已经连接推流服务器
 * @desc 1002 已经与服务器握手完毕，开始推流
 * @desc 1003 打开摄像头成功
 * @desc 1004 录屏启动成功
 * @desc 1005 推流动态调整分辨率
 * @desc 1006 推流动态调整码率
 * @desc 1007 首帧画面采集完成
 * @desc 1008 编码器启动
 * @desc -1301 打开摄像头失败
 * @desc -1302 打开麦克风失败
 * @desc -1303 视频编码失败
 * @desc -1304 音频编码失败
 * @desc -1305 不支持的视频分辨率
 * @desc -1306 不支持的音频采样率
 * @desc -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
 * @desc -1308 开始录屏失败，可能是被用户拒绝
 * @desc -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
 * @desc -1310 录屏被其他应用打断了
 * @desc -1311 Android Mic 打开成功，但是录不到音频数据
 * @desc -1312 录屏动态切横竖屏失败
 * @desc 1101 网络状况不佳：上行带宽太小，上传数据受阻
 * @desc 1102 网络断连, 已启动自动重连
 * @desc 1103 硬编码启动失败,采用软编码
 * @desc 1104 视频编码失败
 * @desc 1105 新美颜软编码启动失败，采用老的软编码
 * @desc 1106 新美颜软编码启动失败，采用老的软编码
 * @desc 3001 RTMP -DNS 解析失败
 * @desc 3002 RTMP 服务器连接失败
 * @desc 3003 RTMP 服务器握手失败
 * @desc 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
 * @desc 3005 RTMP 读/写失败
 */
export type LivePusherCode =
  | 1001
  | 1002
  | 1003
  | 1004
  | 1005
  | 1006
  | 1007
  | 1008
  | -1301
  | -1302
  | -1303
  | -1304
  | -1305
  | -1306
  | -1307
  | -1308
  | -1309
  | -1310
  | -1311
  | -1312
  | 1101
  | 1102
  | 1103
  | 1104
  | 1105
  | 1106
  | 3001
  | 3002
  | 3003
  | 3004
  | 3005;

/**
 * @desc 网络状态
 */
export interface LivePusherInfo {
  /**
   * @desc 状态码
   * @desc 1001 已经连接推流服务器
   * @desc 1002 已经与服务器握手完毕，开始推流
   * @desc 1003 打开摄像头成功
   * @desc 1004 录屏启动成功
   * @desc 1005 推流动态调整分辨率
   * @desc 1006 推流动态调整码率
   * @desc 1007 首帧画面采集完成
   * @desc 1008 编码器启动
   * @desc -1301 打开摄像头失败
   * @desc -1302 打开麦克风失败
   * @desc -1303 视频编码失败
   * @desc -1304 音频编码失败
   * @desc -1305 不支持的视频分辨率
   * @desc -1306 不支持的音频采样率
   * @desc -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
   * @desc -1308 开始录屏失败，可能是被用户拒绝
   * @desc -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
   * @desc -1310 录屏被其他应用打断了
   * @desc -1311 Android Mic 打开成功，但是录不到音频数据
   * @desc -1312 录屏动态切横竖屏失败
   * @desc 1101 网络状况不佳：上行带宽太小，上传数据受阻
   * @desc 1102 网络断连, 已启动自动重连
   * @desc 1103 硬编码启动失败,采用软编码
   * @desc 1104 视频编码失败
   * @desc 1105 新美颜软编码启动失败，采用老的软编码
   * @desc 1106 新美颜软编码启动失败，采用老的软编码
   * @desc 3001 RTMP -DNS 解析失败
   * @desc 3002 RTMP 服务器连接失败
   * @desc 3003 RTMP 服务器握手失败
   * @desc 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
   * @desc 3005 RTMP 读/写失败
   */
  code?: LivePusherCode;
  /**
   * @desc 具体的网络状态信息
   */
  message?: string;
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
}

/**
 * @desc 错误状态码
 * @desc 10001 用户禁止使用摄像头
 * @desc 10002 用户禁止使用录音
 * @desc 10003 背景音资源（BGM）加载失败
 * @desc 10004 等待画面资源（waiting-image）加载失败
 */
export type LiverPusherErrCode = 10001 | 10002 | 10003 | 10004;

export interface LivePusherProps {
  /**
   * @desc 推流地址，支持 RTMP 协议
   */
  url: string;
  /**
   * @desc 推流视频模式
   * @desc SD 标清
   * @desc HD 高清
   * @desc FHD 超清
   * @desc 默认为 SD
   */
  mode: LivePusherMode;
  /**
   * @desc 是否自动推流
   * @desc 默认为 false
   */
  autopush: boolean;
  /**
   * @desc 视频宽高比例
   * @desc 默认为 3:2
   */
  aspect: number;
  /**
   * @desc 是否静音
   * @desc 默认为 false
   */
  muted: boolean;
  /**
   * @desc 是否开启摄像头
   * @desc 默认为 true
   */
  enableCamera: boolean;
  /**
   * @desc 自动聚焦
   * @desc 默认为 true
   */
  autoFocus: boolean;
  /**
   * @desc 美颜
   * @desc 取值范围为 0 - 9
   * @desc 默认为 0
   */
  beauty: number;
  /**
   * @desc 美白
   * @desc 取值范围为 0 - 9
   * @desc 默认为 0
   */
  whiteness: number;
  /**
   * @desc 画面方向
   * @desc vertical 纵向
   * @desc horizontal 横向
   * @desc 默认为 vertical
   */
  orientation: LivePusherOrientation;
  /**
   * @desc 最小码率
   * @desc 默认为 200
   */
  minBitrate: number;
  /**
   * @desc 最大码率
   * @desc 默认为 1000
   */
  maxBitrate: number;
  /**
   * @desc 音质
   * @desc high 高音质 48KHz
   * @desc low 低音质 16KHz
   * @desc 默认为 high
   */
  audioQuality: LivePusherAudioQuality;
  /**
   * @desc 进入后台时推流的等待画面
   */
  waitingImage: string;
  /**
   * @desc 等待画面资源的 MD5 值
   */
  waitingImageMd5: string;
  /**
   * @desc 是否调整焦距
   * @desc 默认为 false
   */
  zoom: boolean;
  /**
   * @desc 使用的摄像头
   * @desc front 前置摄像头
   * @desc back 后置摄像头
   * @desc 默认为 front
   */
  devicePosition: LivePusherDevicePosition;
  /**
   * @desc 进入后台时是否静音
   * @desc 默认为 false
   */
  backgroundMute: boolean;
  /**
   * @desc 设置推流画面是否镜像，产生的效果在 live-player 呈现
   * @desc 默认为 false
   */
  remoteMirror: boolean;
  /**
   * @desc 控制本地预览画面是否镜像
   * @desc auto 前置摄像头镜像，后置摄像头不镜像
   * @desc enable 前后置摄像头均镜像
   * @desc disable 前后置摄像头均不镜像
   * @desc 默认为 auto
   */
  localMirror: LivePusherLocalMirror;
  /**
   * @desc 音频混响类型
   * @desc 0 关闭
   * @desc 1 KTV
   * @desc 2 小房间
   * @desc 3 大会堂
   * @desc 4 低沉
   * @desc 5 洪亮
   * @desc 6 金属声
   * @desc 7 磁性
   * @desc 默认为 0
   */
  audioReverbType: LivePusherAudioReverbType;
  /**
   * @desc 是否开启麦克风
   * @desc 默认为 true
   */
  enableMic: boolean;
  /**
   * @desc 是否开启音频自动增益
   * @desc 默认为 false
   */
  enableAgc: boolean;
  /**
   * @desc 是否开启音频噪声抑制
   * @desc 默认为 false
   */
  enableAns: boolean;
  /**
   * @desc 音量类型
   * @desc 自动
   * @desc media 媒体音量
   * @desc voicecall 通话音量
   * @desc 默认为 auto
   */
  audioVolumeType: LivePusherAudioVolumeType;
  /**
   * @desc 播放状态变化时触发
   */
  onStatechange: (
    event: CustomEvent<{
      /**
       * @desc 状态码
       * @desc 1001 已经连接推流服务器
       * @desc 1002 已经与服务器握手完毕，开始推流
       * @desc 1003 打开摄像头成功
       * @desc 1004 录屏启动成功
       * @desc 1005 推流动态调整分辨率
       * @desc 1006 推流动态调整码率
       * @desc 1007 首帧画面采集完成
       * @desc 1008 编码器启动
       * @desc -1301 打开摄像头失败
       * @desc -1302 打开麦克风失败
       * @desc -1303 视频编码失败
       * @desc -1304 音频编码失败
       * @desc -1305 不支持的视频分辨率
       * @desc -1306 不支持的音频采样率
       * @desc -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
       * @desc -1308 开始录屏失败，可能是被用户拒绝
       * @desc -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
       * @desc -1310 录屏被其他应用打断了
       * @desc -1311 Android Mic 打开成功，但是录不到音频数据
       * @desc -1312 录屏动态切横竖屏失败
       * @desc 1101 网络状况不佳：上行带宽太小，上传数据受阻
       * @desc 1102 网络断连, 已启动自动重连
       * @desc 1103 硬编码启动失败,采用软编码
       * @desc 1104 视频编码失败
       * @desc 1105 新美颜软编码启动失败，采用老的软编码
       * @desc 1106 新美颜软编码启动失败，采用老的软编码
       * @desc 3001 RTMP -DNS 解析失败
       * @desc 3002 RTMP 服务器连接失败
       * @desc 3003 RTMP 服务器握手失败
       * @desc 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
       * @desc 3005 RTMP 读/写失败
       */
      code: LivePusherCode;
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
      info: LivePusherInfo;
    }>,
  ) => void;
  /**
   * @desc 渲染错误时触发
   */
  onError: (
    event: CustomEvent<{
      /**
       * @desc 错误状态码
       * @desc 10001 用户禁止使用摄像头
       * @desc 10002 用户禁止使用录音
       * @desc 10003 背景音资源（BGM）加载失败
       * @desc 10004 等待画面资源（waiting-image）加载失败
       */
      errCode: LiverPusherErrCode;
      /**
       * @desc 错误信息
       */
      errMsg: string;
    }>,
  ) => void;
  /**
   * @desc 背景音开始播放时触发
   */
  onBgmstart: (event: BaseEvent) => void;
  /**
   * @desc 背景音进度变化时触发
   */
  onBgmprogress: (
    event: CustomEvent<{
      progress: number;
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 背景音播放完成时触发
   */
  onBgmcomplete: (event: BaseEvent) => void;
}

/**
 * @desc 实时音视频录制（直播推流）
 */
export type LivePusher = Component<Partial<LivePusherProps>>;
