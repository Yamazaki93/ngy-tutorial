import { IStepOption } from './i-options';

export interface ITutorialStep {
    options: IStepOption;
    prompt: string;
    title: string;
}
