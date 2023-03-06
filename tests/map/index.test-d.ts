import { describe, expectTypeOf } from 'vitest';
import type {
  MapDisplay,
  MapTextAlign,
  MapCallout,
  MapCustomCallout,
  MapLabel,
  MapAnchor,
  MapLatitude,
  MapLongitude,
  MapPoint,
  MapLevel,
  MapTheme,
  MapMarkerId,
  MapMarker,
  MapPolyline,
  MapPolygon,
  MapCircle,
  MapPosition,
  MapControlId,
  MapControl,
  MapOnMarkertapDetail,
  MapOnMarkertapEvent,
  MapOnMarkertap,
  MapOnLabeltapDetail,
  MapOnLabeltapEvent,
  MapOnLabeltap,
  MapOnCallouttapDetail,
  MapOnCallouttapEvent,
  MapOnCallouttap,
  MapOnControltapDetail,
  MapOnControltapEvent,
  MapOnControltap,
  MapOnRegionchangeEvent,
  MapOnRegionchange,
  MapOnTapEvent,
  MapOnTap,
  MapOnUpdatedEvent,
  MapOnUpdated,
  MapOnAnchorpointtapDetail,
  MapOnAnchorpointtapEvent,
  MapOnAnchorpointtap,
  MapOnPoitapDetail,
  MapOnPoitapEvent,
  MapOnPoitap,
  MapProps,
  Map,
  MapInstance,
} from '@/map';

