import { Component } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 弹幕
 */
export interface VideoDanmu {
  /**
   * @desc 弹幕文本
   */
  text: string;
  /**
   * @desc 弹幕颜色
   */
  color: string;
  /**
   * @desc 弹幕出现时间
   * @desc 单位为 s
   */
  time: number;
}

/**
 * @desc 设置全屏时视频的方向，不指定则根据宽高比自动判断
 * @desc 0 正常竖向
 * @desc 90 屏幕逆时针 90 度
 * @desc -90 屏幕顺时针 90 度
 */
export type VideoDirection = 0 | 90 | -90;

/**
 * @desc 当视频大小与 video 容器大小不一致时，视频的表现形式
 * @desc contain 包含
 * @desc fill 填充
 * @desc cover 覆盖
 */
export type VideoObjectFit = 'contain' | 'fill' | 'cover';

/**
 * @desc 播放按钮的位置
 * @desc bottom 控制栏上
 * @desc center 视频中间
 */
export type VideoPlayBtnPosition = 'bottom' | 'center';

/**
 * @desc 解码器选择
 * @desc hardware 硬件解码
 * @desc software 软件解码
 */
export type VideoCodec = 'hardware' | 'software';

/**
 * @desc 移动网络提醒样式
 * @desc 0 不提醒
 * @desc 1 提醒
 */
export type VideoMobilenetHintType = 0 | 1;

/**
 * @desc 播放策略
 * @desc 0 普通模式，适合绝大部分视频播放场景
 * @desc 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
 * @desc 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
 */
export type VideoPlayStrategy = 0 | 1 | 2;

