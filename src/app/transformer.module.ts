import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransformerComponent } from './transformer.component';
import { CamelCasePipe } from './case/camel-case/camel-case.pipe';
import { NgxTransformerOptions, NGX_TRANSFORMER_OPTIONS } from './transformer-options';
import { SnakeCasePipe } from './case/snake-case/snake-case.pipe';
import { KebabCasePipe } from './case/kebab-case/kebab-case.pipe';
import { FlatCasePipe } from './case/flat-case/flat-case.pipe';
import { ScreamCasePipe } from './case/scream-case/scream-case.pipe';
import {PascalCasePipe} from './case/pascal-case/pascal-case.pipe';
import { NumbroFormatPipe } from './numbro/numbro-format/numbro-format.pipe';
import { NumbroAveragePipe } from './numbro/numbro-average/numbro-average.pipe';
import { NumbroFormatNumberPipe } from './numbro/numbro-format-number/numbro-format-number.pipe';

const ANGULAR_TRANSFORMER_PIPES = [
  PascalCasePipe,
  CamelCasePipe,
  SnakeCasePipe,
  KebabCasePipe,
  FlatCasePipe,
  ScreamCasePipe,
  NumbroFormatPipe,
  NumbroAveragePipe,
  NumbroFormatNumberPipe,
];

@NgModule({
  declarations: [
    ...ANGULAR_TRANSFORMER_PIPES,
    TransformerComponent // development only, do not commit
  ],
  imports: [BrowserModule],
  exports: ANGULAR_TRANSFORMER_PIPES,
  bootstrap: [TransformerComponent] // development only, do not commit
})
export class TransformerModule {
  static forRoot(options?: NgxTransformerOptions): ModuleWithProviders<TransformerModule> {
    return {
      ngModule: TransformerModule,
      providers: [
        {
          provide: NGX_TRANSFORMER_OPTIONS,
          useValue: {
            ...options,
          },
        },
      ],
    };
  }
}
