import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { NgyTutorialComponent } from './tutorial/tutorial.component';
import { PromptComponent } from './prompt/prompt.component';
import { NgyTutorialService } from './ngy-tutorial.service';
import { CommonModule } from '@angular/common';
import { IInitializationOptions } from './api/i-options';

export const OPTIONS = new InjectionToken<IInitializationOptions>('options');

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgyTutorialComponent, PromptComponent],
  exports: [NgyTutorialComponent]
})
export class NgyTutorialModule {
  public static forRoot(options: IInitializationOptions = {}): ModuleWithProviders {
    return {
      ngModule: NgyTutorialModule,
      providers: [
        NgyTutorialService,
        {
          provide: OPTIONS,
          useValue: options
        },
      ]
    };
  }
}
