import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './transformer.component';
import { CamelCasePipe } from './case/camel-case/camel-case.pipe';
import { NgxTransformerOptions, NGX_TRANSFORMER_OPTIONS } from './transformer-options';
import { SnakeCasePipe } from './case/snake-case/snake-case.pipe';
import { KebabCasePipe } from './case/kebab-case/kebab-case.pipe';
import { FlatCasePipe } from './case/flat-case/flat-case.pipe';
import { ScreamCasePipe } from './case/scream-case/scream-case.pipe';
import {PascalCasePipe} from "./case/pascal-case/pascal-case.pipe";

const ANGULAR_TRANSFORMER_PIPES = [
  PascalCasePipe,
  CamelCasePipe,
  SnakeCasePipe,
  KebabCasePipe,
  FlatCasePipe,
  ScreamCasePipe,
];

@NgModule({
  declarations: [...ANGULAR_TRANSFORMER_PIPES, AppComponent],
  imports: [BrowserModule],
  exports: ANGULAR_TRANSFORMER_PIPES,
  bootstrap: [AppComponent]
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
