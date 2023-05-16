import { Component } from '../component';
import { BaseEvent, CustomEvent } from '../events';

/** 显示方式 */
type _MapDisplay = 'BYCLICK' | 'ALWAYS';

/**
 * 文本对齐方式
 *
 * left 左对齐
 *
 * right 右对齐
 *
 * center 居中对齐
 */
type _MapTextAlign = 'left' | 'right' | 'center';

/** 气泡 */
interface _MapCallout {
  /** 文本 */
  content: string;
  /** 文本颜色 */
  color: string;
  /** 文字大小 */
  fontSize: number;
  /** 边框圆角 */
  borderRadius: number;
  /** 边框宽度 */
  borderWidth: number;
  /** 边框颜色 */
  borderColor: string;
  /** 背景色 */
  bgColor: string;
  /** 文本边缘留白 */
  padding: number;
  /** 显示方式 */
  display: _MapDisplay;
  /**
   * 文本对齐方式
   *
   * left 左对齐
   *
   * right 右对齐
   *
   * center 居中对齐
   */
  textAlign: _MapTextAlign;
}

/** 自定义气泡 */
interface _MapCustomCallout {
  /** 显示方式 */
  display: _MapDisplay;
  /** 横向偏移量，向右为正数 */
  anchorX: number;
  /** 纵向偏移量，向下为正数 */
  anchorY: number;
}

/** 标签 */
interface _MapLabel {
  /** 文本 */
  content: string;
  /** 文本颜色 */
  color: string;
  /** 文字大小 */
  fontSize: number;
  /** 横坐标，原点是 marker 对应的经纬度 */
  x: number;
  /** 纵坐标，原点是 marker 对应的经纬度 */
  y: number;
  /** 横向偏移量，向右为正数 */
  anchorX: number;
  /** 纵向偏移量，向下为正数 */
  anchorY: number;
  /** 边框圆角 */
  borderRadius: number;
  /** 边框宽度 */
  borderWidth: number;
  /** 边框颜色 */
  borderColor: string;
  /** 背景色 */
  bgColor: string;
  /** 文本边缘留白 */
  padding: number;
  /** 显示方式 */
  display: _MapDisplay;
  /**
   * 文本对齐方式
   *
   * left 左对齐
   *
   * right 右对齐
   *
   * center 居中对齐
   */
  textAlign: _MapTextAlign;
  /** 自定义气泡 */
  customCallout: _MapCustomCallout;
  /** 无障碍访问，元素的额外描述 */
  ariaLabel: string;
  /**
   * 是否参与点聚合
   *
   * 默认为 false
   */
  joinCluster: boolean;
}

/** 锚点 */
interface _MapAnchor {
  /**
   * 横向
   *
   * 取值范围为 0 - 1
   */
  x: number;
  /**
   * 纵向
   *
   * 取值范围为 0 - 1
   */
  y: number;
}

/**
 * 纬度
 *
 * 取值范围为 -90 - 90
 */
type _MapLatitude = number;

/**
 * 经度
 *
 * 取值范围为 -180 - 180
 */
type _MapLongitude = number;

