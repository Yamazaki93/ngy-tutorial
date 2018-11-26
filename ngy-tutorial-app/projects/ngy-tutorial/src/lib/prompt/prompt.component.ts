import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { ITutorialStep } from '../api/i-tutorial-step';
import { StepPromptPlacement, IInitializationOptions, IStepClasses, IActionTexts } from '../api/i-options';
import { NgyTutorialService } from '../ngy-tutorial.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'lib-ngy-tutorial-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {

  @Input() stepNumber = 0;
  @Input() totalSteps = 0;
  @Input() step: ITutorialStep;
  @ViewChild('prompt') prompt: ElementRef;
  appliedClasses: IStepClasses;
  appliedTexts: IActionTexts;
  titleSafe: SafeHtml;
  promptSafe: SafeHtml;
  overrideButtonDisable = false;
  private margin = 10;
  constructor(
    private svc: NgyTutorialService,
    private sani: DomSanitizer,
    @Inject(DOCUMENT) private document: any,
    @Inject('ngy-tutorial-options') private options: IInitializationOptions
  ) {
    this.appliedClasses = {};
    this.appliedTexts = {};
  }

  ngOnInit() {
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
      this.appliedTexts = {
        ...this.options.actionTexts
      };
    }
    if (this.step.options && this.step.options.actionTexts) {
      this.appliedTexts = {
        ...this.appliedTexts,
        ...this.step.options.actionTexts
      };
    }
    if (this.step.title) {
      this.titleSafe = this.sani.bypassSecurityTrustHtml(this.step.title);
    }
    if (this.step.prompt) {
      this.promptSafe = this.sani.bypassSecurityTrustHtml(this.step.prompt);
    }
  }
  finishTutorial() {
    this.svc.hideTutorial();
  }
  nextStep() {
    this.svc.nextStep();
  }
  previousStep() {
    this.svc.previousStep();
  }
  setPromptForElement(elem?: any, placement?: StepPromptPlacement) {
    setTimeout(() => {
      const promptPositionInfo = this.prompt.nativeElement.getBoundingClientRect();
      const viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const viewH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const promptH = promptPositionInfo.height;
      const promptW = promptPositionInfo.width;
      if (!elem || placement === undefined) {
        this.setPromptPosition(viewW / 2 - promptW / 2, viewH / 2 - promptH / 2);
      } else {
        const positionInfo = elem.getBoundingClientRect();
        if (placement === StepPromptPlacement.Right) {
          this.setPromptPosition(
            positionInfo.left + positionInfo.width + 2 * this.margin,
            positionInfo.top + positionInfo.height / 2 - promptH / 2);
        } else if (placement === StepPromptPlacement.Left) {
          this.setPromptPosition(
            positionInfo.left - promptW - 2 * this.margin,
            positionInfo.top + positionInfo.height / 2 - promptH / 2);
        } else if (placement === StepPromptPlacement.Above) {
          this.setPromptPosition(
            positionInfo.left + positionInfo.width / 2 - promptW / 2,
            positionInfo.top - 2 * this.margin - promptH
          );
        } else {
          this.setPromptPosition(
            positionInfo.left + positionInfo.width / 2 - promptW / 2,
            positionInfo.top + positionInfo.height + 2 * this.margin
          );
        }
        setTimeout(() => {
          this.overrideButtonDisable = this.isPromptCoveringElement(elem) || this.isElementOutOfView(elem);
        }, 200);
      }
    });
  }
  private setPromptPosition(left: number, top: number) {
    const promptPositionInfo = this.prompt.nativeElement.getBoundingClientRect();
    const viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const viewH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const promptH = promptPositionInfo.height;
    const promptW = promptPositionInfo.width;
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
    this.prompt.nativeElement.style.left = `${left}px`;
    this.prompt.nativeElement.style.top = `${top}px`;
  }
  private isPromptCoveringElement(elem: any): boolean {
    if(!elem) {
      return false;
    }
    const promptPositionInfo = this.prompt.nativeElement.getBoundingClientRect();
    const promptL = promptPositionInfo.left;
    const promptT = promptPositionInfo.top;
    const promptLW = promptL + promptPositionInfo.width;
    const promptTH = promptT + promptPositionInfo.height;
    const positionInfo = elem.getBoundingClientRect();
    const elementL = positionInfo.left;
    const elementT = positionInfo.top;
    const elementCenterX = elementL + positionInfo.width / 2;
    const elementCenterY = elementT + positionInfo.height / 2;
    if(promptTH < elementCenterY || promptT > elementCenterY || promptLW < elementCenterX || promptL > elementCenterX) {
      return false;
    } else {
      return true;
    }
  }
  private isElementOutOfView(elem: any): boolean {
    const positionInfo = elem.getBoundingClientRect();
    const viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const viewH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if(positionInfo.top + positionInfo.height / 2 > viewH || positionInfo.left + positionInfo.width / 2 > viewW) {
      return true;
    } else {
      return false;
    }
  }
}
