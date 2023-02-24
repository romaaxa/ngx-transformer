import { InjectionToken } from '@angular/core';

export const NGX_TRANSFORMER_OPTIONS: InjectionToken<NgxTransformerOptions> = new InjectionToken<
  NgxTransformerOptions
>('NGX_TRANSFORMER_OPTIONS');

export interface NgxTransformerOptions {
  relativeTimeThresholdOptions: { [key: string]: number };
}
