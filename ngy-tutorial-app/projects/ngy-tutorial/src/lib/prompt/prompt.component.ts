import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { ITutorialStep } from '../api/i-tutorial-step';
import { StepPromptPlacement, IInitializationOptions, IStepClasses } from '../api/i-options';
import { NgyTutorialService } from '../ngy-tutorial.service';

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
  constructor(
    private svc: NgyTutorialService,
    @Inject('options') private options: IInitializationOptions
   ) {
    this.appliedClasses = {};
  }

  ngOnInit() {
    if (this.options.classToAdd) {
      this.appliedClasses.container = this.options.classToAdd.container ? this.options.classToAdd.container : [];
      this.appliedClasses.title = this.options.classToAdd.title ? this.options.classToAdd.title : [];
      this.appliedClasses.prompt = this.options.classToAdd.prompt ? this.options.classToAdd.prompt : [];
      this.appliedClasses.nextBtn = this.options.classToAdd.nextBtn ? this.options.classToAdd.nextBtn : [];
      this.appliedClasses.previousBtn = this.options.classToAdd.previousBtn ? this.options.classToAdd.previousBtn : [];
      this.appliedClasses.finishBtn = this.options.classToAdd.finishBtn ? this.options.classToAdd.finishBtn : [];
      this.appliedClasses.skipBtn = this.options.classToAdd.skipBtn ? this.options.classToAdd.skipBtn : [];
    }
    if (this.step.options && this.step.options.classToAdd) {
      this.appliedClasses.container = this.appliedClasses.container.concat(this.step.options.classToAdd.container);
      this.appliedClasses.title = this.appliedClasses.title.concat(this.step.options.classToAdd.title);
      this.appliedClasses.prompt = this.appliedClasses.prompt.concat(this.step.options.classToAdd.prompt);
      this.appliedClasses.nextBtn = this.appliedClasses.nextBtn.concat(this.step.options.classToAdd.nextBtn);
      this.appliedClasses.previousBtn = this.appliedClasses.previousBtn.concat(this.step.options.classToAdd.previousBtn);
      this.appliedClasses.finishBtn = this.appliedClasses.finishBtn.concat(this.step.options.classToAdd.finishBtn);
      this.appliedClasses.skipBtn = this.appliedClasses.skipBtn.concat(this.step.options.classToAdd.skipBtn);
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
          positionInfo.left + positionInfo.width + 20,
          positionInfo.top + positionInfo.height / 2 - promptH / 2);
      } else if (placement === StepPromptPlacement.Left) {
        this.setPromptPosition(
          positionInfo.left - promptW - 20,
          positionInfo.top + positionInfo.height / 2 - promptH / 2);
      } else if (placement === StepPromptPlacement.Above) {
        this.setPromptPosition(
          positionInfo.left + positionInfo.width / 2 - promptW / 2,
          positionInfo.top - 20 - promptH
        );
      } else {
        this.setPromptPosition(
          positionInfo.left + positionInfo.width / 2 - promptW / 2,
          positionInfo.top + positionInfo.height + 20
        );
      }
    }
  }
  private setPromptPosition(x: number, y: number) {
    if (x < 10) {
      x = 10;
    }
    if (y < 10) {
      y = 10;
    }
    this.prompt.nativeElement.style.left = `${x}px`;
    this.prompt.nativeElement.style.top = `${y}px`;
  }
}
