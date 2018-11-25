import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgyTutorialModule } from 'ngy-tutorial';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgyTutorialModule.forRoot({
      classToAdd: {
        container: ['bg-default'],
        prompt: ['text-secondary'],
        title: ['text-secondary'],
        nextIcon: 'ion-ios-arrow-forward',
        previousIcon: 'ion-ios-arrow-back',
        finishIcon: 'ion-ios-checkmark',
        skipIcon: 'ion-ios-alert',
        nextBtn: ['btn', 'btn-primary', 'btn-outline'],
        previousBtn: ['btn', 'btn-default', 'btn-outline'],
        finishBtn: ['btn', 'btn-success', 'btn-outline'],
        skipBtn: ['btn', 'btn-secondary', 'btn-outline'],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