export interface VideoProps {
  /**
   * @desc 要播放视频的资源地址
   */
  src: string;
  /**
   * @desc 是否自动播放
   * @desc 默认为 false
   */
  autoplay: boolean;
  /**
   * @desc 是否循环播放
   * @desc 默认为 false
   */
  loop: boolean;
  /**
   * @desc 是否静音播放
   * @desc 默认为 false
   */
  muted: boolean;
  /**
   * @desc 指定视频初始播放位置
   * @desc 单位为 s
   */
  initialTime: number;
  /**
   * @desc 指定视频长度
   * @desc 单位为 s
   */
  duration: number;
  /**
   * @desc 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
   * @desc 默认为 true
   */
  controls: boolean;
  /**
   * @desc 弹幕列表
   */
  danmuList: VideoDanmu[];
  /**
   * @desc 是否显示弹幕按钮，不支持动态修改
   * @desc 默认为 false
   */
  danmuBtn: boolean;
  /**
   * @desc 是否展示弹幕，不支持动态修改
   * @desc 默认为 false
   */
  enableDanmu: boolean;
  /**
   * @desc 在非全屏模式下，是否开启亮度与音量调节手势
   * @desc 默认为 false
   */
  pageGesture: boolean;
  /**
   * @desc 设置全屏时视频的方向，不指定则根据宽高比自动判断
   * @desc 0 正常竖向
   * @desc 90 屏幕逆时针 90 度
   * @desc -90 屏幕顺时针 90 度
   * @desc 默认根据宽高比自动判断
   */
  direction: VideoDirection;
  /**
   * @desc 若不设置，宽度大于 240 时才会显示
   * @desc 默认为 true
   */
  showProgress: boolean;
  /**
   * @desc 是否显示全屏按钮
   * @desc 默认为 true
   */
  showFullscreenBtn: boolean;
  /**
   * @desc 是否显示视频底部控制栏的播放按钮
   * @desc 默认为 true
   */
  showPlayBtn: boolean;
  /**
   * @desc 是否显示视频中间的播放按钮
   * @desc 默认为 true
   */
  showCenterPlayBtn: boolean;
  /**
   * @desc 是否显示 loading 控件
   * @desc 默认为 true
   */
  showLoading: boolean;
  /**
   * @desc 是否开启控制进度的手势
   * @desc 默认为 true
   */
  enableProgressGesture: boolean;
  /**
   * @desc 当视频大小与 video 容器大小不一致时，视频的表现形式
   * @desc contain 包含
   * @desc fill 填充
   * @desc cover 覆盖
   * @desc 默认为 contain
   */
  objectFit: VideoObjectFit;
  /**
   * @desc 视频封面的图片网络资源地址
   * @desc 如果 controls 值为 false 则无效
   */
  poster: string;
  /**
   * @desc 是否显示静音按钮
   * @decs 默认为 false
   */
  showMuteBtn: boolean;
  /**
   * @desc 视频的标题，全屏时在顶部展示
   */
  title: string;
  /**
   * @desc 播放按钮的位置
   * @desc bottom 控制栏上
   * @desc center 视频中间
   * @desc 默认为 bottom
   */
  playBtnPosition: VideoPlayBtnPosition;
  /**
   * @desc 移动网络提醒样式
   * @desc 0 不提醒
   * @desc 1 提醒
   * @desc 默认为 1
   */
  mobilenetHintType: VideoMobilenetHintType;
  /**
   * @desc 是否开启播放手势，即双击切换播放、暂停
   * @desc 默认为 false
   */
  enablePlayGesture: boolean;
  /**
   * @desc 当跳转到其它小程序页面时，是否自动暂停本页面的视频
   * @desc 默认为 true
   */
  autoPauseIfNavigate: boolean;
  /**
   * @desc 当跳转到其它微信原生页面时，是否自动暂停本页面的视频
   * @desc 默认为 true
   */
  autoPauseIfOpenNative: boolean;
  /**
   * @desc 在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）
   * @desc 默认为 false
   */
  vslideGesture: boolean;
  /**
   * @desc 在全屏模式下，是否开启亮度与音量调节手势
   * @desc 默认为 true
   */
  vslideGestureInFullscreen: boolean;
  /**
   * @desc 视频前贴广告单元ID
   */
  adUnitId: string;
  /**
   * @desc 用于给搜索等场景作为视频封面展示
   * @desc 建议使用无播放 icon 的视频封面图
   * @desc 只支持网络地址
   */
  posterForCrawler: string;
  /**
   * @desc 解码器选择
   * @desc hardware 硬件解码
   * @desc software 软件解码
   * @desc 默认为 hardware
   */
  codec: VideoCodec;
  /**
   * @desc 是否对 http、https 视频源开启本地缓存
   * @desc 默认为 true
   */
  httpCache: boolean;
  /**
   * @desc 播放策略
   * @desc 0 普通模式，适合绝大部分视频播放场景
   * @desc 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
   * @desc 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
   * @desc 默认为 0
   */
  playStrategy: VideoPlayStrategy;
  /**
   * @desc HTTP 请求 Header
   */
  header: Record<string, any>;
  /**
   * @desc 开始/继续播放时触发
   */
  onPlay: (event: BaseEvent) => void;
  /**
   * @desc 暂停播放时触发
   */
  onPause: (event: BaseEvent) => void;
  /**
   * @desc 播放到末尾时触发
   */
  onEnded: (event: BaseEvent) => void;
  /**
   * @desc 播放进度变化时触发
   * @desc 250ms 一次
   */
  onTimeupdate: (
    event: CustomEvent<{
      currentTime: number;
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 视频进入和退出全屏时触发
   */
  onFullscreenchange: (
    event: CustomEvent<{
      fullScreen: boolean;
      direction: VideoProps['direction'];
    }>,
  ) => void;
  /**
   * @desc 视频缓冲时触发
   */
  onWaiting: (event: BaseEvent) => void;
  /**
   * @desc 视频播放出错时触发
   */
  onError: (event: BaseEvent) => void;
  /**
   * @desc 加载进度变化时触发
   */
  onProgress: (
    event: CustomEvent<{
      buffered: number;
    }>,
  ) => void;
  /**
   * @desc 视频资源开始加载时触发
   */
  onLoadeddata: (event: BaseEvent) => void;
  /**
   * @desc 开始加载数据时触发
   */
  onLoadstart: (event: BaseEvent) => void;
  /**
   * @desc 拖动进度条结束时触发
   */
  onSeeked: (event: BaseEvent) => void;
  /**
   * @desc 拖动进度条时触发
   */
  onSeeking: (event: BaseEvent) => void;
  /**
   * @desc 视频元数据加载完成时触发
   */
  onLoadedmetadata: (
    event: CustomEvent<{
      width: number;
      height: number;
      duration: number;
    }>,
  ) => void;
  /**
   * @desc 视频播放全屏播放点击时触发
   */
  onFullscreenclick: (
    event: CustomEvent<{
      screenX: number;
      screenY: number;
      screenWidth: number;
      screenHeight: number;
    }>,
  ) => void;
  /**
   * @desc 切换 controls 显示隐藏时触发
   */
  onControlstoggle: (
    event: CustomEvent<{
      show: boolean;
    }>,
  ) => void;
}

/**
 * @desc 视频播放组件
 * @desc 默认宽度 300px、高度 225px，可通过 css 设置宽高
 */
export type Video = Component<Partial<VideoProps>>;
