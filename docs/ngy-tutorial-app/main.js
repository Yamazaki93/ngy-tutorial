(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngy-tutorial/fesm5/ngy-tutorial.js":
/*!*************************************************!*\
  !*** ./dist/ngy-tutorial/fesm5/ngy-tutorial.js ***!
  \*************************************************/
/*! exports provided: NgyTutorialService, NgyTutorialModule, StepPromptPlacement, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgyTutorialService", function() { return NgyTutorialService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgyTutorialModule", function() { return NgyTutorialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepPromptPlacement", function() { return StepPromptPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PromptComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgyTutorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var StepPromptPlacement = {
    Above: 0,
    Below: 1,
    Left: 2,
    Right: 3,
};
StepPromptPlacement[StepPromptPlacement.Above] = 'Above';
StepPromptPlacement[StepPromptPlacement.Below] = 'Below';
StepPromptPlacement[StepPromptPlacement.Left] = 'Left';
StepPromptPlacement[StepPromptPlacement.Right] = 'Right';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgyTutorialService = /** @class */ (function () {
    function NgyTutorialService() {
        this.toShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tutorialInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.currentStep = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this._tutorialInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this._currentStep = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.tutorialInProgress = this._tutorialInProgress.asObservable();
        this.currentStep = this._currentStep.asObservable();
        this.steps = [];
    }
    /**
     * @return {?}
     */
    NgyTutorialService.prototype.showTutorial = /**
     * @return {?}
     */
    function () {
        this._currentStep.next(0);
        this.toShow.emit(this.steps.slice());
        this._tutorialInProgress.next(true);
    };
    /**
     * @return {?}
     */
    NgyTutorialService.prototype.hideTutorial = /**
     * @return {?}
     */
    function () {
        this.toShow.emit([]);
        this._tutorialInProgress.next(false);
    };
    /**
     * @param {?} title
     * @param {?} prompt
     * @param {?=} option
     * @return {?}
     */
    NgyTutorialService.prototype.addStep = /**
     * @param {?} title
     * @param {?} prompt
     * @param {?=} option
     * @return {?}
     */
    function (title, prompt, option) {
        if (option && option.disableNext && option.disableInteraction) {
            console.warn("ngy-tutorial error, step " + title + " - " + prompt + " has disableNext and disableInteraction set to true.\n      This step will cause tutorial to be unable to progress forward as such is not added to the tutorial");
            return;
        }
        this.steps.push(new TutorialStep(title, prompt, option));
    };
    /**
     * @param {?} stepNumber
     * @return {?}
     */
    NgyTutorialService.prototype.removeStep = /**
     * @param {?} stepNumber
     * @return {?}
     */
    function (stepNumber) {
        if (stepNumber > this.steps.length - 1 || stepNumber < 0) {
            return;
        }
        else {
            this.steps.splice(stepNumber, 1);
        }
    };
    /**
     * @return {?}
     */
    NgyTutorialService.prototype.nextStep = /**
     * @return {?}
     */
    function () {
        this._currentStep.next(this._currentStep.value + 1);
    };
    /**
     * @return {?}
     */
    NgyTutorialService.prototype.previousStep = /**
     * @return {?}
     */
    function () {
        this._currentStep.next(this._currentStep.value - 1);
    };
    NgyTutorialService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    NgyTutorialService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgyTutorialService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function NgyTutorialService_Factory() { return new NgyTutorialService(); }, token: NgyTutorialService, providedIn: "root" });
    return NgyTutorialService;
}());
var TutorialStep = /** @class */ (function () {
    function TutorialStep(title, prompt, option) {
        this.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, TutorialStep.DEFAULT_OPTIONS, option);
        this.title = title;
        this.prompt = prompt;
    }
    TutorialStep.DEFAULT_OPTIONS = {
        placement: StepPromptPlacement.Below
    };
    return TutorialStep;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PromptComponent = /** @class */ (function () {
    function PromptComponent(svc, sani, options) {
        this.svc = svc;
        this.sani = sani;
        this.options = options;
        this.stepNumber = 0;
        this.totalSteps = 0;
        this.appliedClasses = {};
        this.appliedTexts = {};
    }
    /**
     * @return {?}
     */
    PromptComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.appliedClasses = {};
        this.appliedTexts = {};
        if (this.options.classToAdd) {
            this.appliedClasses.container = this.options.classToAdd.container ? this.options.classToAdd.container : [];
            this.appliedClasses.title = this.options.classToAdd.title ? this.options.classToAdd.title : [];
            this.appliedClasses.prompt = this.options.classToAdd.prompt ? this.options.classToAdd.prompt : [];
            this.appliedClasses.nextBtn = this.options.classToAdd.nextBtn ? this.options.classToAdd.nextBtn : [];
            this.appliedClasses.previousBtn = this.options.classToAdd.previousBtn ? this.options.classToAdd.previousBtn : [];
            this.appliedClasses.finishBtn = this.options.classToAdd.finishBtn ? this.options.classToAdd.finishBtn : [];
            this.appliedClasses.skipBtn = this.options.classToAdd.skipBtn ? this.options.classToAdd.skipBtn : [];
            this.appliedClasses.nextIcon = this.options.classToAdd.nextIcon ? this.options.classToAdd.nextIcon : '';
            this.appliedClasses.previousIcon = this.options.classToAdd.previousIcon ? this.options.classToAdd.previousIcon : '';
            this.appliedClasses.finishIcon = this.options.classToAdd.finishIcon ? this.options.classToAdd.finishIcon : '';
            this.appliedClasses.skipIcon = this.options.classToAdd.skipIcon ? this.options.classToAdd.skipIcon : '';
        }
        if (this.step.options && this.step.options.classToAdd) {
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.container = this.appliedClasses.container.concat(this.step.options.classToAdd.container ? this.step.options.classToAdd.container : []);
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.title = this.appliedClasses.title.concat(this.step.options.classToAdd.title ? this.step.options.classToAdd.title : []);
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.prompt = this.appliedClasses.prompt.concat(this.step.options.classToAdd.prompt ? this.step.options.classToAdd.prompt : []);
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.nextBtn = this.appliedClasses.nextBtn.concat(this.step.options.classToAdd.nextBtn ? this.step.options.classToAdd.nextBtn : []);
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.previousBtn = this.appliedClasses.previousBtn.concat(this.step.options.classToAdd.previousBtn ? this.step.options.classToAdd.previousBtn : []);
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.finishBtn = this.appliedClasses.finishBtn.concat(this.step.options.classToAdd.finishBtn ? this.step.options.classToAdd.finishBtn : []);
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.skipBtn = this.appliedClasses.skipBtn.concat(this.step.options.classToAdd.skipBtn ? this.step.options.classToAdd.skipBtn : []);
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.nextIcon = this.step.options.classToAdd.nextIcon ? this.step.options.classToAdd.nextIcon : this.appliedClasses.nextIcon;
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.previousIcon = this.step.options.classToAdd.previousIcon ? this.step.options.classToAdd.previousIcon : this.appliedClasses.previousIcon;
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.finishIcon = this.step.options.classToAdd.finishIcon ? this.step.options.classToAdd.finishIcon : this.appliedClasses.finishIcon;
            // tslint:disable-next-line:max-line-length
            this.appliedClasses.skipIcon = this.step.options.classToAdd.skipIcon ? this.step.options.classToAdd.skipIcon : this.appliedClasses.skipIcon;
        }
        if (this.options.actionTexts) {
            this.appliedTexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.actionTexts);
        }
        if (this.step.options && this.step.options.actionTexts) {
            this.appliedTexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.appliedTexts, this.step.options.actionTexts);
        }
        if (this.step.title) {
            this.titleSafe = this.sani.bypassSecurityTrustHtml(this.step.title);
        }
        if (this.step.prompt) {
            this.promptSafe = this.sani.bypassSecurityTrustHtml(this.step.prompt);
        }
    };
    /**
     * @return {?}
     */
    PromptComponent.prototype.finishTutorial = /**
     * @return {?}
     */
    function () {
        this.svc.hideTutorial();
    };
    /**
     * @return {?}
     */
    PromptComponent.prototype.nextStep = /**
     * @return {?}
     */
    function () {
        this.svc.nextStep();
    };
    /**
     * @return {?}
     */
    PromptComponent.prototype.previousStep = /**
     * @return {?}
     */
    function () {
        this.svc.previousStep();
    };
    /**
     * @param {?=} elem
     * @param {?=} placement
     * @return {?}
     */
    PromptComponent.prototype.setPromptForElement = /**
     * @param {?=} elem
     * @param {?=} placement
     * @return {?}
     */
    function (elem, placement) {
        var _this = this;
        setTimeout(function () {
            /** @type {?} */
            var promptPositionInfo = _this.prompt.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            /** @type {?} */
            var viewH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            /** @type {?} */
            var promptH = promptPositionInfo.height;
            /** @type {?} */
            var promptW = promptPositionInfo.width;
            if (!elem || placement === undefined) {
                _this.setPromptPosition(viewW / 2 - promptW / 2, viewH / 2 - promptH / 2);
            }
            else {
                /** @type {?} */
                var positionInfo = elem.getBoundingClientRect();
                if (placement === StepPromptPlacement.Right) {
                    _this.setPromptPosition(positionInfo.left + positionInfo.width + 20, positionInfo.top + positionInfo.height / 2 - promptH / 2);
                }
                else if (placement === StepPromptPlacement.Left) {
                    _this.setPromptPosition(positionInfo.left - promptW - 20, positionInfo.top + positionInfo.height / 2 - promptH / 2);
                }
                else if (placement === StepPromptPlacement.Above) {
                    _this.setPromptPosition(positionInfo.left + positionInfo.width / 2 - promptW / 2, positionInfo.top - 20 - promptH);
                }
                else {
                    _this.setPromptPosition(positionInfo.left + positionInfo.width / 2 - promptW / 2, positionInfo.top + positionInfo.height + 20);
                }
            }
        });
    };
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    PromptComponent.prototype.setPromptPosition = /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        /** @type {?} */
        var promptPositionInfo = this.prompt.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        /** @type {?} */
        var viewH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        /** @type {?} */
        var promptH = promptPositionInfo.height;
        /** @type {?} */
        var promptW = promptPositionInfo.width;
        if (x < 10) {
            x = 10;
        }
        if (y < 10) {
            y = 10;
        }
        if (x > viewW - promptW) {
            x = viewW - promptW;
        }
        if (y > viewH - promptH) {
            y = viewH - promptH;
        }
        this.prompt.nativeElement.style.left = x + "px";
        this.prompt.nativeElement.style.top = y + "px";
    };
    PromptComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'lib-ngy-tutorial-prompt',
                    template: "<div class=\"prompt-container smooth-2 ngy-tutorial-prompt-container\" [ngClass]=\"appliedClasses.container\" *ngIf=\"step\"\n  #prompt>\n  <h2 class=\"title ngy-tutorial-title\" [ngClass]=\"appliedClasses.title\" *ngIf=\"step.title\" [innerHTML]=\"titleSafe\"></h2>\n  <p class=\"prompt ngy-tutorial-prompt\" [ngClass]=\"appliedClasses.prompt\" *ngIf=\"step.prompt\" [innerHTML]=\"promptSafe\"></p>\n  <div class=\"action-container\">\n    <div class=\"actions left\">\n      <button id=\"lib-ngy-tutorial-previous-btn\" *ngIf=\"(stepNumber !== 0) && !step.options.disablePrevious\" class=\"ngy-tutorial-previous-btn\"\n        (click)=\"previousStep()\" [ngClass]=\"appliedClasses.previousBtn\"><i [ngClass]=\"appliedClasses.previousIcon\"\n          *ngIf=\"appliedClasses.previousIcon\"></i> {{appliedTexts.previous ? appliedTexts.previous : \"Previous\"}}</button>\n      <button id=\"lib-ngy-tutorial-skip-btn\" [ngClass]=\"appliedClasses.skipBtn\" *ngIf=\"stepNumber===0\" class=\"ngy-tutorial-skip-btn\"\n        (click)=\"finishTutorial()\"><i [ngClass]=\"appliedClasses.skipIcon\" *ngIf=\"appliedClasses.skipIcon\"></i>\n        {{appliedTexts.skip ? appliedTexts.skip : \"Skip\"}}</button>\n    </div>\n    <div class=\"actions right\">\n      <button id=\"lib-ngy-tutorial-next-btn\" *ngIf=\"(stepNumber !== totalSteps - 1) && !step.options.disableNext\" class=\"ngy-tutorial-next-btn\"\n        (click)=\"nextStep()\" [ngClass]=\"appliedClasses.nextBtn\"><i [ngClass]=\"appliedClasses.nextIcon\" *ngIf=\"appliedClasses.nextIcon\"></i>\n        {{appliedTexts.next ? appliedTexts.next : \"Next\"}}</button>\n      <button id=\"lib-ngy-tutorial-finish-btn\" *ngIf=\"(stepNumber === totalSteps - 1) && !step.options.disableNext\"\n        class=\"ngy-tutorial-finish-btn\" (click)=\"finishTutorial()\" [ngClass]=\"appliedClasses.finishBtn\"><i [ngClass]=\"appliedClasses.finishIcon\"\n          *ngIf=\"appliedClasses.finishIcon\"></i>\n        {{appliedTexts.finish ? appliedTexts.finish : \"Finish\"}}</button>\n    </div>\n  </div>\n</div>",
                    styles: [".prompt-container{max-width:40vw;border-radius:3px;padding:10px;background:#222;box-shadow:0 0 6px rgba(0,0,0,.6);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}.prompt-container .title{margin-bottom:10px}.prompt-container .prompt{text-align:center}.prompt-container .action-container{margin-top:10px;display:flex;width:100%;flex-direction:row}.prompt-container .action-container .actions{width:100%;display:flex;padding:10px}.prompt-container .action-container .actions.left{align-items:flex-start}.prompt-container .action-container .actions.right{justify-content:flex-end}.smooth-2{transition:.2s cubic-bezier(.645,.045,.355,1)}"]
                },] },
    ];
    PromptComponent.ctorParameters = function () { return [
        { type: NgyTutorialService },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['ngy-tutorial-options',] }] }
    ]; };
    PromptComponent.propDecorators = {
        stepNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        totalSteps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        prompt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['prompt',] }]
    };
    return PromptComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgyTutorialComponent = /** @class */ (function () {
    function NgyTutorialComponent(svc, document) {
        var _this = this;
        this.svc = svc;
        this.document = document;
        this.enabled = false;
        this.steps = [];
        this.currentStep = 0;
        this.svc.toShow.subscribe(function (stps) {
            _this.steps = stps;
            _this.currentStep = 0;
            if (_this.steps.length) {
                _this.enabled = true;
                setTimeout(function () {
                    _this.setupUIForStep();
                });
            }
            else {
                _this.enabled = false;
            }
        });
        this.svc.currentStep.subscribe(function (step) {
            _this.currentStep = step;
            if (_this.currentStep >= _this.steps.length || _this.currentStep < 0) {
                _this.svc.hideTutorial();
            }
            if (_this.enabled) {
                setTimeout(function () {
                    _this.setupUIForStep();
                });
            }
        });
    }
    /**
     * @return {?}
     */
    NgyTutorialComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @private
     * @return {?}
     */
    NgyTutorialComponent.prototype.setupUIForStep = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var step = this.steps[this.currentStep];
        if (step) {
            this.resetCovers();
            this.prompt.ngOnInit();
            if (!step.options.relatedElement) {
                this.coverAll();
            }
            else {
                /** @type {?} */
                var elem = this.document.body.querySelector("#" + step.options.relatedElement);
                if (elem) {
                    this.coverShowElement(elem);
                    this.prompt.setPromptForElement(elem, step.options.placement);
                    if (step.options.disableInteraction) {
                        this.coverElement(elem);
                    }
                }
                else {
                    this.coverAll();
                }
            }
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    NgyTutorialComponent.prototype.coverElement = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var positionInfo = element.getBoundingClientRect();
        /** @type {?} */
        var margin = 10;
        this.setPosition(this.elementCover.nativeElement, positionInfo.left - margin, positionInfo.top - margin, positionInfo.width + 2 * margin, positionInfo.height + 2 * margin);
    };
    /**
     * @private
     * @return {?}
     */
    NgyTutorialComponent.prototype.coverAll = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.topCover) {
            this.topCover.nativeElement.style.left = '0';
            this.topCover.nativeElement.style.top = '0';
            this.topCover.nativeElement.style.height = '100vh';
            this.prompt.setPromptForElement();
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    NgyTutorialComponent.prototype.coverShowElement = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var positionInfo = element.getBoundingClientRect();
        /** @type {?} */
        var margin = 10;
        /** @type {?} */
        var viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        /** @type {?} */
        var viewH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        this.setPosition(this.topCover.nativeElement, 0, 0, viewW, positionInfo.top - margin);
        this.setPosition(this.leftCover.nativeElement, 0, positionInfo.top - margin, positionInfo.left - margin, positionInfo.height + 2 * margin);
        this.setPosition(this.rightCover.nativeElement, positionInfo.left + positionInfo.width + margin, positionInfo.top - margin, viewW - positionInfo.left - positionInfo.width - margin, positionInfo.height + 2 * margin);
        this.setPosition(this.bottomCover.nativeElement, 0, positionInfo.top + positionInfo.height + margin, viewW, viewH - positionInfo.top - positionInfo.height - margin);
    };
    /**
     * @private
     * @param {?} element
     * @param {?} left
     * @param {?} top
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    NgyTutorialComponent.prototype.setPosition = /**
     * @private
     * @param {?} element
     * @param {?} left
     * @param {?} top
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (element, left, top, width, height) {
        element.style.left = left + "px";
        element.style.top = top + "px";
        element.style.width = width + "px";
        element.style.height = height + "px";
    };
    /**
     * @private
     * @return {?}
     */
    NgyTutorialComponent.prototype.resetCovers = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.topCover) {
            this.topCover.nativeElement.style.removeProperty('height');
            this.topCover.nativeElement.style.removeProperty('width');
            this.topCover.nativeElement.style.removeProperty('top');
            this.topCover.nativeElement.style.removeProperty('left');
        }
        if (this.leftCover) {
            this.leftCover.nativeElement.style.removeProperty('height');
            this.leftCover.nativeElement.style.removeProperty('width');
            this.leftCover.nativeElement.style.removeProperty('top');
            this.leftCover.nativeElement.style.removeProperty('left');
        }
        if (this.rightCover) {
            this.rightCover.nativeElement.style.removeProperty('height');
            this.rightCover.nativeElement.style.removeProperty('width');
            this.rightCover.nativeElement.style.removeProperty('top');
            this.rightCover.nativeElement.style.removeProperty('left');
        }
        if (this.bottomCover) {
            this.bottomCover.nativeElement.style.removeProperty('height');
            this.bottomCover.nativeElement.style.removeProperty('width');
            this.bottomCover.nativeElement.style.removeProperty('top');
            this.bottomCover.nativeElement.style.removeProperty('left');
        }
        if (this.elementCover) {
            this.elementCover.nativeElement.style.removeProperty('height');
            this.elementCover.nativeElement.style.removeProperty('width');
            this.elementCover.nativeElement.style.removeProperty('top');
            this.elementCover.nativeElement.style.removeProperty('left');
        }
    };
    NgyTutorialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'lib-ngy-tutorial',
                    template: "<lib-ngy-tutorial-prompt *ngIf=\"enabled\" @fadeAnimation [step]=\"steps[currentStep]\" [stepNumber]=\"currentStep\" [totalSteps]=\"steps.length\" #prompt></lib-ngy-tutorial-prompt>\n<div class=\"window-cover full-width\" #topCover *ngIf=\"enabled\" @fadeAnimation>\n</div>\n<div class=\"window-cover\" #leftCover *ngIf=\"enabled\" @fadeAnimation>\n</div>\n<div class=\"window-cover\" #rightCover *ngIf=\"enabled\" @fadeAnimation>\n</div>\n<div class=\"window-cover full-width\" #bottomCover *ngIf=\"enabled\" @fadeAnimation>\n</div>\n<div class=\"element-cover\" #elementCover>\n\n</div>",
                    styles: [":host{position:fixed;left:0;top:0;width:0;height:0}.window-cover{position:fixed;background:rgba(0,0,0,.8);z-index:998}.window-cover.full-width{width:100vw}.element-cover{position:fixed;z-index:998}lib-ngy-tutorial-prompt{top:0;left:0;position:fixed;z-index:999}"],
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeAnimation', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':self', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }),
                                ])), { optional: true }),
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':self', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                                ])), { optional: true }),
                            ]),
                        ]),
                    ]
                },] },
    ];
    NgyTutorialComponent.ctorParameters = function () { return [
        { type: NgyTutorialService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    NgyTutorialComponent.propDecorators = {
        topCover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['topCover',] }],
        leftCover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['leftCover',] }],
        rightCover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['rightCover',] }],
        bottomCover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['bottomCover',] }],
        elementCover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['elementCover',] }],
        prompt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['prompt',] }]
    };
    return NgyTutorialComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgyTutorialModule = /** @class */ (function () {
    function NgyTutorialModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgyTutorialModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
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
    };
    NgyTutorialModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
                    ],
                    declarations: [NgyTutorialComponent, PromptComponent],
                    exports: [NgyTutorialComponent]
                },] },
    ];
    return NgyTutorialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd5LXR1dG9yaWFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3ktdHV0b3JpYWwvbGliL2FwaS9pLW9wdGlvbnMudHMiLCJuZzovL25neS10dXRvcmlhbC9saWIvbmd5LXR1dG9yaWFsLnNlcnZpY2UudHMiLCJuZzovL25neS10dXRvcmlhbC9saWIvcHJvbXB0L3Byb21wdC5jb21wb25lbnQudHMiLCJuZzovL25neS10dXRvcmlhbC9saWIvdHV0b3JpYWwvdHV0b3JpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3ktdHV0b3JpYWwvbGliL25neS10dXRvcmlhbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJSW5pdGlhbGl6YXRpb25PcHRpb25zIHtcclxuICAgIGNsYXNzVG9BZGQ/OiBJU3RlcENsYXNzZXM7XHJcbiAgICBhY3Rpb25UZXh0cz86IElBY3Rpb25UZXh0cztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RlcE9wdGlvbiB7XHJcbiAgICBwbGFjZW1lbnQ/OiBTdGVwUHJvbXB0UGxhY2VtZW50O1xyXG4gICAgcmVsYXRlZEVsZW1lbnQ/OiBzdHJpbmc7XHJcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb24/OiBib29sZWFuO1xyXG4gICAgZGlzYWJsZU5leHQ/OiBib29sZWFuO1xyXG4gICAgZGlzYWJsZVByZXZpb3VzPzogYm9vbGVhbjtcclxuICAgIGNsYXNzVG9BZGQ/OiBJU3RlcENsYXNzZXM7XHJcbiAgICBhY3Rpb25UZXh0cz86IElBY3Rpb25UZXh0cztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3RlcFByb21wdFBsYWNlbWVudCB7XHJcbiAgICBBYm92ZSxcclxuICAgIEJlbG93LFxyXG4gICAgTGVmdCxcclxuICAgIFJpZ2h0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0ZXBDbGFzc2VzIHtcclxuICAgIGNvbnRhaW5lcj86IHN0cmluZ1tdO1xyXG4gICAgdGl0bGU/OiBzdHJpbmdbXTtcclxuICAgIHByb21wdD86IHN0cmluZ1tdO1xyXG4gICAgcHJldmlvdXNCdG4/OiBzdHJpbmdbXTtcclxuICAgIHByZXZpb3VzSWNvbj86IHN0cmluZztcclxuICAgIG5leHRCdG4/OiBzdHJpbmdbXTtcclxuICAgIG5leHRJY29uPzogc3RyaW5nO1xyXG4gICAgc2tpcEJ0bj86IHN0cmluZ1tdO1xyXG4gICAgc2tpcEljb24/OiBzdHJpbmc7XHJcbiAgICBmaW5pc2hCdG4/OiBzdHJpbmdbXTtcclxuICAgIGZpbmlzaEljb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvblRleHRzIHtcclxuICAgIG5leHQ/OiBzdHJpbmc7XHJcbiAgICBwcmV2aW91cz86IHN0cmluZztcclxuICAgIHNraXA/OiBzdHJpbmc7XHJcbiAgICBmaW5pc2g/OiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU3RlcE9wdGlvbiwgU3RlcFByb21wdFBsYWNlbWVudCB9IGZyb20gJy4vYXBpL2ktb3B0aW9ucyc7XG5pbXBvcnQgeyBJVHV0b3JpYWxTdGVwIH0gZnJvbSAnLi9hcGkvaS10dXRvcmlhbC1zdGVwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3lUdXRvcmlhbFNlcnZpY2Uge1xuICBwdWJsaWMgcmVhZG9ubHkgdG9TaG93OiBFdmVudEVtaXR0ZXI8SVR1dG9yaWFsU3RlcFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8SVR1dG9yaWFsU3RlcFtdPigpO1xuICBwdWJsaWMgcmVhZG9ubHkgdHV0b3JpYWxJblByb2dyZXNzOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oKTtcbiAgcHVibGljIHJlYWRvbmx5IGN1cnJlbnRTdGVwOiBPYnNlcnZhYmxlPG51bWJlcj4gPSBuZXcgT2JzZXJ2YWJsZTxudW1iZXI+KCk7XG4gIHByaXZhdGUgc3RlcHM6IFR1dG9yaWFsU3RlcFtdO1xuICBwcml2YXRlIF90dXRvcmlhbEluUHJvZ3Jlc3MgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHJpdmF0ZSBfY3VycmVudFN0ZXAgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHV0b3JpYWxJblByb2dyZXNzID0gdGhpcy5fdHV0b3JpYWxJblByb2dyZXNzLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLl9jdXJyZW50U3RlcC5hc09ic2VydmFibGUoKTtcbiAgICB0aGlzLnN0ZXBzID0gW1xuICAgIF07XG4gIH1cbiAgcHVibGljIHNob3dUdXRvcmlhbCgpIHtcbiAgICB0aGlzLl9jdXJyZW50U3RlcC5uZXh0KDApO1xuICAgIHRoaXMudG9TaG93LmVtaXQodGhpcy5zdGVwcy5zbGljZSgpKTtcbiAgICB0aGlzLl90dXRvcmlhbEluUHJvZ3Jlc3MubmV4dCh0cnVlKTtcbiAgfVxuICBwdWJsaWMgaGlkZVR1dG9yaWFsKCkge1xuICAgIHRoaXMudG9TaG93LmVtaXQoW10pO1xuICAgIHRoaXMuX3R1dG9yaWFsSW5Qcm9ncmVzcy5uZXh0KGZhbHNlKTtcbiAgfVxuICBwdWJsaWMgYWRkU3RlcCh0aXRsZTogc3RyaW5nLCBwcm9tcHQ6IHN0cmluZywgb3B0aW9uPzogSVN0ZXBPcHRpb24pIHtcbiAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5kaXNhYmxlTmV4dCAmJiBvcHRpb24uZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oYG5neS10dXRvcmlhbCBlcnJvciwgc3RlcCAke3RpdGxlfSAtICR7cHJvbXB0fSBoYXMgZGlzYWJsZU5leHQgYW5kIGRpc2FibGVJbnRlcmFjdGlvbiBzZXQgdG8gdHJ1ZS5cbiAgICAgIFRoaXMgc3RlcCB3aWxsIGNhdXNlIHR1dG9yaWFsIHRvIGJlIHVuYWJsZSB0byBwcm9ncmVzcyBmb3J3YXJkIGFzIHN1Y2ggaXMgbm90IGFkZGVkIHRvIHRoZSB0dXRvcmlhbGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0ZXBzLnB1c2gobmV3IFR1dG9yaWFsU3RlcCh0aXRsZSwgcHJvbXB0LCBvcHRpb24pKTtcbiAgfVxuICBwdWJsaWMgcmVtb3ZlU3RlcChzdGVwTnVtYmVyOiBudW1iZXIpIHtcbiAgICBpZiAoc3RlcE51bWJlciA+IHRoaXMuc3RlcHMubGVuZ3RoIC0gMSB8fCBzdGVwTnVtYmVyIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0ZXBzLnNwbGljZShzdGVwTnVtYmVyLCAxKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIG5leHRTdGVwKCkge1xuICAgIHRoaXMuX2N1cnJlbnRTdGVwLm5leHQodGhpcy5fY3VycmVudFN0ZXAudmFsdWUgKyAxKTtcbiAgfVxuICBwdWJsaWMgcHJldmlvdXNTdGVwKCkge1xuICAgIHRoaXMuX2N1cnJlbnRTdGVwLm5leHQodGhpcy5fY3VycmVudFN0ZXAudmFsdWUgLSAxKTtcbiAgfVxufVxuXG5jbGFzcyBUdXRvcmlhbFN0ZXAgaW1wbGVtZW50cyBJVHV0b3JpYWxTdGVwIHtcbiAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9PUFRJT05TOiBJU3RlcE9wdGlvbiA9IHtcbiAgICBwbGFjZW1lbnQ6IFN0ZXBQcm9tcHRQbGFjZW1lbnQuQmVsb3dcbiAgfTtcbiAgb3B0aW9uczogSVN0ZXBPcHRpb247XG4gIHByb21wdDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBwcm9tcHQ6IHN0cmluZywgb3B0aW9uOiBJU3RlcE9wdGlvbikge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLlR1dG9yaWFsU3RlcC5ERUZBVUxUX09QVElPTlMsXG4gICAgICAuLi5vcHRpb25cbiAgICB9O1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnByb21wdCA9IHByb21wdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVR1dG9yaWFsU3RlcCB9IGZyb20gJy4uL2FwaS9pLXR1dG9yaWFsLXN0ZXAnO1xuaW1wb3J0IHsgU3RlcFByb21wdFBsYWNlbWVudCwgSUluaXRpYWxpemF0aW9uT3B0aW9ucywgSVN0ZXBDbGFzc2VzLCBJQWN0aW9uVGV4dHMgfSBmcm9tICcuLi9hcGkvaS1vcHRpb25zJztcbmltcG9ydCB7IE5neVR1dG9yaWFsU2VydmljZSB9IGZyb20gJy4uL25neS10dXRvcmlhbC5zZXJ2aWNlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neS10dXRvcmlhbC1wcm9tcHQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwcm9tcHQtY29udGFpbmVyIHNtb290aC0yIG5neS10dXRvcmlhbC1wcm9tcHQtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwiYXBwbGllZENsYXNzZXMuY29udGFpbmVyXCIgKm5nSWY9XCJzdGVwXCJcbiAgI3Byb21wdD5cbiAgPGgyIGNsYXNzPVwidGl0bGUgbmd5LXR1dG9yaWFsLXRpdGxlXCIgW25nQ2xhc3NdPVwiYXBwbGllZENsYXNzZXMudGl0bGVcIiAqbmdJZj1cInN0ZXAudGl0bGVcIiBbaW5uZXJIVE1MXT1cInRpdGxlU2FmZVwiPjwvaDI+XG4gIDxwIGNsYXNzPVwicHJvbXB0IG5neS10dXRvcmlhbC1wcm9tcHRcIiBbbmdDbGFzc109XCJhcHBsaWVkQ2xhc3Nlcy5wcm9tcHRcIiAqbmdJZj1cInN0ZXAucHJvbXB0XCIgW2lubmVySFRNTF09XCJwcm9tcHRTYWZlXCI+PC9wPlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zIGxlZnRcIj5cbiAgICAgIDxidXR0b24gaWQ9XCJsaWItbmd5LXR1dG9yaWFsLXByZXZpb3VzLWJ0blwiICpuZ0lmPVwiKHN0ZXBOdW1iZXIgIT09IDApICYmICFzdGVwLm9wdGlvbnMuZGlzYWJsZVByZXZpb3VzXCIgY2xhc3M9XCJuZ3ktdHV0b3JpYWwtcHJldmlvdXMtYnRuXCJcbiAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzU3RlcCgpXCIgW25nQ2xhc3NdPVwiYXBwbGllZENsYXNzZXMucHJldmlvdXNCdG5cIj48aSBbbmdDbGFzc109XCJhcHBsaWVkQ2xhc3Nlcy5wcmV2aW91c0ljb25cIlxuICAgICAgICAgICpuZ0lmPVwiYXBwbGllZENsYXNzZXMucHJldmlvdXNJY29uXCI+PC9pPiB7e2FwcGxpZWRUZXh0cy5wcmV2aW91cyA/IGFwcGxpZWRUZXh0cy5wcmV2aW91cyA6IFwiUHJldmlvdXNcIn19PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGlkPVwibGliLW5neS10dXRvcmlhbC1za2lwLWJ0blwiIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLnNraXBCdG5cIiAqbmdJZj1cInN0ZXBOdW1iZXI9PT0wXCIgY2xhc3M9XCJuZ3ktdHV0b3JpYWwtc2tpcC1idG5cIlxuICAgICAgICAoY2xpY2spPVwiZmluaXNoVHV0b3JpYWwoKVwiPjxpIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLnNraXBJY29uXCIgKm5nSWY9XCJhcHBsaWVkQ2xhc3Nlcy5za2lwSWNvblwiPjwvaT5cbiAgICAgICAge3thcHBsaWVkVGV4dHMuc2tpcCA/IGFwcGxpZWRUZXh0cy5za2lwIDogXCJTa2lwXCJ9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zIHJpZ2h0XCI+XG4gICAgICA8YnV0dG9uIGlkPVwibGliLW5neS10dXRvcmlhbC1uZXh0LWJ0blwiICpuZ0lmPVwiKHN0ZXBOdW1iZXIgIT09IHRvdGFsU3RlcHMgLSAxKSAmJiAhc3RlcC5vcHRpb25zLmRpc2FibGVOZXh0XCIgY2xhc3M9XCJuZ3ktdHV0b3JpYWwtbmV4dC1idG5cIlxuICAgICAgICAoY2xpY2spPVwibmV4dFN0ZXAoKVwiIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLm5leHRCdG5cIj48aSBbbmdDbGFzc109XCJhcHBsaWVkQ2xhc3Nlcy5uZXh0SWNvblwiICpuZ0lmPVwiYXBwbGllZENsYXNzZXMubmV4dEljb25cIj48L2k+XG4gICAgICAgIHt7YXBwbGllZFRleHRzLm5leHQgPyBhcHBsaWVkVGV4dHMubmV4dCA6IFwiTmV4dFwifX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gaWQ9XCJsaWItbmd5LXR1dG9yaWFsLWZpbmlzaC1idG5cIiAqbmdJZj1cIihzdGVwTnVtYmVyID09PSB0b3RhbFN0ZXBzIC0gMSkgJiYgIXN0ZXAub3B0aW9ucy5kaXNhYmxlTmV4dFwiXG4gICAgICAgIGNsYXNzPVwibmd5LXR1dG9yaWFsLWZpbmlzaC1idG5cIiAoY2xpY2spPVwiZmluaXNoVHV0b3JpYWwoKVwiIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLmZpbmlzaEJ0blwiPjxpIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLmZpbmlzaEljb25cIlxuICAgICAgICAgICpuZ0lmPVwiYXBwbGllZENsYXNzZXMuZmluaXNoSWNvblwiPjwvaT5cbiAgICAgICAge3thcHBsaWVkVGV4dHMuZmluaXNoID8gYXBwbGllZFRleHRzLmZpbmlzaCA6IFwiRmluaXNoXCJ9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AucHJvbXB0LWNvbnRhaW5lcnttYXgtd2lkdGg6NDB2dztib3JkZXItcmFkaXVzOjNweDtwYWRkaW5nOjEwcHg7YmFja2dyb3VuZDojMjIyO2JveC1zaGFkb3c6MCAwIDZweCByZ2JhKDAsMCwwLC42KTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlfS5wcm9tcHQtY29udGFpbmVyIC50aXRsZXttYXJnaW4tYm90dG9tOjEwcHh9LnByb21wdC1jb250YWluZXIgLnByb21wdHt0ZXh0LWFsaWduOmNlbnRlcn0ucHJvbXB0LWNvbnRhaW5lciAuYWN0aW9uLWNvbnRhaW5lcnttYXJnaW4tdG9wOjEwcHg7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7ZmxleC1kaXJlY3Rpb246cm93fS5wcm9tcHQtY29udGFpbmVyIC5hY3Rpb24tY29udGFpbmVyIC5hY3Rpb25ze3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O3BhZGRpbmc6MTBweH0ucHJvbXB0LWNvbnRhaW5lciAuYWN0aW9uLWNvbnRhaW5lciAuYWN0aW9ucy5sZWZ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LnByb21wdC1jb250YWluZXIgLmFjdGlvbi1jb250YWluZXIgLmFjdGlvbnMucmlnaHR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zbW9vdGgtMnt0cmFuc2l0aW9uOi4ycyBjdWJpYy1iZXppZXIoLjY0NSwuMDQ1LC4zNTUsMSl9YF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvbXB0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzdGVwTnVtYmVyID0gMDtcbiAgQElucHV0KCkgdG90YWxTdGVwcyA9IDA7XG4gIEBJbnB1dCgpIHN0ZXA6IElUdXRvcmlhbFN0ZXA7XG4gIEBWaWV3Q2hpbGQoJ3Byb21wdCcpIHByb21wdDogRWxlbWVudFJlZjtcbiAgYXBwbGllZENsYXNzZXM6IElTdGVwQ2xhc3NlcztcbiAgYXBwbGllZFRleHRzOiBJQWN0aW9uVGV4dHM7XG4gIHRpdGxlU2FmZTogU2FmZUh0bWw7XG4gIHByb21wdFNhZmU6IFNhZmVIdG1sO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN2YzogTmd5VHV0b3JpYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2FuaTogRG9tU2FuaXRpemVyLFxuICAgIEBJbmplY3QoJ25neS10dXRvcmlhbC1vcHRpb25zJykgcHJpdmF0ZSBvcHRpb25zOiBJSW5pdGlhbGl6YXRpb25PcHRpb25zXG4gICkge1xuICAgIHRoaXMuYXBwbGllZENsYXNzZXMgPSB7fTtcbiAgICB0aGlzLmFwcGxpZWRUZXh0cyA9IHt9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBsaWVkQ2xhc3NlcyA9IHt9O1xuICAgIHRoaXMuYXBwbGllZFRleHRzID0ge307XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkKSB7XG4gICAgICB0aGlzLmFwcGxpZWRDbGFzc2VzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLmNvbnRhaW5lciA/IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLmNvbnRhaW5lciA6IFtdO1xuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy50aXRsZSA9IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLnRpdGxlID8gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQudGl0bGUgOiBbXTtcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMucHJvbXB0ID0gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQucHJvbXB0ID8gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQucHJvbXB0IDogW107XG4gICAgICB0aGlzLmFwcGxpZWRDbGFzc2VzLm5leHRCdG4gPSB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5uZXh0QnRuID8gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQubmV4dEJ0biA6IFtdO1xuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5wcmV2aW91c0J0biA9IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLnByZXZpb3VzQnRuID8gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQucHJldmlvdXNCdG4gOiBbXTtcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMuZmluaXNoQnRuID0gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQuZmluaXNoQnRuID8gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQuZmluaXNoQnRuIDogW107XG4gICAgICB0aGlzLmFwcGxpZWRDbGFzc2VzLnNraXBCdG4gPSB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5za2lwQnRuID8gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQuc2tpcEJ0biA6IFtdO1xuXG4gICAgICB0aGlzLmFwcGxpZWRDbGFzc2VzLm5leHRJY29uID0gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQubmV4dEljb24gPyB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5uZXh0SWNvbiA6ICcnO1xuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5wcmV2aW91c0ljb24gPSB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5wcmV2aW91c0ljb24gPyB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5wcmV2aW91c0ljb24gOiAnJztcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMuZmluaXNoSWNvbiA9IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLmZpbmlzaEljb24gPyB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hJY29uIDogJyc7XG4gICAgICB0aGlzLmFwcGxpZWRDbGFzc2VzLnNraXBJY29uID0gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQuc2tpcEljb24gPyB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5za2lwSWNvbiA6ICcnO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGVwLm9wdGlvbnMgJiYgdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5jb250YWluZXIgPSB0aGlzLmFwcGxpZWRDbGFzc2VzLmNvbnRhaW5lci5jb25jYXQodGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5jb250YWluZXIgPyB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLmNvbnRhaW5lciA6IFtdKTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMudGl0bGUgPSB0aGlzLmFwcGxpZWRDbGFzc2VzLnRpdGxlLmNvbmNhdCh0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnRpdGxlID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC50aXRsZSA6IFtdKTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMucHJvbXB0ID0gdGhpcy5hcHBsaWVkQ2xhc3Nlcy5wcm9tcHQuY29uY2F0KHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQucHJvbXB0ID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5wcm9tcHQgOiBbXSk7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICB0aGlzLmFwcGxpZWRDbGFzc2VzLm5leHRCdG4gPSB0aGlzLmFwcGxpZWRDbGFzc2VzLm5leHRCdG4uY29uY2F0KHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQubmV4dEJ0biA/IHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQubmV4dEJ0biA6IFtdKTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMucHJldmlvdXNCdG4gPSB0aGlzLmFwcGxpZWRDbGFzc2VzLnByZXZpb3VzQnRuLmNvbmNhdCh0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnByZXZpb3VzQnRuID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5wcmV2aW91c0J0biA6IFtdKTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMuZmluaXNoQnRuID0gdGhpcy5hcHBsaWVkQ2xhc3Nlcy5maW5pc2hCdG4uY29uY2F0KHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQuZmluaXNoQnRuID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hCdG4gOiBbXSk7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICB0aGlzLmFwcGxpZWRDbGFzc2VzLnNraXBCdG4gPSB0aGlzLmFwcGxpZWRDbGFzc2VzLnNraXBCdG4uY29uY2F0KHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQuc2tpcEJ0biA/IHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQuc2tpcEJ0biA6IFtdKTtcblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5uZXh0SWNvbiA9IHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQubmV4dEljb24gPyB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLm5leHRJY29uIDogdGhpcy5hcHBsaWVkQ2xhc3Nlcy5uZXh0SWNvbjtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMucHJldmlvdXNJY29uID0gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5wcmV2aW91c0ljb24gPyB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnByZXZpb3VzSWNvbiA6IHRoaXMuYXBwbGllZENsYXNzZXMucHJldmlvdXNJY29uO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5maW5pc2hJY29uID0gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hJY29uID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hJY29uIDogdGhpcy5hcHBsaWVkQ2xhc3Nlcy5maW5pc2hJY29uO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5za2lwSWNvbiA9IHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQuc2tpcEljb24gPyB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnNraXBJY29uIDogdGhpcy5hcHBsaWVkQ2xhc3Nlcy5za2lwSWNvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5hY3Rpb25UZXh0cykge1xuICAgICAgdGhpcy5hcHBsaWVkVGV4dHMgPSB7XG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5hY3Rpb25UZXh0c1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RlcC5vcHRpb25zICYmIHRoaXMuc3RlcC5vcHRpb25zLmFjdGlvblRleHRzKSB7XG4gICAgICB0aGlzLmFwcGxpZWRUZXh0cyA9IHtcbiAgICAgICAgLi4udGhpcy5hcHBsaWVkVGV4dHMsXG4gICAgICAgIC4uLnRoaXMuc3RlcC5vcHRpb25zLmFjdGlvblRleHRzXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGVwLnRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlU2FmZSA9IHRoaXMuc2FuaS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLnN0ZXAudGl0bGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGVwLnByb21wdCkge1xuICAgICAgdGhpcy5wcm9tcHRTYWZlID0gdGhpcy5zYW5pLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuc3RlcC5wcm9tcHQpO1xuICAgIH1cbiAgfVxuICBmaW5pc2hUdXRvcmlhbCgpIHtcbiAgICB0aGlzLnN2Yy5oaWRlVHV0b3JpYWwoKTtcbiAgfVxuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLnN2Yy5uZXh0U3RlcCgpO1xuICB9XG4gIHByZXZpb3VzU3RlcCgpIHtcbiAgICB0aGlzLnN2Yy5wcmV2aW91c1N0ZXAoKTtcbiAgfVxuICBzZXRQcm9tcHRGb3JFbGVtZW50KGVsZW0/OiBhbnksIHBsYWNlbWVudD86IFN0ZXBQcm9tcHRQbGFjZW1lbnQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHByb21wdFBvc2l0aW9uSW5mbyA9IHRoaXMucHJvbXB0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB2aWV3VyA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgICBjb25zdCB2aWV3SCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcbiAgICAgIGNvbnN0IHByb21wdEggPSBwcm9tcHRQb3NpdGlvbkluZm8uaGVpZ2h0O1xuICAgICAgY29uc3QgcHJvbXB0VyA9IHByb21wdFBvc2l0aW9uSW5mby53aWR0aDtcbiAgICAgIGlmICghZWxlbSB8fCBwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFByb21wdFBvc2l0aW9uKHZpZXdXIC8gMiAtIHByb21wdFcgLyAyLCB2aWV3SCAvIDIgLSBwcm9tcHRIIC8gMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwb3NpdGlvbkluZm8gPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAocGxhY2VtZW50ID09PSBTdGVwUHJvbXB0UGxhY2VtZW50LlJpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9tcHRQb3NpdGlvbihcbiAgICAgICAgICAgIHBvc2l0aW9uSW5mby5sZWZ0ICsgcG9zaXRpb25JbmZvLndpZHRoICsgMjAsXG4gICAgICAgICAgICBwb3NpdGlvbkluZm8udG9wICsgcG9zaXRpb25JbmZvLmhlaWdodCAvIDIgLSBwcm9tcHRIIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBTdGVwUHJvbXB0UGxhY2VtZW50LkxlZnQpIHtcbiAgICAgICAgICB0aGlzLnNldFByb21wdFBvc2l0aW9uKFxuICAgICAgICAgICAgcG9zaXRpb25JbmZvLmxlZnQgLSBwcm9tcHRXIC0gMjAsXG4gICAgICAgICAgICBwb3NpdGlvbkluZm8udG9wICsgcG9zaXRpb25JbmZvLmhlaWdodCAvIDIgLSBwcm9tcHRIIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBTdGVwUHJvbXB0UGxhY2VtZW50LkFib3ZlKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9tcHRQb3NpdGlvbihcbiAgICAgICAgICAgIHBvc2l0aW9uSW5mby5sZWZ0ICsgcG9zaXRpb25JbmZvLndpZHRoIC8gMiAtIHByb21wdFcgLyAyLFxuICAgICAgICAgICAgcG9zaXRpb25JbmZvLnRvcCAtIDIwIC0gcHJvbXB0SFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9tcHRQb3NpdGlvbihcbiAgICAgICAgICAgIHBvc2l0aW9uSW5mby5sZWZ0ICsgcG9zaXRpb25JbmZvLndpZHRoIC8gMiAtIHByb21wdFcgLyAyLFxuICAgICAgICAgICAgcG9zaXRpb25JbmZvLnRvcCArIHBvc2l0aW9uSW5mby5oZWlnaHQgKyAyMFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIHNldFByb21wdFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgY29uc3QgcHJvbXB0UG9zaXRpb25JbmZvID0gdGhpcy5wcm9tcHQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB2aWV3VyA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgY29uc3Qgdmlld0ggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG4gICAgY29uc3QgcHJvbXB0SCA9IHByb21wdFBvc2l0aW9uSW5mby5oZWlnaHQ7XG4gICAgY29uc3QgcHJvbXB0VyA9IHByb21wdFBvc2l0aW9uSW5mby53aWR0aDtcbiAgICBpZiAoeCA8IDEwKSB7XG4gICAgICB4ID0gMTA7XG4gICAgfVxuICAgIGlmICh5IDwgMTApIHtcbiAgICAgIHkgPSAxMDtcbiAgICB9XG4gICAgaWYgKHggPiB2aWV3VyAtIHByb21wdFcpIHtcbiAgICAgIHggPSB2aWV3VyAtIHByb21wdFc7XG4gICAgfVxuICAgIGlmICh5ID4gdmlld0ggLSBwcm9tcHRIKSB7XG4gICAgICB5ID0gdmlld0ggLSBwcm9tcHRIO1xuICAgIH1cbiAgICB0aGlzLnByb21wdC5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICB0aGlzLnByb21wdC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsIGtleWZyYW1lcywgc3R5bGUsIHF1ZXJ5IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJVHV0b3JpYWxTdGVwIH0gZnJvbSAnLi4vYXBpL2ktdHV0b3JpYWwtc3RlcCc7XG5pbXBvcnQgeyBQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuLi9wcm9tcHQvcHJvbXB0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdGVwUHJvbXB0UGxhY2VtZW50IH0gZnJvbSAnLi4vYXBpL2ktb3B0aW9ucyc7XG5pbXBvcnQgeyBOZ3lUdXRvcmlhbFNlcnZpY2UgfSBmcm9tICcuLi9uZ3ktdHV0b3JpYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3ktdHV0b3JpYWwnLFxuICB0ZW1wbGF0ZTogYDxsaWItbmd5LXR1dG9yaWFsLXByb21wdCAqbmdJZj1cImVuYWJsZWRcIiBAZmFkZUFuaW1hdGlvbiBbc3RlcF09XCJzdGVwc1tjdXJyZW50U3RlcF1cIiBbc3RlcE51bWJlcl09XCJjdXJyZW50U3RlcFwiIFt0b3RhbFN0ZXBzXT1cInN0ZXBzLmxlbmd0aFwiICNwcm9tcHQ+PC9saWItbmd5LXR1dG9yaWFsLXByb21wdD5cbjxkaXYgY2xhc3M9XCJ3aW5kb3ctY292ZXIgZnVsbC13aWR0aFwiICN0b3BDb3ZlciAqbmdJZj1cImVuYWJsZWRcIiBAZmFkZUFuaW1hdGlvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIndpbmRvdy1jb3ZlclwiICNsZWZ0Q292ZXIgKm5nSWY9XCJlbmFibGVkXCIgQGZhZGVBbmltYXRpb24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJ3aW5kb3ctY292ZXJcIiAjcmlnaHRDb3ZlciAqbmdJZj1cImVuYWJsZWRcIiBAZmFkZUFuaW1hdGlvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIndpbmRvdy1jb3ZlciBmdWxsLXdpZHRoXCIgI2JvdHRvbUNvdmVyICpuZ0lmPVwiZW5hYmxlZFwiIEBmYWRlQW5pbWF0aW9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZWxlbWVudC1jb3ZlclwiICNlbGVtZW50Q292ZXI+XG5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7dG9wOjA7d2lkdGg6MDtoZWlnaHQ6MH0ud2luZG93LWNvdmVye3Bvc2l0aW9uOmZpeGVkO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuOCk7ei1pbmRleDo5OTh9LndpbmRvdy1jb3Zlci5mdWxsLXdpZHRoe3dpZHRoOjEwMHZ3fS5lbGVtZW50LWNvdmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTk4fWxpYi1uZ3ktdHV0b3JpYWwtcHJvbXB0e3RvcDowO2xlZnQ6MDtwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZhZGVBbmltYXRpb24nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHF1ZXJ5KCc6c2VsZicsXG4gICAgICAgICAgYW5pbWF0ZSgnMC4zcyBlYXNlLWluLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgICAgXSkpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHF1ZXJ5KCc6c2VsZicsXG4gICAgICAgICAgYW5pbWF0ZSgnMC4zcyBlYXNlLWluLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gICAgICAgICAgXSkpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd5VHV0b3JpYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVuYWJsZWQgPSBmYWxzZTtcbiAgc3RlcHM6IElUdXRvcmlhbFN0ZXBbXSA9IFtdO1xuICBjdXJyZW50U3RlcCA9IDA7XG4gIEBWaWV3Q2hpbGQoJ3RvcENvdmVyJykgcHJpdmF0ZSB0b3BDb3ZlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGVmdENvdmVyJykgcHJpdmF0ZSBsZWZ0Q292ZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JpZ2h0Q292ZXInKSBwcml2YXRlIHJpZ2h0Q292ZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JvdHRvbUNvdmVyJykgcHJpdmF0ZSBib3R0b21Db3ZlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZWxlbWVudENvdmVyJykgcHJpdmF0ZSBlbGVtZW50Q292ZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3Byb21wdCcpIHByaXZhdGUgcHJvbXB0OiBQcm9tcHRDb21wb25lbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3ZjOiBOZ3lUdXRvcmlhbFNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICApIHtcbiAgICB0aGlzLnN2Yy50b1Nob3cuc3Vic2NyaWJlKHN0cHMgPT4ge1xuICAgICAgdGhpcy5zdGVwcyA9IHN0cHM7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgIGlmICh0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldHVwVUlGb3JTdGVwKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdmMuY3VycmVudFN0ZXAuc3Vic2NyaWJlKHN0ZXAgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHN0ZXA7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA+PSB0aGlzLnN0ZXBzLmxlbmd0aCB8fCB0aGlzLmN1cnJlbnRTdGVwIDwgMCkge1xuICAgICAgICB0aGlzLnN2Yy5oaWRlVHV0b3JpYWwoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXR1cFVJRm9yU3RlcCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBwcml2YXRlIHNldHVwVUlGb3JTdGVwKCkge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdO1xuICAgIGlmIChzdGVwKSB7XG4gICAgICB0aGlzLnJlc2V0Q292ZXJzKCk7XG4gICAgICB0aGlzLnByb21wdC5uZ09uSW5pdCgpO1xuICAgICAgaWYgKCFzdGVwLm9wdGlvbnMucmVsYXRlZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb3ZlckFsbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAjJHtzdGVwLm9wdGlvbnMucmVsYXRlZEVsZW1lbnR9YCk7XG4gICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgdGhpcy5jb3ZlclNob3dFbGVtZW50KGVsZW0pO1xuICAgICAgICAgIHRoaXMucHJvbXB0LnNldFByb21wdEZvckVsZW1lbnQoZWxlbSwgc3RlcC5vcHRpb25zLnBsYWNlbWVudCk7XG4gICAgICAgICAgaWYgKHN0ZXAub3B0aW9ucy5kaXNhYmxlSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY292ZXJFbGVtZW50KGVsZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvdmVyQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjb3ZlckVsZW1lbnQoZWxlbWVudDogRWxlbWVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uSW5mbyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbWFyZ2luID0gMTA7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmVsZW1lbnRDb3Zlci5uYXRpdmVFbGVtZW50LFxuICAgICAgcG9zaXRpb25JbmZvLmxlZnQgLSBtYXJnaW4sXG4gICAgICBwb3NpdGlvbkluZm8udG9wIC0gbWFyZ2luLFxuICAgICAgcG9zaXRpb25JbmZvLndpZHRoICsgMiAqIG1hcmdpbixcbiAgICAgIHBvc2l0aW9uSW5mby5oZWlnaHQgKyAyICogbWFyZ2luKTtcbiAgfVxuICBwcml2YXRlIGNvdmVyQWxsKCkge1xuICAgIGlmICh0aGlzLnRvcENvdmVyKSB7XG4gICAgICB0aGlzLnRvcENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgIHRoaXMudG9wQ292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAnMCc7XG4gICAgICB0aGlzLnRvcENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcbiAgICAgIHRoaXMucHJvbXB0LnNldFByb21wdEZvckVsZW1lbnQoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjb3ZlclNob3dFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbkluZm8gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG1hcmdpbiA9IDEwO1xuICAgIGNvbnN0IHZpZXdXID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICBjb25zdCB2aWV3SCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMudG9wQ292ZXIubmF0aXZlRWxlbWVudCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgdmlld1csXG4gICAgICBwb3NpdGlvbkluZm8udG9wIC0gbWFyZ2luKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMubGVmdENvdmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAwLFxuICAgICAgcG9zaXRpb25JbmZvLnRvcCAtIG1hcmdpbixcbiAgICAgIHBvc2l0aW9uSW5mby5sZWZ0IC0gbWFyZ2luLFxuICAgICAgcG9zaXRpb25JbmZvLmhlaWdodCArIDIgKiBtYXJnaW4pO1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5yaWdodENvdmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBwb3NpdGlvbkluZm8ubGVmdCArIHBvc2l0aW9uSW5mby53aWR0aCArIG1hcmdpbixcbiAgICAgIHBvc2l0aW9uSW5mby50b3AgLSBtYXJnaW4sXG4gICAgICB2aWV3VyAtIHBvc2l0aW9uSW5mby5sZWZ0IC0gcG9zaXRpb25JbmZvLndpZHRoIC0gbWFyZ2luLFxuICAgICAgcG9zaXRpb25JbmZvLmhlaWdodCArIDIgKiBtYXJnaW4pO1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5ib3R0b21Db3Zlci5uYXRpdmVFbGVtZW50LFxuICAgICAgMCxcbiAgICAgIHBvc2l0aW9uSW5mby50b3AgKyBwb3NpdGlvbkluZm8uaGVpZ2h0ICsgbWFyZ2luLFxuICAgICAgdmlld1csXG4gICAgICB2aWV3SCAtIHBvc2l0aW9uSW5mby50b3AgLSBwb3NpdGlvbkluZm8uaGVpZ2h0IC0gbWFyZ2luKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbihlbGVtZW50OiBhbnksIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICB9XG4gIHByaXZhdGUgcmVzZXRDb3ZlcnMoKSB7XG4gICAgaWYgKHRoaXMudG9wQ292ZXIpIHtcbiAgICAgIHRoaXMudG9wQ292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICB0aGlzLnRvcENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJyk7XG4gICAgICB0aGlzLnRvcENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgICAgdGhpcy50b3BDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxlZnRDb3Zlcikge1xuICAgICAgdGhpcy5sZWZ0Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICB0aGlzLmxlZnRDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgdGhpcy5sZWZ0Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgICB0aGlzLmxlZnRDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJpZ2h0Q292ZXIpIHtcbiAgICAgIHRoaXMucmlnaHRDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcbiAgICAgIHRoaXMucmlnaHRDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgdGhpcy5yaWdodENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgICAgdGhpcy5yaWdodENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2xlZnQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm90dG9tQ292ZXIpIHtcbiAgICAgIHRoaXMuYm90dG9tQ292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICB0aGlzLmJvdHRvbUNvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJyk7XG4gICAgICB0aGlzLmJvdHRvbUNvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgICAgdGhpcy5ib3R0b21Db3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRDb3Zlcikge1xuICAgICAgdGhpcy5lbGVtZW50Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICB0aGlzLmVsZW1lbnRDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgdGhpcy5lbGVtZW50Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgICB0aGlzLmVsZW1lbnRDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XG4gICAgfVxuICB9XG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd5VHV0b3JpYWxDb21wb25lbnQgfSBmcm9tICcuL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL3Byb21wdC9wcm9tcHQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neVR1dG9yaWFsU2VydmljZSB9IGZyb20gJy4vbmd5LXR1dG9yaWFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElJbml0aWFsaXphdGlvbk9wdGlvbnMgfSBmcm9tICcuL2FwaS9pLW9wdGlvbnMnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neVR1dG9yaWFsQ29tcG9uZW50LCBQcm9tcHRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmd5VHV0b3JpYWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5neVR1dG9yaWFsTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IElJbml0aWFsaXphdGlvbk9wdGlvbnMgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd5VHV0b3JpYWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTmd5VHV0b3JpYWxTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ25neS10dXRvcmlhbC1vcHRpb25zJyxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxu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T0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDckcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDakgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDM0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFFckcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDeEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDcEgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDOUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDekc7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7WUFFckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFM0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFM0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFL0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFbkosSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFbkssSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFM0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFHbkosSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDOztZQUU1SSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZ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

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container d-flex flex-column\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-default\">\n    <a class=\"navbar-brand\" href=\"https://github.com/Yamazaki93/ngy-tutorial\">Ngy-Tutorial</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://github.com/Yamazaki93/ngy-tutorial\"><i style=\"font-size: 24px\" class=\"ion-logo-github\"></i></a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\" id=\"nav-search-elem\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Fake search box\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n  <div class=\"container mt-3\">\n    <div class=\"row d-flex flex-row\">\n      <div class=\"col-3\" id=\"side-navigation\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"scrollTo('demo-section')\">Demo</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"scrollTo('getting-started-section')\">Getting Started</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"scrollTo('api-section')\">API</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"scrollTo('support-section')\">Support This Plugin</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"scrollTo('technical-section')\">Technicals</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-9 contents\" [class.hide-overflow]=\"tutorialInProgress\">\n        <section id=\"demo-section\">\n          <h2>Demo</h2>\n          <p>This demo section contains some cool UI 😎. So cool that we need to use a tutorial to show our user what\n            to\n            do.</p>\n          <form id=\"demo-form\">\n            <h3>Here's A Very Intuitive Form 😜</h3>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control form-control-alternative\" id=\"exampleFormControlInput1\"\n                    placeholder=\"Enter something...\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Don't know why this is disabled\" class=\"form-control form-control-alternative\"\n                    disabled id=\"disabledInput\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <div class=\"input-group input-group-alternative mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ion-ios-search\"></i></span>\n                    </div>\n                    <input class=\"form-control form-control-alternative\" placeholder=\"This doesn't really search anything\"\n                      type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <div class=\"input-group input-group-alternative mb-4\">\n                    <input class=\"form-control\" placeholder=\"The icon probably means to enter some kind of date here?\"\n                      type=\"text\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\"><i class=\"ion-ios-calendar\"></i></span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <button class=\"btn btn-danger\" id=\"important-btn\" (click)=\"importantBtn($event)\">Important Button</button>\n              </div>\n            </div>\n          </form>\n          <div class=\"row mt-3\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary\" (click)=\"restart()\">Restart The Tutorial</button>\n            </div>\n          </div>\n        </section>\n        <section class=\"mt-3\" id=\"getting-started-section\">\n          <h2>Getting Started</h2>\n          <p>\n            Add the library by using npm with <code>npm install ngy-tutorial</code> or yarn with <code>yarn add ngy-tutorial</code>\n          </p>\n          <ol>\n            <li>Add the module to your root module with <code>NgyTutorialModule.forRoot()</code> under <code>imports</code>\n              in your <code>app.module.ts</code>.\n            </li>\n            <li>Place element <code>&lt;lib-ngy-tutorial&gt;&lt;/lib-ngy-tutorial&gt;</code> in your app.</li>\n            <li>Inject and use <code>NgyTutorialService.addStep(...)</code> to add steps to your tutorial</li>\n            <li>Call <code>NgyTutorialService.showTutorial()</code> in <b>ngOnInit</b> to start the tutorial.</li>\n          </ol>\n          <h3>Example:</h3>\n          <p>This is a simple 2 step tutorial, the first step is a general step without focus and the second step draws\n            focuses on the element <code>#input-element</code></p>\n          <code style=\"white-space: pre-wrap;\" [innerHTML]=\"code\">\n\n          </code>\n          <p>For a more in-depth example, checkout the code for <a href=\"https://github.com/Yamazaki93/ngy-tutorial/blob/master/ngy-tutorial-app/src/app/app.component.ts\">this\n              demo page component</a> and <a href=\"https://github.com/Yamazaki93/ngy-tutorial/blob/master/ngy-tutorial-app/src/app/app.module.ts\">module</a></p>\n        </section>\n        <section class=\"mt-3\" id=\"api-section\">\n          <h2>API</h2>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Module - <code>NgyTutorialModule</code></h2>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p><code>forRoot(options?: IInitializationOptions)</code></p>\n                  <p>Initializes the module with the passed in options (optional), see <code>IInitializationOptions</code>\n                    for\n                    available options</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Service - <code>NgyTutorialService</code></h2>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p>Field - <code>tutorialInProgress: Observable&lt;boolean&gt;</code></p>\n                  <p>Contains the current tutorial state. <code>true</code> if the tutorial is in progress, <code>fasle</code>\n                    otherwise</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p>Field - <code>CurrentStep: Observable&lt;number&gt;</code></p>\n                  <p>The current tutorial step as a zero-indexed number. Note, this should not be used to determine if\n                    tutorial is in progress, use <code>tutorialInProgress</code> instead.</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p><code>addStep(title: string, prompt: string, options?: IStepOption)</code></p>\n                  <p>Adds a tutorial step to the entire tutorial. <code>title</code> is the one-line heading on the top\n                    of the\n                    dialog and <code>prompt</code> is the detailed texts displayed below that. If the tutorial has\n                    started, the newly added steps will only appear on the next run. <code>options?</code> is\n                    the optional options for this step, see <code>IStepOption</code> for available options</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p><code>removeStep(stepNumber: number)</code></p>\n                  <p>Removes a tutorial step with the given step number. <code>stepNumber</code> is the zero-indexed\n                    number specifying the index of the step to remove. If the tutorial has started, the removal will\n                    take effect during the next run. </p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p><code>showTutorial()</code></p>\n                  <p>Starts the tutorial sequence. If tutorial is already started, this will restart the tutorial.</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p><code>hideTutorial()</code></p>\n                  <p>Stops the tutorial sequence. If the tutorial has not started, this has no effect.</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p><code>nextStep()</code></p>\n                  <p>Advances the tutorial to the next step. If the tutorial is at the last step, calling <code>nextStep</code>\n                    will end the tutorial.</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p><code>previousStep()</code></p>\n                  <p>Reverts the tutorial to the previous step. If the tutorial is at the first step, calling <code>previousStep</code>\n                    will end the tutorial.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Interface - <code>IInitializationOptions</code></h2>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p>Optional Field <code>classToAdd?: IStepClasses</code></p>\n                  <p>Specifies classes to apply to the prompt dialog to allow customized styling. See <code>IStepClasses</code>\n                    for list of available sub-fields</p>\n                  <p>Optional Field <code>actionTexts?: IActionTexts</code></p>\n                  <p>Specifies the button texts that appear on the prompt. See <code>IActionTexts</code>\n                    for list of available sub-fields</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Interface - <code>IStepOption</code></h2>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p>Optional Field <code>placement?: StepPromptPlacement</code></p>\n                  <p>Specifies the placement of the prompt for each step. This will only have effect if <code>relatedElement</code>\n                    is set properly. The prompt is placed at the center of the screen by default.</p>\n                  <p>Optional Field <code>relatedElement?: string</code></p>\n                  <p>The ID of the DOM element that this step is focusing on. Cover will be applied to the screen and\n                    show a \"viewing window\" highlighting the element of interest. If the ID is not found on the DOM,\n                    the behavior is the same as if this option is not set.</p>\n                  <p>Optional Field <code>disableInteraction?: boolean</code></p>\n                  <p>If this is set to <code>true</code>. Interaction with components other than the tutorial is\n                    disabled, the \"viewing window\" will still focus on the element provided in <code>relatedElement</code>\n                    but no action can be performed. It cannot be set to <code>true</code> if <code>disableNext</code>\n                    is\n                    set to <code>true</code>.</p>\n                  <p>Optional Field <code>disableNext?: boolean</code></p>\n                  <p>If this is set to <code>true</code>, the next button (the finish button, if it is at the last step) is\n                    disabled. To progress forward, you can still call <code>NgyTutorialService.nextStep()</code>. It\n                    cannot be set to <code>true</code> if <code>disableInteraction</code> is set to <code>true</code>.</p>\n                  <p>Optional Field <code>disablePrevious?: boolean</code></p>\n                  <p>If this is set to <code>true</code>, the previous button (the skip button, if it is at the first step)\n                    is disabled. To progress backward, you can still call <code>NgyTutorialService.previousStep()</code>.\n                    Note: It CAN be set to <code>true</code> when <code>disableNext</code> is set to <code>true</code>\n                    or <code>disableInteraction</code> is <code>true</code>, it is up to your app to determine the\n                    availability of \"previous\" step.</p>\n                  <p>Optional Field <code>classToAdd?: IStepClasses</code></p>\n                  <p>Specify classes to add to the prompt dialog for this class. The classes will be applied on top of\n                    the classes specifies in the initialization options. Except for classes for various <code>*Icon</code>,\n                    they will override the classes specified in the initialization options.</p>\n                  <p>Optional Field <code>actionTexts?: IActionTexts</code></p>\n                  <p>Overrides the text for the action buttons in the prompt for this step.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Interface - <code>IStepClasses</code></h2>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p>Optional Field <code>container?: string[]</code></p>\n                  <p>Specifies a list of class names to apply to the prompt container</p>\n                  <p>Optional Field <code>title?: string[]</code></p>\n                  <p>Specifies a list of class names to apply to the prompt title</p>\n                  <p>Optional Field <code>prompt?: string[]</code></p>\n                  <p>Specifies a list of class names to apply to the prompt text</p>\n                  <p>Optional Field <code>previousBtn?: string[]</code></p>\n                  <p>Specifies a list of class names to apply to the \"Previous Step\" button</p>\n                  <p>Optional Field <code>previousIcon?: string</code></p>\n                  <p>Specifies the class name for the icon of the \"Previous Step\" button. If no classes are supplied\n                    by both <code>IStepOption</code> and <code>IInitializationOptions</code>, the icon is hidden</p>\n                  <p>Optional Field <code>nextBtn?: string[]</code></p>\n                  <p>Specifies a list of class names to apply to the \"Next Step\" button</p>\n                  <p>Optional Field <code>nextIcon?: string</code></p>\n                  <p>Specifies the class name for the icon of the \"Next Step\" button. If no classes are supplied\n                    by both <code>IStepOption</code> and <code>IInitializationOptions</code>, the icon is hidden</p>\n                  <p>Optional Field <code>finishBtn?: string[]</code></p>\n                  <p>Specifies a list of class names to apply to the \"Finish\" button. This will only have effect for\n                    the last step</p>\n                  <p>Optional Field <code>finishIcon?: string</code></p>\n                  <p>Specifies the class name for the icon of the \"Finish\" button. If no classes are supplied\n                    by both <code>IStepOption</code> and <code>IInitializationOptions</code>, the icon is hidden</p>\n                  <p>Optional Field <code>skipBtn?: string[]</code></p>\n                  <p>Specifies a list of class names to apply to the \"Skip\" button. This will only have effect for\n                    the first step</p>\n                  <p>Optional Field <code>skipIcon?: string</code></p>\n                  <p>Specifies the class name for the icon of the \"Skip\" button. If no classes are supplied\n                    by both <code>IStepOption</code> and <code>IInitializationOptions</code>, the icon is hidden</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Interface - <code>IActionTexts</code></h2>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p>Optional Field <code>next?: string</code></p>\n                  <p>Specify the text for the \"Next\" button, the default is \"Next\"</p>\n                  <p>Optional Field <code>previous?: string[]</code></p>\n                  <p>Specify the text for the \"Previous\" button, the default is \"Previous\"</p>\n                  <p>Optional Field <code>skip?: string[]</code></p>\n                  <p>Specify the text for the \"Skip\" button, the default is \"Skip\"</p>\n                  <p>Optional Field <code>finish?: string[]</code></p>\n                  <p>Specify the text for the \"Finish\" button, the default is \"Finish\"</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Enum - <code>StepPromptPlacement</code></h2>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p>This is used to specify the placement of the prompt during the tutorial. Specifying the placement\n                    only has effect if <code>relatedElement</code> is set properly. The prompt placement will be\n                    adjusted so that the prompt is always in view. Note, this means placing prompt improperly can cover\n                    the viewing window.</p>\n                  <p><code>Above</code></p>\n                  <p>The prompt is placed above the viewing window</p>\n                  <p><code>Below</code></p>\n                  <p>The prompt is placed below the viewing window</p>\n                  <p><code>Left</code></p>\n                  <p>The prompt is placed at the left of the viewing window</p>\n                  <p><code>Right</code></p>\n                  <p>The prompt is placed at the right of the viewing window</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"mt-3\" id=\"support-section\">\n          <h2>Support Ngy-Tutorial</h2>\n          <p>If you like this plugin, consider </p>\n          <link href=\"https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext\" rel=\"stylesheet\"><a class=\"bmc-button\"\n            target=\"_blank\" href=\"https://www.buymeacoffee.com/mjCsGWDTS\"><img src=\"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg\"\n              alt=\"Buy me a tea\"><span style=\"margin-left:5px\">Buy me a tea</span></a>\n          <p>Or alternatively</p>\n          <p><code>BTC: 3CAgw9vNPNXHR1YaWmJe98DDiTqdgKkv8Y</code></p>\n          <p><code>ETH: 0xea96AA397a799E77f5991A2568099698329C3D39</code></p>\n        </section>\n        <section class=\"mt-3\" id=\"technical-section\">\n          <h2>Technicals</h2>\n          <h4>Other Libraries:</h4>\n          <p>This demo app is made with <a href=\"https://ionicons.com\">IonIcons</a>, <a href=\"https://demos.creative-tim.com/argon-dashboard/index.html\">Argon\n              Dashboard by Creative Tim</a></p>\n          <h4>Browser support:</h4>\n          <p>Chrome: 70.0, Vivaldi: 2.1, Edge: 47.17134, Firefox: 63.0</p>\n          <h4>Head over to the <a href=\"https://github.com/Yamazaki93/ngy-tutorial\">Github page</a> for FAQ</h4>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>\n<lib-ngy-tutorial></lib-ngy-tutorial>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  width: 100vw;\n  height: 100vh;\n  position: relative; }\n  .main-container nav {\n    flex-shrink: 0; }\n  .main-container .container {\n    height: 100%;\n    min-height: 0; }\n  .main-container .container > .row {\n      height: 100%; }\n  .main-container .container .contents {\n      height: 100%;\n      overflow-x: hidden;\n      overflow-y: auto; }\n  .main-container .container .contents.hide-overflow {\n        overflow-y: hidden; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngy_tutorial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngy-tutorial */ "./dist/ngy-tutorial/fesm5/ngy-tutorial.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(tutorialService, document) {
        var _this = this;
        this.tutorialService = tutorialService;
        this.document = document;
        this.tutorialInProgress = false;
        this.code = '';
        this.code = "\n      // component constructor\n      constructor(\n        private: ngyTutorialService: NgyTutorialService\n      ) {\n        ngyTutorialService.addStep('Step one', 'Hi');\n        ngyTutorialService.addStep('Step two', 'Second step', {\n          relatedElement: 'input-element',\n        });\n      }\n      ngOnInit() {\n        this.tutorialService.showTutorial();\n      }\n    ";
        tutorialService.addStep('Welcome', 'Welcome to ngy-tutorial. This is the grand first step!');
        tutorialService.addStep('General Step', 'This is a general step, the prompt is placed at the center and there\'s no specific focus');
        tutorialService.addStep('Focus!', 'Each step can contain an optional element id and the tutorial will automatically create a viewing window that focuses the element. Here the focus is on the left panel.', {
            relatedElement: 'side-navigation',
            placement: ngy_tutorial__WEBPACK_IMPORTED_MODULE_1__["StepPromptPlacement"].Right,
            disableInteraction: true,
        });
        tutorialService.addStep('Prompt Placement', 'You can specify the prompt placement of each step. Here the prompt is placed below the focused form. You will notice that the prompt smoothly move to the next position as well 😊', {
            relatedElement: 'demo-form',
            placement: ngy_tutorial__WEBPACK_IMPORTED_MODULE_1__["StepPromptPlacement"].Below,
            disableInteraction: true
        });
        tutorialService.addStep('Allowing Interaction', 'By default, the interaction to the viewing window is allowed. Try typing in text here! You can optionally disable interaction by setting "disableInteraction" to true.', {
            relatedElement: 'exampleFormControlInput1',
            placement: ngy_tutorial__WEBPACK_IMPORTED_MODULE_1__["StepPromptPlacement"].Below
        });
        tutorialService.addStep('Custom UI Styling', 'You can customize the prompt styling and button texts of each step. This prompt is red because the input is disabled for very important reasons. If you haven\'t noticed, the prompt is currently using the bootstrap styles applied to the hosting app.', {
            relatedElement: 'disabledInput',
            placement: ngy_tutorial__WEBPACK_IMPORTED_MODULE_1__["StepPromptPlacement"].Left,
            classToAdd: {
                container: ['bg-danger'],
                nextBtn: ['btn-success'],
                nextIcon: 'ion-ios-thumbs-up',
                previousIcon: 'ion-ios-thumbs-down',
            },
            actionTexts: {
                previous: 'Last Step Please!',
                next: 'Ah! Got it.',
            }
        });
        tutorialService.addStep('Placement Adjustment', 'Placement of the prompt is automatically adjusted to be in-view. This fake search box is at the top and the prompt is moved slightly downward', {
            relatedElement: 'nav-search-elem',
            placement: ngy_tutorial__WEBPACK_IMPORTED_MODULE_1__["StepPromptPlacement"].Left,
        });
        tutorialService.addStep('Flow Customization', 'You can customize the flow of the tutorial by disabling the "Next" and "Previous" button. This button is so important that you must click it to continue the tutorial.', {
            relatedElement: 'important-btn',
            placement: ngy_tutorial__WEBPACK_IMPORTED_MODULE_1__["StepPromptPlacement"].Right,
            disableNext: true
        });
        tutorialService.addStep('Hope You Like It!', 'Excited? Intergrating Ngy-Tutorial is as easy as 1-2-3! Head over to "Getting Started" and give your Angular app a great tutorial. <br> And if you like Ngy-Tutorial, \
    consider <br> <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/mjCsGWDTS"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a tea"><span style="margin-left:5px">Buy me a tea</span></a> <br> See that? HTML elements work in the prompt too 😉');
        this.tutorialService.tutorialInProgress.subscribe(function (ip) {
            _this.tutorialInProgress = ip;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.tutorialService.showTutorial();
    };
    AppComponent.prototype.scrollTo = function (elID) {
        var el = this.document.body.querySelector("#" + elID);
        if (el) {
            el.scrollIntoView();
        }
    };
    AppComponent.prototype.importantBtn = function ($event) {
        this.tutorialService.nextStep();
        $event.preventDefault();
    };
    AppComponent.prototype.restart = function () {
        this.tutorialService.showTutorial();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [ngy_tutorial__WEBPACK_IMPORTED_MODULE_1__["NgyTutorialService"], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngy_tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngy-tutorial */ "./dist/ngy-tutorial/fesm5/ngy-tutorial.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngy_tutorial__WEBPACK_IMPORTED_MODULE_3__["NgyTutorialModule"].forRoot({
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
                    },
                    actionTexts: {
                        next: 'Next Step',
                        previous: 'Previous Step'
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\micha\Documents\VSCode\ngy-tutorial\ngy-tutorial-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map