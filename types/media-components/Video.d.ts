import { Component, AnyRecord } from '../Component';
import { CustomEvent } from '../events';

/** 弹幕 */
interface _VideoDanmu {
  /** 弹幕文本 */
  text: string;
  /** 弹幕颜色 */
  color: string;
  /**
   * 弹幕出现时间
   *
   * 单位为 s
   */
  time: number;
}

/**
 * 设置全屏时视频的方向，不指定则根据宽高比自动判断
 *
 * 0 正常竖向
 *
 * 90 屏幕逆时针 90 度
 *
 * -90 屏幕顺时针 90 度
 */
type _VideoDirection = 0 | 90 | -90;

/**
 * 当视频大小与 video 容器大小不一致时，视频的表现形式
 *
 * Contain 包含
 *
 * Fill 填充
 *
 * Cover 覆盖
 */
type _VideoObjectFit = 'contain' | 'fill' | 'cover';

/**
 * 播放按钮的位置
 *
 * Bottom 控制栏上
 *
 * Center 视频中间
 */
type _VideoPlayBtnPosition = 'bottom' | 'center';

/**
 * 解码器选择
 *
 * Hardware 硬件解码
 *
 * Software 软件解码
 */
type _VideoCodec = 'hardware' | 'software';

/**
 * 移动网络提醒样式
 *
 * 0 不提醒
 *
 * 1 提醒
 */
type _VideoMobilenetHintType = 0 | 1;

/**
 * 播放策略
 *
 * 0 普通模式，适合绝大部分视频播放场景
 *
 * 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
 *
 * 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
 */
type _VideoPlayStrategy = 0 | 1 | 2;

/** 开始/继续播放时触发 */
interface _VideoOnPlay {
  (event: BaseEvent): void;
}

/** 暂停播放时触发 */
interface _VideoOnPause {
  (event: BaseEvent): void;
}

/** 播放到末尾时触发 */
interface _VideoOnEnded {
  (event: BaseEvent): void;
}

interface _VideoOnTimeupdateDetail {
  currentTime: number;
  duration: number;
}

/**
 * 播放进度变化时触发
 *
 * 250ms 一次
 */
interface _VideoOnTimeupdate {
  (event: CustomEvent<_VideoOnTimeupdateDetail>): void;
}

interface _VideoOnFullscreenchangeDetail {
  fullScreen: boolean;
  direction: _VideoDirection;
}

/** 视频进入和退出全屏时触发 */
interface _VideoOnFullscreenchange {
  (event: CustomEvent<_VideoOnFullscreenchangeDetail>): void;
}

/** 视频缓冲时触发 */
interface _VideoOnWaiting {
  (event: BaseEvent): void;
}

/** 视频播放出错时触发 */
interface _VideoOnError {
  (event: BaseEvent): void;
}

interface _VideoOnProgressDetail {
  buffered: number;
}

/** 加载进度变化时触发 */
interface _VideoOnProgress {
  (event: CustomEvent<_VideoOnProgressDetail>): void;
}

/** 视频资源开始加载时触发 */
interface _VideoOnLoadeddata {
  (event: BaseEvent): void;
}

/** 开始加载数据时触发 */
interface _VideoOnLoadstart {
  (event: BaseEvent): void;
}

/** 拖动进度条结束时触发 */
interface _VideoOnSeeked {
  (event: BaseEvent): void;
}

/** 拖动进度条时触发 */
interface _VideoOnSeeking {
  (event: BaseEvent): void;
}

interface _VideoOnLoadedmetadataDetail {
  width: number;
  height: number;
  duration: number;
}

/** 视频元数据加载完成时触发 */
interface _VideoOnLoadedmetadata {
  (event: CustomEvent<_VideoOnLoadedmetadataDetail>): void;
}

interface _VideoOnFullscreenclickDetail {
  screenX: number;
  screenY: number;
  screenWidth: number;
  screenHeight: number;
}

/** 视频播放全屏播放点击时触发 */
interface _VideoOnFullscreenclick {
  (event: CustomEvent<_VideoOnFullscreenclickDetail>): void;
}

interface _VideoOnControlstoggleDetail {
  show: boolean;
}

