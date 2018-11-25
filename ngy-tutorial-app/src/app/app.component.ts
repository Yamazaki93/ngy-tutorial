import { Component, OnInit, Inject } from '@angular/core';
import { NgyTutorialService, StepPromptPlacement } from 'ngy-tutorial';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private tutorialInProgress = false;
  private code = '';
  constructor(
    private tutorialService: NgyTutorialService,
    @Inject(DOCUMENT) private document: any,
  ) {
    this.code = `
      // component constructor
      constructor(
        private: ngyTutorialService: NgyTutorialService
      ) {
        ngyTutorialService.addStep('Step one', 'Hi');
        ngyTutorialService.addStep('Step two', 'Second step', {
          relatedElement: 'input-element',
        });
      }
      ngOnInit() {
        this.tutorialService.showTutorial();
      }
    `;
    tutorialService.addStep('Welcome', 'Welcome to ngy-tutorial. This is the grand first step!');
    tutorialService.addStep('General Step', 'This is a general step, the prompt is placed at the center and there\'s no specific focus');
    tutorialService.addStep('Focus!', 'Each step can contain an optional element id and the tutorial will automatically create a viewing window that focuses the element. Here the focus is on the left panel.', {
      relatedElement: 'side-navigation',
      placement: StepPromptPlacement.Right,
      disableInteraction: true,
    });
    tutorialService.addStep('Prompt Placement', 'You can specify the prompt placement of each step. Here the prompt is placed below the focused form. You will notice that the prompt smoothly move to the next position as well 😊', {
      relatedElement: 'demo-form',
      placement: StepPromptPlacement.Below,
      disableInteraction: true
    });
    tutorialService.addStep('Allowing Interaction', 'By default, the interaction to the viewing window is allowed. Try typing in text here! You can optionally disable interaction by setting "disableInteraction" to true.', {
      relatedElement: 'exampleFormControlInput1',
      placement: StepPromptPlacement.Below
    });
    tutorialService.addStep('Custom UI Styling', 'You can customize the prompt styling and button texts of each step. This prompt is red because the input is disabled for very important reasons. If you haven\'t noticed, the prompt is currently using the bootstrap styles applied to the hosting app.', {
      relatedElement: 'disabledInput',
      placement: StepPromptPlacement.Left,
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
      placement: StepPromptPlacement.Left,
    });
    tutorialService.addStep('Flow Customization', 'You can customize the flow of the tutorial by disabling the "Next" and "Previous" button. This button is so important that you must click it to continue the tutorial.', {
      relatedElement: 'important-btn',
      placement: StepPromptPlacement.Right,
      disableNext: true
    });
    tutorialService.addStep('Hope You Like It!', 'Excited? Intergrating Ngy-Tutorial is as easy as 1-2-3! Head over to "Getting Started" and give your Angular app a great tutorial. <br> And if you like Ngy-Tutorial, \
    consider <br> <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/mjCsGWDTS"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a tea"><span style="margin-left:5px">Buy me a tea</span></a> <br> See that? HTML elements work in the prompt too 😉');
    this.tutorialService.tutorialInProgress.subscribe(ip => {
      this.tutorialInProgress = ip;
    });
  }
  ngOnInit(): void {
    this.tutorialService.showTutorial();
  }
  scrollTo(elID) {
    const el = this.document.body.querySelector(`#${elID}`);
    if (el) {
      el.scrollIntoView();
    }
  }
  importantBtn($event) {
    this.tutorialService.nextStep();
    $event.preventDefault();
  }
  restart() {
    this.tutorialService.showTutorial();
  }
}
