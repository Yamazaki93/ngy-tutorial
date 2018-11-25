import { Component, OnInit } from '@angular/core';
import { NgyTutorialService } from 'ngy-tutorial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private tutorialService: NgyTutorialService
  ) {
    tutorialService.addStep('Welcome', 'Welcome to ngy-tutorial. This is the grand first step!');
  }
  ngOnInit(): void {
    // this.tutorialService.showTutorial();
  }
}
