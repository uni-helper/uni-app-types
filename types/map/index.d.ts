import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 显示方式
 */
type _MapDisplay = 'BYCLICK' | 'ALWAYS';

/**
 * @desc 文本对齐方式
 * @desc left 左对齐
 * @desc right 右对齐
 * @desc center 居中对齐
 */
type _MapTextAlign = 'left' | 'right' | 'center';

/**
 * @desc 气泡
 */
interface _MapCallout {
  /**
   * @desc 文本
   */
  content: string;
  /**
   * @desc 文本颜色
   */
  color: string;
  /**
   * @desc 文字大小
   */
  fontSize: number;
  /**
   * @desc 边框圆角
   */
  borderRadius: number;
  /**
   * @desc 边框宽度
   */
  borderWidth: number;
  /**
   * @desc 边框颜色
   */
  borderColor: string;
  /**
   * @desc 背景色
   */
  bgColor: string;
  /**
   * @desc 文本边缘留白
   */
  padding: number;
  /**
   * @desc 显示方式
   */
  display: _MapDisplay;
  /**
   * @desc 文本对齐方式
   * @desc left 左对齐
   * @desc right 右对齐
   * @desc center 居中对齐
   */
  textAlign: _MapTextAlign;
}

/**
 * @desc 自定义气泡
 */
interface _MapCustomCallout {
  /**
   * @desc 显示方式
   */
  display: _MapDisplay;
  /**
   * @desc 横向偏移量，向右为正数
   */
  anchorX: number;
  /**
   * @desc 纵向偏移量，向下为正数
   */
  anchorY: number;
}

/**
 * @desc 标签
 */
interface _MapLabel {
  /**
   * @desc 文本
   */
  content: string;
  /**
   * @desc 文本颜色
   */
  color: string;
  /**
   * @desc 文字大小
   */
  fontSize: number;
  /**
   * @desc 横坐标，原点是 marker 对应的经纬度
   */
  x: number;
  /**
   * @desc 纵坐标，原点是 marker 对应的经纬度
   */
  y: number;
  /**
   * @desc 横向偏移量，向右为正数
   */
  anchorX: number;
  /**
   * @desc 纵向偏移量，向下为正数
   */
  anchorY: number;
  /**
   * @desc 边框圆角
   */
  borderRadius: number;
  /**
   * @desc 边框宽度
   */
  borderWidth: number;
  /**
   * @desc 边框颜色
   */
  borderColor: string;
  /**
   * @desc 背景色
   */
  bgColor: string;
  /**
   * @desc 文本边缘留白
   */
  padding: number;
  /**
   * @desc 显示方式
   */
  display: _MapDisplay;
  /**
   * @desc 文本对齐方式
   * @desc left 左对齐
   * @desc right 右对齐
   * @desc center 居中对齐
   */
  textAlign: _MapTextAlign;
  /**
   * @desc 自定义气泡
   */
  customCallout: _MapCustomCallout;
  /**
   * @desc 无障碍访问，元素的额外描述
   */
  ariaLabel: string;
  /**
   * @desc 是否参与点聚合
   * @desc 默认为 false
   */
  joinCluster: boolean;
}

/**
 * @desc 锚点
 */
interface _MapAnchor {
  /**
   * @desc 横向
   * @desc 取值范围为 0 - 1
   */
  x: number;
  /**
   * @desc 纵向
   * @desc 取值范围为 0 - 1
   */
  y: number;
}

/**
 * @desc 纬度
 * @desc 取值范围为 -90 - 90
 */
type _MapLatitude = number;

/**
 * @desc 经度
 * @desc 取值范围为 -180 - 180
 */
type _MapLongitude = number;

/**
 * @desc 经纬度点
 */
interface _MapPoint {
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
}

/**
 * @desc 压盖关系
 * @desc abovelabels 显示在所有 POI 之上
 * @desc abovebuildings 显示在楼块之上 POI 之下
 * @desc aboveroads 显示在道路之上楼块之下
 */
type _MapLevel = 'abovelabels' | 'abovebuildings' | 'aboveroads';

/**
 * @desc 主题
 * @desc 只在初始化时有效，不能动态变更
 * @desc 仅 Android 支持
 * @desc normal 正常
 * @desc satellite 卫星图
 */