describe('Map', () => {
  expectTypeOf<MapDisplay>().toBeString();
  expectTypeOf<MapDisplay>().toEqualTypeOf<UniHelper.MapDisplay>();

  expectTypeOf<MapTextAlign>().toBeString();
  expectTypeOf<MapTextAlign>().toEqualTypeOf<UniHelper.MapTextAlign>();

  expectTypeOf<MapCallout>().toBeObject();
  expectTypeOf<MapCallout>().toEqualTypeOf<UniHelper.MapCallout>();

  expectTypeOf<MapCustomCallout>().toBeObject();
  expectTypeOf<MapCustomCallout>().toEqualTypeOf<UniHelper.MapCustomCallout>();

  expectTypeOf<MapLabel>().toBeObject();
  expectTypeOf<MapLabel>().toEqualTypeOf<UniHelper.MapLabel>();

  expectTypeOf<MapAnchor>().toBeObject();
  expectTypeOf<MapAnchor>().toEqualTypeOf<UniHelper.MapAnchor>();

  expectTypeOf<MapLatitude>().toBeNumber();
  expectTypeOf<MapLatitude>().toEqualTypeOf<UniHelper.MapLatitude>();

  expectTypeOf<MapLongitude>().toBeNumber();
  expectTypeOf<MapLongitude>().toEqualTypeOf<UniHelper.MapLongitude>();

  expectTypeOf<MapPoint>().toBeObject();
  expectTypeOf<MapPoint>().toEqualTypeOf<UniHelper.MapPoint>();

  expectTypeOf<MapLevel>().toBeString();
  expectTypeOf<MapLevel>().toEqualTypeOf<UniHelper.MapLevel>();

  expectTypeOf<MapTheme>().toBeString();
  expectTypeOf<MapTheme>().toEqualTypeOf<UniHelper.MapTheme>();

  expectTypeOf<MapMarkerId>().toBeNumber();
  expectTypeOf<MapMarkerId>().toEqualTypeOf<UniHelper.MapMarkerId>();

  expectTypeOf<MapMarker>().toBeObject();
  expectTypeOf<MapMarker>().toEqualTypeOf<UniHelper.MapMarker>();

  expectTypeOf<MapPolyline>().toBeObject();
  expectTypeOf<MapPolyline>().toEqualTypeOf<UniHelper.MapPolyline>();

  expectTypeOf<MapPolygon>().toBeObject();
  expectTypeOf<MapPolygon>().toEqualTypeOf<UniHelper.MapPolygon>();

  expectTypeOf<MapCircle>().toBeObject();
  expectTypeOf<MapCircle>().toEqualTypeOf<UniHelper.MapCircle>();

  expectTypeOf<MapPosition>().toBeObject();
  expectTypeOf<MapPosition>().toEqualTypeOf<UniHelper.MapPosition>();

  expectTypeOf<MapControlId>().toBeNumber();
  expectTypeOf<MapControlId>().toEqualTypeOf<UniHelper.MapControlId>();

  expectTypeOf<MapControl>().toBeObject();
  expectTypeOf<MapControl>().toEqualTypeOf<UniHelper.MapControl>();

  expectTypeOf<MapOnMarkertapDetail>().toBeObject();
  expectTypeOf<MapOnMarkertapDetail>().toEqualTypeOf<UniHelper.MapOnMarkertapDetail>();

  expectTypeOf<MapOnMarkertapEvent>().toBeObject();
  expectTypeOf<MapOnMarkertapEvent>().toEqualTypeOf<UniHelper.MapOnMarkertapEvent>();

  expectTypeOf<MapOnMarkertap>().toBeFunction();
  expectTypeOf<MapOnMarkertap>().toEqualTypeOf<UniHelper.MapOnMarkertap>();

  expectTypeOf<MapOnLabeltapDetail>().toBeObject();
  expectTypeOf<MapOnLabeltapDetail>().toEqualTypeOf<UniHelper.MapOnLabeltapDetail>();

  expectTypeOf<MapOnLabeltapEvent>().toBeObject();
  expectTypeOf<MapOnLabeltapEvent>().toEqualTypeOf<UniHelper.MapOnLabeltapEvent>();

  expectTypeOf<MapOnLabeltap>().toBeFunction();
  expectTypeOf<MapOnLabeltap>().toEqualTypeOf<UniHelper.MapOnLabeltap>();

  expectTypeOf<MapOnCallouttapDetail>().toBeObject();
  expectTypeOf<MapOnCallouttapDetail>().toEqualTypeOf<UniHelper.MapOnCallouttapDetail>();

  expectTypeOf<MapOnCallouttapEvent>().toBeObject();
  expectTypeOf<MapOnCallouttapEvent>().toEqualTypeOf<UniHelper.MapOnCallouttapEvent>();

  expectTypeOf<MapOnCallouttap>().toBeFunction();
  expectTypeOf<MapOnCallouttap>().toEqualTypeOf<UniHelper.MapOnCallouttap>();

  expectTypeOf<MapOnControltapDetail>().toBeObject();
  expectTypeOf<MapOnControltapDetail>().toEqualTypeOf<UniHelper.MapOnControltapDetail>();

  expectTypeOf<MapOnControltapEvent>().toBeObject();
  expectTypeOf<MapOnControltapEvent>().toEqualTypeOf<UniHelper.MapOnControltapEvent>();

  expectTypeOf<MapOnControltap>().toBeFunction();
  expectTypeOf<MapOnControltap>().toEqualTypeOf<UniHelper.MapOnControltap>();

  expectTypeOf<MapOnRegionchangeEvent>().toBeObject();
  expectTypeOf<MapOnRegionchangeEvent>().toEqualTypeOf<UniHelper.MapOnRegionchangeEvent>();

  expectTypeOf<MapOnRegionchange>().toBeFunction();
  expectTypeOf<MapOnRegionchange>().toEqualTypeOf<UniHelper.MapOnRegionchange>();

  expectTypeOf<MapOnTapEvent>().toBeObject();
  expectTypeOf<MapOnTapEvent>().toEqualTypeOf<UniHelper.MapOnTapEvent>();

  expectTypeOf<MapOnTap>().toBeFunction();
  expectTypeOf<MapOnTap>().toEqualTypeOf<UniHelper.MapOnTap>();

  expectTypeOf<MapOnUpdatedEvent>().toBeObject();
  expectTypeOf<MapOnUpdatedEvent>().toEqualTypeOf<UniHelper.MapOnUpdatedEvent>();

  expectTypeOf<MapOnUpdated>().toBeFunction();
  expectTypeOf<MapOnUpdated>().toEqualTypeOf<UniHelper.MapOnUpdated>();

  expectTypeOf<MapOnAnchorpointtapDetail>().toBeObject();
  expectTypeOf<MapOnAnchorpointtapDetail>().toEqualTypeOf<UniHelper.MapOnAnchorpointtapDetail>();

  expectTypeOf<MapOnAnchorpointtapEvent>().toBeObject();
  expectTypeOf<MapOnAnchorpointtapEvent>().toEqualTypeOf<UniHelper.MapOnAnchorpointtapEvent>();

  expectTypeOf<MapOnAnchorpointtap>().toBeFunction();
  expectTypeOf<MapOnAnchorpointtap>().toEqualTypeOf<UniHelper.MapOnAnchorpointtap>();

  expectTypeOf<MapOnPoitapDetail>().toBeObject();
  expectTypeOf<MapOnPoitapDetail>().toEqualTypeOf<UniHelper.MapOnPoitapDetail>();

  expectTypeOf<MapOnPoitapEvent>().toBeObject();
  expectTypeOf<MapOnPoitapEvent>().toEqualTypeOf<UniHelper.MapOnPoitapEvent>();

  expectTypeOf<MapOnPoitap>().toBeFunction();
  expectTypeOf<MapOnPoitap>().toEqualTypeOf<UniHelper.MapOnPoitap>();

  expectTypeOf<MapProps>().toBeObject();
  expectTypeOf<MapProps>().toEqualTypeOf<UniHelper.MapProps>();

  expectTypeOf<Map>().not.toBeAny();
  expectTypeOf<Map>().toEqualTypeOf<UniHelper.Map>();

  expectTypeOf<MapInstance>().not.toBeAny();
  expectTypeOf<MapInstance>().toEqualTypeOf<UniHelper.MapInstance>();
});
