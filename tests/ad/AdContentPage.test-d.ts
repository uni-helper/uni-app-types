import { describe, expectTypeOf } from 'vitest';
import type {
  AdContentPageOnLoadEvent,
  AdContentPageOnLoad,
  AdContentPageOnErrorDetail,
  AdContentPageOnErrorEvent,
  AdContentPageOnError,
  AdContentPageOnStartDetail,
  AdContentPageOnStartEvent,
  AdContentPageOnStart,
  AdContentPageOnPauseDetail,
  AdContentPageOnPauseEvent,
  AdContentPageOnPause,
  AdContentPageOnResumeDetail,
  AdContentPageOnResumeEvent,
  AdContentPageOnResume,
  AdContentPageOnCompleteDetail,
  AdContentPageOnCompleteEvent,
  AdContentPageOnComplete,
  AdContentPageProps,
  AdContentPage,
  AdContentPageInstance,
} from '@/ad/AdContentPage';

describe('AdContentPage', () => {
  expectTypeOf<AdContentPageOnLoadEvent>().toBeObject();
  expectTypeOf<AdContentPageOnLoadEvent>().toEqualTypeOf<UniHelper.AdContentPageOnLoadEvent>();

  expectTypeOf<AdContentPageOnLoad>().toBeFunction();
  expectTypeOf<AdContentPageOnLoad>().toEqualTypeOf<UniHelper.AdContentPageOnLoad>();

  expectTypeOf<AdContentPageOnErrorDetail>().toBeObject();
  expectTypeOf<AdContentPageOnErrorDetail>().toEqualTypeOf<UniHelper.AdContentPageOnErrorDetail>();

  expectTypeOf<AdContentPageOnErrorEvent>().toBeObject();
  expectTypeOf<AdContentPageOnErrorEvent>().toEqualTypeOf<UniHelper.AdContentPageOnErrorEvent>();

  expectTypeOf<AdContentPageOnError>().toBeFunction();
  expectTypeOf<AdContentPageOnError>().toEqualTypeOf<UniHelper.AdContentPageOnError>();

  expectTypeOf<AdContentPageOnStartDetail>().toBeObject();
  expectTypeOf<AdContentPageOnStartDetail>().toEqualTypeOf<UniHelper.AdContentPageOnStartDetail>();

  expectTypeOf<AdContentPageOnStartEvent>().toBeObject();
  expectTypeOf<AdContentPageOnStartEvent>().toEqualTypeOf<UniHelper.AdContentPageOnStartEvent>();

  expectTypeOf<AdContentPageOnStart>().toBeFunction();
  expectTypeOf<AdContentPageOnStart>().toEqualTypeOf<UniHelper.AdContentPageOnStart>();

  expectTypeOf<AdContentPageOnPauseDetail>().toBeObject();
  expectTypeOf<AdContentPageOnPauseDetail>().toEqualTypeOf<UniHelper.AdContentPageOnPauseDetail>();

  expectTypeOf<AdContentPageOnPauseEvent>().toBeObject();
  expectTypeOf<AdContentPageOnPauseEvent>().toEqualTypeOf<UniHelper.AdContentPageOnPauseEvent>();

  expectTypeOf<AdContentPageOnPause>().toBeFunction();
  expectTypeOf<AdContentPageOnPause>().toEqualTypeOf<UniHelper.AdContentPageOnPause>();

  expectTypeOf<AdContentPageOnResumeDetail>().toBeObject();
  expectTypeOf<AdContentPageOnResumeDetail>().toEqualTypeOf<UniHelper.AdContentPageOnResumeDetail>();

  expectTypeOf<AdContentPageOnResumeEvent>().toBeObject();
  expectTypeOf<AdContentPageOnResumeEvent>().toEqualTypeOf<UniHelper.AdContentPageOnResumeEvent>();

  expectTypeOf<AdContentPageOnResume>().toBeFunction();
  expectTypeOf<AdContentPageOnResume>().toEqualTypeOf<UniHelper.AdContentPageOnResume>();

  expectTypeOf<AdContentPageOnCompleteDetail>().toBeObject();
  expectTypeOf<AdContentPageOnCompleteDetail>().toEqualTypeOf<UniHelper.AdContentPageOnCompleteDetail>();

  expectTypeOf<AdContentPageOnCompleteEvent>().toBeObject();
  expectTypeOf<AdContentPageOnCompleteEvent>().toEqualTypeOf<UniHelper.AdContentPageOnCompleteEvent>();

  expectTypeOf<AdContentPageOnComplete>().toBeFunction();
  expectTypeOf<AdContentPageOnComplete>().toEqualTypeOf<UniHelper.AdContentPageOnComplete>();

  expectTypeOf<AdContentPageProps>().toBeObject();
  expectTypeOf<AdContentPageProps>().toEqualTypeOf<UniHelper.AdContentPageProps>();

  expectTypeOf<AdContentPage>().not.toBeAny();
  expectTypeOf<AdContentPage>().toEqualTypeOf<UniHelper.AdContentPage>();

  expectTypeOf<AdContentPageInstance>().not.toBeAny();
  expectTypeOf<AdContentPageInstance>().toEqualTypeOf<UniHelper.AdContentPageInstance>();
});