type _MapTheme = 'normal' | 'satellite';

/**
 * @desc 标记点 ID
 * @desc marker 点击事件回调中会返回
 * @desc 最大限制 9 位数
 */
type _MapMarkerId = number;

/**
 * @desc 标记点
 */
interface _MapMarker {
  /**
   * @desc 标记点 ID
   * @desc marker 点击事件回调中会返回
   * @desc 最大限制 9 位数
   */
  id: _MapMarkerId;
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
  /**
   * @desc 标注点名
   * @desc 点击时显示，callout 存在时将被忽略
   */
  title: string;
  /**
   * @desc 图标路径
   * @desc 项目目录下的图片路径，支持相对路径和临时路径
   */
  iconPath: string;
  /**
   * @desc 顺时针旋转角度
   * @desc 取值范围为 0 - 360
   * @desc 默认为 0
   */
  rotate: number;
  /**
   * @desc 透明度
   * @desc 取值范围为 0 - 1 完全透明 - 不透明
   * @desc 默认为 1
   */
  alpha: number;
  /**
   * @desc 图标宽度
   * @desc 默认为实际宽度
   */
  width: number;
  /**
   * @desc 图标高度
   * @desc 默认为实际高度
   */
  height: number;
  /**
   * @desc 自定义标记点上方的气泡窗口
   */
  callout: _MapCallout;
  /**
   * @desc 为标记点旁边增加标签
   */
  label: _MapLabel;
  /**
   * @desc 经纬度在标注图标的锚点
   * @desc 默认为 { x: 0.5, y: 1 } 底边中点
   */
  anchor: _MapAnchor;
  /**
   * @desc 自定义点聚合簇效果时使用
   */
  clusterId: number;
  /**
   * @desc 自定义气泡窗口
   */
  customCallout: _MapCustomCallout;
  /**
   * @desc 无障碍访问，（属性）元素的额外描述
   */
  ariaLabel: string;
}

/**
 * @desc 路线
 */
interface _MapPolyline {
  /**
   * @desc 经纬度点数组
   */
  points: _MapPoint[];
  /**
   * @desc 十六进制颜色
   * @desc colorList 不存在时有效
   */
  color: string;
  /**
   * @desc 线的宽度
   */
  width: number;
  /**
   * @desc 是否虚线
   * @desc 默认为 false
   */
  dottedLine: boolean;
  /**
   * @desc 是否带箭头
   * @desc 默认为 false
   */
  arrowLine: boolean;
  /**
   * @desc 箭头图标路径
   * @desc 项目目录下的图片路径，支持相对路径和临时路径
   * @desc arrowLine 为 true 时有效
   */
  arrowIconPath: string;
  /**
   * @desc 线的边框颜色
   */
  borderColor: string;
  /**
   * @desc 线的宽度
   */
  borderWidth: number;
  /**
   * @desc 彩虹线
   * @desc 存在时忽略 color
   */
  colorList: string[];
  /**
   * @desc 压盖关系
   * @desc abovelabels 显示在所有 POI 之上
   * @desc abovebuildings 显示在楼块之上 POI 之下
   * @desc aboveroads 显示在道路之上楼块之下
   */
  level: _MapLevel;
}

/**
 * @desc 多边形
 */
interface _MapPolygon {
  /**
   * @desc 经纬度点数组
   */
  points: _MapPoint[];
  /**
   * @desc 描边宽度
   */
  strokeWidth: number;
  /**
   * @desc 十六进制描边颜色
   */
  strokeColor: string;
  /**
   * @desc 十六进制填充颜色
   */
  fillColor: string;
  /**
   * @desc z 轴数值
   */
  zIndex: number;
  /**
   * @desc 压盖关系
   * @desc abovelabels 显示在所有 POI 之上
   * @desc abovebuildings 显示在楼块之上 POI 之下
   * @desc aboveroads 显示在道路之上楼块之下
   */
  level: _MapLevel;
}

/**
 * @desc 圆
 */
