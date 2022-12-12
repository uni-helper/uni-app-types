import { describe, expectTypeOf } from 'vitest';
import type {
  AdContentPageOnLoad,
  AdContentPageOnErrorDetail,
  AdContentPageOnError,
  AdContentPageOnStartDetail,
  AdContentPageOnStart,
  AdContentPageOnPauseDetail,
  AdContentPageOnPause,
  AdContentPageOnResumeDetail,
  AdContentPageOnResume,
  AdContentPageOnCompleteDetail,
  AdContentPageOnComplete,
  AdContentPageProps,
  AdContentPage,
} from '@/ad/AdContentPage';

describe('AdContentPage', () => {
  expectTypeOf<AdContentPageOnLoad>().toBeFunction();
  expectTypeOf<AdContentPageOnLoad>().toEqualTypeOf<UniHelper.AdContentPageOnLoad>();

  expectTypeOf<AdContentPageOnErrorDetail>().toBeObject();
  expectTypeOf<AdContentPageOnErrorDetail>().toEqualTypeOf<UniHelper.AdContentPageOnErrorDetail>();

  expectTypeOf<AdContentPageOnError>().toBeFunction();
  expectTypeOf<AdContentPageOnError>().toEqualTypeOf<UniHelper.AdContentPageOnError>();

  expectTypeOf<AdContentPageOnStartDetail>().toBeObject();
  expectTypeOf<AdContentPageOnStartDetail>().toEqualTypeOf<UniHelper.AdContentPageOnStartDetail>();

  expectTypeOf<AdContentPageOnStart>().toBeFunction();
  expectTypeOf<AdContentPageOnStart>().toEqualTypeOf<UniHelper.AdContentPageOnStart>();

  expectTypeOf<AdContentPageOnPauseDetail>().toBeObject();
  expectTypeOf<AdContentPageOnPauseDetail>().toEqualTypeOf<UniHelper.AdContentPageOnPauseDetail>();

  expectTypeOf<AdContentPageOnPause>().toBeFunction();
  expectTypeOf<AdContentPageOnPause>().toEqualTypeOf<UniHelper.AdContentPageOnPause>();

  expectTypeOf<AdContentPageOnResumeDetail>().toBeObject();
  expectTypeOf<AdContentPageOnResumeDetail>().toEqualTypeOf<UniHelper.AdContentPageOnResumeDetail>();

  expectTypeOf<AdContentPageOnResume>().toBeFunction();
  expectTypeOf<AdContentPageOnResume>().toEqualTypeOf<UniHelper.AdContentPageOnResume>();

  expectTypeOf<AdContentPageOnCompleteDetail>().toBeObject();
  expectTypeOf<AdContentPageOnCompleteDetail>().toEqualTypeOf<UniHelper.AdContentPageOnCompleteDetail>();

  expectTypeOf<AdContentPageOnComplete>().toBeFunction();
  expectTypeOf<AdContentPageOnComplete>().toEqualTypeOf<UniHelper.AdContentPageOnComplete>();

  expectTypeOf<AdContentPageProps>().toBeObject();
  expectTypeOf<AdContentPageProps>().toEqualTypeOf<UniHelper.AdContentPageProps>();

  expectTypeOf<AdContentPage>().not.toBeAny();
  expectTypeOf<AdContentPage>().toEqualTypeOf<UniHelper.AdContentPage>();
});
