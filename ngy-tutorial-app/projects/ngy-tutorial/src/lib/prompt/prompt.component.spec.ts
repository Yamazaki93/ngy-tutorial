import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptComponent } from './prompt.component';
import { StepPromptPlacement } from '../api/i-options';

describe('PromptComponent', () => {
  let component: PromptComponent;
  let fixture: ComponentFixture<PromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromptComponent], providers: [
        {
          provide: 'ngy-tutorial-options',
          useValue: {
            classToAdd: {
              container: ['default']
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptComponent);
    component = fixture.componentInstance;
    component.step = {
      title: 'hi',
      prompt: 'hi',
      options: {
        placement: StepPromptPlacement.Below,
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show finish button when step is the last step', () => {
    component.stepNumber = 3;
    component.totalSteps = 4;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#lib-ngy-tutorial-finish-btn')).toBeTruthy();
  });
  it('should show skip button when step is the first step', () => {
    component.stepNumber = 0;
    component.totalSteps = 2;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#lib-ngy-tutorial-skip-btn')).toBeTruthy();
  });
  it('should show next button when step is the not the last step', () => {
    component.stepNumber = 0;
    component.totalSteps = 2;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#lib-ngy-tutorial-next-btn')).toBeTruthy();
  });
  it('should show previous button when step is the not the first step', () => {
    component.stepNumber = 1;
    component.totalSteps = 2;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#lib-ngy-tutorial-previous-btn')).toBeTruthy();
  });
  it('should not show next button when disableNext is set to true', () => {
    component.step = {
      title: 'hi',
      prompt: 'hi',
      options: {
        disableNext: true
      }
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#lib-ngy-tutorial-next-btn')).not.toBeTruthy();
  });
  it('should aggregate classes from initialization options and step', () => {
    component.step = {
      title: 'hi',
      prompt: 'hi',
      options: {
        classToAdd: {
          container: ['step']
        }
      }
    };
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.prompt-container').classList).toContain('step');
    expect(fixture.nativeElement.querySelector('.prompt-container').classList).toContain('default');
  });
});