interface _MapCircle {
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
  /**
   * @desc 十六进制描边颜色
   */
  color: string;
  /**
   * @desc 十六进制填充颜色
   */
  fillColor: string;
  /**
   * @desc 半径
   */
  radius: number;
  /**
   * @desc 描边宽度
   */
  strokeWidth: number;
  /**
   * @desc 压盖关系
   * @desc abovelabels 显示在所有 POI 之上
   * @desc abovebuildings 显示在楼块之上 POI 之下
   * @desc aboveroads 显示在道路之上楼块之下
   */
  level: _MapLevel;
}

/**
 * @desc 控件在地图的位置
 */
interface _MapPosition {
  /**
   * @desc 距离地图的左边界多远
   * @desc 默认为 0
   */
  left: number;
  /**
   * @desc 距离地图的上边界多远
   * @desc 默认为 0
   */
  top: number;
  /**
   * @desc 控件宽度
   * @desc 默认为控件宽度
   */
  width: number;
  /**
   * @desc 控件高度
   * @desc 默认为图片高度
   */
  height: number;
}

/**
 * @desc 控件 ID
 * @desc 在控件点击事件回调中会返回
 */
type _MapControlId = number;

/**
 * @desc 控件
 */
interface _MapControl {
  /**
   * @desc 控件 ID
   * @desc 在控件点击事件回调中会返回
   */
  id: _MapControlId;
  /**
   * @desc 控件在地图的位置
   */
  position: _MapPosition;
  /**
   * @desc 图标路径
   * @desc 项目目录下的图片路径，支持相对路径和临时路径
   */
  iconPath: string;
  /**
   * @desc 是否可点击
   * @desc 默认不可点击
   */
  clickable: boolean;
}

interface _MapMarkertapDetail {
  /**
   * @desc 标记点 ID
   * @desc 最大限制 9 位数
   */
  markerId: _MapMarkerId;
}

/**
 * @desc 点击标记点时触发
 */
interface _MapMarkertap {
  (event: CustomEvent<_MapMarkertapDetail>): void;
}

interface _MapLabeltapDetail {
  /**
   * @desc 标记点 ID
   * @desc 最大限制 9 位数
   */
  markerId: _MapMarkerId;
}

/**
 * @desc 点击 label 时触发
 */
interface _MapLabeltap {
  (event: CustomEvent<_MapLabeltapDetail>): void;
}

interface _MapCallouttapDetail {
  /**
   * @desc 标记点 ID
   * @desc 最大限制 9 位数
   */
  markerId: _MapMarkerId;
}

/**
 * @desc 点击标记点对应的气泡时触发
 */
interface _MapCallouttap {
  (event: CustomEvent<_MapCallouttapDetail>): void;
}

interface _MapControltapDetail {
  /**
   * @desc 控件 ID
   */
  controlId: _MapControlId;
}

/**
 * @desc 点击控件时触发
 */
interface _MapControltap {
  (event: CustomEvent<_MapControltapDetail>): void;
}

/**
 * @desc 视野发生变化时触发
 */
interface _MapRegionchange {
  (event: BaseEvent): void;
}

/**
 * @desc 点击地图时触发
 */
interface _MapTap {
  (event: BaseEvent): void;
}

/**
 * @desc 地图渲染更新完成时触发
 */
interface _MapUpdated {
  (event: BaseEvent): void;
}

interface _MapAnchorpointtapDetail {
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
}

/**
 * @desc 点击定位标时触发
 */
interface _MapAnchorpointtap {
  (event: CustomEvent<_MapAnchorpointtapDetail>): void;
}

interface _MapPoitapDetail {
  /**
   * @desc 名称
   */
  name: string;
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
}

/**
 * @desc 点击地图 poi 点时触发
 */
interface _MapPoitap {
  (event: CustomEvent<_MapPoitapDetail>): void;
}

/**
 * @desc 地图属性
 */
