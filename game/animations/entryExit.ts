import { EntryExit, Transitions, EntryExitAnimationReturn } from './creators';

export const UpInOut = (transitions?: Transitions): EntryExitAnimationReturn =>
    EntryExit(
        {
            y: ['0%', '-100%'],
            opacity: [1, 0],
        },
        transitions
    );

export const DownInOut = (transitions?: Transitions): EntryExitAnimationReturn =>
    EntryExit(
        {
            y: ['0', '100%'],
            opacity: [1, 0],
        },
        transitions
    );
