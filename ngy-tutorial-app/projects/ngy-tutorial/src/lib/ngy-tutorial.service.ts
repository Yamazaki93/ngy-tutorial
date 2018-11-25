import { Injectable, EventEmitter } from '@angular/core';
import { IStepOption, StepPromptPlacement } from './api/i-options';
import { ITutorialStep } from './api/i-tutorial-step';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgyTutorialService {
  public readonly toShow: EventEmitter<ITutorialStep[]> = new EventEmitter<ITutorialStep[]>();
  public readonly tutorialInProgress: Observable<boolean> = new Observable<boolean>();
  public readonly currentStep: Observable<number> = new Observable<number>();
  private steps: TutorialStep[];
  private _tutorialInProgress = new BehaviorSubject<boolean>(false);
  private _currentStep = new BehaviorSubject<number>(0);
  constructor() {
    this.tutorialInProgress = this._tutorialInProgress.asObservable();
    this.currentStep = this._currentStep.asObservable();
    this.steps = [
    ];
  }
  public showTutorial() {
    this._currentStep.next(0);
    this.toShow.emit(this.steps.slice());
    this._tutorialInProgress.next(true);
  }
  public hideTutorial() {
    this.toShow.emit([]);
    this._tutorialInProgress.next(false);
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
    this._currentStep.next(this._currentStep.value + 1);
  }
  public previousStep() {
    this._currentStep.next(this._currentStep.value - 1);
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
