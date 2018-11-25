import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { trigger, transition, animate, keyframes, style, query } from '@angular/animations';
import { ITutorialStep } from '../api/i-tutorial-step';
import { PromptComponent } from '../prompt/prompt.component';
import { DOCUMENT } from '@angular/common';
import { StepPromptPlacement } from '../api/i-options';
import { NgyTutorialService } from '../ngy-tutorial.service';

@Component({
  selector: 'lib-ngy-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('void => *', [
        query(':self',
          animate('0.3s ease-in-out', keyframes([
            style({ opacity: 0 }),
            style({ opacity: 1 }),
          ])), { optional: true }),
      ]),
      transition('* => void', [
        query(':self',
          animate('0.3s ease-in-out', keyframes([
            style({ opacity: 1 }),
            style({ opacity: 0 }),
          ])), { optional: true }),
      ]),
    ]),
  ]
})
export class NgyTutorialComponent implements OnInit {

  enabled = false;
  steps: ITutorialStep[] = [];
  currentStep = 0;
  @ViewChild('topCover') private topCover: ElementRef;
  @ViewChild('leftCover') private leftCover: ElementRef;
  @ViewChild('rightCover') private rightCover: ElementRef;
  @ViewChild('bottomCover') private bottomCover: ElementRef;
  @ViewChild('elementCover') private elementCover: ElementRef;
  @ViewChild('prompt') private prompt: PromptComponent;
  constructor(
    private svc: NgyTutorialService,
    @Inject(DOCUMENT) private document: any,
  ) {
    this.svc.toShow.subscribe(stps => {
      this.steps = stps;
      this.currentStep = 0;
      if (this.steps.length) {
        this.enabled = true;
        setTimeout(() => {
          this.setupUIForStep();
        });
      } else {
        this.enabled = false;
      }
    });
    this.svc.currentStep.subscribe(step => {
      this.currentStep = step;
      if (this.currentStep >= this.steps.length || this.currentStep < 0) {
        this.svc.hideTutorial();
      }
      if (this.enabled) {
        setTimeout(() => {
          this.setupUIForStep();
        });
      }
    });
  }

  ngOnInit() {

  }

  private setupUIForStep() {
    const step = this.steps[this.currentStep];
    if (step) {
      this.resetCovers();
      this.prompt.ngOnInit();
      if (!step.options.relatedElement) {
        this.coverAll();
      } else {
        const elem = this.document.body.querySelector(`#${step.options.relatedElement}`);
        if (elem) {
          this.coverShowElement(elem);
          this.prompt.setPromptForElement(elem, step.options.placement);
          if (step.options.disableInteraction) {
            this.coverElement(elem);
          }
        } else {
          this.coverAll();
        }
      }
    }
  }
  private coverElement(element: Element) {
    const positionInfo = element.getBoundingClientRect();
    const margin = 10;
    this.setPosition(this.elementCover.nativeElement,
      positionInfo.left - margin,
      positionInfo.top - margin,
      positionInfo.width + 2 * margin,
      positionInfo.height + 2 * margin);
  }
  private coverAll() {
    if (this.topCover) {
      this.topCover.nativeElement.style.left = '0';
      this.topCover.nativeElement.style.top = '0';
      this.topCover.nativeElement.style.height = '100vh';
      this.prompt.setPromptForElement();
    }
  }
  private coverShowElement(element: Element) {
    const positionInfo = element.getBoundingClientRect();
    const margin = 10;
    const viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const viewH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setPosition(this.topCover.nativeElement,
      0,
      0,
      viewW,
      positionInfo.top - margin);
    this.setPosition(this.leftCover.nativeElement,
      0,
      positionInfo.top - margin,
      positionInfo.left - margin,
      positionInfo.height + 2 * margin);
    this.setPosition(this.rightCover.nativeElement,
      positionInfo.left + positionInfo.width + margin,
      positionInfo.top - margin,
      viewW - positionInfo.left - positionInfo.width - margin,
      positionInfo.height + 2 * margin);
    this.setPosition(this.bottomCover.nativeElement,
      0,
      positionInfo.top + positionInfo.height + margin,
      viewW,
      viewH - positionInfo.top - positionInfo.height - margin);

  }

  private setPosition(element: any, left: number, top: number, width: number, height: number) {
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
  }
  private resetCovers() {
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
  }
}