interface _MapProps {
  /**
   * @desc 中心纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: _MapLatitude;
  /**
   * @desc 中心经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: _MapLongitude;
  /**
   * @desc 缩放级别
   * @desc 默认为 16
   */
  scale: number;
  /**
   * @desc 主题
   * @desc 只在初始化时有效，不能动态变更
   * @desc 仅 Android 支持
   * @desc normal 正常
   * @desc satellite 卫星图
   * @desc 默认为 normal
   */
  theme: _MapTheme;
  /**
   * @desc 最小缩放级别
   * @desc 默认为 3
   */
  minScale: number;
  /**
   * @desc 最大缩放级别
   * @desc 默认为 20
   */
  maxScale: number;
  /**
   * @desc 个性化地图配置的 style，不支持动态修改
   * @desc 默认为 1
   */
  layerStyle: string | number;
  /**
   * @desc 标记点数组
   */
  markers: _MapMarker[];
  /**
   * @desc 路线
   */
  polyline: _MapPolyline[];
  /**
   * @desc 圆
   */
  circles: _MapCircle[];
  /**
   * @desc 控件
   */
  controls: _MapControl[];
  /**
   * @desc 缩放视野以包含所有给定的坐标点
   */
  includePoints: _MapPoint[];
  /**
   * @desc 是否显示 3D 楼块
   * @desc 默认为 false
   */
  enable3D: boolean;
  /**
   * @desc 是否显示指南针
   * @desc 默认为 false
   */
  showCompass: boolean;
  /**
   * @desc 是否支持缩放
   * @desc 默认为 true
   */
  enableZoom: boolean;
  /**
   * @desc 是否支持拖动
   * @desc 默认为 true
   */
  enableScroll: boolean;
  /**
   * @desc 是否支持旋转
   * @desc 默认为 false
   */
  enableRotate: boolean;
  /**
   * @desc 是否开启俯视
   * @desc 默认为 false
   */
  enableOverlooking: boolean;
  /**
   * @desc 是否开启卫星图
   * @desc 默认为 false
   */
  enableSatellite: boolean;
  /**
   * @desc 是否开启实时路况
   * @desc 默认为 false
   */
  enableTraffic: boolean;
  /**
   * @desc 是否展示 POI 点
   * @desc 默认为 false
   */
  enablePoi: boolean;
  /**
   * @desc 是否展示建筑物
   * @desc 默认为 false
   */
  enableBuilding: false;
  /**
   * @desc 是否显示带有方向的当前定位点
   * @desc 默认为 false
   */
  showLocation: boolean;
  /**
   * @desc 多边形
   */
  polygons: _MapPolygon[];
  /**
   * @desc 是否展示室内地图
   * @desc 默认为 false
   */
  enableIndoorMap: boolean;
  /**
   * @desc 点击标记点时触发
   */
  onMarkertap: _MapMarkertap;
  /**
   * @desc 点击 label 时触发
   */
  onLabeltap: _MapLabeltap;
  /**
   * @desc 点击标记点对应的气泡时触发
   */
  onCallouttap: _MapCallouttap;
  /**
   * @desc 点击控件时触发
   */
  onControltap: _MapControltap;
  /**
   * @desc 视野发生变化时触发
   */
  onRegionchange: _MapRegionchange;
  /**
   * @desc 点击地图时触发
   */
  onTap: _MapTap;
  /**
   * @desc 地图渲染更新完成时触发
   */
  onUpdated: _MapUpdated;
  /**
   * @desc 点击定位标时触发
   */
  onAnchorpointtap: _MapAnchorpointtap;
  /**
   * @desc 点击地图 poi 点时触发
   */
  onPoitap: _MapPoitap;
}

/**
 * @desc 地图组件，用于展示地图
 */