/** 切换 controls 显示隐藏时触发 */
interface _VideoOnControlstoggle {
  (event: CustomEvent<_VideoOnControlstoggleDetail>): void;
}

/** 视频播放组件属性 */
interface _VideoProps {
  /** 要播放视频的资源地址 */
  src: string;
  /**
   * 是否自动播放
   *
   * 默认为 false
   */
  autoplay: boolean;
  /**
   * 是否循环播放
   *
   * 默认为 false
   */
  loop: boolean;
  /**
   * 是否静音播放
   *
   * 默认为 false
   */
  muted: boolean;
  /**
   * 指定视频初始播放位置
   *
   * 单位为 s
   */
  initialTime: number;
  /**
   * 指定视频长度
   *
   * 单位为 s
   */
  duration: number;
  /**
   * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
   *
   * 默认为 true
   */
  controls: boolean;
  /** 弹幕列表 */
  danmuList: _VideoDanmu[];
  /**
   * 是否显示弹幕按钮，不支持动态修改
   *
   * 默认为 false
   */
  danmuBtn: boolean;
  /**
   * 是否展示弹幕，不支持动态修改
   *
   * 默认为 false
   */
  enableDanmu: boolean;
  /**
   * 在非全屏模式下，是否开启亮度与音量调节手势
   *
   * 默认为 false
   */
  pageGesture: boolean;
  /**
   * 设置全屏时视频的方向，不指定则根据宽高比自动判断
   *
   * 0 正常竖向
   *
   * 90 屏幕逆时针 90 度
   *
   * -90 屏幕顺时针 90 度
   *
   * 默认根据宽高比自动判断
   */
  direction: _VideoDirection;
  /**
   * 若不设置，宽度大于 240 时才会显示
   *
   * 默认为 true
   */
  showProgress: boolean;
  /**
   * 是否显示全屏按钮
   *
   * 默认为 true
   */
  showFullscreenBtn: boolean;
  /**
   * 是否显示视频底部控制栏的播放按钮
   *
   * 默认为 true
   */
  showPlayBtn: boolean;
  /**
   * 是否显示视频中间的播放按钮
   *
   * 默认为 true
   */
  showCenterPlayBtn: boolean;
  /**
   * 是否显示 loading 控件
   *
   * 默认为 true
   */
  showLoading: boolean;
  /**
   * 是否开启控制进度的手势
   *
   * 默认为 true
   */
  enableProgressGesture: boolean;
  /**
   * 当视频大小与 video 容器大小不一致时，视频的表现形式
   *
   * Contain 包含
   *
   * Fill 填充
   *
   * Cover 覆盖
   *
   * 默认为 contain
   */
  objectFit: _VideoObjectFit;
  /**
   * 视频封面的图片网络资源地址
   *
   * 如果 controls 值为 false 则无效
   */
  poster: string;
  /**
   * 是否显示静音按钮
   *
   * @decs 默认为 false
   */
  showMuteBtn: boolean;
  /** 视频的标题，全屏时在顶部展示 */
  title: string;
  /**
   * 播放按钮的位置
   *
   * Bottom 控制栏上
   *
   * Center 视频中间
   *
   * 默认为 bottom
   */
  playBtnPosition: _VideoPlayBtnPosition;
  /**
   * 移动网络提醒样式
   *
   * 0 不提醒
   *
   * 1 提醒
   *
   * 默认为 1
   */
  mobilenetHintType: _VideoMobilenetHintType;
  /**
   * 是否开启播放手势，即双击切换播放、暂停
   *
   * 默认为 false
   */
  enablePlayGesture: boolean;
  /**
   * 当跳转到其它小程序页面时，是否自动暂停本页面的视频
   *
   * 默认为 true
   */
  autoPauseIfNavigate: boolean;
  /**
   * 当跳转到其它微信原生页面时，是否自动暂停本页面的视频
   *
   * 默认为 true
   */
  autoPauseIfOpenNative: boolean;
  /**
   * 在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）
   *
   * 默认为 false
   */
  vslideGesture: boolean;
  /**
   * 在全屏模式下，是否开启亮度与音量调节手势
   *
   * 默认为 true
   */
  vslideGestureInFullscreen: boolean;
  /** 视频前贴广告单元ID */
  adUnitId: string;
  /**
   * 用于给搜索等场景作为视频封面展示
   *
   * 建议使用无播放 icon 的视频封面图
   *
   * 只支持网络地址
   */
  posterForCrawler: string;
  /**
   * 解码器选择
   *
   * Hardware 硬件解码
   *
   * Software 软件解码
   *
   * 默认为 hardware
   */
  codec: _VideoCodec;
  /**
   * 是否对 http、https 视频源开启本地缓存
   *
   * 默认为 true
   */
  httpCache: boolean;
  /**
   * 播放策略
   *
   * 0 普通模式，适合绝大部分视频播放场景
   *
   * 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
   *
   * 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
   *
   * 默认为 0
   */
  playStrategy: _VideoPlayStrategy;
  /** HTTP 请求 Header */
  header: AnyRecord;
  /** 开始/继续播放时触发 */
  onPlay: _VideoOnPlay;
  /** 暂停播放时触发 */
  onPause: _VideoOnPause;
  /** 播放到末尾时触发 */
  onEnded: _VideoOnEnded;
  /**
   * 播放进度变化时触发
   *
   * 250ms 一次
   */
  onTimeupdate: _VideoOnTimeupdate;
  /** 视频进入和退出全屏时触发 */
  onFullscreenchange: _VideoOnFullscreenchange;
  /** 视频缓冲时触发 */
  onWaiting: _VideoOnWaiting;
  /** 视频播放出错时触发 */
  onError: _VideoOnError;
  /** 加载进度变化时触发 */
  onProgress: _VideoOnProgress;
  /** 视频资源开始加载时触发 */
  onLoadeddata: _VideoOnLoadeddata;
  /** 开始加载数据时触发 */
  onLoadstart: _VideoOnLoadstart;
  /** 拖动进度条结束时触发 */
  onSeeked: _VideoOnSeeked;
  /** 拖动进度条时触发 */
  onSeeking: _VideoOnSeeking;
  /** 视频元数据加载完成时触发 */
  onLoadedmetadata: _VideoOnLoadedmetadata;
  /** 视频播放全屏播放点击时触发 */
  onFullscreenclick: _VideoOnFullscreenclick;
  /** 切换 controls 显示隐藏时触发 */
  onControlstoggle: _VideoOnControlstoggle;
}

