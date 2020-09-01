import { MotionProps, TargetAndTransition } from 'framer-motion';

export type ExitEntryAnimationReturn = {
    initial: MotionProps['initial'];
    exit: MotionProps['exit'];
    animate: MotionProps['animate'];
};

type AnimationKeys = keyof TargetAndTransition;

export function EntryExit(
    animation: Partial<
        Record<AnimationKeys, string | [string, string, string] | number | [number, number, number]>
    >
): ExitEntryAnimationReturn {
    return Object.entries(animation).reduce<ExitEntryAnimationReturn>(
        (acc, [key, value]) => {
            let initial, animate, exit;

            if (Array.isArray(value)) {
                [initial, animate, exit] = value;
            } else {
                initial = animate = exit = value;
            }

            acc.initial[key] = initial;
            acc.animate[key] = animate;
            acc.exit[key] = exit;
            return acc;
        },
        {
            initial: {},
            animate: {},
            exit: {},
        }
    );
}
