import '@vue/runtime-core';
import {
  View,
  ViewProps as _ViewProps,
  ScrollView,
  ScrollViewProps as _ScrollViewProps,
  ScrollViewScrolltoupper as _ScrollViewScrolltoupper,
  ScrollViewScrolltolower as _ScrollViewScrolltolower,
  ScrollViewScroll as _ScrollViewScroll,
  ScrollViewRefresherpulling as _ScrollViewRefresherpulling,
  ScrollViewRefresherrefresh as _ScrollViewRefresherrefresh,
  ScrollViewRefresherrestore as _ScrollViewRefresherrestore,
  ScrollViewRefresherabort as _ScrollViewRefresherabort,
  Swiper,
  SwiperProps as _SwiperProps,
  SwiperChange as _SwiperChange,
  SwiperTransition as _SwiperTransition,
  SwiperAnimationfinish as _SwiperAnimationfinish,
  SwiperItem,
  SwiperItemProps as _SwiperItemProps,
  MatchMedia,
  MovableArea,
  MovableView,
  CoverView,
  CoverImage,
  Icon,
  Text,
  RichText,
  Progress,
  Button,
  Checkbox,
  CheckboxGroup,
  Editor,
  Form,
  Input,
  Label,
  Picker,
  PickerView,
  PickerViewColumn,
  RadioGroup,
  Radio,
  Slider,
  Switch,
  Textarea,
  Navigator,
  Audio,
  Camera,
  Image,
  Video,
  LivePlayer,
  LivePusher,
  Map,
  Canvas,
  WebView,
  Ad,
  AdContentPage,
  AdDraw,
  AdFullscreenVideo,
  AdInteractive,
  AdInterstitial,
  AdRewardedVideo,
  PageMeta,
  NavigationBar,
  CustomTabBar,
} from './types';

export * from './types';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    View: View;
    ScrollView: ScrollView;
    Swiper: Swiper;
    SwiperItem: SwiperItem;
    MatchMedia: MatchMedia;
    MovableArea: MovableArea;
    MovableView: MovableView;
    CoverView: CoverView;
    CoverImage: CoverImage;

    Icon: Icon;
    Text: Text;
    RichText: RichText;
    Progress: Progress;

    Button: Button;
    Checkbox: Checkbox;
    CheckboxGroup: CheckboxGroup;
    Editor: Editor;
    Form: Form;
    Input: Input;
    Label: Label;
    Picker: Picker;
    PickerView: PickerView;
    PickerViewColumn: PickerViewColumn;
    Radio: Radio;
    RadioGroup: RadioGroup;
    Slider: Slider;
    Switch: Switch;
    Textarea: Textarea;

    Navigator: Navigator;

    Audio: Audio;
    Camera: Camera;
    Image: Image;
    Video: Video;
    LivePlayer: LivePlayer;
    LivePusher: LivePusher;

    Map: Map;
    Canvas: Canvas;

    WebView: WebView;

    Ad: Ad;
    AdContentPage: AdContentPage;
    AdDraw: AdDraw;
    AdFullscreenVideo: AdFullscreenVideo;
    AdInteractive: AdInteractive;
    AdInterstitial: AdInterstitial;
    AdRewardedVideo: AdRewardedVideo;

    PageMeta: PageMeta;
    NavigationBar: NavigationBar;
    CustomTabBar: CustomTabBar;
  }
}

declare namespace UniHelper {
  /* View */
  export type ViewProps = _ViewProps;
  /* ScrollView */
  export type ScrollViewProps = _ScrollViewProps;
  /**
   * @desc 滚动到顶部/左边时触发
   */
  export type ScrollViewScrolltoupper = _ScrollViewScrolltoupper;
  /**
   * @desc 滚动到底部/右边时触发
   */
  export type ScrollViewScrolltolower = _ScrollViewScrolltolower;
  /**
   * @desc 滚动时触发
   */
  export type ScrollViewScroll = _ScrollViewScroll;
  /**
   * @desc 自定义下拉刷新控件被下拉时触发
   */
  export type ScrollViewRefresherpulling = _ScrollViewRefresherpulling;
  /**
   * @desc 自定义下拉刷新被触发时触发
   */
  export type ScrollViewRefresherrefresh = _ScrollViewRefresherrefresh;
  /**
   * @desc 自定义下拉刷新被复位时触发
   */
  export type ScrollViewRefresherrestore = _ScrollViewRefresherrestore;
  /**
   * @desc 自定义下拉刷新被中止时触发
   */
  export type ScrollViewRefresherabort = _ScrollViewRefresherabort;
  /* Swiper */
  export type SwiperProps = _SwiperProps;
  /**
   * @desc current 改变时触发
   */
  export type SwiperChange = _SwiperChange;
  /**
   * @desc swiper-item 位置改变时触发
   */
  export type SwiperTransition = _SwiperTransition;
  /**
   * @desc 动画结束时触发
   */
  export type SwiperAnimationfinish = _SwiperAnimationfinish;
  /* SwiperItem */
  export type SwiperItemProps = _SwiperItemProps;
}
export as namespace UniHelper;
export = UniHelper;
export default UniHelper;