/**
 * 视频播放组件
 *
 * 默认宽度 300px、高度 225px，可通过 css 设置宽高
 */
type _Video = Component<Partial<_VideoProps>>;

export {
  _VideoDanmu as VideoDanmu,
  _VideoDirection as VideoDirection,
  _VideoObjectFit as VideoObjectFit,
  _VideoPlayBtnPosition as VideoPlayBtnPosition,
  _VideoCodec as VideoCodec,
  _VideoMobilenetHintType as VideoMobilenetHintType,
  _VideoPlayStrategy as VideoPlayStrategy,
  _VideoOnPlay as VideoOnPlay,
  _VideoOnPause as VideoOnPause,
  _VideoOnEnded as VideoOnEnded,
  _VideoOnTimeupdateDetail as VideoOnTimeupdateDetail,
  _VideoOnTimeupdate as VideoOnTimeupdate,
  _VideoOnFullscreenchangeDetail as VideoOnFullscreenchangeDetail,
  _VideoOnFullscreenchange as VideoOnFullscreenchange,
  _VideoOnWaiting as VideoOnWaiting,
  _VideoOnError as VideoOnError,
  _VideoOnProgressDetail as VideoOnProgressDetail,
  _VideoOnProgress as VideoOnProgress,
  _VideoOnLoadeddata as VideoOnLoadeddata,
  _VideoOnLoadstart as VideoOnLoadstart,
  _VideoOnSeeked as VideoOnSeeked,
  _VideoOnSeeking as VideoOnSeeking,
  _VideoOnLoadedmetadataDetail as VideoOnLoadedmetadataDetail,
  _VideoOnLoadedmetadata as VideoOnLoadedmetadata,
  _VideoOnFullscreenclickDetail as VideoOnFullscreenclickDetail,
  _VideoOnFullscreenclick as VideoOnFullscreenclick,
  _VideoOnControlstoggleDetail as VideoOnControlstoggleDetail,
  _VideoOnControlstoggle as VideoOnControlstoggle,
  _VideoProps as VideoProps,
  _Video as Video,
};

