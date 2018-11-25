import { Injectable, EventEmitter } from '@angular/core';
import { IStepOption, StepPromptPlacement } from './api/i-options';
import { ITutorialStep } from './api/i-tutorial-step';

@Injectable({
  providedIn: 'root'
})
export class NgyTutorialService {
  public readonly toShow: EventEmitter<ITutorialStep[]> = new EventEmitter<ITutorialStep[]>();
  public readonly navigation: EventEmitter<number> = new EventEmitter<number>();
  private steps: TutorialStep[];
  constructor() {
    this.steps = [
    ];
  }
  public showTutorial() {
    this.toShow.emit(this.steps.slice());
  }
  public hideTutorial() {
    this.toShow.emit([]);
  }
  public addStep(title: string, prompt: string, option?: IStepOption) {
    if (option && option.disableNext && option.disableInteraction) {
      console.warn(`ngy-tutorial error, step ${title} - ${prompt} has disableNext and disableInteraction set to true.
      This step will cause tutorial to be unable to progress forward as such is not added to the tutorial`);
      return;
    }
    this.steps.push(new TutorialStep(title, prompt, option));
  }
  public removeStep(stepNumber: number) {
    if (stepNumber > this.steps.length - 1 || stepNumber < 0) {
      return;
    } else {
      this.steps.splice(stepNumber, 1);
    }
  }
  public nextStep() {
    this.navigation.emit(1);
  }
  public previousStep() {
    this.navigation.emit(-1);
  }
}

class TutorialStep implements ITutorialStep {
  private static DEFAULT_OPTIONS: IStepOption = {
    placement: StepPromptPlacement.Below
  };
  options: IStepOption;
  prompt: string;
  title: string;

  public constructor(title: string, prompt: string, option: IStepOption) {
    this.options = {
      ...TutorialStep.DEFAULT_OPTIONS,
      ...option
    };
    this.title = title;
    this.prompt = prompt;
  }
}
