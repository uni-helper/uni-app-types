import { Component, AnyRecord } from '../Component';
import { CustomEvent } from '../events';

/**
 * @desc 弹幕
 */
interface _VideoDanmu {
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
type _VideoDirection = 0 | 90 | -90;

/**
 * @desc 当视频大小与 video 容器大小不一致时，视频的表现形式
 * @desc contain 包含
 * @desc fill 填充
 * @desc cover 覆盖
 */
type _VideoObjectFit = 'contain' | 'fill' | 'cover';

/**
 * @desc 播放按钮的位置
 * @desc bottom 控制栏上
 * @desc center 视频中间
 */
type _VideoPlayBtnPosition = 'bottom' | 'center';

/**
 * @desc 解码器选择
 * @desc hardware 硬件解码
 * @desc software 软件解码
 */
type _VideoCodec = 'hardware' | 'software';

/**
 * @desc 移动网络提醒样式
 * @desc 0 不提醒
 * @desc 1 提醒
 */
type _VideoMobilenetHintType = 0 | 1;

/**
 * @desc 播放策略
 * @desc 0 普通模式，适合绝大部分视频播放场景
 * @desc 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
 * @desc 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
 */
type _VideoPlayStrategy = 0 | 1 | 2;

/**
 * @desc 开始/继续播放时触发
 */
interface _VideoPlay {
  (event: BaseEvent): void;
}

/**
 * @desc 暂停播放时触发
 */
interface _VideoPause {
  (event: BaseEvent): void;
}

/**
 * @desc 播放到末尾时触发
 */
interface _VideoEnded {
  (event: BaseEvent): void;
}

interface _VideoTimeupdateDetail {
  currentTime: number;
  duration: number;
}

/**
 * @desc 播放进度变化时触发
 * @desc 250ms 一次
 */
interface _VideoTimeupdate {
  (event: CustomEvent<_VideoTimeupdateDetail>): void;
}

interface _VideoFullscreenchangeDetail {
  fullScreen: boolean;
  direction: _VideoDirection;
}

/**
 * @desc 视频进入和退出全屏时触发
 */
interface _VideoFullscreenchange {
  (event: CustomEvent<_VideoFullscreenchangeDetail>): void;
}

/**
 * @desc 视频缓冲时触发
 */
interface _VideoWaiting {
  (event: BaseEvent): void;
}

/**
 * @desc 视频播放出错时触发
 */
interface _VideoError {
  (event: BaseEvent): void;
}

interface _VideoProgressDetail {
  buffered: number;
}

/**
 * @desc 加载进度变化时触发
 */
interface _VideoProgress {
  (event: CustomEvent<_VideoProgressDetail>): void;
}

/**
 * @desc 视频资源开始加载时触发
 */
interface _VideoLoadeddata {
  (event: BaseEvent): void;
}

/**
 * @desc 开始加载数据时触发
 */
interface _VideoLoadstart {
  (event: BaseEvent): void;
}

/**
 * @desc 拖动进度条结束时触发
 */
interface _VideoSeeked {
  (event: BaseEvent): void;
}

/**
 * @desc 拖动进度条时触发
 */
interface _VideoSeeking {
  (event: BaseEvent): void;
}

interface _VideoLoadedmetadataDetail {
  width: number;
  height: number;
  duration: number;
}

/**
 * @desc 视频元数据加载完成时触发
 */
interface _VideoLoadedmetadata {
  (event: CustomEvent<_VideoLoadedmetadataDetail>): void;
}

interface _VideoFullscreenclickDetail {
  screenX: number;
  screenY: number;
  screenWidth: number;
  screenHeight: number;
}

/**
 * @desc 视频播放全屏播放点击时触发
 */
interface _VideoFullscreenclick {
  (event: CustomEvent<_VideoFullscreenclickDetail>): void;
}

interface _VideoControlstoggleDetail {
  show: boolean;
}

/**
 * @desc 切换 controls 显示隐藏时触发
 */
interface _VideoControlstoggle {
  (event: CustomEvent<_VideoControlstoggleDetail>): void;
}

/**
 * @desc 视频播放组件属性
 */
interface _VideoProps {
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
  danmuList: _VideoDanmu[];
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
  direction: _VideoDirection;
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
  objectFit: _VideoObjectFit;
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
  playBtnPosition: _VideoPlayBtnPosition;
  /**
   * @desc 移动网络提醒样式
   * @desc 0 不提醒
   * @desc 1 提醒
   * @desc 默认为 1
   */
  mobilenetHintType: _VideoMobilenetHintType;
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
  codec: _VideoCodec;
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
  playStrategy: _VideoPlayStrategy;
  /**
   * @desc HTTP 请求 Header
   */
  header: AnyRecord;
  /**
   * @desc 开始/继续播放时触发
   */
  onPlay: _VideoPlay;
  /**
   * @desc 暂停播放时触发
   */
  onPause: _VideoPause;
  /**
   * @desc 播放到末尾时触发
   */
  onEnded: _VideoEnded;
  /**
   * @desc 播放进度变化时触发
   * @desc 250ms 一次
   */
  onTimeupdate: _VideoTimeupdate;
  /**
   * @desc 视频进入和退出全屏时触发
   */
  onFullscreenchange: _VideoFullscreenchange;
  /**
   * @desc 视频缓冲时触发
   */
  onWaiting: _VideoWaiting;
  /**
   * @desc 视频播放出错时触发
   */
  onError: _VideoError;
  /**
   * @desc 加载进度变化时触发
   */
  onProgress: _VideoProgress;
  /**
   * @desc 视频资源开始加载时触发
   */
  onLoadeddata: _VideoLoadeddata;
  /**
   * @desc 开始加载数据时触发
   */
  onLoadstart: _VideoLoadstart;
  /**
   * @desc 拖动进度条结束时触发
   */
  onSeeked: _VideoSeeked;
  /**
   * @desc 拖动进度条时触发
   */
  onSeeking: _VideoSeeking;
  /**
   * @desc 视频元数据加载完成时触发
   */
  onLoadedmetadata: _VideoLoadedmetadata;
  /**
   * @desc 视频播放全屏播放点击时触发
   */
  onFullscreenclick: _VideoFullscreenclick;
  /**
   * @desc 切换 controls 显示隐藏时触发
   */
  onControlstoggle: _VideoControlstoggle;
}

/**
 * @desc 视频播放组件
 * @desc 默认宽度 300px、高度 225px，可通过 css 设置宽高
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
  _VideoPlay as VideoPlay,
  _VideoPause as VideoPause,
  _VideoEnded as VideoEnded,
  _VideoTimeupdateDetail as VideoTimeupdateDetail,
  _VideoTimeupdate as VideoTimeupdate,
  _VideoFullscreenchangeDetail as VideoFullscreenchangeDetail,
  _VideoFullscreenchange as VideoFullscreenchange,
  _VideoWaiting as VideoWaiting,
  _VideoError as VideoError,
  _VideoProgressDetail as VideoProgressDetail,
  _VideoProgress as VideoProgress,
  _VideoLoadeddata as VideoLoadeddata,
  _VideoLoadstart as VideoLoadstart,
  _VideoSeeked as VideoSeeked,
  _VideoSeeking as VideoSeeking,
  _VideoLoadedmetadataDetail as VideoLoadedmetadataDetail,
  _VideoLoadedmetadata as VideoLoadedmetadata,
  _VideoFullscreenclickDetail as VideoFullscreenclickDetail,
  _VideoFullscreenclick as VideoFullscreenclick,
  _VideoControlstoggleDetail as VideoControlstoggleDetail,
  _VideoControlstoggle as VideoControlstoggle,
  _VideoProps as VideoProps,
  _Video as Video,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 弹幕
     */
    export interface VideoDanmu extends _VideoDanmu {}
    /**
     * @desc 设置全屏时视频的方向，不指定则根据宽高比自动判断
     * @desc 0 正常竖向
     * @desc 90 屏幕逆时针 90 度
     * @desc -90 屏幕顺时针 90 度
     */
    export type VideoDirection = _VideoDirection;
    /**
     * @desc 当视频大小与 video 容器大小不一致时，视频的表现形式
     * @desc contain 包含
     * @desc fill 填充
     * @desc cover 覆盖
     */
    export type VideoObjectFit = _VideoObjectFit;
    /**
     * @desc 播放按钮的位置
     * @desc bottom 控制栏上
     * @desc center 视频中间
     */
    export type VideoPlayBtnPosition = _VideoPlayBtnPosition;
    /**
     * @desc 解码器选择
     * @desc hardware 硬件解码
     * @desc software 软件解码
     */
    export type VideoCodec = _VideoCodec;
    /**
     * @desc 移动网络提醒样式
     * @desc 0 不提醒
     * @desc 1 提醒
     */
    export type VideoMobilenetHintType = _VideoMobilenetHintType;
    /**
     * @desc 播放策略
     * @desc 0 普通模式，适合绝大部分视频播放场景
     * @desc 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
     * @desc 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
     */
    export type VideoPlayStrategy = _VideoPlayStrategy;
    /**
     * @desc 开始/继续播放时触发
     */
    export interface VideoPlay extends _VideoPlay {}
    /**
     * @desc 暂停播放时触发
     */
    export interface VideoPause extends _VideoPause {}
    /**
     * @desc 播放到末尾时触发
     */
    export interface VideoEnded extends _VideoEnded {}
    export interface VideoTimeupdateDetail extends _VideoTimeupdateDetail {}
    /**
     * @desc 播放进度变化时触发
     * @desc 250ms 一次
     */
    export interface VideoTimeupdate extends _VideoTimeupdate {}
    export interface VideoFullscreenchangeDetail extends _VideoFullscreenchangeDetail {}
    /**
     * @desc 视频进入和退出全屏时触发
     */
    export interface VideoFullscreenchange extends _VideoFullscreenchange {}
    /**
     * @desc 视频缓冲时触发
     */
    export interface VideoWaiting extends _VideoWaiting {}
    /**
     * @desc 视频播放出错时触发
     */
    export interface VideoError extends _VideoError {}
    export interface VideoProgressDetail extends _VideoProgressDetail {}
    /**
     * @desc 加载进度变化时触发
     */
    export interface VideoProgress extends _VideoProgress {}
    /**
     * @desc 视频资源开始加载时触发
     */
    export interface VideoLoadeddata extends _VideoLoadeddata {}
    /**
     * @desc 开始加载数据时触发
     */
    export interface VideoLoadstart extends _VideoLoadstart {}
    /**
     * @desc 拖动进度条结束时触发
     */
    export interface VideoSeeked extends _VideoSeeked {}
    /**
     * @desc 拖动进度条时触发
     */
    export interface VideoSeeking extends _VideoSeeking {}
    export interface VideoLoadedmetadataDetail extends _VideoLoadedmetadataDetail {}
    /**
     * @desc 视频元数据加载完成时触发
     */
    export interface VideoLoadedmetadata extends _VideoLoadedmetadata {}
    export interface VideoFullscreenclickDetail extends _VideoFullscreenclickDetail {}
    /**
     * @desc 视频播放全屏播放点击时触发
     */
    export interface VideoFullscreenclick extends _VideoFullscreenclick {}
    export interface VideoControlstoggleDetail extends _VideoControlstoggleDetail {}
    /**
     * @desc 切换 controls 显示隐藏时触发
     */
    export interface VideoControlstoggle extends _VideoControlstoggle {}
    /**
     * @desc 视频播放组件属性
     */
    export interface VideoProps extends _VideoProps {}
    /**
     * @desc 视频播放组件
     * @desc 默认宽度 300px、高度 225px，可通过 css 设置宽高
     */
    export type Video = _Video;
  }
}
