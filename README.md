# ngy-tutorial

Ngy-Tutorial is an Angular plugin that gives your Angular app a built-in, customizable, user-friendly, literally "getting started" 🤓 tutorial.

So you've got your killer UI that's intuitive, slick and responsive, but will everyone know how to use it? What about some nice shortcuts or features that you want to highlight? Or maybe some UI changes that you want the users to be aware of? No one really want's to read through a long readme file, so how about an interactive, in-app tutorial? Ngy-Tutorial literally adds a step-by-step "tutorial" to your app so you can highlight your cool UI and give every user a head start.

Check out the Demo!

## Highlghts

 - Customizable steps that allows you to add and remove steps on the fly.
 - Per-step adjustable focus that hightlights any revelant elements by DOM id.
 - Ability to allow/disallow interaction with your live app while tutorial is progressing.
 - Programmatic navigation and control allow you to customize the experience to your need.
 - Customizable prompt and button styling.

## Built With

<a href="https://angular.io/"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="150"></a>

Includes icons from <a href="https://ionicons.com/"><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 161.2c-52.3 0-94.8 42.5-94.8 94.8s42.5 94.8 94.8 94.8 94.8-42.5 94.8-94.8-42.5-94.8-94.8-94.8z"/><circle cx="392.1" cy="126.4" r="43.2"/><path d="M445.3 169.8l-1.8-4-2.9 3.3c-7.1 8-16.1 14.2-26.1 17.9l-2.8 1 1.1 2.7c8.6 20.7 13 42.7 13 65.2 0 93.7-76.2 169.9-169.9 169.9S86.1 349.7 86.1 256 162.3 86.1 256 86.1c25.4 0 49.9 5.5 72.8 16.4l2.7 1.3 1.2-2.7c4.2-9.8 10.8-18.5 19.2-25.2l3.4-2.7-3.9-2C321.6 55.8 289.5 48 256 48 141.3 48 48 141.3 48 256s93.3 208 208 208 208-93.3 208-208c0-30-6.3-59-18.7-86.2z"/></svg> IonIcons</a>

Demo page is built with <a href="https://demos.creative-tim.com/argon-dashboard/index.html">Argon Dashboard from CreativeTim</a>

## Installation

Add the library by using npm with `npm install ngy-tutorial` or yarn with `yarn add ngy-tutorial`

## Getting Started (even the tutorial needs a tutorial)

1. Install the package with npm or yarn.
2. Add the module to your root module with `NgyTutorialModule.forRoot()` under `imports` in your `app.module.ts`.

    ```typescript
        @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            NgyTutorialModule.forRoot()
        ],
        providers: [],
        bootstrap: [AppComponent]
        })
        export class AppModule { }
    ```

3. Place element `<lib-ngy-tutorial></lib-ngy-tutorial>` in your app.
4. You can now inject and use `NgyTutorialService` service to control the tutorial, see the API for available commands and options.

## FAQ and Notes

 - Note, Scrollin in the view window: The viewing window allows all interaction including scrolling, which means user can scroll away from the tutorial. Your app should disable scrolling during the tutorial if that's desired.
 - The tutorial doesnt start? Try calling `NgyTutorialService.showTutorial()` in or after `ngOnInit`.

## Current Limitations & Future Plans

There are currently few limitations of Ngy-Tutorial and some will be improved in the future.

 - Scrolling support: The tutorial currently is limited to single-view layout tutorials. In the future it is planned to support scrolling.
 - Square view window only: Because of the way how "covers" are layed out, the preview window that hightlight an element is square only.