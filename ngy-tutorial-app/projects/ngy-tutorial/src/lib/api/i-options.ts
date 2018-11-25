export interface IInitializationOptions {
    classToAdd?: IStepClasses;
}

export interface IStepOption {
    placement?: StepPromptPlacement;
    relatedElement?: string;
    disableInteraction?: boolean;
    disableNext?: boolean;
    disablePrevious?: boolean;
    classToAdd?: IStepClasses;
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
    nextBtn?: string[];
    skipBtn?: string[];
    finishBtn?: string[];
}