declare global {
  namespace UniHelper {
    /** 弹幕 */
    export interface VideoDanmu extends _VideoDanmu {}
    /**
     * 设置全屏时视频的方向，不指定则根据宽高比自动判断
     *
     * 0 正常竖向
     *
     * 90 屏幕逆时针 90 度
     *
     * -90 屏幕顺时针 90 度
     */
    export type VideoDirection = _VideoDirection;
    /**
     * 当视频大小与 video 容器大小不一致时，视频的表现形式
     *
     * Contain 包含
     *
     * Fill 填充
     *
     * Cover 覆盖
     */
    export type VideoObjectFit = _VideoObjectFit;
    /**
     * 播放按钮的位置
     *
     * Bottom 控制栏上
     *
     * Center 视频中间
     */
    export type VideoPlayBtnPosition = _VideoPlayBtnPosition;
    /**
     * 解码器选择
     *
     * Hardware 硬件解码
     *
     * Software 软件解码
     */
    export type VideoCodec = _VideoCodec;
    /**
     * 移动网络提醒样式
     *
     * 0 不提醒
     *
     * 1 提醒
     */
    export type VideoMobilenetHintType = _VideoMobilenetHintType;
    /**
     * 播放策略
     *
     * 0 普通模式，适合绝大部分视频播放场景
     *
     * 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
     *
     * 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
     */
    export type VideoPlayStrategy = _VideoPlayStrategy;
    /** 开始/继续播放时触发 */
    export interface VideoOnPlay extends _VideoOnPlay {}
    /** 暂停播放时触发 */
    export interface VideoOnPause extends _VideoOnPause {}
    /** 播放到末尾时触发 */
    export interface VideoOnEnded extends _VideoOnEnded {}
    export interface VideoOnTimeupdateDetail extends _VideoOnTimeupdateDetail {}
    /**
     * 播放进度变化时触发
     *
     * 250ms 一次
     */
    export interface VideoOnTimeupdate extends _VideoOnTimeupdate {}
    export interface VideoOnFullscreenchangeDetail extends _VideoOnFullscreenchangeDetail {}
    /** 视频进入和退出全屏时触发 */
    export interface VideoOnFullscreenchange extends _VideoOnFullscreenchange {}
    /** 视频缓冲时触发 */
    export interface VideoOnWaiting extends _VideoOnWaiting {}
    /** 视频播放出错时触发 */
    export interface VideoOnError extends _VideoOnError {}
    export interface VideoOnProgressDetail extends _VideoOnProgressDetail {}
    /** 加载进度变化时触发 */
    export interface VideoOnProgress extends _VideoOnProgress {}
    /** 视频资源开始加载时触发 */
    export interface VideoOnLoadeddata extends _VideoOnLoadeddata {}
    /** 开始加载数据时触发 */
    export interface VideoOnLoadstart extends _VideoOnLoadstart {}
    /** 拖动进度条结束时触发 */
    export interface VideoOnSeeked extends _VideoOnSeeked {}
    /** 拖动进度条时触发 */
    export interface VideoOnSeeking extends _VideoOnSeeking {}
    export interface VideoOnLoadedmetadataDetail extends _VideoOnLoadedmetadataDetail {}
    /** 视频元数据加载完成时触发 */
    export interface VideoOnLoadedmetadata extends _VideoOnLoadedmetadata {}
    export interface VideoOnFullscreenclickDetail extends _VideoOnFullscreenclickDetail {}
    /** 视频播放全屏播放点击时触发 */
    export interface VideoOnFullscreenclick extends _VideoOnFullscreenclick {}
    export interface VideoOnControlstoggleDetail extends _VideoOnControlstoggleDetail {}
    /** 切换 controls 显示隐藏时触发 */
    export interface VideoOnControlstoggle extends _VideoOnControlstoggle {}
    /** 视频播放组件属性 */
    export interface VideoProps extends _VideoProps {}
    /**
     * 视频播放组件
     *
     * 默认宽度 300px、高度 225px，可通过 css 设置宽高
     */
    export type Video = _Video;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 视频播放组件
     *
     * 默认宽度 300px、高度 225px，可通过 css 设置宽高
     */
    Video: _Video;
  }
}
