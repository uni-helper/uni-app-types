import '@vue/runtime-core';
import {
  Block,
  View,
  ScrollView,
  Swiper,
  SwiperItem,
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
  PageMeta,
  NavigationBar,
  CustomTabBar,
} from './types';

export * from './types';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Block: Block;
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

    PageMeta: PageMeta;
    NavigationBar: NavigationBar;
    CustomTabBar: CustomTabBar;
  }
}