/** 经纬度点 */
interface _MapPoint {
  /**
   * 纬度
   *
   * 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * 经度
   *
   * 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
}

/**
 * 压盖关系
 *
 * abovelabels 显示在所有 POI 之上
 *
 * abovebuildings 显示在楼块之上 POI 之下
 *
 * aboveroads 显示在道路之上楼块之下
 */
type _MapLevel = 'abovelabels' | 'abovebuildings' | 'aboveroads';

/**
 * 主题
 *
 * 只在初始化时有效，不能动态变更
 *
 * 仅 Android 支持
 *
 * normal 正常
 *
 * satellite 卫星图
 */
type _MapTheme = 'normal' | 'satellite';

/**
 * 标记点 ID
 *
 * marker 点击事件回调中会返回
 *
 * 最大限制 9 位数
 */
type _MapMarkerId = number;

/** 标记点 */
interface _MapMarker {
  /**
   * 标记点 ID
   *
   * marker 点击事件回调中会返回
   *
   * 最大限制 9 位数
   */
  id: _MapMarkerId;
  /**
   * 纬度
   *
   * 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * 经度
   *
   * 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
  /**
   * 标注点名
   *
   * 点击时显示，callout 存在时将被忽略
   */
  title: string;
  /**
   * 图标路径
   *
   * 项目目录下的图片路径，支持相对路径和临时路径
   */
  iconPath: string;
  /**
   * 顺时针旋转角度
   *
   * 取值范围为 0 - 360
   *
   * 默认为 0
   */
  rotate: number;
  /**
   * 透明度
   *
   * 取值范围为 0 - 1 完全透明 - 不透明
   *
   * 默认为 1
   */
  alpha: number;
  /**
   * 图标宽度
   *
   * 默认为实际宽度
   */
  width: number;
  /**
   * 图标高度
   *
   * 默认为实际高度
   */
  height: number;
  /** 自定义标记点上方的气泡窗口 */
  callout: _MapCallout;
  /** 为标记点旁边增加标签 */
  label: _MapLabel;
  /**
   * 经纬度在标注图标的锚点
   *
   * 默认为 { x: 0.5, y: 1 } 底边中点
   */
  anchor: _MapAnchor;
  /** 自定义点聚合簇效果时使用 */
  clusterId: number;
  /** 自定义气泡窗口 */
  customCallout: _MapCustomCallout;
  /** 无障碍访问，（属性）元素的额外描述 */
  ariaLabel: string;
}

/** 路线 */
interface _MapPolyline {
  /** 经纬度点数组 */
  points: _MapPoint[];
  /**
   * 十六进制颜色
   *
   * colorList 不存在时有效
   */
  color: string;
  /** 线的宽度 */
  width: number;
  /**
   * 是否虚线
   *
   * 默认为 false
   */
  dottedLine: boolean;
  /**
   * 是否带箭头
   *
   * 默认为 false
   */
  arrowLine: boolean;
  /**
   * 箭头图标路径
   *
   * 项目目录下的图片路径，支持相对路径和临时路径
   *
   * arrowLine 为 true 时有效
   */
  arrowIconPath: string;
  /** 线的边框颜色 */
  borderColor: string;
  /** 线的宽度 */
  borderWidth: number;
  /**
   * 彩虹线
   *
   * 存在时忽略 color
   */
  colorList: string[];
  /**
   * 压盖关系
   *
   * abovelabels 显示在所有 POI 之上
   *
   * abovebuildings 显示在楼块之上 POI 之下
   *
   * aboveroads 显示在道路之上楼块之下
   */
  level: _MapLevel;
}

/** 多边形 */
interface _MapPolygon {
  /** 经纬度点数组 */
  points: _MapPoint[];
  /** 描边宽度 */
  strokeWidth: number;
  /** 十六进制描边颜色 */
  strokeColor: string;
  /** 十六进制填充颜色 */
  fillColor: string;
  /** z 轴数值 */
  zIndex: number;
  /**
   * 压盖关系
   *
   * abovelabels 显示在所有 POI 之上
   *
   * abovebuildings 显示在楼块之上 POI 之下
   *
   * aboveroads 显示在道路之上楼块之下
   */
  level: _MapLevel;
}

/** 圆 */
interface _MapCircle {
  /**
   * 纬度
   *
   * 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * 经度
   *
   * 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
  /** 十六进制描边颜色 */
  color: string;
  /** 十六进制填充颜色 */
  fillColor: string;
  /** 半径 */
  radius: number;
  /** 描边宽度 */
  strokeWidth: number;
  /**
   * 压盖关系
   *
   * abovelabels 显示在所有 POI 之上
   *
   * abovebuildings 显示在楼块之上 POI 之下
   *
   * aboveroads 显示在道路之上楼块之下
   */
  level: _MapLevel;
}

/** 控件在地图的位置 */
interface _MapPosition {
  /**
   * 距离地图的左边界多远
   *
   * 默认为 0
   */
  left: number;
  /**
   * 距离地图的上边界多远
   *
   * 默认为 0
   */
  top: number;
  /**
   * 控件宽度
   *
   * 默认为控件宽度
   */
  width: number;
  /**
   * 控件高度
   *
   * 默认为图片高度
   */
  height: number;
}

/**
 * 控件 ID
 *
 * 在控件点击事件回调中会返回
 */
type _MapControlId = number;

/** 控件 */
interface _MapControl {
  /**
   * 控件 ID
   *
   * 在控件点击事件回调中会返回
   */
  id: _MapControlId;
  /** 控件在地图的位置 */
  position: _MapPosition;
  /**
   * 图标路径
   *
   * 项目目录下的图片路径，支持相对路径和临时路径
   */
  iconPath: string;
  /**
   * 是否可点击
   *
   * 默认不可点击
   */
  clickable: boolean;
}

interface _MapOnMarkertapDetail {
  /**
   * 标记点 ID
   *
   * 最大限制 9 位数
   */
  markerId: _MapMarkerId;
}

type _MapOnMarkertapEvent = CustomEvent<_MapOnMarkertapDetail>;

/** 点击标记点时触发 */
interface _MapOnMarkertap {
  (event: _MapOnMarkertapEvent): void;
}

interface _MapOnLabeltapDetail {
  /**
   * 标记点 ID
   *
   * 最大限制 9 位数
   */
  markerId: _MapMarkerId;
}

type _MapOnLabeltapEvent = CustomEvent<_MapOnLabeltapDetail>;

/** 点击 label 时触发 */
interface _MapOnLabeltap {
  (event: _MapOnLabeltapEvent): void;
}

interface _MapOnCallouttapDetail {
  /**
   * 标记点 ID
   *
   * 最大限制 9 位数
   */
  markerId: _MapMarkerId;
}

type _MapOnCallouttapEvent = CustomEvent<_MapOnCallouttapDetail>;

/** 点击标记点对应的气泡时触发 */
interface _MapOnCallouttap {
  (event: _MapOnCallouttapEvent): void;
}

interface _MapOnControltapDetail {
  /** 控件 ID */
  controlId: _MapControlId;
}

type _MapOnControltapEvent = CustomEvent<_MapOnControltapDetail>;

/** 点击控件时触发 */
interface _MapOnControltap {
  (event: _MapOnControltapEvent): void;
}

type _MapOnRegionchangeEvent = BaseEvent;

/** 视野发生变化时触发 */
interface _MapOnRegionchange {
  (event: _MapOnRegionchangeEvent): void;
}

type _MapOnTapEvent = BaseEvent;

/** 点击地图时触发 */
interface _MapOnTap {
  (event: _MapOnTapEvent): void;
}

type _MapOnUpdatedEvent = BaseEvent;

/** 地图渲染更新完成时触发 */
interface _MapOnUpdated {
  (event: _MapOnUpdatedEvent): void;
}

interface _MapOnAnchorpointtapDetail {
  /**
   * 纬度
   *
   * 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * 经度
   *
   * 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
}

type _MapOnAnchorpointtapEvent = CustomEvent<_MapOnAnchorpointtapDetail>;

/** 点击定位标时触发 */
interface _MapOnAnchorpointtap {
  (event: _MapOnAnchorpointtapEvent): void;
}

interface _MapOnPoitapDetail {
  /** 名称 */
  name: string;
  /**
   * 纬度
   *
   * 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * 经度
   *
   * 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
}

type _MapOnPoitapEvent = CustomEvent<_MapOnPoitapDetail>;

/** 点击地图 poi 点时触发 */
interface _MapOnPoitap {
  (event: _MapOnPoitapEvent): void;
}

/** 地图属性 */
type _MapProps = Partial<{
  /**
   * 中心纬度
   *
   * 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * 中心经度
   *
   * 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
  /**
   * 缩放级别
   *
   * 默认为 16
   */
  scale: number;
  /**
   * 主题
   *
   * 只在初始化时有效，不能动态变更
   *
   * 仅 Android 支持
   *
   * normal 正常
   *
   * satellite 卫星图
   *
   * 默认为 normal
   */
  theme: _MapTheme;
  /**
   * 最小缩放级别
   *
   * 默认为 3
   */
  minScale: number;
  /**
   * 最大缩放级别
   *
   * 默认为 20
   */
  maxScale: number;
  /**
   * 个性化地图配置的 style，不支持动态修改
   *
   * 默认为 1
   */
  layerStyle: string | number;
  /** 标记点数组 */
  markers: _MapMarker[];
  /** 路线 */
  polyline: _MapPolyline[];
  /** 圆 */
  circles: _MapCircle[];
  /** 控件 */
  controls: _MapControl[];
  /** 缩放视野以包含所有给定的坐标点 */
  includePoints: _MapPoint[];
  /**
   * 是否显示 3D 楼块
   *
   * 默认为 false
   */
  enable3D: boolean;
  /**
   * 是否显示指南针
   *
   * 默认为 false
   */
  showCompass: boolean;
  /**
   * 是否支持缩放
   *
   * 默认为 true
   */
  enableZoom: boolean;
  /**
   * 是否支持拖动
   *
   * 默认为 true
   */
  enableScroll: boolean;
  /**
   * 是否支持旋转
   *
   * 默认为 false
   */
  enableRotate: boolean;
  /**
   * 是否开启俯视
   *
   * 默认为 false
   */
  enableOverlooking: boolean;
  /**
   * 是否开启卫星图
   *
   * 默认为 false
   */
  enableSatellite: boolean;
  /**
   * 是否开启实时路况
   *
   * 默认为 false
   */
  enableTraffic: boolean;
  /**
   * 是否展示 POI 点
   *
   * 默认为 false
   */
  enablePoi: boolean;
  /**
   * 是否展示建筑物
   *
   * 默认为 false
   */
  enableBuilding: boolean;
  /**
   * 是否显示带有方向的当前定位点
   *
   * 默认为 false
   */
  showLocation: boolean;
  /** 多边形 */
  polygons: _MapPolygon[];
  /**
   * 是否展示室内地图
   *
   * 默认为 false
   */
  enableIndoorMap: boolean;
  /** 点击标记点时触发 */
  onMarkertap: _MapOnMarkertap;
  /** 点击 label 时触发 */
  onLabeltap: _MapOnLabeltap;
  /** 点击标记点对应的气泡时触发 */
  onCallouttap: _MapOnCallouttap;
  /** 点击控件时触发 */
  onControltap: _MapOnControltap;
  /** 视野发生变化时触发 */
  onRegionchange: _MapOnRegionchange;
  /** 点击地图时触发 */
  onTap: _MapOnTap;
  /** 地图渲染更新完成时触发 */
  onUpdated: _MapOnUpdated;
  /** 点击定位标时触发 */
  onAnchorpointtap: _MapOnAnchorpointtap;
  /** 点击地图 poi 点时触发 */
  onPoitap: _MapOnPoitap;
}>;

/** 地图组件，用于展示地图 */
type _Map = Component<_MapProps>;

/** 地图组件实例 */
type _MapInstance = InstanceType<_Map>;

export {
  _MapDisplay as MapDisplay,
  _MapTextAlign as MapTextAlign,
  _MapCallout as MapCallout,
  _MapCustomCallout as MapCustomCallout,
  _MapLabel as MapLabel,
  _MapAnchor as MapAnchor,
  _MapLatitude as MapLatitude,
  _MapLongitude as MapLongitude,
  _MapPoint as MapPoint,
  _MapLevel as MapLevel,
  _MapTheme as MapTheme,
  _MapMarkerId as MapMarkerId,
  _MapMarker as MapMarker,
  _MapPolyline as MapPolyline,
  _MapPolygon as MapPolygon,
  _MapCircle as MapCircle,
  _MapPosition as MapPosition,
  _MapControlId as MapControlId,
  _MapControl as MapControl,
  _MapOnMarkertapDetail as MapOnMarkertapDetail,
  _MapOnMarkertapEvent as MapOnMarkertapEvent,
  _MapOnMarkertap as MapOnMarkertap,
  _MapOnLabeltapDetail as MapOnLabeltapDetail,
  _MapOnLabeltapEvent as MapOnLabeltapEvent,
  _MapOnLabeltap as MapOnLabeltap,
  _MapOnCallouttapDetail as MapOnCallouttapDetail,
  _MapOnCallouttapEvent as MapOnCallouttapEvent,
  _MapOnCallouttap as MapOnCallouttap,
  _MapOnControltapDetail as MapOnControltapDetail,
  _MapOnControltapEvent as MapOnControltapEvent,
  _MapOnControltap as MapOnControltap,
  _MapOnRegionchangeEvent as MapOnRegionchangeEvent,
  _MapOnRegionchange as MapOnRegionchange,
  _MapOnTapEvent as MapOnTapEvent,
  _MapOnTap as MapOnTap,
  _MapOnUpdatedEvent as MapOnUpdatedEvent,
  _MapOnUpdated as MapOnUpdated,
  _MapOnAnchorpointtapDetail as MapOnAnchorpointtapDetail,
  _MapOnAnchorpointtapEvent as MapOnAnchorpointtapEvent,
  _MapOnAnchorpointtap as MapOnAnchorpointtap,
  _MapOnPoitapDetail as MapOnPoitapDetail,
  _MapOnPoitapEvent as MapOnPoitapEvent,
  _MapOnPoitap as MapOnPoitap,
  _MapProps as MapProps,
  _Map as Map,
  _MapInstance as MapInstance,
};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 地图组件，用于展示地图 */
    Map: _Map;
  }
}

declare global {
  // 和 HTML 标签冲突，需要覆盖类型
  namespace JSX {
    interface IntrinsicElements {
      /** 地图组件，用于展示地图 */
      map: _Map;
    }
  }
  namespace UniHelper {
    /** 显示方式 */
    export type MapDisplay = _MapDisplay;
    /**
     * 文本对齐方式
     *
     * left 左对齐
     *
     * right 右对齐
     *
     * center 居中对齐
     */
    export type MapTextAlign = _MapTextAlign;
    /** 气泡 */
    export interface MapCallout extends _MapCallout {}
    /** 自定义气泡 */
    export interface MapCustomCallout extends _MapCustomCallout {}
    /** 标签 */
    export interface MapLabel extends _MapLabel {}
    /** 锚点 */
    export interface MapAnchor extends _MapAnchor {}
    /**
     * 纬度
     *
     * 取值范围为 -90 - 90
     */
    export type MapLatitude = _MapLatitude;
    /**
     * 经度
     *
     * 取值范围为 -180 - 180
     */
    export type MapLongitude = _MapLongitude;
    /** 经纬度点 */
    export interface MapPoint extends _MapPoint {}
    /**
     * 压盖关系
     *
     * abovelabels 显示在所有 POI 之上
     *
     * abovebuildings 显示在楼块之上 POI 之下
     *
     * aboveroads 显示在道路之上楼块之下
     */
    export type MapLevel = _MapLevel;
    /**
     * 主题
     *
     * 只在初始化时有效，不能动态变更
     *
     * 仅 Android 支持
     *
     * normal 正常
     *
     * satellite 卫星图
     */
    export type MapTheme = _MapTheme;
    /**
     * 标记点 ID
     *
     * marker 点击事件回调中会返回
     *
     * 最大限制 9 位数
     */
    export type MapMarkerId = _MapMarkerId;
    /** 标记点 */
    export interface MapMarker extends _MapMarker {}
    /** 路线 */
    export interface MapPolyline extends _MapPolyline {}
    /** 多边形 */
    export interface MapPolygon extends _MapPolygon {}
    /** 圆 */
    export interface MapCircle extends _MapCircle {}
    /** 控件在地图的位置 */
    export interface MapPosition extends _MapPosition {}
    /**
     * 控件 ID
     *
     * 在控件点击事件回调中会返回
     */
    export type MapControlId = _MapControlId;
    /** 控件 */
    export interface MapControl extends _MapControl {}
    export interface MapOnMarkertapDetail extends _MapOnMarkertapDetail {}
    export type MapOnMarkertapEvent = _MapOnMarkertapEvent;
    /** 点击标记点时触发 */
    export interface MapOnMarkertap extends _MapOnMarkertap {}
    export interface MapOnLabeltapDetail extends _MapOnLabeltapDetail {}
    export type MapOnLabeltapEvent = _MapOnLabeltapEvent;
    /** 点击 label 时触发 */
    export interface MapOnLabeltap extends _MapOnLabeltap {}
    export interface MapOnCallouttapDetail extends _MapOnCallouttapDetail {}
    export type MapOnCallouttapEvent = _MapOnCallouttapEvent;
    /** 点击标记点对应的气泡时触发 */
    export interface MapOnCallouttap extends _MapOnCallouttap {}
    export interface MapOnControltapDetail extends _MapOnControltapDetail {}
    export type MapOnControltapEvent = _MapOnControltapEvent;
    /** 点击控件时触发 */
    export interface MapOnControltap extends _MapOnControltap {}
    export type MapOnRegionchangeEvent = _MapOnRegionchangeEvent;
    /** 视野发生变化时触发 */
    export interface MapOnRegionchange extends _MapOnRegionchange {}
    export type MapOnTapEvent = _MapOnTapEvent;
    /** 点击地图时触发 */
    export interface MapOnTap extends _MapOnTap {}
    export type MapOnUpdatedEvent = _MapOnUpdatedEvent;
    /** 地图渲染更新完成时触发 */
    export interface MapOnUpdated extends _MapOnUpdated {}
    export interface MapOnAnchorpointtapDetail extends _MapOnAnchorpointtapDetail {}
    export type MapOnAnchorpointtapEvent = _MapOnAnchorpointtapEvent;
    /** 点击定位标时触发 */
    export interface MapOnAnchorpointtap extends _MapOnAnchorpointtap {}
    export interface MapOnPoitapDetail extends _MapOnPoitapDetail {}
    export type MapOnPoitapEvent = _MapOnPoitapEvent;
    /** 点击地图 poi 点时触发 */
    export interface MapOnPoitap extends _MapOnPoitap {}
    /** 地图属性 */
    export type MapProps = _MapProps;
    /** 地图组件，用于展示地图 */
    export type Map = _Map;
    /** 地图组件实例 */
    export type MapInstance = _MapInstance;
  }
}
