import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { NgyTutorialComponent } from './tutorial/tutorial.component';
import { PromptComponent } from './prompt/prompt.component';
import { NgyTutorialService } from './ngy-tutorial.service';
import { CommonModule } from '@angular/common';
import { IInitializationOptions } from './api/i-options';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
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
          provide: 'ngy-tutorial-options',
          useValue: options
        }
      ]
    };
  }
}
