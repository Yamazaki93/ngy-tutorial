import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NgyTutorialComponent } from './tutorial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromptComponent } from '../prompt/prompt.component';
import { NgyTutorialService } from '../ngy-tutorial.service';

describe('TutorialComponent', () => {
  let component: NgyTutorialComponent;
  let fixture: ComponentFixture<NgyTutorialComponent>;
  let svc: NgyTutorialService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule
      ],
      providers: [NgyTutorialService],
      declarations: [ NgyTutorialComponent, PromptComponent ]
    })
    .compileComponents();
    svc = TestBed.get(NgyTutorialService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgyTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not show tutorial overlay if no steps added', fakeAsync(() => {
    svc.showTutorial();
    fixture.detectChanges();
    tick(300);
    expect(fixture.nativeElement.querySelector('app-prompt')).toBeNull();
  }));
  it('should show tutorial overlay if at least one step present', fakeAsync(() => {
    svc.addStep('Welcome', 'hi');
    svc.showTutorial();
    fixture.detectChanges();
    tick(300);
    expect(fixture.nativeElement.querySelector('app-prompt')).not.toBeNull();
  }));
});