type _Map = Component<Partial<_MapProps>>;

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
  _MapMarkertapDetail as MapMarkertapDetail,
  _MapMarkertap as MapMarkertap,
  _MapLabeltapDetail as MapLabeltapDetail,
  _MapLabeltap as MapLabeltap,
  _MapCallouttapDetail as MapCallouttapDetail,
  _MapCallouttap as MapCallouttap,
  _MapControltapDetail as MapControltapDetail,
  _MapControltap as MapControltap,
  _MapRegionchange as MapRegionchange,
  _MapTap as MapTap,
  _MapUpdated as MapUpdated,
  _MapAnchorpointtapDetail as MapAnchorpointtapDetail,
  _MapAnchorpointtap as MapAnchorpointtap,
  _MapPoitapDetail as MapPoitapDetail,
  _MapPoitap as MapPoitap,
  _MapProps as MapProps,
  _Map as Map,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 显示方式
     */
    export type MapDisplay = _MapDisplay;
    /**
     * @desc 文本对齐方式
     * @desc left 左对齐
     * @desc right 右对齐
     * @desc center 居中对齐
     */
    export type MapTextAlign = _MapTextAlign;
    /**
     * @desc 气泡
     */
    export interface MapCallout extends _MapCallout {}
    /**
     * @desc 自定义气泡
     */
    export interface MapCustomCallout extends _MapCustomCallout {}
    /**
     * @desc 标签
     */
    export interface MapLabel extends _MapLabel {}
    /**
     * @desc 锚点
     */
    export interface MapAnchor extends _MapAnchor {}
    /**
     * @desc 纬度
     * @desc 取值范围为 -90 - 90
     */
    export type MapLatitude = _MapLatitude;
    /**
     * @desc 经度
     * @desc 取值范围为 -180 - 180
     */
    export type MapLongitude = _MapLongitude;
    /**
     * @desc 经纬度点
     */
    export interface MapPoint extends _MapPoint {}
    /**
     * @desc 压盖关系
     * @desc abovelabels 显示在所有 POI 之上
     * @desc abovebuildings 显示在楼块之上 POI 之下
     * @desc aboveroads 显示在道路之上楼块之下
     */
    export type MapLevel = _MapLevel;
    /**
     * @desc 主题
     * @desc 只在初始化时有效，不能动态变更
     * @desc 仅 Android 支持
     * @desc normal 正常
     * @desc satellite 卫星图
     */
    export type MapTheme = _MapTheme;
    /**
     * @desc 标记点 ID
     * @desc marker 点击事件回调中会返回
     * @desc 最大限制 9 位数
     */
    export type MapMarkerId = _MapMarkerId;
    /**
     * @desc 标记点
     */
    export interface MapMarker extends _MapMarker {}
    /**
     * @desc 路线
     */
    export interface MapPolyline extends _MapPolyline {}
    /**
     * @desc 多边形
     */
    export interface MapPolygon extends _MapPolygon {}
    /**
     * @desc 圆
     */
    export interface MapCircle extends _MapCircle {}
    /**
     * @desc 控件在地图的位置
     */
    export interface MapPosition extends _MapPosition {}
    /**
     * @desc 控件 ID
     * @desc 在控件点击事件回调中会返回
     */
    export type MapControlId = _MapControlId;
    /**
     * @desc 控件
     */
    export interface MapControl extends _MapControl {}
    export interface MapMarkertapDetail extends _MapMarkertapDetail {}
    /**
     * @desc 点击标记点时触发
     */
    export interface MapMarkertap extends _MapMarkertap {}
    export interface MapLabeltapDetail extends _MapLabeltapDetail {}
    /**
     * @desc 点击 label 时触发
     */
    export interface MapLabeltap extends _MapLabeltap {}
    export interface MapCallouttapDetail extends _MapCallouttapDetail {}
    /**
     * @desc 点击标记点对应的气泡时触发
     */
    export interface MapCallouttap extends _MapCallouttap {}
    export interface MapControltapDetail extends _MapControltapDetail {}
    /**
     * @desc 点击控件时触发
     */
    export interface MapControltap extends _MapControltap {}
    /**
     * @desc 视野发生变化时触发
     */
    export interface MapRegionchange extends _MapRegionchange {}
    /**
     * @desc 点击地图时触发
     */
    export interface MapTap extends _MapTap {}
    /**
     * @desc 地图渲染更新完成时触发
     */
    export interface MapUpdated extends _MapUpdated {}
    export interface MapAnchorpointtapDetail extends _MapAnchorpointtapDetail {}
    /**
     * @desc 点击定位标时触发
     */
    export interface MapAnchorpointtap extends _MapAnchorpointtap {}
    export interface MapPoitapDetail extends _MapPoitapDetail {}
    /**
     * @desc 点击地图 poi 点时触发
     */
    export interface MapPoitap extends _MapPoitap {}
    /**
     * @desc 地图属性
     */
    export interface MapProps extends _MapProps {}
    /**
     * @desc 地图组件，用于展示地图
     */
    export type Map = _Map;
  }
}
