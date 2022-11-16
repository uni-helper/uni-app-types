import { Component } from '../Component';
import { BaseEvent, CustomEvent } from '../events';

/**
 * @desc 显示方式
 */
export type MapDisplay = 'BYCLICK' | 'ALWAYS';

/**
 * @desc 文本对齐方式
 * @desc left 左对齐
 * @desc right 右对齐
 * @desc center 居中对齐
 */
export type MapTextAlign = 'left' | 'right' | 'center';

/**
 * @desc 气泡
 */
export interface MapCallout {
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
  display: MapDisplay;
  /**
   * @desc 文本对齐方式
   * @desc left 左对齐
   * @desc right 右对齐
   * @desc center 居中对齐
   */
  textAlign: MapTextAlign;
}

/**
 * @desc 自定义气泡
 */
export interface MapCustomCallout {
  /**
   * @desc 显示方式
   */
  display: MapDisplay;
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
export interface MapLabel {
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
  display: MapDisplay;
  /**
   * @desc 文本对齐方式
   * @desc left 左对齐
   * @desc right 右对齐
   * @desc center 居中对齐
   */
  textAlign: MapTextAlign;
  /**
   * @desc 自定义气泡
   */
  customCallout: MapCustomCallout;
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
export interface MapAnchor {
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
 * @desc 经纬度点
 */
export interface MapPoint {
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: number;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: number;
}

/**
 * @desc 压盖关系
 * @desc abovelabels 显示在所有 POI 之上
 * @desc abovebuildings 显示在楼块之上 POI 之下
 * @desc aboveroads 显示在道路之上楼块之下
 */
export type MapLevel = 'abovelabels' | 'abovebuildings' | 'aboveroads';

/**
 * @desc 主题
 * @desc 只在初始化时有效，不能动态变更
 * @desc 仅 Android 支持
 * @desc normal 正常
 * @desc satellite 卫星图
 */
export type MapTheme = 'normal' | 'satellite';

/**
 * @desc 标记点
 */
export interface MapMarker {
  /**
   * @desc 标记点 ID
   * @desc marker 点击事件回调中会返回
   * @desc 最大限制 9 位数
   */
  id: number;
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: number;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: number;
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
  callout: MapCallout;
  /**
   * @desc 为标记点旁边增加标签
   */
  label: MapLabel;
  /**
   * @desc 经纬度在标注图标的锚点
   * @desc 默认为 { x: 0.5, y: 1 } 底边中点
   */
  anchor: MapAnchor;
  /**
   * @desc 自定义点聚合簇效果时使用
   */
  clusterId: number;
  /**
   * @desc 自定义气泡窗口
   */
  customCallout: MapCustomCallout;
  /**
   * @desc 无障碍访问，（属性）元素的额外描述
   */
  ariaLabel: string;
}

/**
 * @desc 路线
 */
export interface MapPolyline {
  /**
   * @desc 经纬度点数组
   */
  points: MapPoint[];
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
  level: MapLevel;
}

/**
 * @desc 多边形
 */
export interface MapPolygon {
  /**
   * @desc 经纬度点数组
   */
  points: MapPoint[];
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
  level: MapLevel;
}

/**
 * @desc 圆
 */
export interface MapCircle {
  /**
   * @desc 纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: number;
  /**
   * @desc 经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: number;
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
  level: MapLevel;
}

/**
 * @desc 控件在地图的位置
 */
export interface MapPosition {
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
 * @desc 控件
 */
export interface MapControl {
  /**
   * @desc 在控件点击事件回调中会返回
   */
  id: number;
  /**
   * @desc 控件在地图的位置
   */
  position: MapPosition;
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

export interface MapProps {
  /**
   * @desc 中心纬度
   * @desc 取值范围为 -90 - 90
   */
  latitude: number;
  /**
   * @desc 中心经度
   * @desc 取值范围为 -180 - 180
   */
  longitude: number;
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
  theme: MapTheme;
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
  markers: MapMarker[];
  /**
   * @desc 路线
   */
  polyline: MapPolyline[];
  /**
   * @desc 圆
   */
  circles: MapCircle[];
  /**
   * @desc 控件
   */
  controls: MapControl[];
  /**
   * @desc 缩放视野以包含所有给定的坐标点
   */
  includePoints: MapPoint[];
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
  polygons: MapPolygon[];
  /**
   * @desc 是否展示室内地图
   * @desc 默认为 false
   */
  enableIndoorMap: boolean;
  /**
   * @desc 点击标记点时触发
   */
  onMarkertap: (
    event: CustomEvent<{
      markerId: number;
    }>,
  ) => void;
  /**
   * @desc 点击 label 时触发
   */
  onLabeltap: (
    event: CustomEvent<{
      markerId: number;
    }>,
  ) => void;
  /**
   * @desc 点击标记点对应的气泡时触发
   */
  onCallouttap: (
    event: CustomEvent<{
      markerId: number;
    }>,
  ) => void;
  /**
   * @desc 点击控件时触发
   */
  onControltap: (
    event: CustomEvent<{
      controlId: number;
    }>,
  ) => void;
  /**
   * @desc 视野发生变化时触发
   */
  onRegionchange: (event: BaseEvent) => void;
  /**
   * @desc 点击地图时触发
   */
  onTap: (event: BaseEvent) => void;
  /**
   * @desc 地图渲染更新完成时触发
   */
  onUpdated: (event: BaseEvent) => void;
  /**
   * @desc 点击定位标时触发
   */
  onAnchorpointtap: (event: CustomEvent<MapPoint>) => void;
  /**
   * @desc 点击地图 poi 点时触发
   */
  onPoitap: (
    event: CustomEvent<{
      /**
       * @desc 名称
       */
      name: string;
      /**
       * @desc 纬度
       * @desc 取值范围为 -90 - 90
       */
      latitude: number;
      /**
       * @desc 经度
       * @desc 取值范围为 -180 - 180
       */
      longitude: number;
    }>,
  ) => void;
}

/**
 * @desc 地图组件，用于展示地图
 */
export type Map = Component<Partial<MapProps>>;
