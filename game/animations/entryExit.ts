import { EntryExit } from './_animationCreator';

export const UpInOut = EntryExit({
    transform: ['translateY(-100%)', 'translateY(0%)', 'translateY(-100%)'],
    opacity: [0, 1, 0],
});

export const DownInOut = EntryExit({
    transform: ['translateY(100%)', 'translateY(0%)', 'translateY(100%)'],
    opacity: [0, 1, 0],
});
