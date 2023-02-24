import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CamelCasePipe } from './case/camel-case/camel-case.pipe';
import { NgxTransformerOptions, NGX_TRANSFORMER_OPTIONS } from './transformer-options';

const ANGULAR_TRANSFORMER_PIPES = [
  CamelCasePipe,
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
