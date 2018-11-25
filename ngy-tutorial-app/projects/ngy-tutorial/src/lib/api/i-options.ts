export interface IInitializationOptions {
    classToAdd?: IStepClasses;
    actionTexts?: IActionTexts;
}

export interface IStepOption {
    placement?: StepPromptPlacement;
    relatedElement?: string;
    disableInteraction?: boolean;
    disableNext?: boolean;
    disablePrevious?: boolean;
    classToAdd?: IStepClasses;
    actionTexts?: IActionTexts;
}

export enum StepPromptPlacement {
    Above,
    Below,
    Left,
    Right
}

export interface IStepClasses {
    container?: string[];
    title?: string[];
    prompt?: string[];
    previousBtn?: string[];
    previousIcon?: string;
    nextBtn?: string[];
    nextIcon?: string;
    skipBtn?: string[];
    skipIcon?: string;
    finishBtn?: string[];
    finishIcon?: string;
}

export interface IActionTexts {
    next?: string;
    previous?: string;
    skip?: string;
    finish?: string;
}
