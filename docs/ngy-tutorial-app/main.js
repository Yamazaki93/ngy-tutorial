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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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
    function PromptComponent(svc, sani, document, options) {
        this.svc = svc;
        this.sani = sani;
        this.document = document;
        this.options = options;
        this.stepNumber = 0;
        this.totalSteps = 0;
        this.overrideButtonDisable = false;
        this.margin = 10;
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
                    _this.setPromptPosition(positionInfo.left + positionInfo.width + 2 * _this.margin, positionInfo.top + positionInfo.height / 2 - promptH / 2);
                }
                else if (placement === StepPromptPlacement.Left) {
                    _this.setPromptPosition(positionInfo.left - promptW - 2 * _this.margin, positionInfo.top + positionInfo.height / 2 - promptH / 2);
                }
                else if (placement === StepPromptPlacement.Above) {
                    _this.setPromptPosition(positionInfo.left + positionInfo.width / 2 - promptW / 2, positionInfo.top - 2 * _this.margin - promptH);
                }
                else {
                    _this.setPromptPosition(positionInfo.left + positionInfo.width / 2 - promptW / 2, positionInfo.top + positionInfo.height + 2 * _this.margin);
                }
                setTimeout(function () {
                    _this.overrideButtonDisable = _this.isPromptCoveringElement(elem) || _this.isElementOutOfView(elem);
                }, 200);
            }
        });
    };
    /**
     * @private
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    PromptComponent.prototype.setPromptPosition = /**
     * @private
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
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
        if (left < this.margin) {
            left = this.margin;
        }
        if (top < this.margin) {
            top = this.margin;
        }
        if (left > viewW - promptW - this.margin) {
            left = viewW - promptW - this.margin;
        }
        if (top > viewH - promptH - this.margin) {
            top = viewH - promptH - this.margin;
        }
        this.prompt.nativeElement.style.left = left + "px";
        this.prompt.nativeElement.style.top = top + "px";
    };
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    PromptComponent.prototype.isPromptCoveringElement = /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        if (!elem) {
            return false;
        }
        /** @type {?} */
        var promptPositionInfo = this.prompt.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var promptL = promptPositionInfo.left;
        /** @type {?} */
        var promptT = promptPositionInfo.top;
        /** @type {?} */
        var promptLW = promptL + promptPositionInfo.width;
        /** @type {?} */
        var promptTH = promptT + promptPositionInfo.height;
        /** @type {?} */
        var positionInfo = elem.getBoundingClientRect();
        /** @type {?} */
        var elementL = positionInfo.left;
        /** @type {?} */
        var elementT = positionInfo.top;
        /** @type {?} */
        var elementCenterX = elementL + positionInfo.width / 2;
        /** @type {?} */
        var elementCenterY = elementT + positionInfo.height / 2;
        if (promptTH < elementCenterY || promptT > elementCenterY || promptLW < elementCenterX || promptL > elementCenterX) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    PromptComponent.prototype.isElementOutOfView = /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        /** @type {?} */
        var positionInfo = elem.getBoundingClientRect();
        /** @type {?} */
        var viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        /** @type {?} */
        var viewH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (positionInfo.top + positionInfo.height / 2 > viewH || positionInfo.left + positionInfo.width / 2 > viewW) {
            return true;
        }
        else {
            return false;
        }
    };
    PromptComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'lib-ngy-tutorial-prompt',
                    template: "<div class=\"prompt-container smooth-2 ngy-tutorial-prompt-container\" [ngClass]=\"appliedClasses.container\" *ngIf=\"step\"\n  #prompt>\n  <h2 class=\"title ngy-tutorial-title\" [ngClass]=\"appliedClasses.title\" *ngIf=\"step.title\" [innerHTML]=\"titleSafe\"></h2>\n  <p class=\"prompt ngy-tutorial-prompt\" [ngClass]=\"appliedClasses.prompt\" *ngIf=\"step.prompt\" [innerHTML]=\"promptSafe\"></p>\n  <div class=\"action-container\">\n    <div class=\"actions left\">\n      <button id=\"lib-ngy-tutorial-previous-btn\" *ngIf=\"(stepNumber !== 0) && (!step.options.disablePrevious || overrideButtonDisable)\" class=\"ngy-tutorial-previous-btn\"\n        (click)=\"previousStep()\" [ngClass]=\"appliedClasses.previousBtn\"><i [ngClass]=\"appliedClasses.previousIcon\"\n          *ngIf=\"appliedClasses.previousIcon\"></i> {{appliedTexts.previous ? appliedTexts.previous : \"Previous\"}}</button>\n      <button id=\"lib-ngy-tutorial-skip-btn\" [ngClass]=\"appliedClasses.skipBtn\" *ngIf=\"stepNumber===0\" class=\"ngy-tutorial-skip-btn\"\n        (click)=\"finishTutorial()\"><i [ngClass]=\"appliedClasses.skipIcon\" *ngIf=\"appliedClasses.skipIcon\"></i>\n        {{appliedTexts.skip ? appliedTexts.skip : \"Skip\"}}</button>\n    </div>\n    <div class=\"actions right\">\n      <button id=\"lib-ngy-tutorial-next-btn\" *ngIf=\"(stepNumber !== totalSteps - 1) && (!step.options.disableNext || overrideButtonDisable)\" class=\"ngy-tutorial-next-btn\"\n        (click)=\"nextStep()\" [ngClass]=\"appliedClasses.nextBtn\"><i [ngClass]=\"appliedClasses.nextIcon\" *ngIf=\"appliedClasses.nextIcon\"></i>\n        {{appliedTexts.next ? appliedTexts.next : \"Next\"}}</button>\n      <button id=\"lib-ngy-tutorial-finish-btn\" *ngIf=\"(stepNumber === totalSteps - 1) && (!step.options.disableNext || overrideButtonDisable)\"\n        class=\"ngy-tutorial-finish-btn\" (click)=\"finishTutorial()\" [ngClass]=\"appliedClasses.finishBtn\"><i [ngClass]=\"appliedClasses.finishIcon\"\n          *ngIf=\"appliedClasses.finishIcon\"></i>\n        {{appliedTexts.finish ? appliedTexts.finish : \"Finish\"}}</button>\n    </div>\n  </div>\n</div>",
                    styles: [".prompt-container{max-width:40vw;border-radius:3px;padding:10px;background:#222;box-shadow:0 0 6px rgba(0,0,0,.6);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}@media screen and (max-width:768px){.prompt-container{max-width:95vw}}@media screen and (max-width:992px) and (min-width:768px){.prompt-container{max-width:85vw}}.prompt-container .title{margin-bottom:10px}.prompt-container .prompt{text-align:center}.prompt-container .action-container{margin-top:10px;display:flex;width:100%;flex-direction:row}.prompt-container .action-container .actions{width:100%;display:flex;padding:10px}.prompt-container .action-container .actions.left{align-items:flex-start}.prompt-container .action-container .actions.right{justify-content:flex-end}.smooth-2{transition:.2s cubic-bezier(.645,.045,.355,1)}"]
                },] },
    ];
    PromptComponent.ctorParameters = function () { return [
        { type: NgyTutorialService },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadeAnimation', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':self', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 }),
                                ])), { optional: true }),
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':self', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                                ])), { optional: true }),
                            ]),
                        ]),
                    ]
                },] },
    ];
    NgyTutorialComponent.ctorParameters = function () { return [
        { type: NgyTutorialService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
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
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd5LXR1dG9yaWFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3ktdHV0b3JpYWwvbGliL2FwaS9pLW9wdGlvbnMudHMiLCJuZzovL25neS10dXRvcmlhbC9saWIvbmd5LXR1dG9yaWFsLnNlcnZpY2UudHMiLCJuZzovL25neS10dXRvcmlhbC9saWIvcHJvbXB0L3Byb21wdC5jb21wb25lbnQudHMiLCJuZzovL25neS10dXRvcmlhbC9saWIvdHV0b3JpYWwvdHV0b3JpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3ktdHV0b3JpYWwvbGliL25neS10dXRvcmlhbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJSW5pdGlhbGl6YXRpb25PcHRpb25zIHtcclxuICAgIGNsYXNzVG9BZGQ/OiBJU3RlcENsYXNzZXM7XHJcbiAgICBhY3Rpb25UZXh0cz86IElBY3Rpb25UZXh0cztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RlcE9wdGlvbiB7XHJcbiAgICBwbGFjZW1lbnQ/OiBTdGVwUHJvbXB0UGxhY2VtZW50O1xyXG4gICAgcmVsYXRlZEVsZW1lbnQ/OiBzdHJpbmc7XHJcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb24/OiBib29sZWFuO1xyXG4gICAgZGlzYWJsZU5leHQ/OiBib29sZWFuO1xyXG4gICAgZGlzYWJsZVByZXZpb3VzPzogYm9vbGVhbjtcclxuICAgIGNsYXNzVG9BZGQ/OiBJU3RlcENsYXNzZXM7XHJcbiAgICBhY3Rpb25UZXh0cz86IElBY3Rpb25UZXh0cztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3RlcFByb21wdFBsYWNlbWVudCB7XHJcbiAgICBBYm92ZSxcclxuICAgIEJlbG93LFxyXG4gICAgTGVmdCxcclxuICAgIFJpZ2h0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0ZXBDbGFzc2VzIHtcclxuICAgIGNvbnRhaW5lcj86IHN0cmluZ1tdO1xyXG4gICAgdGl0bGU/OiBzdHJpbmdbXTtcclxuICAgIHByb21wdD86IHN0cmluZ1tdO1xyXG4gICAgcHJldmlvdXNCdG4/OiBzdHJpbmdbXTtcclxuICAgIHByZXZpb3VzSWNvbj86IHN0cmluZztcclxuICAgIG5leHRCdG4/OiBzdHJpbmdbXTtcclxuICAgIG5leHRJY29uPzogc3RyaW5nO1xyXG4gICAgc2tpcEJ0bj86IHN0cmluZ1tdO1xyXG4gICAgc2tpcEljb24/OiBzdHJpbmc7XHJcbiAgICBmaW5pc2hCdG4/OiBzdHJpbmdbXTtcclxuICAgIGZpbmlzaEljb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvblRleHRzIHtcclxuICAgIG5leHQ/OiBzdHJpbmc7XHJcbiAgICBwcmV2aW91cz86IHN0cmluZztcclxuICAgIHNraXA/OiBzdHJpbmc7XHJcbiAgICBmaW5pc2g/OiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU3RlcE9wdGlvbiwgU3RlcFByb21wdFBsYWNlbWVudCB9IGZyb20gJy4vYXBpL2ktb3B0aW9ucyc7XG5pbXBvcnQgeyBJVHV0b3JpYWxTdGVwIH0gZnJvbSAnLi9hcGkvaS10dXRvcmlhbC1zdGVwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3lUdXRvcmlhbFNlcnZpY2Uge1xuICBwdWJsaWMgcmVhZG9ubHkgdG9TaG93OiBFdmVudEVtaXR0ZXI8SVR1dG9yaWFsU3RlcFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8SVR1dG9yaWFsU3RlcFtdPigpO1xuICBwdWJsaWMgcmVhZG9ubHkgdHV0b3JpYWxJblByb2dyZXNzOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oKTtcbiAgcHVibGljIHJlYWRvbmx5IGN1cnJlbnRTdGVwOiBPYnNlcnZhYmxlPG51bWJlcj4gPSBuZXcgT2JzZXJ2YWJsZTxudW1iZXI+KCk7XG4gIHByaXZhdGUgc3RlcHM6IFR1dG9yaWFsU3RlcFtdO1xuICBwcml2YXRlIF90dXRvcmlhbEluUHJvZ3Jlc3MgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHJpdmF0ZSBfY3VycmVudFN0ZXAgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHV0b3JpYWxJblByb2dyZXNzID0gdGhpcy5fdHV0b3JpYWxJblByb2dyZXNzLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLl9jdXJyZW50U3RlcC5hc09ic2VydmFibGUoKTtcbiAgICB0aGlzLnN0ZXBzID0gW1xuICAgIF07XG4gIH1cbiAgcHVibGljIHNob3dUdXRvcmlhbCgpIHtcbiAgICB0aGlzLl9jdXJyZW50U3RlcC5uZXh0KDApO1xuICAgIHRoaXMudG9TaG93LmVtaXQodGhpcy5zdGVwcy5zbGljZSgpKTtcbiAgICB0aGlzLl90dXRvcmlhbEluUHJvZ3Jlc3MubmV4dCh0cnVlKTtcbiAgfVxuICBwdWJsaWMgaGlkZVR1dG9yaWFsKCkge1xuICAgIHRoaXMudG9TaG93LmVtaXQoW10pO1xuICAgIHRoaXMuX3R1dG9yaWFsSW5Qcm9ncmVzcy5uZXh0KGZhbHNlKTtcbiAgfVxuICBwdWJsaWMgYWRkU3RlcCh0aXRsZTogc3RyaW5nLCBwcm9tcHQ6IHN0cmluZywgb3B0aW9uPzogSVN0ZXBPcHRpb24pIHtcbiAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5kaXNhYmxlTmV4dCAmJiBvcHRpb24uZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oYG5neS10dXRvcmlhbCBlcnJvciwgc3RlcCAke3RpdGxlfSAtICR7cHJvbXB0fSBoYXMgZGlzYWJsZU5leHQgYW5kIGRpc2FibGVJbnRlcmFjdGlvbiBzZXQgdG8gdHJ1ZS5cbiAgICAgIFRoaXMgc3RlcCB3aWxsIGNhdXNlIHR1dG9yaWFsIHRvIGJlIHVuYWJsZSB0byBwcm9ncmVzcyBmb3J3YXJkIGFzIHN1Y2ggaXMgbm90IGFkZGVkIHRvIHRoZSB0dXRvcmlhbGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0ZXBzLnB1c2gobmV3IFR1dG9yaWFsU3RlcCh0aXRsZSwgcHJvbXB0LCBvcHRpb24pKTtcbiAgfVxuICBwdWJsaWMgcmVtb3ZlU3RlcChzdGVwTnVtYmVyOiBudW1iZXIpIHtcbiAgICBpZiAoc3RlcE51bWJlciA+IHRoaXMuc3RlcHMubGVuZ3RoIC0gMSB8fCBzdGVwTnVtYmVyIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0ZXBzLnNwbGljZShzdGVwTnVtYmVyLCAxKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIG5leHRTdGVwKCkge1xuICAgIHRoaXMuX2N1cnJlbnRTdGVwLm5leHQodGhpcy5fY3VycmVudFN0ZXAudmFsdWUgKyAxKTtcbiAgfVxuICBwdWJsaWMgcHJldmlvdXNTdGVwKCkge1xuICAgIHRoaXMuX2N1cnJlbnRTdGVwLm5leHQodGhpcy5fY3VycmVudFN0ZXAudmFsdWUgLSAxKTtcbiAgfVxufVxuXG5jbGFzcyBUdXRvcmlhbFN0ZXAgaW1wbGVtZW50cyBJVHV0b3JpYWxTdGVwIHtcbiAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9PUFRJT05TOiBJU3RlcE9wdGlvbiA9IHtcbiAgICBwbGFjZW1lbnQ6IFN0ZXBQcm9tcHRQbGFjZW1lbnQuQmVsb3dcbiAgfTtcbiAgb3B0aW9uczogSVN0ZXBPcHRpb247XG4gIHByb21wdDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBwcm9tcHQ6IHN0cmluZywgb3B0aW9uOiBJU3RlcE9wdGlvbikge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLlR1dG9yaWFsU3RlcC5ERUZBVUxUX09QVElPTlMsXG4gICAgICAuLi5vcHRpb25cbiAgICB9O1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnByb21wdCA9IHByb21wdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVHV0b3JpYWxTdGVwIH0gZnJvbSAnLi4vYXBpL2ktdHV0b3JpYWwtc3RlcCc7XHJcbmltcG9ydCB7IFN0ZXBQcm9tcHRQbGFjZW1lbnQsIElJbml0aWFsaXphdGlvbk9wdGlvbnMsIElTdGVwQ2xhc3NlcywgSUFjdGlvblRleHRzIH0gZnJvbSAnLi4vYXBpL2ktb3B0aW9ucyc7XHJcbmltcG9ydCB7IE5neVR1dG9yaWFsU2VydmljZSB9IGZyb20gJy4uL25neS10dXRvcmlhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1uZ3ktdHV0b3JpYWwtcHJvbXB0JyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwcm9tcHQtY29udGFpbmVyIHNtb290aC0yIG5neS10dXRvcmlhbC1wcm9tcHQtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwiYXBwbGllZENsYXNzZXMuY29udGFpbmVyXCIgKm5nSWY9XCJzdGVwXCJcclxuICAjcHJvbXB0PlxyXG4gIDxoMiBjbGFzcz1cInRpdGxlIG5neS10dXRvcmlhbC10aXRsZVwiIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLnRpdGxlXCIgKm5nSWY9XCJzdGVwLnRpdGxlXCIgW2lubmVySFRNTF09XCJ0aXRsZVNhZmVcIj48L2gyPlxyXG4gIDxwIGNsYXNzPVwicHJvbXB0IG5neS10dXRvcmlhbC1wcm9tcHRcIiBbbmdDbGFzc109XCJhcHBsaWVkQ2xhc3Nlcy5wcm9tcHRcIiAqbmdJZj1cInN0ZXAucHJvbXB0XCIgW2lubmVySFRNTF09XCJwcm9tcHRTYWZlXCI+PC9wPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWN0aW9ucyBsZWZ0XCI+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJsaWItbmd5LXR1dG9yaWFsLXByZXZpb3VzLWJ0blwiICpuZ0lmPVwiKHN0ZXBOdW1iZXIgIT09IDApICYmICghc3RlcC5vcHRpb25zLmRpc2FibGVQcmV2aW91cyB8fCBvdmVycmlkZUJ1dHRvbkRpc2FibGUpXCIgY2xhc3M9XCJuZ3ktdHV0b3JpYWwtcHJldmlvdXMtYnRuXCJcclxuICAgICAgICAoY2xpY2spPVwicHJldmlvdXNTdGVwKClcIiBbbmdDbGFzc109XCJhcHBsaWVkQ2xhc3Nlcy5wcmV2aW91c0J0blwiPjxpIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLnByZXZpb3VzSWNvblwiXHJcbiAgICAgICAgICAqbmdJZj1cImFwcGxpZWRDbGFzc2VzLnByZXZpb3VzSWNvblwiPjwvaT4ge3thcHBsaWVkVGV4dHMucHJldmlvdXMgPyBhcHBsaWVkVGV4dHMucHJldmlvdXMgOiBcIlByZXZpb3VzXCJ9fTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGlkPVwibGliLW5neS10dXRvcmlhbC1za2lwLWJ0blwiIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLnNraXBCdG5cIiAqbmdJZj1cInN0ZXBOdW1iZXI9PT0wXCIgY2xhc3M9XCJuZ3ktdHV0b3JpYWwtc2tpcC1idG5cIlxyXG4gICAgICAgIChjbGljayk9XCJmaW5pc2hUdXRvcmlhbCgpXCI+PGkgW25nQ2xhc3NdPVwiYXBwbGllZENsYXNzZXMuc2tpcEljb25cIiAqbmdJZj1cImFwcGxpZWRDbGFzc2VzLnNraXBJY29uXCI+PC9pPlxyXG4gICAgICAgIHt7YXBwbGllZFRleHRzLnNraXAgPyBhcHBsaWVkVGV4dHMuc2tpcCA6IFwiU2tpcFwifX08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFjdGlvbnMgcmlnaHRcIj5cclxuICAgICAgPGJ1dHRvbiBpZD1cImxpYi1uZ3ktdHV0b3JpYWwtbmV4dC1idG5cIiAqbmdJZj1cIihzdGVwTnVtYmVyICE9PSB0b3RhbFN0ZXBzIC0gMSkgJiYgKCFzdGVwLm9wdGlvbnMuZGlzYWJsZU5leHQgfHwgb3ZlcnJpZGVCdXR0b25EaXNhYmxlKVwiIGNsYXNzPVwibmd5LXR1dG9yaWFsLW5leHQtYnRuXCJcclxuICAgICAgICAoY2xpY2spPVwibmV4dFN0ZXAoKVwiIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLm5leHRCdG5cIj48aSBbbmdDbGFzc109XCJhcHBsaWVkQ2xhc3Nlcy5uZXh0SWNvblwiICpuZ0lmPVwiYXBwbGllZENsYXNzZXMubmV4dEljb25cIj48L2k+XHJcbiAgICAgICAge3thcHBsaWVkVGV4dHMubmV4dCA/IGFwcGxpZWRUZXh0cy5uZXh0IDogXCJOZXh0XCJ9fTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGlkPVwibGliLW5neS10dXRvcmlhbC1maW5pc2gtYnRuXCIgKm5nSWY9XCIoc3RlcE51bWJlciA9PT0gdG90YWxTdGVwcyAtIDEpICYmICghc3RlcC5vcHRpb25zLmRpc2FibGVOZXh0IHx8IG92ZXJyaWRlQnV0dG9uRGlzYWJsZSlcIlxyXG4gICAgICAgIGNsYXNzPVwibmd5LXR1dG9yaWFsLWZpbmlzaC1idG5cIiAoY2xpY2spPVwiZmluaXNoVHV0b3JpYWwoKVwiIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLmZpbmlzaEJ0blwiPjxpIFtuZ0NsYXNzXT1cImFwcGxpZWRDbGFzc2VzLmZpbmlzaEljb25cIlxyXG4gICAgICAgICAgKm5nSWY9XCJhcHBsaWVkQ2xhc3Nlcy5maW5pc2hJY29uXCI+PC9pPlxyXG4gICAgICAgIHt7YXBwbGllZFRleHRzLmZpbmlzaCA/IGFwcGxpZWRUZXh0cy5maW5pc2ggOiBcIkZpbmlzaFwifX08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2AucHJvbXB0LWNvbnRhaW5lcnttYXgtd2lkdGg6NDB2dztib3JkZXItcmFkaXVzOjNweDtwYWRkaW5nOjEwcHg7YmFja2dyb3VuZDojMjIyO2JveC1zaGFkb3c6MCAwIDZweCByZ2JhKDAsMCwwLC42KTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5wcm9tcHQtY29udGFpbmVye21heC13aWR0aDo5NXZ3fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KSBhbmQgKG1pbi13aWR0aDo3NjhweCl7LnByb21wdC1jb250YWluZXJ7bWF4LXdpZHRoOjg1dnd9fS5wcm9tcHQtY29udGFpbmVyIC50aXRsZXttYXJnaW4tYm90dG9tOjEwcHh9LnByb21wdC1jb250YWluZXIgLnByb21wdHt0ZXh0LWFsaWduOmNlbnRlcn0ucHJvbXB0LWNvbnRhaW5lciAuYWN0aW9uLWNvbnRhaW5lcnttYXJnaW4tdG9wOjEwcHg7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7ZmxleC1kaXJlY3Rpb246cm93fS5wcm9tcHQtY29udGFpbmVyIC5hY3Rpb24tY29udGFpbmVyIC5hY3Rpb25ze3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O3BhZGRpbmc6MTBweH0ucHJvbXB0LWNvbnRhaW5lciAuYWN0aW9uLWNvbnRhaW5lciAuYWN0aW9ucy5sZWZ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LnByb21wdC1jb250YWluZXIgLmFjdGlvbi1jb250YWluZXIgLmFjdGlvbnMucmlnaHR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zbW9vdGgtMnt0cmFuc2l0aW9uOi4ycyBjdWJpYy1iZXppZXIoLjY0NSwuMDQ1LC4zNTUsMSl9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb21wdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHN0ZXBOdW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIHRvdGFsU3RlcHMgPSAwO1xyXG4gIEBJbnB1dCgpIHN0ZXA6IElUdXRvcmlhbFN0ZXA7XHJcbiAgQFZpZXdDaGlsZCgncHJvbXB0JykgcHJvbXB0OiBFbGVtZW50UmVmO1xyXG4gIGFwcGxpZWRDbGFzc2VzOiBJU3RlcENsYXNzZXM7XHJcbiAgYXBwbGllZFRleHRzOiBJQWN0aW9uVGV4dHM7XHJcbiAgdGl0bGVTYWZlOiBTYWZlSHRtbDtcclxuICBwcm9tcHRTYWZlOiBTYWZlSHRtbDtcclxuICBvdmVycmlkZUJ1dHRvbkRpc2FibGUgPSBmYWxzZTtcclxuICBwcml2YXRlIG1hcmdpbiA9IDEwO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzdmM6IE5neVR1dG9yaWFsU2VydmljZSxcclxuICAgIHByaXZhdGUgc2FuaTogRG9tU2FuaXRpemVyLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgQEluamVjdCgnbmd5LXR1dG9yaWFsLW9wdGlvbnMnKSBwcml2YXRlIG9wdGlvbnM6IElJbml0aWFsaXphdGlvbk9wdGlvbnNcclxuICApIHtcclxuICAgIHRoaXMuYXBwbGllZENsYXNzZXMgPSB7fTtcclxuICAgIHRoaXMuYXBwbGllZFRleHRzID0ge307XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXBwbGllZENsYXNzZXMgPSB7fTtcclxuICAgIHRoaXMuYXBwbGllZFRleHRzID0ge307XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmNsYXNzVG9BZGQpIHtcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5jb250YWluZXIgPyB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5jb250YWluZXIgOiBbXTtcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy50aXRsZSA9IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLnRpdGxlID8gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQudGl0bGUgOiBbXTtcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5wcm9tcHQgPSB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5wcm9tcHQgPyB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5wcm9tcHQgOiBbXTtcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5uZXh0QnRuID0gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQubmV4dEJ0biA/IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLm5leHRCdG4gOiBbXTtcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5wcmV2aW91c0J0biA9IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLnByZXZpb3VzQnRuID8gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQucHJldmlvdXNCdG4gOiBbXTtcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5maW5pc2hCdG4gPSB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hCdG4gPyB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hCdG4gOiBbXTtcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5za2lwQnRuID0gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQuc2tpcEJ0biA/IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLnNraXBCdG4gOiBbXTtcclxuXHJcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMubmV4dEljb24gPSB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5uZXh0SWNvbiA/IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLm5leHRJY29uIDogJyc7XHJcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMucHJldmlvdXNJY29uID0gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQucHJldmlvdXNJY29uID8gdGhpcy5vcHRpb25zLmNsYXNzVG9BZGQucHJldmlvdXNJY29uIDogJyc7XHJcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMuZmluaXNoSWNvbiA9IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLmZpbmlzaEljb24gPyB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hJY29uIDogJyc7XHJcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMuc2tpcEljb24gPSB0aGlzLm9wdGlvbnMuY2xhc3NUb0FkZC5za2lwSWNvbiA/IHRoaXMub3B0aW9ucy5jbGFzc1RvQWRkLnNraXBJY29uIDogJyc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGVwLm9wdGlvbnMgJiYgdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMuY29udGFpbmVyID0gdGhpcy5hcHBsaWVkQ2xhc3Nlcy5jb250YWluZXIuY29uY2F0KHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQuY29udGFpbmVyID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5jb250YWluZXIgOiBbXSk7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy50aXRsZSA9IHRoaXMuYXBwbGllZENsYXNzZXMudGl0bGUuY29uY2F0KHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQudGl0bGUgPyB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnRpdGxlIDogW10pO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMucHJvbXB0ID0gdGhpcy5hcHBsaWVkQ2xhc3Nlcy5wcm9tcHQuY29uY2F0KHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQucHJvbXB0ID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5wcm9tcHQgOiBbXSk7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5uZXh0QnRuID0gdGhpcy5hcHBsaWVkQ2xhc3Nlcy5uZXh0QnRuLmNvbmNhdCh0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLm5leHRCdG4gPyB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLm5leHRCdG4gOiBbXSk7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5wcmV2aW91c0J0biA9IHRoaXMuYXBwbGllZENsYXNzZXMucHJldmlvdXNCdG4uY29uY2F0KHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQucHJldmlvdXNCdG4gPyB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnByZXZpb3VzQnRuIDogW10pO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMuZmluaXNoQnRuID0gdGhpcy5hcHBsaWVkQ2xhc3Nlcy5maW5pc2hCdG4uY29uY2F0KHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQuZmluaXNoQnRuID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hCdG4gOiBbXSk7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5za2lwQnRuID0gdGhpcy5hcHBsaWVkQ2xhc3Nlcy5za2lwQnRuLmNvbmNhdCh0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnNraXBCdG4gPyB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnNraXBCdG4gOiBbXSk7XHJcblxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMubmV4dEljb24gPSB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLm5leHRJY29uID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5uZXh0SWNvbiA6IHRoaXMuYXBwbGllZENsYXNzZXMubmV4dEljb247XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5wcmV2aW91c0ljb24gPSB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnByZXZpb3VzSWNvbiA/IHRoaXMuc3RlcC5vcHRpb25zLmNsYXNzVG9BZGQucHJldmlvdXNJY29uIDogdGhpcy5hcHBsaWVkQ2xhc3Nlcy5wcmV2aW91c0ljb247XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlcy5maW5pc2hJY29uID0gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hJY29uID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5maW5pc2hJY29uIDogdGhpcy5hcHBsaWVkQ2xhc3Nlcy5maW5pc2hJY29uO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgIHRoaXMuYXBwbGllZENsYXNzZXMuc2tpcEljb24gPSB0aGlzLnN0ZXAub3B0aW9ucy5jbGFzc1RvQWRkLnNraXBJY29uID8gdGhpcy5zdGVwLm9wdGlvbnMuY2xhc3NUb0FkZC5za2lwSWNvbiA6IHRoaXMuYXBwbGllZENsYXNzZXMuc2tpcEljb247XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmFjdGlvblRleHRzKSB7XHJcbiAgICAgIHRoaXMuYXBwbGllZFRleHRzID0ge1xyXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5hY3Rpb25UZXh0c1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RlcC5vcHRpb25zICYmIHRoaXMuc3RlcC5vcHRpb25zLmFjdGlvblRleHRzKSB7XHJcbiAgICAgIHRoaXMuYXBwbGllZFRleHRzID0ge1xyXG4gICAgICAgIC4uLnRoaXMuYXBwbGllZFRleHRzLFxyXG4gICAgICAgIC4uLnRoaXMuc3RlcC5vcHRpb25zLmFjdGlvblRleHRzXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGVwLnRpdGxlKSB7XHJcbiAgICAgIHRoaXMudGl0bGVTYWZlID0gdGhpcy5zYW5pLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuc3RlcC50aXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGVwLnByb21wdCkge1xyXG4gICAgICB0aGlzLnByb21wdFNhZmUgPSB0aGlzLnNhbmkuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5zdGVwLnByb21wdCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZpbmlzaFR1dG9yaWFsKCkge1xyXG4gICAgdGhpcy5zdmMuaGlkZVR1dG9yaWFsKCk7XHJcbiAgfVxyXG4gIG5leHRTdGVwKCkge1xyXG4gICAgdGhpcy5zdmMubmV4dFN0ZXAoKTtcclxuICB9XHJcbiAgcHJldmlvdXNTdGVwKCkge1xyXG4gICAgdGhpcy5zdmMucHJldmlvdXNTdGVwKCk7XHJcbiAgfVxyXG4gIHNldFByb21wdEZvckVsZW1lbnQoZWxlbT86IGFueSwgcGxhY2VtZW50PzogU3RlcFByb21wdFBsYWNlbWVudCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb21wdFBvc2l0aW9uSW5mbyA9IHRoaXMucHJvbXB0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHZpZXdXID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcclxuICAgICAgY29uc3Qgdmlld0ggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XHJcbiAgICAgIGNvbnN0IHByb21wdEggPSBwcm9tcHRQb3NpdGlvbkluZm8uaGVpZ2h0O1xyXG4gICAgICBjb25zdCBwcm9tcHRXID0gcHJvbXB0UG9zaXRpb25JbmZvLndpZHRoO1xyXG4gICAgICBpZiAoIWVsZW0gfHwgcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnNldFByb21wdFBvc2l0aW9uKHZpZXdXIC8gMiAtIHByb21wdFcgLyAyLCB2aWV3SCAvIDIgLSBwcm9tcHRIIC8gMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25JbmZvID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAocGxhY2VtZW50ID09PSBTdGVwUHJvbXB0UGxhY2VtZW50LlJpZ2h0KSB7XHJcbiAgICAgICAgICB0aGlzLnNldFByb21wdFBvc2l0aW9uKFxyXG4gICAgICAgICAgICBwb3NpdGlvbkluZm8ubGVmdCArIHBvc2l0aW9uSW5mby53aWR0aCArIDIgKiB0aGlzLm1hcmdpbixcclxuICAgICAgICAgICAgcG9zaXRpb25JbmZvLnRvcCArIHBvc2l0aW9uSW5mby5oZWlnaHQgLyAyIC0gcHJvbXB0SCAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBTdGVwUHJvbXB0UGxhY2VtZW50LkxlZnQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0UHJvbXB0UG9zaXRpb24oXHJcbiAgICAgICAgICAgIHBvc2l0aW9uSW5mby5sZWZ0IC0gcHJvbXB0VyAtIDIgKiB0aGlzLm1hcmdpbixcclxuICAgICAgICAgICAgcG9zaXRpb25JbmZvLnRvcCArIHBvc2l0aW9uSW5mby5oZWlnaHQgLyAyIC0gcHJvbXB0SCAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBTdGVwUHJvbXB0UGxhY2VtZW50LkFib3ZlKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFByb21wdFBvc2l0aW9uKFxyXG4gICAgICAgICAgICBwb3NpdGlvbkluZm8ubGVmdCArIHBvc2l0aW9uSW5mby53aWR0aCAvIDIgLSBwcm9tcHRXIC8gMixcclxuICAgICAgICAgICAgcG9zaXRpb25JbmZvLnRvcCAtIDIgKiB0aGlzLm1hcmdpbiAtIHByb21wdEhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0UHJvbXB0UG9zaXRpb24oXHJcbiAgICAgICAgICAgIHBvc2l0aW9uSW5mby5sZWZ0ICsgcG9zaXRpb25JbmZvLndpZHRoIC8gMiAtIHByb21wdFcgLyAyLFxyXG4gICAgICAgICAgICBwb3NpdGlvbkluZm8udG9wICsgcG9zaXRpb25JbmZvLmhlaWdodCArIDIgKiB0aGlzLm1hcmdpblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm92ZXJyaWRlQnV0dG9uRGlzYWJsZSA9IHRoaXMuaXNQcm9tcHRDb3ZlcmluZ0VsZW1lbnQoZWxlbSkgfHwgdGhpcy5pc0VsZW1lbnRPdXRPZlZpZXcoZWxlbSk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgc2V0UHJvbXB0UG9zaXRpb24obGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcikge1xyXG4gICAgY29uc3QgcHJvbXB0UG9zaXRpb25JbmZvID0gdGhpcy5wcm9tcHQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHZpZXdXID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcclxuICAgIGNvbnN0IHZpZXdIID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xyXG4gICAgY29uc3QgcHJvbXB0SCA9IHByb21wdFBvc2l0aW9uSW5mby5oZWlnaHQ7XHJcbiAgICBjb25zdCBwcm9tcHRXID0gcHJvbXB0UG9zaXRpb25JbmZvLndpZHRoO1xyXG4gICAgaWYgKGxlZnQgPCB0aGlzLm1hcmdpbikge1xyXG4gICAgICBsZWZ0ID0gdGhpcy5tYXJnaW47XHJcbiAgICB9XHJcbiAgICBpZiAodG9wIDwgdGhpcy5tYXJnaW4pIHtcclxuICAgICAgdG9wID0gdGhpcy5tYXJnaW47XHJcbiAgICB9XHJcbiAgICBpZiAobGVmdCA+IHZpZXdXIC0gcHJvbXB0VyAtIHRoaXMubWFyZ2luKSB7XHJcbiAgICAgIGxlZnQgPSB2aWV3VyAtIHByb21wdFcgLSB0aGlzLm1hcmdpbjtcclxuICAgIH1cclxuICAgIGlmICh0b3AgPiB2aWV3SCAtIHByb21wdEggLSB0aGlzLm1hcmdpbikge1xyXG4gICAgICB0b3AgPSB2aWV3SCAtIHByb21wdEggLSB0aGlzLm1hcmdpbjtcclxuICAgIH1cclxuICAgIHRoaXMucHJvbXB0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xyXG4gICAgdGhpcy5wcm9tcHQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gIH1cclxuICBwcml2YXRlIGlzUHJvbXB0Q292ZXJpbmdFbGVtZW50KGVsZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYoIWVsZW0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvbXB0UG9zaXRpb25JbmZvID0gdGhpcy5wcm9tcHQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHByb21wdEwgPSBwcm9tcHRQb3NpdGlvbkluZm8ubGVmdDtcclxuICAgIGNvbnN0IHByb21wdFQgPSBwcm9tcHRQb3NpdGlvbkluZm8udG9wO1xyXG4gICAgY29uc3QgcHJvbXB0TFcgPSBwcm9tcHRMICsgcHJvbXB0UG9zaXRpb25JbmZvLndpZHRoO1xyXG4gICAgY29uc3QgcHJvbXB0VEggPSBwcm9tcHRUICsgcHJvbXB0UG9zaXRpb25JbmZvLmhlaWdodDtcclxuICAgIGNvbnN0IHBvc2l0aW9uSW5mbyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBlbGVtZW50TCA9IHBvc2l0aW9uSW5mby5sZWZ0O1xyXG4gICAgY29uc3QgZWxlbWVudFQgPSBwb3NpdGlvbkluZm8udG9wO1xyXG4gICAgY29uc3QgZWxlbWVudENlbnRlclggPSBlbGVtZW50TCArIHBvc2l0aW9uSW5mby53aWR0aCAvIDI7XHJcbiAgICBjb25zdCBlbGVtZW50Q2VudGVyWSA9IGVsZW1lbnRUICsgcG9zaXRpb25JbmZvLmhlaWdodCAvIDI7XHJcbiAgICBpZihwcm9tcHRUSCA8IGVsZW1lbnRDZW50ZXJZIHx8IHByb21wdFQgPiBlbGVtZW50Q2VudGVyWSB8fCBwcm9tcHRMVyA8IGVsZW1lbnRDZW50ZXJYIHx8IHByb21wdEwgPiBlbGVtZW50Q2VudGVyWCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBpc0VsZW1lbnRPdXRPZlZpZXcoZWxlbTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwb3NpdGlvbkluZm8gPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3Qgdmlld1cgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xyXG4gICAgY29uc3Qgdmlld0ggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XHJcbiAgICBpZihwb3NpdGlvbkluZm8udG9wICsgcG9zaXRpb25JbmZvLmhlaWdodCAvIDIgPiB2aWV3SCB8fCBwb3NpdGlvbkluZm8ubGVmdCArIHBvc2l0aW9uSW5mby53aWR0aCAvIDIgPiB2aWV3Vykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMsIHN0eWxlLCBxdWVyeSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSVR1dG9yaWFsU3RlcCB9IGZyb20gJy4uL2FwaS9pLXR1dG9yaWFsLXN0ZXAnO1xuaW1wb3J0IHsgUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi4vcHJvbXB0L3Byb21wdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3RlcFByb21wdFBsYWNlbWVudCB9IGZyb20gJy4uL2FwaS9pLW9wdGlvbnMnO1xuaW1wb3J0IHsgTmd5VHV0b3JpYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbmd5LXR1dG9yaWFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmd5LXR1dG9yaWFsJyxcbiAgdGVtcGxhdGU6IGA8bGliLW5neS10dXRvcmlhbC1wcm9tcHQgKm5nSWY9XCJlbmFibGVkXCIgQGZhZGVBbmltYXRpb24gW3N0ZXBdPVwic3RlcHNbY3VycmVudFN0ZXBdXCIgW3N0ZXBOdW1iZXJdPVwiY3VycmVudFN0ZXBcIiBbdG90YWxTdGVwc109XCJzdGVwcy5sZW5ndGhcIiAjcHJvbXB0PjwvbGliLW5neS10dXRvcmlhbC1wcm9tcHQ+XG48ZGl2IGNsYXNzPVwid2luZG93LWNvdmVyIGZ1bGwtd2lkdGhcIiAjdG9wQ292ZXIgKm5nSWY9XCJlbmFibGVkXCIgQGZhZGVBbmltYXRpb24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJ3aW5kb3ctY292ZXJcIiAjbGVmdENvdmVyICpuZ0lmPVwiZW5hYmxlZFwiIEBmYWRlQW5pbWF0aW9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwid2luZG93LWNvdmVyXCIgI3JpZ2h0Q292ZXIgKm5nSWY9XCJlbmFibGVkXCIgQGZhZGVBbmltYXRpb24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJ3aW5kb3ctY292ZXIgZnVsbC13aWR0aFwiICNib3R0b21Db3ZlciAqbmdJZj1cImVuYWJsZWRcIiBAZmFkZUFuaW1hdGlvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImVsZW1lbnQtY292ZXJcIiAjZWxlbWVudENvdmVyPlxuXG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246Zml4ZWQ7bGVmdDowO3RvcDowO3dpZHRoOjA7aGVpZ2h0OjB9LndpbmRvdy1jb3Zlcntwb3NpdGlvbjpmaXhlZDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjgpO3otaW5kZXg6OTk4fS53aW5kb3ctY292ZXIuZnVsbC13aWR0aHt3aWR0aDoxMDB2d30uZWxlbWVudC1jb3Zlcntwb3NpdGlvbjpmaXhlZDt6LWluZGV4Ojk5OH1saWItbmd5LXR1dG9yaWFsLXByb21wdHt0b3A6MDtsZWZ0OjA7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDo5OTl9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlQW5pbWF0aW9uJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBxdWVyeSgnOnNlbGYnLFxuICAgICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbi1vdXQnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxuICAgICAgICAgIF0pKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBxdWVyeSgnOnNlbGYnLFxuICAgICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbi1vdXQnLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgICAgIF0pKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neVR1dG9yaWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlbmFibGVkID0gZmFsc2U7XG4gIHN0ZXBzOiBJVHV0b3JpYWxTdGVwW10gPSBbXTtcbiAgY3VycmVudFN0ZXAgPSAwO1xuICBAVmlld0NoaWxkKCd0b3BDb3ZlcicpIHByaXZhdGUgdG9wQ292ZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xlZnRDb3ZlcicpIHByaXZhdGUgbGVmdENvdmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyaWdodENvdmVyJykgcHJpdmF0ZSByaWdodENvdmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdib3R0b21Db3ZlcicpIHByaXZhdGUgYm90dG9tQ292ZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnRDb3ZlcicpIHByaXZhdGUgZWxlbWVudENvdmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdwcm9tcHQnKSBwcml2YXRlIHByb21wdDogUHJvbXB0Q29tcG9uZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN2YzogTmd5VHV0b3JpYWxTZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgKSB7XG4gICAgdGhpcy5zdmMudG9TaG93LnN1YnNjcmliZShzdHBzID0+IHtcbiAgICAgIHRoaXMuc3RlcHMgPSBzdHBzO1xuICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICBpZiAodGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXR1cFVJRm9yU3RlcCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3ZjLmN1cnJlbnRTdGVwLnN1YnNjcmliZShzdGVwID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBzdGVwO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAgPj0gdGhpcy5zdGVwcy5sZW5ndGggfHwgdGhpcy5jdXJyZW50U3RlcCA8IDApIHtcbiAgICAgICAgdGhpcy5zdmMuaGlkZVR1dG9yaWFsKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0dXBVSUZvclN0ZXAoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFVJRm9yU3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1cnJlbnRTdGVwXTtcbiAgICBpZiAoc3RlcCkge1xuICAgICAgdGhpcy5yZXNldENvdmVycygpO1xuICAgICAgdGhpcy5wcm9tcHQubmdPbkluaXQoKTtcbiAgICAgIGlmICghc3RlcC5vcHRpb25zLnJlbGF0ZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY292ZXJBbGwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgIyR7c3RlcC5vcHRpb25zLnJlbGF0ZWRFbGVtZW50fWApO1xuICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgIHRoaXMuY292ZXJTaG93RWxlbWVudChlbGVtKTtcbiAgICAgICAgICB0aGlzLnByb21wdC5zZXRQcm9tcHRGb3JFbGVtZW50KGVsZW0sIHN0ZXAub3B0aW9ucy5wbGFjZW1lbnQpO1xuICAgICAgICAgIGlmIChzdGVwLm9wdGlvbnMuZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvdmVyRWxlbWVudChlbGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb3ZlckFsbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgY292ZXJFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbkluZm8gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG1hcmdpbiA9IDEwO1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5lbGVtZW50Q292ZXIubmF0aXZlRWxlbWVudCxcbiAgICAgIHBvc2l0aW9uSW5mby5sZWZ0IC0gbWFyZ2luLFxuICAgICAgcG9zaXRpb25JbmZvLnRvcCAtIG1hcmdpbixcbiAgICAgIHBvc2l0aW9uSW5mby53aWR0aCArIDIgKiBtYXJnaW4sXG4gICAgICBwb3NpdGlvbkluZm8uaGVpZ2h0ICsgMiAqIG1hcmdpbik7XG4gIH1cbiAgcHJpdmF0ZSBjb3ZlckFsbCgpIHtcbiAgICBpZiAodGhpcy50b3BDb3Zlcikge1xuICAgICAgdGhpcy50b3BDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICB0aGlzLnRvcENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgICAgdGhpcy50b3BDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDB2aCc7XG4gICAgICB0aGlzLnByb21wdC5zZXRQcm9tcHRGb3JFbGVtZW50KCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgY292ZXJTaG93RWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb25JbmZvID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBtYXJnaW4gPSAxMDtcbiAgICBjb25zdCB2aWV3VyA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgY29uc3Qgdmlld0ggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLnRvcENvdmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIHZpZXdXLFxuICAgICAgcG9zaXRpb25JbmZvLnRvcCAtIG1hcmdpbik7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmxlZnRDb3Zlci5uYXRpdmVFbGVtZW50LFxuICAgICAgMCxcbiAgICAgIHBvc2l0aW9uSW5mby50b3AgLSBtYXJnaW4sXG4gICAgICBwb3NpdGlvbkluZm8ubGVmdCAtIG1hcmdpbixcbiAgICAgIHBvc2l0aW9uSW5mby5oZWlnaHQgKyAyICogbWFyZ2luKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMucmlnaHRDb3Zlci5uYXRpdmVFbGVtZW50LFxuICAgICAgcG9zaXRpb25JbmZvLmxlZnQgKyBwb3NpdGlvbkluZm8ud2lkdGggKyBtYXJnaW4sXG4gICAgICBwb3NpdGlvbkluZm8udG9wIC0gbWFyZ2luLFxuICAgICAgdmlld1cgLSBwb3NpdGlvbkluZm8ubGVmdCAtIHBvc2l0aW9uSW5mby53aWR0aCAtIG1hcmdpbixcbiAgICAgIHBvc2l0aW9uSW5mby5oZWlnaHQgKyAyICogbWFyZ2luKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuYm90dG9tQ292ZXIubmF0aXZlRWxlbWVudCxcbiAgICAgIDAsXG4gICAgICBwb3NpdGlvbkluZm8udG9wICsgcG9zaXRpb25JbmZvLmhlaWdodCArIG1hcmdpbixcbiAgICAgIHZpZXdXLFxuICAgICAgdmlld0ggLSBwb3NpdGlvbkluZm8udG9wIC0gcG9zaXRpb25JbmZvLmhlaWdodCAtIG1hcmdpbik7XG5cbiAgfVxuXG4gIHByaXZhdGUgc2V0UG9zaXRpb24oZWxlbWVudDogYW55LCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgfVxuICBwcml2YXRlIHJlc2V0Q292ZXJzKCkge1xuICAgIGlmICh0aGlzLnRvcENvdmVyKSB7XG4gICAgICB0aGlzLnRvcENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgdGhpcy50b3BDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgdGhpcy50b3BDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICAgIHRoaXMudG9wQ292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbGVmdCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZWZ0Q292ZXIpIHtcbiAgICAgIHRoaXMubGVmdENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgdGhpcy5sZWZ0Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKTtcbiAgICAgIHRoaXMubGVmdENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgICAgdGhpcy5sZWZ0Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbGVmdCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yaWdodENvdmVyKSB7XG4gICAgICB0aGlzLnJpZ2h0Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICB0aGlzLnJpZ2h0Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKTtcbiAgICAgIHRoaXMucmlnaHRDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICAgIHRoaXMucmlnaHRDb3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvdHRvbUNvdmVyKSB7XG4gICAgICB0aGlzLmJvdHRvbUNvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgdGhpcy5ib3R0b21Db3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgdGhpcy5ib3R0b21Db3Zlci5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICAgIHRoaXMuYm90dG9tQ292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbGVmdCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50Q292ZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgdGhpcy5lbGVtZW50Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKTtcbiAgICAgIHRoaXMuZWxlbWVudENvdmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgICAgdGhpcy5lbGVtZW50Q292ZXIubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbGVmdCcpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neVR1dG9yaWFsQ29tcG9uZW50IH0gZnJvbSAnLi90dXRvcmlhbC90dXRvcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQvcHJvbXB0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3lUdXRvcmlhbFNlcnZpY2UgfSBmcm9tICcuL25neS10dXRvcmlhbC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJSW5pdGlhbGl6YXRpb25PcHRpb25zIH0gZnJvbSAnLi9hcGkvaS1vcHRpb25zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3lUdXRvcmlhbENvbXBvbmVudCwgUHJvbXB0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW05neVR1dG9yaWFsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3lUdXRvcmlhbE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChvcHRpb25zOiBJSW5pdGlhbGl6YXRpb25PcHRpb25zID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neVR1dG9yaWFsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE5neVR1dG9yaWFsU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICduZ3ktdHV0b3JpYWwtb3B0aW9ucycsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQWdCSSxRQUFLO0lBQ0wsUUFBSztJQUNMLE9BQUk7SUFDSixRQUFLOzs7Ozs7Ozs7Ozs7SUNKUDtRQU5nQixXQUFNLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzVFLHVCQUFrQixHQUF3QixJQUFJLFVBQVUsRUFBVyxDQUFDO1FBQ3BFLGdCQUFXLEdBQXVCLElBQUksVUFBVSxFQUFVLENBQUM7UUFFbkUsd0JBQW1CLEdB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Q0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDakgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDM0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFFckcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDeEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDcEgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDOUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDekc7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7WUFFckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFM0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFM0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFL0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFbkosSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFbkssSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFFM0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFHbkosSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDOztZQUU1SSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7O1lBRTVKLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzs7WUFFcEosSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1NBQzdJO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxnQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FDNUIsQ0FBQztTQUNIO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFlBQVksZ0JBQ1osSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUNqQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2RTtLQUNGOzs7O0lBQ0Qsd0NBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUNELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDckI7Ozs7SUFDRCxzQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7Ozs7SUFDRCw2Q0FBbUI7Ozs7O0lBQW5CLFVBQW9CLElBQVUsRUFBRSxTQUErQjtRQUEvRCxpQkFtQ0M7UUFsQ0MsVUFBVSxDQUFDOztnQkFDSCxrQkFBa0IsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQ3RFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDOztnQkFDOUUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7O2dCQUNoRixPQUFPLEdBQUcsa0JBQWtCLENBQUMsTUFBTTs7Z0JBQ25DLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLO1lBQ3hDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDcEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxRTtpQkFBTTs7b0JBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDakQsSUFBSSxTQUFTLEtBQUssbUJBQW1CLENBQUMsS0FBSyxFQUFFO29CQUMzQyxLQUFJLENBQUMsaUJBQWlCLENBQ3BCLFlBQVksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFDeEQsWUFBWSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzdEO3FCQUFNLElBQUksU0FBUyxLQUFLLG1CQUFtQixDQUFDLElBQUksRUFBRTtvQkFDakQsS0FBSSxDQUFDLGlCQUFpQixDQUNwQixZQUFZLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFDN0MsWUFBWSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzdEO3FCQUFNLElBQUksU0FBUyxLQUFLLG1CQUFtQixDQUFDLEtBQUssRUFBRTtvQkFDbEQsS0FBSSxDQUFDLGlCQUFpQixDQUNwQixZQUFZLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQ3hELFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUM3QyxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxpQkFBaUIsQ0FDcEIsWUFBWSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUN4RCxZQUFZLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQ3pELENBQUM7aUJBQ0g7Z0JBQ0QsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNsRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7U0FDRixDQUFDLENBQUM7S0FDSjs7Ozs7OztJQUNPLDJDQUFpQjs7Ozs7O0lBQXpCLFVBQTBCLElBQVksRUFBRSxHQUFXOztZQUMzQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7WUFDdEUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7O1lBQzlFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDOztZQUNoRixPQUFPLEdBQUcsa0JBQWtCLENBQUMsTUFBTTs7WUFDbkMsT0FBTyxHQUFHLGtCQUFrQixDQUFDLEtBQUs7UUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDbkI7UUFDRCxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEMsSUFBSSxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0QztRQUNELElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxHQUFHLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksR0FBTSxJQUFJLE9BQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFNLEdBQUcsT0FBSSxDQUFDO0tBQ2xEOzs7Ozs7SUFDTyxpREFBdUI7Ozs7O0lBQS9CLFVBQWdDLElBQVM7UUFDdkMsSUFBRyxDQUFDLElBQUksRUFBRTtZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBQ0ssa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O1lBQ3RFLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJOztZQUNqQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsR0FBRzs7WUFDaEMsUUFBUSxHQUFHLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLOztZQUM3QyxRQUFRLEdBQUcsT0FBTyxHQUFHLGtCQUFrQixDQUFDLE1BQU07O1lBQzlDLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7O1lBQzNDLFFBQVEsR0FBRyxZQUFZLENBQUMsSUFBSTs7WUFDNUIsUUFBUSxHQUFHLFlBQVksQ0FBQyxHQUFHOztZQUMzQixjQUFjLEdBQUcsUUFBUSxHQUFHLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQzs7WUFDbEQsY0FBYyxHQUFHLFFBQVEsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDekQsSUFBRyxRQUFRLEdBQUcsY0FBYyxJQUFJLE9BQU8sR0FBRyxjQUFjLElBQUksUUFBUSxHQUFHLGNBQWMsSUFBSSxPQUFPLEdBQUcsY0FBYyxFQUFFO1lBQ2pILE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjs7Ozs7O0lBQ08sNENBQWtCOzs7OztJQUExQixVQUEyQixJQUFTOztZQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztZQUMzQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQzs7WUFDOUUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDdEYsSUFBRyxZQUFZLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssSUFBSSxZQUFZLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUMzRyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7O2dCQTdNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLHVsRUF1Qkw7b0JBQ0wsTUFBTSxFQUFFLENBQUMsMjBCQUEyMEIsQ0FBQztpQkFDdDFCOzs7Z0JBL0JRLGtCQUFrQjtnQkFDbEIsWUFBWTtnREE4Q2hCLE1BQU0sU0FBQyxRQUFRO2dEQUNmLE1BQU0sU0FBQyxzQkFBc0I7Ozs2QkFkL0IsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsU0FBUyxTQUFDLFFBQVE7O0lBNktyQixzQkFBQztDQUFBOzs7Ozs7QUNyTkQ7SUFxREUsOEJBQ1UsR0FBdUIsRUFDTCxRQUFhO1FBRnpDLGlCQTJCQztRQTFCUyxRQUFHLEdBQUgsR0FBRyxDQUFvQjtRQUNMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFYekMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFLLEdBQW9CLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQVdkLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDNUIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLFVBQVUsQ0FBQztvQkFDVCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3ZCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNqQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLEtBQUksQ0FBQyxXQUFXLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pFLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDekI7WUFDRCxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLFVBQVUsQ0FBQztvQkFDVCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3ZCLENBQUMsQ0FBQzthQUNKO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7S0FFQzs7Ozs7SUFFTyw2Q0FBYzs7OztJQUF0Qjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU07O29CQUNDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWdCLENBQUM7Z0JBQ2hGLElBQUksSUFBSSxFQUFFO29CQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFO3dCQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN6QjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2pCO2FBQ0Y7U0FDRjtLQUNGOzs7Ozs7SUFDTywyQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsT0FBZ0I7O1lBQzdCLFlBQVksR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUU7O1lBQzlDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQzlDLFlBQVksQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUMxQixZQUFZLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFDekIsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUMvQixZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztLQUNyQzs7Ozs7SUFDTyx1Q0FBUTs7OztJQUFoQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDbkM7S0FDRjs7Ozs7O0lBQ08sK0NBQWdCOzs7OztJQUF4QixVQUF5QixPQUFnQjs7WUFDakMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTs7WUFDOUMsTUFBTSxHQUFHLEVBQUU7O1lBQ1gsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7O1lBQzlFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzFDLENBQUMsRUFDRCxDQUFDLEVBQ0QsS0FBSyxFQUNMLFlBQVksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFDM0MsQ0FBQyxFQUNELFlBQVksQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUN6QixZQUFZLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFDMUIsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDNUMsWUFBWSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFDL0MsWUFBWSxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQ3pCLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEdBQUcsTUFBTSxFQUN2RCxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM3QyxDQUFDLEVBQ0QsWUFBWSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFDL0MsS0FBSyxFQUNMLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FFNUQ7Ozs7Ozs7Ozs7SUFFTywwQ0FBVzs7Ozs7Ozs7O0lBQW5CLFVBQW9CLE9BQVksRUFBRSxJQUFZLEVBQUUsR0FBVyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ3hGLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFNLElBQUksT0FBSSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFNLEdBQUcsT0FBSSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFNLEtBQUssT0FBSSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFNLE1BQU0sT0FBSSxDQUFDO0tBQ3RDOzs7OztJQUNPLDBDQUFXOzs7O0lBQW5CO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5RDtLQUNGOztnQkFyTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSw4a0JBV0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsdVFBQXVRLENBQUM7b0JBQ2pSLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsZUFBZSxFQUFFOzRCQUN2QixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsT0FBTyxFQUNYLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7b0NBQ3BDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQ0FDckIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO2lDQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs2QkFDM0IsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsT0FBTyxFQUNYLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7b0NBQ3BDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQ0FDckIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO2lDQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs2QkFDM0IsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO2lCQUNGOzs7Z0JBbkNRLGtCQUFrQjtnREFpRHRCLE1BQU0sU0FBQyxRQUFROzs7MkJBUmpCLFNBQVMsU0FBQyxVQUFVOzRCQUNwQixTQUFTLFNBQUMsV0FBVzs2QkFDckIsU0FBUyxTQUFDLFlBQVk7OEJBQ3RCLFNBQVMsU0FBQyxhQUFhOytCQUN2QixTQUFTLFNBQUMsY0FBYzt5QkFDeEIsU0FBUyxTQUFDLFFBQVE7O0lBMElyQiwyQkFBQztDQUFBOzs7Ozs7QUM5TEQ7SUFRQTtLQXFCQzs7Ozs7SUFaZSx5QkFBTzs7OztJQUFyQixVQUFzQixPQUFvQztRQUFwQyx3QkFBQSxFQUFBLFlBQW9DO1FBQ3hELE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVCxrQkFBa0I7Z0JBQ2xCO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjthQUNGO1NBQ0YsQ0FBQztLQUNIOztnQkFwQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHVCQUF1QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxDQUFDO29CQUNyRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEM7O0lBY0Qsd0JBQUM7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

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